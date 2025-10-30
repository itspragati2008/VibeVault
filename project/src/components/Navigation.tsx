import { User, Home } from 'lucide-react';
import VaultIcon from './VaultIcon';

interface NavigationProps {
  currentPage: 'home' | 'input' | 'results' | 'credentials';
  onNavigate: (page: 'home' | 'credentials') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <VaultIcon className="w-8 h-8 text-energy-500 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold gradient-text">VibeVault</span>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === 'home' || currentPage === 'input' || currentPage === 'results'
                  ? 'bg-energy-900/50 text-energy-400 border border-energy-700'
                  : 'text-gray-300 hover:bg-dark-800'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Home</span>
            </button>

            <button
              onClick={() => onNavigate('credentials')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === 'credentials'
                  ? 'bg-lime-900/50 text-lime-400 border border-lime-700'
                  : 'text-gray-300 hover:bg-dark-800'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">About</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
