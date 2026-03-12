export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Spotlight cone */}
      <path
        d="M50 15 L25 85 L75 85 Z"
        fill="url(#spotGrad)"
        opacity="0.3"
      />
      {/* Figure silhouette */}
      <circle cx="50" cy="35" r="10" fill="url(#figGrad)" />
      <path
        d="M38 48 Q50 42 62 48 L58 75 Q50 78 42 75 Z"
        fill="url(#figGrad)"
      />
      {/* Star accent */}
      <path
        d="M50 8 L52 14 L58 14 L53 18 L55 24 L50 20 L45 24 L47 18 L42 14 L48 14 Z"
        fill="#fbbf24"
      />
      <defs>
        <linearGradient id="spotGrad" x1="50" y1="15" x2="50" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#a855f7" stopOpacity="0.6" />
          <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="figGrad" x1="50" y1="25" x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#a855f7" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}
