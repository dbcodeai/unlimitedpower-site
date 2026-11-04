-- Online Viewer (2026-11-04). Apply once:
--   npx wrangler d1 execute upx-pitch-log --remote --file=migrations/002_online_viewer.sql
-- Not idempotent (the ALTERs error on a second run) — that is intentional, it is a
-- one-shot migration against schema.sql's original events table, not a reusable script.

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,       -- asset folder name under public/items/<slug>/
  title TEXT NOT NULL,
  created_at TEXT NOT NULL,
  archived INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  token TEXT NOT NULL UNIQUE,      -- opaque path segment: /v/<token>/
  item_id INTEGER NOT NULL REFERENCES items(id),
  label TEXT NOT NULL DEFAULT '',  -- who this link is for, e.g. "Gilad Segev"
  username TEXT NOT NULL,
  pass_hash TEXT NOT NULL,         -- SHA-256 hex of the password
  created_at TEXT NOT NULL,
  revoked INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_links_item ON links (item_id);

ALTER TABLE events ADD COLUMN link_id INTEGER;
ALTER TABLE events ADD COLUMN item_id INTEGER;
