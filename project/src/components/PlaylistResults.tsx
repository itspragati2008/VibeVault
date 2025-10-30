import { useState } from 'react';
import { ExternalLink, Share2, Copy, Check, RotateCcw, Music, Play } from 'lucide-react';
import { PlaylistData } from '../lib/supabase';
import WavyBackground from './WavyBackground';

interface PlaylistResultsProps {
  mood: string;
  playlistData: PlaylistData;
  youtubeUrl: string;
  onTryAgain: () => void;
}

export default function PlaylistResults({ mood, playlistData, youtubeUrl, onTryAgain }: PlaylistResultsProps) {
  const [copied, setCopied] = useState(false);
  const [shareImageCopied, setShareImageCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(youtubeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShareMeme = () => {
    const shareText = `${playlistData.memeText}\n\nCheck out my playlist: ${youtubeUrl}\n\nMade with VibeVault`;
    navigator.clipboard.writeText(shareText);
    setShareImageCopied(true);
    setTimeout(() => setShareImageCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      <WavyBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-dark-800/90 backdrop-blur-sm border-2 border-energy-500 px-8 py-3 rounded-full mb-6 energy-shadow">
            <p className="text-sm font-semibold text-citrus-400 uppercase tracking-wider">Your mood</p>
            <p className="text-2xl font-bold text-gray-100 mt-1">{mood}</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            We got you!
          </h2>
          <p className="text-xl text-gray-300 italic">
            {playlistData.vibe}
          </p>
        </div>

        <div className="bg-dark-800/90 backdrop-blur-sm border border-dark-700 rounded-3xl energy-shadow p-8 md:p-12 mb-8 animate-slide-up">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-100 flex items-center gap-3">
              <Music className="w-8 h-8 text-energy-500" />
              Your Playlist
            </h3>
            <div className="flex gap-3">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-6 py-3 bg-lime-600 text-white rounded-xl font-semibold hover:bg-lime-700 transition-all duration-300 energy-shadow-sm hover:lime-glow"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Link
                  </>
                )}
              </button>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-energy-500 to-citrus-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 energy-shadow hover:energy-glow"
              >
                <ExternalLink className="w-5 h-5" />
                Open in YouTube
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {playlistData.songs.map((song, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-dark-800 to-dark-900 p-6 rounded-2xl border-2 border-dark-700 hover:border-energy-500 transition-all duration-300 energy-shadow-sm hover:energy-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 relative">
                    <img
                      src={song.thumbnail || `https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg`}
                      alt={song.title}
                      className="w-28 h-28 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-gray-100 mb-1">
                      {song.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-2">{song.artist}</p>
                    <p className="text-sm text-gray-300 italic leading-relaxed line-clamp-2">
                      {song.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-lime-700 rounded-3xl energy-shadow p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <p className="text-sm font-semibold text-lime-400 uppercase tracking-wider mb-4">
              Shareable Meme Recap
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 whitespace-pre-line">
              {playlistData.memeText}
            </p>
            <button
              onClick={handleShareMeme}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-citrus-500 to-energy-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 energy-shadow hover:energy-glow"
            >
              {shareImageCopied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied to clipboard!
                </>
              ) : (
                <>
                  <Share2 className="w-5 h-5" />
                  Copy meme text
                </>
              )}
            </button>
          </div>
        </div>

        <div className="text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={onTryAgain}
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-800/80 backdrop-blur-sm border-2 border-dark-700 text-gray-200 rounded-xl font-semibold hover:border-lime-500 hover:bg-dark-700/80 transition-all duration-300 energy-shadow-sm hover:lime-glow"
          >
            <RotateCcw className="w-5 h-5" />
            Try another mood
          </button>
        </div>
      </div>
    </div>
  );
}
