import { Linkedin, Heart, Sparkles } from 'lucide-react';
import WavyBackground from './WavyBackground';

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      <WavyBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <Sparkles className="w-12 h-12 text-lime-400 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Meet the Creator
          </h2>
          <p className="text-xl text-gray-300">
            Made with love and a lot of caffeine
          </p>
        </div>

        <div className="bg-dark-800/90 backdrop-blur-sm border border-dark-700 rounded-3xl energy-shadow p-8 md:p-12 animate-slide-up">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-energy-500 to-citrus-500 rounded-full mx-auto mb-6 flex items-center justify-center energy-glow">
              <div className="w-28 h-28 bg-dark-950 rounded-full flex items-center justify-center">
                <span className="text-5xl font-bold gradient-text">P</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-100 mb-2">
              Pragati
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Developer, Designer & Vibe Curator
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-dark-800/60 border border-energy-700 rounded-2xl p-6 mb-6">
              <p className="text-gray-200 leading-relaxed text-center">
                Hey there! I'm Pragati, and I created VibeVault because I believe music should match your
                mood—no matter how chaotic or oddly specific it is. Whether you're crushing deadlines or
                having an existential crisis at 3am, there's a playlist for that.
              </p>
            </div>

            <div className="bg-dark-800/60 border border-lime-700 rounded-2xl p-6">
              <p className="text-gray-200 leading-relaxed text-center flex items-center justify-center gap-2">
                Built for Gen Z, by Gen Z, with
                <Heart className="w-5 h-5 text-energy-500 inline animate-bounce-gentle" />
                and good vibes only.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/pragati-luhariwala-058639283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077B5] text-white rounded-xl font-semibold hover:bg-[#006399] transition-all duration-300 energy-shadow hover:lime-glow transform hover:scale-105"
            >
              <Linkedin className="w-6 h-6" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block bg-dark-800/80 backdrop-blur-sm border border-dark-700 px-8 py-4 rounded-2xl energy-shadow-sm">
            <p className="text-sm text-gray-400 mb-1">Made with</p>
            <p className="text-lg font-semibold text-gray-200">
              React • TypeScript • Supabase • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
