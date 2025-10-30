import { Music2 } from 'lucide-react';

const loadingMessages = [
  'Unlocking the vault...',
  'Analyzing your vibes...',
  'Curating the perfect tracks...',
  'Consulting the music gods...',
  'Finding songs that hit different...',
  'Building your soundtrack...',
  'Almost there, this is gonna slap...'
];

export default function LoadingSpinner() {
  const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <Music2 className="w-16 h-16 text-energy-500 animate-bounce" />
        <div className="absolute inset-0 bg-energy-600 rounded-full opacity-30 animate-ping" />
      </div>
      <p className="text-xl font-medium text-gray-200 animate-pulse">
        {randomMessage}
      </p>
    </div>
  );
}
