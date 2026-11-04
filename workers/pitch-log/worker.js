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
// GET      /a/:token/*      : public asset view. Email gate only, no password.
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

// Extension -> Content-Type for uploaded files. The browser's reported type is not
// trusted (it varies by OS and is often blank for .js/.html), so storage always uses
// this map, keyed off the stored path, not the client.
function guessContentType(path) {
  const ext = (path.split(".").pop() || "").toLowerCase();
  const map = {
    html: "text/html; charset=utf-8", htm: "text/html; charset=utf-8",
    css: "text/css; charset=utf-8", js: "text/javascript; charset=utf-8", mjs: "text/javascript; charset=utf-8",
    json: "application/json; charset=utf-8", txt: "text/plain; charset=utf-8", map: "application/json; charset=utf-8",
    svg: "image/svg+xml", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg",
    gif: "image/gif", webp: "image/webp", avif: "image/avif", ico: "image/x-icon",
    pdf: "application/pdf", mp4: "video/mp4", webm: "video/webm", mp3: "audio/mpeg",
    woff: "font/woff", woff2: "font/woff2", ttf: "font/ttf", otf: "font/otf",
  };
  return map[ext] || "application/octet-stream";
}

// Auto-generated index.html for a single uploaded PDF, so opening the asset shows the
// PDF directly instead of a blank page. A multi-file deck upload brings its own index.html.
function pdfWrapperPage(pdfPath, title) {
  const t = escHtml(title), href = escHtml(pdfPath);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex, nofollow"><title>${t}</title>
<style>*{margin:0;padding:0}html,body{height:100%;background:#1a1a1a}
iframe{border:0;width:100%;height:100%;display:block}
.bar{position:fixed;top:0;left:0;right:0;display:flex;justify-content:flex-end;padding:10px 14px;
  background:linear-gradient(#000 0,transparent 100%);z-index:1;pointer-events:none}
.bar a{pointer-events:auto;font:600 13px -apple-system,sans-serif;color:#fff;background:rgba(255,255,255,.14);
  padding:7px 14px;border-radius:999px;text-decoration:none;backdrop-filter:blur(8px)}
</style></head><body>
<div class="bar"><a href="${href}" target="_blank" rel="noopener">Open in new tab</a></div>
<iframe src="${href}" title="${t}"></iframe>
</body></html>`;
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
      if (body.visibility === "public" || body.visibility === "private") {
        sets.push("visibility = ?"); binds.push(body.visibility);
        // First time an asset goes public it gets its own unguessable link; it keeps
        // that link afterwards, so switching back and forth never breaks a sent URL.
        if (body.visibility === "public") { sets.push("public_token = COALESCE(public_token, ?)"); binds.push(randomToken(9)); }
      }
      if (!sets.length) return new Response("nothing to update", { status: 400 });
      binds.push(itemMatch);
      await env.DB.prepare(`UPDATE items SET ${sets.join(", ")} WHERE id = ?`).bind(...binds).run();
      const updated = await env.DB.prepare("SELECT * FROM items WHERE id = ?").bind(itemMatch).first();
      return jsonRes(updated || { ok: true });
    }
    if (request.method === "DELETE") {
      await env.DB.prepare("DELETE FROM links WHERE item_id = ?").bind(itemMatch).run();
      await env.DB.prepare("DELETE FROM items WHERE id = ?").bind(itemMatch).run();
      return jsonRes({ ok: true });
    }
  }
  // /admin/api/items/:id/files — list, clear-all, and per-file upload for an asset's
  // deployed content. Stored in Workers KV (R2 is not yet enabled on this account).
  if (itemMatch && parts.length === 3 && parts[2] === "files") {
    const item = await env.DB.prepare("SELECT id, slug FROM items WHERE id = ?").bind(itemMatch).first();
    if (!item) return new Response("item not found", { status: 404 });
    const prefix = `items/${item.slug}/`;
    if (request.method === "GET") {
      const files = [];
      let cursor;
      do {
        const list = await env.OV_FILES.list({ prefix, cursor, limit: 1000 });
        for (const k of list.keys) files.push(k.name.slice(prefix.length));
        cursor = list.list_complete ? undefined : list.cursor;
      } while (cursor);
      return jsonRes({ files: files.sort() });
    }
    if (request.method === "PUT") {
      const relPath = String(url.searchParams.get("path") || "").trim().replace(/^\/+/, "");
      if (!relPath || relPath.includes("..") || relPath.length > 300) return new Response("bad path", { status: 400 });
      const bytes = await request.arrayBuffer();
      if (bytes.byteLength > 24 * 1024 * 1024) return new Response("that file is over the 25MB limit", { status: 413 });
      await env.OV_FILES.put(prefix + relPath, bytes, { metadata: { contentType: guessContentType(relPath) } });
      return jsonRes({ ok: true, path: relPath, bytes: bytes.byteLength });
    }
    if (request.method === "DELETE") {
      let cursor;
      do {
        const list = await env.OV_FILES.list({ prefix, cursor, limit: 1000 });
        await Promise.all(list.keys.map((k) => env.OV_FILES.delete(k.name)));
        cursor = list.list_complete ? undefined : list.cursor;
      } while (cursor);
      return jsonRes({ ok: true });
    }
  }
  if (itemMatch && parts.length === 4 && parts[2] === "files" && parts[3] === "finalize" && request.method === "POST") {
    const item = await env.DB.prepare("SELECT id, slug, title FROM items WHERE id = ?").bind(itemMatch).first();
    if (!item) return new Response("item not found", { status: 404 });
    let body; try { body = await request.json(); } catch { body = {}; }
    const pdfPath = String(body.pdfPath || "").trim();
    if (pdfPath) {
      await env.OV_FILES.put(`items/${item.slug}/index.html`, pdfWrapperPage(pdfPath, item.title),
        { metadata: { contentType: "text/html; charset=utf-8" } });
    }
    return jsonRes({ ok: true });
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
  if (parts[0] === "viewers" && parts.length === 1 && request.method === "GET") {
    const itemId = url.searchParams.get("item") ? Number(url.searchParams.get("item")) : null;
    const { results } = await env.DB.prepare(OV_VIEWERS_SQL).bind(itemId).all();
    return jsonRes(results.map((r) => ({
      item_id: r.item_id, item_title: r.item_title, email: r.email, ip: r.ip || "",
      first_viewed: r.first_viewed, last_seen: r.last_seen, sessions: r.sessions, opens: r.opens,
      via: r.via_link === null || r.via_link === undefined ? "public" : (r.via_link || "private link"),
      // An iPad reports "Macintosh", so it lands in desktop; a user-agent cannot tell them apart.
      device: r.saw_mobile && r.saw_desktop ? "both" : r.saw_mobile ? "mobile" : r.saw_desktop ? "desktop" : "",
    })));
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

// ---- Guest serving, shared by private links (/v/<token>/) and public assets (/a/<token>/) ----

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// The one screen every guest meets before an asset: "To view <asset>, please enter your email."
function gatePage(title) {
  const t = escHtml(title);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#000000">
<link rel="icon" href="data:,"><title>${t}</title><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{min-height:100%;background:#000;color:#f5f5f5;
  font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing:antialiased}
::selection{background:rgba(82,39,255,.55);color:#fff}
main{position:relative;isolation:isolate;min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;
  align-items:center;justify-content:center;text-align:center;
  padding:max(40px,env(safe-area-inset-top)) max(20px,env(safe-area-inset-right)) max(40px,env(safe-area-inset-bottom)) max(20px,env(safe-area-inset-left))}
main::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;
  background:radial-gradient(42vmax 34vmax at 50% 40%,rgba(82,39,255,.30),rgba(66,252,255,.06) 48%,transparent 72%);
  animation:breathe 9s cubic-bezier(.22,1,.36,1) infinite alternate}
@keyframes breathe{from{opacity:.55;transform:scale(.96)}to{opacity:1;transform:scale(1.04)}}
@media (prefers-reduced-motion:reduce){main::before{animation:none;opacity:.8}}
.logo{width:min(180px,48vw);height:auto;opacity:.9;margin-bottom:56px}
h1{font-size:clamp(30px,5.2vw,48px);font-weight:600;letter-spacing:-.022em;line-height:1.08;max-width:16ch;text-wrap:balance}
p{margin-top:16px;font-size:17px;line-height:1.5;color:#a3a3a3;max-width:34ch;text-wrap:pretty}
form{margin-top:36px;display:flex;gap:10px;width:100%;max-width:440px}
label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
input{flex:1;min-width:0;min-height:50px;padding:12px 16px;font:inherit;font-size:16px;border-radius:10px;
  border:1px solid #2e2e2e;background:rgba(17,17,17,.85);color:#f5f5f5;outline:none;
  transition:border-color .2s cubic-bezier(.22,1,.36,1)}
input::placeholder{color:#6b6b6b}
input:focus{border-color:#8a8a8a}
input[aria-invalid=true]{border-color:#ff6b6b}
button{min-height:50px;padding:12px 28px;font:inherit;font-size:16px;font-weight:600;border-radius:10px;border:none;
  background:#f5f5f5;color:#000;cursor:pointer;transition:background-color .2s,transform .12s}
button:hover{background:#fff}button:active{transform:scale(.98)}
button:disabled{opacity:.6;cursor:default;transform:none}
:focus-visible{outline:2px solid #fff;outline-offset:3px}
.err{margin-top:14px;min-height:20px;font-size:14px;color:#ff6b6b}
@media (max-width:480px){form{flex-direction:column}.logo{margin-bottom:44px}}
</style></head><body><main>
<img class="logo" src="/brand/logo.svg" alt="Unlimited Power">
<h1>${t}</h1>
<p>To view ${t}, please enter your email.</p>
<form id="f" novalidate>
<label for="email">Email address</label>
<input type="email" id="email" placeholder="you@company.com" autocomplete="email" inputmode="email"
  autocapitalize="none" autocorrect="off" spellcheck="false" required autofocus aria-describedby="err">
<button type="submit" id="go">View</button>
</form>
<div class="err" id="err" role="alert"></div>
</main><script>
var f=document.getElementById('f'),input=document.getElementById('email'),go=document.getElementById('go'),err=document.getElementById('err');
f.addEventListener('submit',async function(e){
  e.preventDefault();err.textContent='';input.removeAttribute('aria-invalid');
  if(!input.value.trim()){err.textContent='Enter your email to continue.';input.setAttribute('aria-invalid','true');input.focus();return;}
  go.disabled=true;go.textContent='Opening…';
  try{
    var r=await fetch(location.pathname.replace(/\\/$/,'')+'/email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:input.value})});
    if(r.ok){location.reload();return;}
    var j=await r.json().catch(function(){return {}});
    err.textContent=j.reason==='disposable'?'Please use your work email.'
      :(j.reason==='no_mail'||j.reason==='no_domain')?'That email address can\\'t receive mail. Check the spelling.'
      :'That doesn\\'t look like an email address. Check the spelling.';
  }catch(x){err.textContent='Could not reach the server. Check your connection and try again.';}
  input.setAttribute('aria-invalid','true');go.disabled=false;go.textContent='View';
});
</script></body></html>`;
}

function newSid() { return randomToken(10); }

// After the gate: email cookie, then the asset. scope = "v/<token>" or "a/<token>".
// Logs ov_email_submitted on email entry and ov_view on each page open; session is a
// browser-session cookie, so "sessions" counts separate visits, not every page load.
async function serveGated(request, env, { scope, item, linkId, segs }) {
  const cookies = parseCookies(request);
  const emailCookie = "ov_email_" + scope.replace("/", "_");
  const email = cookies[emailCookie] || "";
  let sid = cookies.ov_sid || "";
  const setSid = !sid;
  if (setSid) sid = newSid();
  const sidCookie = `ov_sid=${sid}; Path=/; HttpOnly; Secure; SameSite=Lax`;
  const ua = request.headers.get("User-Agent") || "";
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const logEvent = (type, em) => env.DB.prepare(
    "INSERT INTO events (ts, type, email, session, data, ua, ip, link_id, item_id) VALUES (?, ?, ?, ?, '{}', ?, ?, ?, ?)"
  ).bind(new Date().toISOString(), type, em, sid, ua.slice(0, 300), ip, linkId, item.id).run();

  if (segs.length === 3 && segs[2] === "email" && request.method === "POST") {
    let body; try { body = await request.json(); } catch { return new Response("bad json", { status: 400 }); }
    const check = await validateEmail(body.email);
    if (!check.ok) return jsonRes(check, 422);
    const entered = String(body.email || "").trim().toLowerCase().slice(0, 200);
    await logEvent("ov_email_submitted", entered);
    const h = new Headers({ "Content-Type": "application/json" });
    h.append("Set-Cookie", `${emailCookie}=${encodeURIComponent(entered)}; Path=/${scope}; Max-Age=15552000; HttpOnly; Secure; SameSite=Lax`);
    if (setSid) h.append("Set-Cookie", sidCookie);
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: h });
  }

  if (!email) {
    const h = new Headers({ "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    if (setSid) h.append("Set-Cookie", sidCookie);
    return new Response(gatePage(item.title), { headers: h });
  }

  const rest = "/" + segs.slice(2).join("/");
  const assetPath = rest === "/" ? "/index.html" : rest;
  if (assetPath === "/index.html") await logEvent("ov_view", email);
  const key = `items/${item.slug}${assetPath}`;
  // Uploaded content lives in KV; the one pre-existing deck (upx-deck) was deployed as
  // a static asset and has nothing in KV, so it falls through to env.ASSETS unchanged.
  const kvHit = await env.OV_FILES.getWithMetadata(key, "arrayBuffer");
  let res;
  if (kvHit && kvHit.value) {
    const contentType = (kvHit.metadata && kvHit.metadata.contentType) || "application/octet-stream";
    res = new Response(kvHit.value, { headers: { "Content-Type": contentType, "Cache-Control": "no-store" } });
  } else {
    const assetUrl = new URL(request.url);
    assetUrl.pathname = "/" + key;
    res = await env.ASSETS.fetch(new Request(assetUrl.toString(), request));
  }
  if (!setSid) return res;
  const out = new Response(res.body, res);
  out.headers.append("Set-Cookie", sidCookie);
  return out;
}

// /v/:token/* — private: that link's own Basic Auth, then the shared email gate.
async function viewerRouter(request, env, url) {
  const segs = url.pathname.split("/").filter(Boolean); // ["v", token, ...rest]
  const token = segs[1] || "";
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
  const item = { id: link.item_id, slug: link.item_slug, title: link.item_title };
  return serveGated(request, env, { scope: "v/" + token, item, linkId: link.id, segs });
}

// /a/:public_token/* — public: no password, only the email gate. Works only while
// the asset is set to public; switching it back to private turns this link off.
async function publicRouter(request, env, url) {
  const segs = url.pathname.split("/").filter(Boolean); // ["a", token, ...rest]
  const token = segs[1] || "";
  if (!token) return new Response("not found", { status: 404 });
  const item = await env.DB.prepare(
    "SELECT id, slug, title FROM items WHERE public_token = ? AND visibility = 'public' AND archived = 0"
  ).bind(token).first();
  if (!item) return new Response("this link is not active", { status: 404 });
  if (segs.length === 2 && !url.pathname.endsWith("/")) return Response.redirect(url.origin + url.pathname + "/", 301);
  return serveGated(request, env, { scope: "a/" + token, item, linkId: null, segs });
}

// Admin: one row per (asset, email). First viewed = first email entry or open.
const OV_VIEWERS_SQL = `
  SELECT e.item_id, i.title AS item_title, e.email,
    MIN(e.ts) AS first_viewed, MAX(e.ts) AS last_seen,
    COUNT(DISTINCT e.session) AS sessions,
    SUM(CASE WHEN e.type = 'ov_view' THEN 1 ELSE 0 END) AS opens,
    (SELECT ip FROM events e2 WHERE e2.email = e.email AND e2.item_id = e.item_id AND e2.ip != ''
       ORDER BY e2.id DESC LIMIT 1) AS ip,
    (SELECT l.label FROM events e3 JOIN links l ON l.id = e3.link_id
       WHERE e3.email = e.email AND e3.item_id = e.item_id AND e3.link_id IS NOT NULL
       ORDER BY e3.id DESC LIMIT 1) AS via_link,
    MAX(CASE WHEN e.ua LIKE '%iPhone%' OR e.ua LIKE '%Android%' OR e.ua LIKE '%Mobile%' THEN 1 ELSE 0 END) AS saw_mobile,
    MAX(CASE WHEN e.ua != '' AND e.ua NOT LIKE '%iPhone%' AND e.ua NOT LIKE '%Android%'
          AND e.ua NOT LIKE '%Mobile%' THEN 1 ELSE 0 END) AS saw_desktop
  FROM events e JOIN items i ON i.id = e.item_id
  WHERE e.type IN ('ov_email_submitted', 'ov_view') AND e.email != '' AND e.item_id IS NOT NULL
    AND (?1 IS NULL OR e.item_id = ?1)
  GROUP BY e.item_id, e.email
  ORDER BY last_seen DESC
  LIMIT 1000`;

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
    if (url.pathname.startsWith("/a/")) return publicRouter(request, env, url);
    if (url.pathname === "/brand/logo.svg") return env.ASSETS.fetch(request);

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
