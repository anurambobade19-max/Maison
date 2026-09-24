/*
# Create inquiries table for consultation requests

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email address
  - `phone` (text) — optional phone number
  - `property_type` (text) — which home category they're interested in
  - `message` (text) — their inquiry details
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated INSERT (visitors submit without signing in).
- Allow anon + authenticated SELECT (so the site can confirm submission).
- No UPDATE or DELETE — inquiries are immutable once submitted.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  property_type text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
CREATE POLICY "anon_select_inquiries" ON inquiries FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
