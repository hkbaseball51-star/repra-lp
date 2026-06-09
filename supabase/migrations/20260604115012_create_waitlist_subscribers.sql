/*
  # Create waitlist_subscribers table

  ## Purpose
  Stores email addresses of users who sign up for the REPRA app launch waitlist
  via the landing page form.

  ## New Tables
  - `waitlist_subscribers`
    - `id` (uuid, primary key, auto-generated)
    - `email` (text, unique, not null) — subscriber email address
    - `language` (text, default 'en') — detected from navigator.language, "ja" or "en"
    - `source` (text, default 'landing_page') — where the signup came from
    - `interest` (text, default 'repra_launch') — what they're interested in
    - `consent_marketing` (boolean, default false) — explicit marketing consent
    - `user_agent` (text, nullable) — browser user agent for analytics
    - `created_at` (timestamptz, default now())

  ## Security
  - RLS enabled — table is locked by default
  - INSERT policy: anyone (including anonymous/unauthenticated visitors) can insert
    their own email (public landing page signup form)
  - No SELECT/UPDATE/DELETE policies for public — subscribers cannot read or modify records
    (admin access handled via service role key on the server side)

  ## Notes
  1. The email column has a UNIQUE constraint to prevent duplicate signups
  2. consent_marketing must be true at the application level before inserting
  3. user_agent is stored for analytics but is not required
*/

CREATE TABLE IF NOT EXISTS waitlist_subscribers (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email             text UNIQUE NOT NULL,
  language          text NOT NULL DEFAULT 'en',
  source            text NOT NULL DEFAULT 'landing_page',
  interest          text NOT NULL DEFAULT 'repra_launch',
  consent_marketing boolean NOT NULL DEFAULT false,
  user_agent        text,
  created_at        timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE waitlist_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON waitlist_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (consent_marketing = true);
