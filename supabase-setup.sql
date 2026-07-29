-- Run this once in Supabase Dashboard → SQL Editor.

-- 1. Table that maps each photo slot to its uploaded image URL.
create table if not exists site_images (
  slot_key text primary key,
  url text not null,
  updated_at timestamptz not null default now()
);

-- 2. Enable RLS, but allow anyone to READ (the live site needs this —
-- it's just image URLs, nothing sensitive). Only the server-side admin
-- upload route (using the service role key, which bypasses RLS entirely)
-- can write.
alter table site_images enable row level security;

create policy "Public can read site images"
  on site_images for select
  using (true);

-- No insert/update/delete policy is created on purpose — the anon key
-- can never write to this table. Only the service role key (server-only,
-- used in app/api/admin/upload/route.ts) can.

-- 3. Storage bucket — do this part in the dashboard UI, not SQL:
--    Storage → New bucket → name it exactly "landing-images" → toggle "Public bucket" ON.
--    Public bucket = anyone can VIEW an uploaded photo via its URL (which is the point,
--    it's meant to show on your live site). It does NOT let anyone upload — uploads
--    still require the service role key via /api/admin/upload, which is gated by
--    your ADMIN_PASSWORD-protected session cookie.
