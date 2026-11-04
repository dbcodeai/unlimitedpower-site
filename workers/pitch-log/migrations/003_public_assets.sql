-- Online Viewer v2 (2026-11-04): an asset is public (email gate only, /a/<public_token>/)
-- or private (per-guest links with username/password, /v/<token>/). Apply once:
--   npx wrangler d1 execute upx-pitch-log --remote --file=migrations/003_public_assets.sql
ALTER TABLE items ADD COLUMN visibility TEXT NOT NULL DEFAULT 'private';
ALTER TABLE items ADD COLUMN public_token TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_items_public_token ON items (public_token);
CREATE INDEX IF NOT EXISTS idx_events_item ON events (item_id);
