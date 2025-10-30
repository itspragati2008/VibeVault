-- Create Mood Playlists Storage System
-- 
-- Overview:
-- This migration creates the core database structure for storing mood-based playlists,
-- user sessions, and playlist generation history for the VibeVault application.
-- 
-- New Tables:
-- 1. mood_playlists - Stores generated playlists based on user mood inputs
-- 2. user_sessions - Tracks user sessions for analytics and mood history
-- 3. trending_moods - Aggregates popular mood inputs for trending section

-- Create mood_playlists table
CREATE TABLE IF NOT EXISTS mood_playlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mood_input text NOT NULL,
  playlist_data jsonb DEFAULT '{}'::jsonb,
  youtube_url text,
  share_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token text UNIQUE NOT NULL,
  mood_history jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  last_active timestamptz DEFAULT now()
);

-- Create trending_moods table
CREATE TABLE IF NOT EXISTS trending_moods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mood_keyword text UNIQUE NOT NULL,
  request_count integer DEFAULT 1,
  last_requested timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE mood_playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE trending_moods ENABLE ROW LEVEL SECURITY;

-- RLS Policies for mood_playlists
CREATE POLICY "Anyone can view playlists"
  ON mood_playlists FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create playlists"
  ON mood_playlists FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update share count"
  ON mood_playlists FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- RLS Policies for user_sessions
CREATE POLICY "Anyone can view own session"
  ON user_sessions FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create sessions"
  ON user_sessions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update own session"
  ON user_sessions FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- RLS Policies for trending_moods
CREATE POLICY "Anyone can view trending moods"
  ON trending_moods FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create trending mood"
  ON trending_moods FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update trending mood count"
  ON trending_moods FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_mood_playlists_created_at ON mood_playlists(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_mood_playlists_mood_input ON mood_playlists(mood_input);
CREATE INDEX IF NOT EXISTS idx_trending_moods_request_count ON trending_moods(request_count DESC);
CREATE INDEX IF NOT EXISTS idx_user_sessions_session_token ON user_sessions(session_token);