// upx-pitch-log — logging backend for unlimitedpower.ai/pitch
// POST /log     : append one event (email_submitted, video_start, video_progress,
//                 watch_heartbeat, watch_end, gate_view) into D1.
// GET  /viewers : per-email aggregation (email, ip, watch %, sessions, last seen).
//                 Basic Auth — user VIEW_USER (var), password VIEW_PASS (secret).
// GET  /export?key=<EXPORT_KEY> : CSV of all events, newest first.
// Deploy (after `wrangler login`):
//   npx wrangler d1 create upx-pitch-log            # put returned id in wrangler.toml
//   npx wrangler d1 execute upx-pitch-log --remote --file=schema.sql
//   npx wrangler secret put EXPORT_KEY
//   npx wrangler secret put VIEW_PASS
//   npx wrangler deploy
// Then set LOG_ENDPOINT in pitch/index.html and VIEWERS_ENDPOINT in
// pitch/viewers/index.html to the deployed URL + /log and + /viewers.

const ALLOWED_ORIGINS = ["https://unlimitedpower.ai", "https://www.unlimitedpower.ai"];

function cors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
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
       ORDER BY e2.id DESC LIMIT 1) AS ip
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
