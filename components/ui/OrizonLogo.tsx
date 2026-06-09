/**
 * Placeholder mark inspired by the Orizon brand (a circular "O" with a
 * half-disc + cyan crescent). The real Orizon logo is a trademark and must be
 * swapped in manually — see public/README-ASSETS.md.
 */
export function OrizonLogo({
  className = "",
  showWordmark = true,
  variant = "dark",
}: {
  className?: string;
  showWordmark?: boolean;
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "#ffffff" : "#0f0928";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orizonMark" x1="0" y1="0" x2="34" y2="34">
            <stop stopColor="#3a28dc" />
            <stop offset="1" stopColor="#2b00d4" />
          </linearGradient>
        </defs>
        <circle cx="17" cy="17" r="17" fill="url(#orizonMark)" />
        <circle cx="17" cy="17" r="9" fill="#ffffff" />
        <path d="M8 17a9 9 0 0 1 18 0Z" fill="#2c98f0" />
        <circle cx="17" cy="17" r="4.2" fill="url(#orizonMark)" />
      </svg>
      {showWordmark && (
        <span
          className="text-[22px] font-bold tracking-tight"
          style={{ color: wordColor }}
        >
          Orizon
        </span>
      )}
    </span>
  );
}
