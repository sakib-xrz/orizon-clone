/**
 * Placeholder avatar stack. The real site uses photos of team members
 * (copyrighted). These are generated gradient silhouettes — swap with real
 * headshots if licensed. See public/README-ASSETS.md.
 */
const GRADIENTS = [
  ["#f6a6c1", "#c46f9b"],
  ["#9aa6ff", "#5a63e0"],
  ["#ffd29a", "#e08a4f"],
  ["#9ee0d0", "#4fae9a"],
];

export function AvatarStack({
  count = 3,
  size = 36,
  className = "",
}: {
  count?: number;
  size?: number;
  className?: string;
}) {
  const items = Array.from({ length: count });
  return (
    <span className={`flex items-center ${className}`} aria-hidden="true">
      {items.map((_, i) => {
        const [a, b] = GRADIENTS[i % GRADIENTS.length];
        return (
          <span
            key={i}
            className="relative inline-block rounded-full ring-2 ring-white overflow-hidden"
            style={{
              width: size,
              height: size,
              marginLeft: i === 0 ? 0 : -size * 0.32,
              zIndex: items.length - i,
            }}
          >
            <svg width={size} height={size} viewBox="0 0 36 36">
              <defs>
                <linearGradient id={`av-${i}`} x1="0" y1="0" x2="36" y2="36">
                  <stop stopColor={a} />
                  <stop offset="1" stopColor={b} />
                </linearGradient>
              </defs>
              <rect width="36" height="36" fill={`url(#av-${i})`} />
              <circle cx="18" cy="14" r="6" fill="rgba(255,255,255,0.85)" />
              <path
                d="M6 33c0-7 5.4-11 12-11s12 4 12 11"
                fill="rgba(255,255,255,0.85)"
              />
            </svg>
          </span>
        );
      })}
    </span>
  );
}
