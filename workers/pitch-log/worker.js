// upx-pitch-log — logging backend for unlimitedpower.ai/pitch, and the Online Viewer
// product (admin-managed gated items + per-guest links), added 2026-11-04.
//
// Pitch-video routes (original, unchanged):
// POST /log     : append one event (email_submitted, video_start, video_progress,
//                 watch_heartbeat, watch_end, gate_view) into D1.
// GET  /viewers : per-email aggregation for the pitch video only.
//                 Basic Auth — user VIEW_USER (var), password VIEW_PASS (secret).
// GET  /export?key=<EXPORT_KEY> : CSV of all events, newest first.
// GET  /validate?email= : {ok, reason?} — format, disposable-domain blocklist, and
//                 domain-can-receive-mail (DNS MX, then A/AAAA). Lookup failure answers
//                 ok:true + unverified:true: a broken check must never lock a visitor out.
//
// Online Viewer routes (new):
// GET/POST /admin/api/*     : Basic Auth (ADMIN_USER var, ADMIN_PASS secret). Manage
//                 items and per-item guest links. See adminRouter() below.
// GET      /admin/          : the admin console page (served from env.ASSETS).
// GET      /v/:token/*      : guest view. Basic Auth against that link's own
//                 username/password (stored hashed in D1), then an email-capture
//                 cookie gate, then the item's content from env.ASSETS.
//
// Deploy (after `wrangler login`):
//   npx wrangler d1 create upx-pitch-log            # put returned id in wrangler.toml
//   npx wrangler d1 execute upx-pitch-log --remote --file=schema.sql
//   npx wrangler d1 execute upx-pitch-log --remote --file=migrations/002_online_viewer.sql
//   npx wrangler secret put EXPORT_KEY
//   npx wrangler secret put VIEW_PASS
//   npx wrangler secret put ADMIN_PASS
//   npx wrangler deploy
// Then set LOG_ENDPOINT in pitch/index.html and VIEWERS_ENDPOINT in
// pitch/viewers/index.html to the deployed URL + /log and + /viewers.

import { DISPOSABLE } from "./disposable-domains.js";

const ALLOWED_ORIGINS = ["https://unlimitedpower.ai", "https://www.unlimitedpower.ai"];

function cors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };
}

// Basic Auth against VIEW_USER (var, default "upx") + VIEW_PASS (secret).
// Split on the FIRST colon only — passwords may contain colons.
// No VIEW_PASS configured = deny everything, never allow-by-default.
function authorized(request, env) {
  const h = request.headers.get("Authorization") || "";
  if (!h.startsWith("Basic ")) return false;
  let decoded = "";
  try { decoded = atob(h.slice(6)); } catch (e) { return false; }
  const i = decoded.indexOf(":");
  if (i < 0) return false;
  const user = decoded.slice(0, i);
  const pass = decoded.slice(i + 1);
  return Boolean(env.VIEW_PASS) && user === (env.VIEW_USER || "upx") && pass === env.VIEW_PASS;
}

// ---- Online Viewer: admin auth, link auth, items/links CRUD, gated guest serving ----

function adminAuthorized(request, env) {
  const h = request.headers.get("Authorization") || "";
  if (!h.startsWith("Basic ")) return false;
  let decoded = "";
  try { decoded = atob(h.slice(6)); } catch (e) { return false; }
  const i = decoded.indexOf(":");
  if (i < 0) return false;
  const user = decoded.slice(0, i);
  const pass = decoded.slice(i + 1);
  return Boolean(env.ADMIN_PASS) && user === (env.ADMIN_USER || "admin") && pass === env.ADMIN_PASS;
}

function needAuth(realm) {
  return new Response("unauthorized", { status: 401, headers: { "WWW-Authenticate": `Basic realm="${realm}"` } });
}

async function sha256Hex(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomToken(bytes) {
  const a = crypto.getRandomValues(new Uint8Array(bytes));
  return Array.from(a).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function jsonRes(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: { "Content-Type": "application/json" } });
}

function parseCookies(request) {
  const out = {};
  const h = request.headers.get("Cookie") || "";
  for (const part of h.split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

// /admin/api/* — Basic Auth (ADMIN_USER/ADMIN_PASS). Manage items and per-item guest links.
async function adminRouter(request, env, url) {
  if (!adminAuthorized(request, env)) return needAuth("Online Viewer Admin");
  const parts = url.pathname.replace(/^\/admin\/api\/?/, "").split("/").filter(Boolean);
  const now = new Date().toISOString();

  // /admin/api/items
  if (parts[0] === "items" && parts.length === 1) {
    if (request.method === "GET") {
      const { results: items } = await env.DB.prepare(
        "SELECT * FROM items WHERE archived = 0 ORDER BY created_at DESC"
      ).all();
      const { results: links } = await env.DB.prepare(
        "SELECT id, item_id, token, label, username, created_at, revoked FROM links ORDER BY created_at DESC"
      ).all();
      const byItem = {};
      for (const l of links) (byItem[l.item_id] = byItem[l.item_id] || []).push(l);
      return jsonRes(items.map((it) => ({ ...it, links: byItem[it.id] || [] })));
    }
    if (request.method === "POST") {
      let body; try { body = await request.json(); } catch { return new Response("bad json", { status: 400 }); }
      const slug = String(body.slug || "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
      const title = String(body.title || "").trim().slice(0, 200);
      if (!slug || !title) return new Response("slug and title required", { status: 400 });
      try {
        const r = await env.DB.prepare("INSERT INTO items (slug, title, created_at) VALUES (?, ?, ?)")
          .bind(slug, title, now).run();
        return jsonRes({ id: r.meta.last_row_id, slug, title, created_at: now, archived: 0, links: [] }, 201);
      } catch (e) { return new Response("slug already exists", { status: 409 }); }
    }
  }
  const itemMatch = parts[0] === "items" && parts.length >= 2 ? Number(parts[1]) : null;
  if (itemMatch && parts.length === 2) {
    if (request.method === "PATCH") {
      let body; try { body = await request.json(); } catch { return new Response("bad json", { status: 400 }); }
      const sets = [], binds = [];
      if (typeof body.title === "string") { sets.push("title = ?"); binds.push(body.title.slice(0, 200)); }
      if (typeof body.archived === "boolean") { sets.push("archived = ?"); binds.push(body.archived ? 1 : 0); }
      if (!sets.length) return new Response("nothing to update", { status: 400 });
      binds.push(itemMatch);
      await env.DB.prepare(`UPDATE items SET ${sets.join(", ")} WHERE id = ?`).bind(...binds).run();
      return jsonRes({ ok: true });
    }
    if (request.method === "DELETE") {
      await env.DB.prepare("DELETE FROM links WHERE item_id = ?").bind(itemMatch).run();
      await env.DB.prepare("DELETE FROM items WHERE id = ?").bind(itemMatch).run();
      return jsonRes({ ok: true });
    }
  }
  if (itemMatch && parts.length === 3 && parts[2] === "links") {
    if (request.method === "POST") {
      let body; try { body = await request.json(); } catch { return new Response("bad json", { status: 400 }); }
      const label = String(body.label || "").trim().slice(0, 200);
      const username = String(body.username || "").trim().slice(0, 100);
      const password = String(body.password || "");
      if (!username || !password) return new Response("username and password required", { status: 400 });
      const item = await env.DB.prepare("SELECT id FROM items WHERE id = ?").bind(itemMatch).first();
      if (!item) return new Response("item not found", { status: 404 });
      const token = randomToken(12);
      const pass_hash = await sha256Hex(password);
      const r = await env.DB.prepare(
        "INSERT INTO links (token, item_id, label, username, pass_hash, created_at) VALUES (?, ?, ?, ?, ?, ?)"
      ).bind(token, itemMatch, label, username, pass_hash, now).run();
      return jsonRes({ id: r.meta.last_row_id, token, item_id: itemMatch, label, username, created_at: now, revoked: 0 }, 201);
    }
  }
  if (parts[0] === "links" && parts.length === 2) {
    const linkId = Number(parts[1]);
    if (request.method === "DELETE") {
      await env.DB.prepare("UPDATE links SET revoked = 1 WHERE id = ?").bind(linkId).run();
      return jsonRes({ ok: true });
    }
  }
  return new Response("not found", { status: 404 });
}

// /v/:token/* — per-link Basic Auth, then an email-capture cookie gate, then the
// item's own content served from env.ASSETS (public/items/<slug>/...).
async function viewerRouter(request, env, url) {
  const segs = url.pathname.split("/").filter(Boolean); // ["v", token, ...rest]
  const token = segs[1] || "";
  const rest = "/" + segs.slice(2).join("/");
  if (!token) return new Response("not found", { status: 404 });

  const link = await env.DB.prepare(
    "SELECT links.*, items.slug AS item_slug, items.title AS item_title, items.archived AS item_archived FROM links JOIN items ON items.id = links.item_id WHERE token = ?"
  ).bind(token).first();
  if (!link || link.revoked || link.item_archived) return new Response("this link is not active", { status: 404 });

  const h = request.headers.get("Authorization") || "";
  let ok = false;
  if (h.startsWith("Basic ")) {
    try {
      const decoded = atob(h.slice(6));
      const i = decoded.indexOf(":");
      const user = decoded.slice(0, i), pass = decoded.slice(i + 1);
      ok = user === link.username && (await sha256Hex(pass)) === link.pass_hash;
    } catch (e) { ok = false; }
  }
  if (!ok) return needAuth("Online Viewer");

  const cookieName = "ov_email_" + token;
  const cookies = parseCookies(request);
  const email = cookies[cookieName] || "";

  if (segs.length === 3 && segs[2] === "email" && request.method === "POST") {
    let body; try { body = await request.json(); } catch { return new Response("bad json", { status: 400 }); }
    const check = await validateEmail(body.email);
    if (!check.ok) return jsonRes(check, 422);
    const enteredEmail = String(body.email || "").trim();
    await env.DB.prepare(
      "INSERT INTO events (ts, type, email, session, data, ua, ip, link_id, item_id) VALUES (?, 'ov_email_submitted', ?, ?, '{}', ?, ?, ?, ?)"
    ).bind(new Date().toISOString(), enteredEmail, token, request.headers.get("User-Agent") || "",
      request.headers.get("CF-Connecting-IP") || "", link.id, link.item_id).run();
    const cookie = `${cookieName}=${encodeURIComponent(enteredEmail)}; Path=/v/${token}; Max-Age=15552000; HttpOnly; Secure; SameSite=Lax`;
    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { "Content-Type": "application/json", "Set-Cookie": cookie },
    });
  }

  if (!email) {
    const page = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${link.item_title}</title><style>
body{background:#030916;color:#f4f8ff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0}
.box{max-width:420px;padding:32px;text-align:center}
h1{font-size:20px;font-weight:600;margin:0 0 10px}
p{color:#b6c6dc;font-size:15px;line-height:1.5;margin:0 0 20px}
input{width:100%;box-sizing:border-box;padding:12px 14px;font-size:16px;border-radius:8px;
border:1px solid rgba(178,205,255,.3);background:#0b1730;color:#f4f8ff;margin-bottom:12px}
button{width:100%;padding:12px;font-size:16px;font-weight:600;border-radius:8px;border:none;
background:#59dcff;color:#030916;cursor:pointer}
.err{color:#ff8080;font-size:14px;min-height:18px;margin-top:8px}
</style></head><body><div class="box">
<h1>${link.item_title}</h1>
<p>Enter your email to continue.</p>
<form id="f"><input type="email" id="email" placeholder="you@company.com" required autofocus>
<button type="submit">Continue</button><div class="err" id="err"></div></form>
</div><script>
document.getElementById('f').addEventListener('submit', async function(e){
  e.preventDefault();
  var err = document.getElementById('err'); err.textContent = '';
  var email = document.getElementById('email').value;
  var r = await fetch(location.pathname.replace(/\\/$/, '') + '/email', {
    method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email: email})
  });
  if (r.ok) { location.reload(); } else {
    var j = await r.json().catch(function(){return {}});
    err.textContent = j.reason === 'disposable' ? 'Please use your work email.'
      : j.reason === 'no_mail' || j.reason === 'no_domain' ? 'That email address looks wrong.'
      : 'Please enter a valid email.';
  }
});
</script></body></html>`;
    return new Response(page, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  await env.DB.prepare(
    "INSERT INTO events (ts, type, email, session, data, ua, ip, link_id, item_id) VALUES (?, 'ov_view', ?, ?, '{}', ?, ?, ?, ?)"
  ).bind(new Date().toISOString(), email, token, request.headers.get("User-Agent") || "",
    request.headers.get("CF-Connecting-IP") || "", link.id, link.item_id).run();

  const assetPath = rest === "/" || rest === "" ? "/index.html" : rest;
  const assetUrl = new URL(request.url);
  assetUrl.pathname = `/items/${link.item_slug}${assetPath}`;
  return env.ASSETS.fetch(new Request(assetUrl.toString(), request));
}

const EMAIL_RE = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

async function dnsQuery(name, type) {
  const r = await fetch(
    `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`,
    { headers: { accept: "application/dns-json" } });
  if (!r.ok) throw new Error("dns " + r.status);
  return r.json();
}

async function validateEmail(raw) {
  const email = String(raw || "").trim();
  if (email.length > 254 || email.includes("..") || !EMAIL_RE.test(email))
    return { ok: false, reason: "format" };
  const domain = email.split("@")[1].toLowerCase();
  // Blocklisted domain or any parent of it (x.mailinator.com is mailinator.com).
  const labels = domain.split(".");
  for (let i = 0; i < labels.length - 1; i++)
    if (DISPOSABLE.has(labels.slice(i).join("."))) return { ok: false, reason: "disposable" };
  try {
    const mx = await dnsQuery(domain, "MX");
    if (mx.Status === 3) return { ok: false, reason: "no_domain" };       // NXDOMAIN
    if (mx.Status !== 0) return { ok: true, unverified: true };            // SERVFAIL etc.
    const mxs = (mx.Answer || []).filter((a) => a.type === 15);
    if (mxs.length) {
      // RFC 7505 null MX ("0 .") = the domain explicitly accepts no mail.
      return mxs.every((a) => /^0\s+\.$/.test(String(a.data).trim()))
        ? { ok: false, reason: "no_mail" } : { ok: true };
    }
    // No MX: mail falls back to the address record (RFC 5321 implicit MX).
    for (const [t, code] of [["A", 1], ["AAAA", 28]]) {
      const r = await dnsQuery(domain, t);
      if ((r.Answer || []).some((a) => a.type === code)) return { ok: true };
    }
    return { ok: false, reason: "no_mail" };
  } catch (e) {
    return { ok: true, unverified: true };
  }
}

const VIEWERS_SQL = `
  SELECT email,
    MAX(ts) AS last_seen,
    COUNT(DISTINCT session) AS sessions,
    MAX(CASE WHEN type = 'video_progress'
          THEN CAST(json_extract(data, '$.pct') AS INTEGER) ELSE 0 END) AS milestone_pct,
    MAX(CASE WHEN CAST(json_extract(data, '$.duration') AS REAL) > 0
          THEN CAST(ROUND(100.0 * CAST(json_extract(data, '$.position') AS REAL)
                          / CAST(json_extract(data, '$.duration') AS REAL)) AS INTEGER)
          ELSE 0 END) AS position_pct,
    (SELECT ip FROM events e2 WHERE e2.email = events.email AND e2.ip != ''
       ORDER BY e2.id DESC LIMIT 1) AS ip,
    MAX(CASE WHEN ua LIKE '%iPhone%' OR ua LIKE '%Android%' OR ua LIKE '%Mobile%'
          THEN 1 ELSE 0 END) AS saw_mobile,
    MAX(CASE WHEN ua != '' AND ua NOT LIKE '%iPhone%' AND ua NOT LIKE '%Android%'
          AND ua NOT LIKE '%Mobile%' THEN 1 ELSE 0 END) AS saw_desktop
  FROM events
  WHERE email != ''
  GROUP BY email
  ORDER BY last_seen DESC
  LIMIT 500`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") return new Response(null, { headers: cors(origin) });

    if (url.pathname.startsWith("/admin/api/")) return adminRouter(request, env, url);

    if (url.pathname === "/admin" || url.pathname === "/admin/") {
      if (!adminAuthorized(request, env)) return needAuth("Online Viewer Admin");
      const assetUrl = new URL(request.url); assetUrl.pathname = "/admin/index.html";
      return env.ASSETS.fetch(new Request(assetUrl.toString(), request));
    }

    if (url.pathname.startsWith("/v/")) return viewerRouter(request, env, url);

    if (request.method === "POST" && url.pathname === "/log") {
      let body;
      try { body = await request.json(); } catch { return new Response("bad json", { status: 400, headers: cors(origin) }); }
      const type = String(body.type || "").slice(0, 40);
      if (!type) return new Response("missing type", { status: 400, headers: cors(origin) });
      await env.DB.prepare(
        "INSERT INTO events (ts, type, email, session, data, ua, ip) VALUES (?, ?, ?, ?, ?, ?, ?)"
      ).bind(
        String(body.ts || new Date().toISOString()).slice(0, 40),
        type,
        String(body.email || "").slice(0, 200),
        String(body.session || "").slice(0, 60),
        JSON.stringify(body.data || {}).slice(0, 1000),
        String(body.ua || "").slice(0, 300),
        request.headers.get("CF-Connecting-IP") || ""
      ).run();
      return new Response("ok", { headers: cors(origin) });
    }

    if (request.method === "GET" && url.pathname === "/validate") {
      const result = await validateEmail(url.searchParams.get("email"));
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...cors(origin) },
      });
    }

    if (request.method === "GET" && url.pathname === "/viewers") {
      if (!authorized(request, env))
        return new Response("unauthorized", { status: 401, headers: cors(origin) });
      const { results } = await env.DB.prepare(VIEWERS_SQL).all();
      const rows = results.map((r) => ({
        email: r.email,
        ip: r.ip || "",
        watch_pct: Math.min(100, Math.max(r.milestone_pct || 0, r.position_pct || 0)),
        sessions: r.sessions,
        last_seen: r.last_seen,
        // Classified from stored user-agents; an iPad reports "Macintosh" so it lands
        // in desktop — a UA cannot tell those apart.
        device: r.saw_mobile && r.saw_desktop ? "both"
          : r.saw_mobile ? "mobile" : r.saw_desktop ? "desktop" : "",
      }));
      return new Response(JSON.stringify(rows), {
        headers: { "Content-Type": "application/json", ...cors(origin) },
      });
    }

    if (request.method === "GET" && url.pathname === "/export") {
      if (!env.EXPORT_KEY || url.searchParams.get("key") !== env.EXPORT_KEY)
        return new Response("forbidden", { status: 403 });
      const { results } = await env.DB.prepare(
        "SELECT ts, type, email, session, data, ua, ip FROM events ORDER BY id DESC LIMIT 10000"
      ).all();
      const esc = (v) => '"' + String(v ?? "").replace(/"/g, '""') + '"';
      const csv = ["ts,type,email,session,data,ua,ip"]
        .concat(results.map((r) => [r.ts, r.type, r.email, r.session, r.data, r.ua, r.ip].map(esc).join(",")))
        .join("\n");
      return new Response(csv, { headers: { "Content-Type": "text/csv" } });
    }

    return new Response("upx-pitch-log", { status: 200 });
  },
};
