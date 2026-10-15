// upx-pitch-log — logging backend for unlimitedpower.ai/pitch
// POST /log   : append one event (email_submitted, video_start, video_progress,
//               watch_heartbeat, watch_end, gate_view) into D1.
// GET  /export?key=<EXPORT_KEY> : CSV of all events, newest first.
// Deploy (after `wrangler login`):
//   npx wrangler d1 create upx-pitch-log            # put returned id in wrangler.toml
//   npx wrangler d1 execute upx-pitch-log --remote --file=schema.sql
//   npx wrangler secret put EXPORT_KEY
//   npx wrangler deploy
// Then set LOG_ENDPOINT in pitch/index.html to the deployed URL + /log.

const ALLOWED_ORIGINS = ["https://unlimitedpower.ai", "https://www.unlimitedpower.ai"];

function cors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

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
