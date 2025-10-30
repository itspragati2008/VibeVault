import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface MoodPlaylist {
  id?: string;
  mood_input: string;
  playlist_data: PlaylistData;
  youtube_url?: string;
  share_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface PlaylistData {
  songs: Song[];
  vibe: string;
  memeText?: string;
}

export interface Song {
  title: string;
  artist: string;
  youtubeId: string;
  explanation: string;
  thumbnail?: string;
}

export interface UserSession {
  id?: string;
  session_token: string;
  mood_history: string[];
  created_at?: string;
  last_active?: string;
}

export interface TrendingMood {
  id?: string;
  mood_keyword: string;
  request_count: number;
  last_requested?: string;
}
