/*
# Create preschool enquiry table

1. New Tables
- `school_enquiries` stores parent enquiries submitted from the public website.
- `id` (uuid, primary key) uniquely identifies each enquiry.
- `parent_name` (text) stores the parent's name.
- `phone` (text) stores the parent's contact number.
- `child_age` (text) stores the selected child age group.
- `programme` (text) stores the selected programme.
- `message` (text) stores an optional message.
- `created_at` (timestamptz) records when the enquiry was submitted.

2. Security
- Row level security is enabled.
- The public website may insert enquiries and authenticated staff may read them.
- The public website cannot update or delete submitted enquiries.

3. Important Notes
- This is a single-tenant, no-sign-in enquiry flow.
- The form validates required fields in the browser before submission.
*/

CREATE TABLE IF NOT EXISTS public.school_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  phone text NOT NULL,
  child_age text NOT NULL,
  programme text NOT NULL,
  message text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.school_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit school enquiries" ON public.school_enquiries;
CREATE POLICY "Public can submit school enquiries"
  ON public.school_enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (char_length(parent_name) BETWEEN 2 AND 120 AND char_length(phone) BETWEEN 7 AND 30 AND char_length(child_age) BETWEEN 1 AND 40 AND char_length(programme) BETWEEN 1 AND 80 AND char_length(message) <= 1000);

DROP POLICY IF EXISTS "Authenticated staff can view school enquiries" ON public.school_enquiries;
CREATE POLICY "Authenticated staff can view school enquiries"
  ON public.school_enquiries FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "No public updates to school enquiries" ON public.school_enquiries;
CREATE POLICY "No public updates to school enquiries"
  ON public.school_enquiries FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "No public deletes to school enquiries" ON public.school_enquiries;
CREATE POLICY "No public deletes to school enquiries"
  ON public.school_enquiries FOR DELETE
  TO authenticated
  USING (false);
