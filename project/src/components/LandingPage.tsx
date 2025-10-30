import { Sparkles, Heart, Zap } from 'lucide-react';
import VaultIcon from './VaultIcon';
import WavyBackground from './WavyBackground';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      <WavyBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <VaultIcon className="w-14 h-14 text-energy-500" />
            <h1 className="text-6xl md:text-7xl font-bold gradient-text">
              VibeVault
            </h1>
            <Sparkles className="w-10 h-10 text-lime-500" />
          </div>

          <p className="text-2xl md:text-3xl font-medium text-gray-200 mb-4 animate-slide-up">
            Your mood, your playlist, your sanctuary
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Tell us how you're feeling right now—crushing deadlines, dancing in the rain, or just vibing—and
            we'll unlock the perfect YouTube playlist from the vault.
          </p>

          <button
            onClick={onGetStarted}
            className="group relative bg-gradient-to-r from-energy-500 via-citrus-500 to-citrus-400 text-white px-12 py-5 rounded-2xl text-xl font-semibold energy-shadow hover:energy-glow transition-all duration-300 transform hover:scale-105 animate-bounce-gentle"
          >
            <span className="relative z-10 flex items-center gap-2">
              Unlock the vault
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700 p-8 rounded-3xl energy-shadow-sm hover:energy-glow hover:border-energy-500 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-energy-900/50 rounded-2xl flex items-center justify-center mb-4 border border-energy-700">
              <Zap className="w-8 h-8 text-energy-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-3">Express Your Vibe</h3>
            <p className="text-gray-300 leading-relaxed">
              No boring mood selectors here. Just type how you really feel—we speak Gen Z.
            </p>
          </div>

          <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700 p-8 rounded-3xl energy-shadow-sm hover:lime-glow hover:border-lime-500 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-lime-900/50 rounded-2xl flex items-center justify-center mb-4 border border-lime-700">
              <Sparkles className="w-8 h-8 text-lime-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-3">Get Perfect Matches</h3>
            <p className="text-gray-300 leading-relaxed">
              Curated playlists with songs that actually hit different, plus explanations that make sense.
            </p>
          </div>

          <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700 p-8 rounded-3xl energy-shadow-sm hover:energy-glow hover:border-citrus-500 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-citrus-900/50 rounded-2xl flex items-center justify-center mb-4 border border-citrus-700">
              <Heart className="w-8 h-8 text-citrus-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-3">Share the Vibes</h3>
            <p className="text-gray-300 leading-relaxed">
              Get shareable meme recaps because your friends need to know what you're feeling too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
