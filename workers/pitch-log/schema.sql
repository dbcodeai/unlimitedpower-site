CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,
  type TEXT NOT NULL,
  email TEXT,
  session TEXT,
  data TEXT,
  ua TEXT,
  ip TEXT
);
CREATE INDEX IF NOT EXISTS idx_events_email ON events (email);
CREATE INDEX IF NOT EXISTS idx_events_type ON events (type);
