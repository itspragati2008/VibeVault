export default function WavyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4500" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#32CD32" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#32CD32" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          d="M0,50 Q250,20 500,50 T1000,50 Q1250,80 1500,50 T2000,50 L2000,0 L0,0 Z"
          fill="url(#wave-gradient-1)"
          className="animate-wave"
        />

        <path
          d="M0,80 Q200,50 400,80 T800,80 Q1000,110 1200,80 T1600,80 L1600,0 L0,0 Z"
          fill="url(#wave-gradient-2)"
          className="animate-wave-delay"
          opacity="0.7"
        />

        <circle cx="15%" cy="20%" r="120" fill="#FF4500" opacity="0.08" className="animate-pulse-glow" />
        <circle cx="85%" cy="70%" r="150" fill="#FFA500" opacity="0.08" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <circle cx="50%" cy="50%" r="100" fill="#32CD32" opacity="0.06" className="animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </svg>

      <div className="absolute top-10 left-10 w-40 h-40 bg-energy-500 rounded-full opacity-10 animate-float blur-3xl" />
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-citrus-500 rounded-full opacity-10 animate-float blur-3xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-lime-500 rounded-full opacity-10 animate-float blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-energy-400 rounded-full opacity-10 animate-float blur-3xl" style={{ animationDelay: '3s' }} />
    </div>
  );
}
