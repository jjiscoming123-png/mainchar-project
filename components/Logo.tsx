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
      <rect width="100" height="100" rx="12" fill="#0c0a14" />
      <radialGradient id="mcGlow" cx="50%" cy="42%" r="45%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0c0a14" stopOpacity="0" />
      </radialGradient>
      <rect width="100" height="100" rx="12" fill="url(#mcGlow)" />
      {/* Geometric Crown-M */}
      <g transform="translate(20, 22) scale(0.125)">
        <rect x="0" y="80" width="80" height="360" fill="#a855f7" />
        <rect x="400" y="80" width="80" height="360" fill="#a855f7" />
        <polygon points="80,80 240,320 240,200 80,0" fill="#a855f7" />
        <polygon points="400,80 240,320 240,200 400,0" fill="#a855f7" />
        <polygon points="240,100 258,140 240,180 222,140" fill="#f5c542" opacity="0.8" />
      </g>
    </svg>
  );
}
