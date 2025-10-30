import { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import WavyBackground from './WavyBackground';

interface MoodInputProps {
  onSubmit: (mood: string) => void;
  isLoading: boolean;
}

const exampleMoods = [
  'crushing deadlines',
  'existential dread at 3am',
  'dancing in the rain',
  'main character energy',
  'heartbreak hitting different',
  'cozy rainy day vibes',
  'unstoppable beast mode',
  'procrastinating everything',
  'living my best life',
  'need motivation asap'
];

const placeholders = [
  'feeling like a main character...',
  'vibing but make it anxious...',
  'too tired to function...',
  'crushing it (or being crushed by it)...',
  'in my feels rn...',
];

export default function MoodInput({ onSubmit, isLoading }: MoodInputProps) {
  const [mood, setMood] = useState('');
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim() && !isLoading) {
      onSubmit(mood.trim());
    }
  };

  const handleExampleClick = (example: string) => {
    setMood(example);
  };

  useState(() => {
    const interval = setInterval(() => {
      setPlaceholder(prev => {
        const currentIndex = placeholders.indexOf(prev);
        return placeholders[(currentIndex + 1) % placeholders.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      <WavyBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <Sparkles className="w-12 h-12 text-lime-400 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            What's your vibe?
          </h2>
          <p className="text-xl text-gray-300">
            No judgment, just vibes. Tell us how you're really feeling.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-12 animate-slide-up">
          <div className="relative">
            <textarea
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder={placeholder}
              disabled={isLoading}
              className="w-full h-40 px-8 py-6 text-2xl font-medium bg-dark-800/90 backdrop-blur-sm border-4 border-dark-700 rounded-3xl energy-shadow text-gray-100 focus:outline-none focus:border-energy-500 focus:energy-glow transition-all duration-300 resize-none placeholder:text-gray-400 disabled:opacity-60"
              maxLength={200}
            />
            <div className="absolute bottom-6 right-6 flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium">
                {mood.length}/200
              </span>
              <button
                type="submit"
                disabled={!mood.trim() || isLoading}
                className="bg-gradient-to-r from-energy-500 to-citrus-500 text-white p-4 rounded-xl energy-shadow-sm hover:energy-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <Send className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-center text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
            Or try these vibes
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {exampleMoods.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example)}
                disabled={isLoading}
                className="px-6 py-3 bg-dark-800/80 backdrop-blur-sm border-2 border-dark-700 rounded-full text-gray-200 font-medium hover:border-lime-500 hover:bg-dark-700/80 hover:scale-105 transition-all duration-300 energy-shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
