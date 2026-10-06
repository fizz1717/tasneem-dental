/*
# Create appointments table for Tasneem Dental & Aesthetic Care

1. Purpose
   - Stores appointment requests submitted by patients through the website.
   - Each request starts as "pending" and can be moved to confirmed/cancelled/completed by clinic staff.

2. New Tables
   - `appointments`
     - `id` (uuid, primary key, auto-generated)
     - `patient_name` (text, not null) — full name of the patient
     - `phone` (text, not null) — contact phone number
     - `email` (text, nullable) — optional email address
     - `service` (text, not null) — selected service
     - `preferred_date` (date, not null) — preferred appointment date
     - `preferred_time` (text, not null) — preferred time slot
     - `message` (text, nullable) — optional additional message
     - `status` (text, not null, default 'pending')
     - `created_at` (timestamptz, default now())
     - `updated_at` (timestamptz, default now())

3. Security (RLS)
   - INSERT: public (anon) can submit appointment requests.
   - SELECT/UPDATE/DELETE: authenticated (clinic staff) only.
   - Patient personal data is never exposed publicly.

4. Indexes
   - Index on `status` and `created_at` for admin dashboard queries.

5. Notes
   - Safe to re-run (idempotent).
*/

-- Create helper function first
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $func$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$func$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit appointment requests" ON appointments;
CREATE POLICY "Public can submit appointment requests"
ON appointments FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Staff can view appointments" ON appointments;
CREATE POLICY "Staff can view appointments"
ON appointments FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Staff can update appointments" ON appointments;
CREATE POLICY "Staff can update appointments"
ON appointments FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Staff can delete appointments" ON appointments;
CREATE POLICY "Staff can delete appointments"
ON appointments FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);

DROP TRIGGER IF EXISTS update_appointments_updated_at ON appointments;
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();