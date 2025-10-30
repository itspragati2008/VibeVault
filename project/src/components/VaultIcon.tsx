interface VaultIconProps {
  className?: string;
}

export default function VaultIcon({ className = "w-8 h-8" }: VaultIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="15" width="84" height="75" rx="6" fill="currentColor" opacity="0.95" />

      <rect x="13" y="20" width="74" height="65" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />

      <circle cx="50" cy="52" r="22" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.9" />
      <circle cx="50" cy="52" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />

      <line x1="50" y1="38" x2="50" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="52" x2="60" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <rect x="38" y="22" width="6" height="3" rx="1.5" fill="currentColor" opacity="0.8" />
      <rect x="56" y="22" width="6" height="3" rx="1.5" fill="currentColor" opacity="0.8" />

      <circle cx="25" cy="40" r="2.5" fill="currentColor" />
      <circle cx="75" cy="40" r="2.5" fill="currentColor" />
      <circle cx="25" cy="65" r="2.5" fill="currentColor" />
      <circle cx="75" cy="65" r="2.5" fill="currentColor" />

      <path
        d="M 42 45 Q 42 40 46 40 Q 50 40 50 45 L 50 60"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="50" cy="62" rx="4" ry="5" fill="currentColor" />

      <path
        d="M 54 48 L 54 43 Q 54 40 57 40 Q 60 40 60 43 L 60 63"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="65" rx="4" ry="5" fill="currentColor" />
    </svg>
  );
}
