import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import MoodInput from './components/MoodInput';
import PlaylistResults from './components/PlaylistResults';
import CredentialsPage from './components/CredentialsPage';
import { supabase, MoodPlaylist, PlaylistData } from './lib/supabase';
import { generatePlaylist, createYouTubePlaylistUrl } from './services/playlistGenerator';
import { getSessionToken } from './services/sessionManager';

type Page = 'home' | 'input' | 'results' | 'credentials';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [currentMood, setCurrentMood] = useState('');
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  useEffect(() => {
    initializeSession();
  }, []);

  const initializeSession = async () => {
    const sessionToken = getSessionToken();

    const { data: existingSession } = await supabase
      .from('user_sessions')
      .select('*')
      .eq('session_token', sessionToken)
      .maybeSingle();

    if (!existingSession) {
      await supabase.from('user_sessions').insert({
        session_token: sessionToken,
        mood_history: []
      });
    }
  };

  const handleGetStarted = () => {
    setCurrentPage('input');
  };

  const handleMoodSubmit = async (mood: string) => {
    setIsLoading(true);
    setCurrentMood(mood);

    try {
      const playlist = generatePlaylist(mood);
      const url = createYouTubePlaylistUrl(playlist.songs);

      setPlaylistData(playlist);
      setYoutubeUrl(url);

      const moodPlaylist: Omit<MoodPlaylist, 'id' | 'created_at' | 'updated_at'> = {
        mood_input: mood,
        playlist_data: playlist,
        youtube_url: url,
        share_count: 0
      };

      await supabase.from('mood_playlists').insert(moodPlaylist);

      const sessionToken = getSessionToken();
      const { data: session } = await supabase
        .from('user_sessions')
        .select('mood_history')
        .eq('session_token', sessionToken)
        .maybeSingle();

      if (session) {
        const updatedHistory = [...(session.mood_history || []), mood];
        await supabase
          .from('user_sessions')
          .update({
            mood_history: updatedHistory,
            last_active: new Date().toISOString()
          })
          .eq('session_token', sessionToken);
      }

      const moodKeyword = mood.toLowerCase().slice(0, 50);
      const { data: existingMood } = await supabase
        .from('trending_moods')
        .select('*')
        .eq('mood_keyword', moodKeyword)
        .maybeSingle();

      if (existingMood) {
        await supabase
          .from('trending_moods')
          .update({
            request_count: existingMood.request_count + 1,
            last_requested: new Date().toISOString()
          })
          .eq('mood_keyword', moodKeyword);
      } else {
        await supabase.from('trending_moods').insert({
          mood_keyword: moodKeyword,
          request_count: 1
        });
      }

      setCurrentPage('results');
    } catch (error) {
      console.error('Error generating playlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAgain = () => {
    setCurrentPage('input');
    setCurrentMood('');
    setPlaylistData(null);
    setYoutubeUrl('');
  };

  const handleNavigate = (page: 'home' | 'credentials') => {
    setCurrentPage(page);
    if (page === 'home') {
      setCurrentMood('');
      setPlaylistData(null);
      setYoutubeUrl('');
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <div className="pt-20">
        {currentPage === 'home' && (
          <LandingPage onGetStarted={handleGetStarted} />
        )}

        {currentPage === 'input' && (
          <MoodInput onSubmit={handleMoodSubmit} isLoading={isLoading} />
        )}

        {currentPage === 'results' && playlistData && (
          <PlaylistResults
            mood={currentMood}
            playlistData={playlistData}
            youtubeUrl={youtubeUrl}
            onTryAgain={handleTryAgain}
          />
        )}

        {currentPage === 'credentials' && (
          <CredentialsPage />
        )}
      </div>
    </div>
  );
}

export default App;
