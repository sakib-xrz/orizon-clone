import type { ReactNode } from "react";
import Image from "next/image";

type Variant = "gradient" | "compact" | "outline" | "light";
type Media = "arrow" | "avatars" | "none";

export function GradientButton({
  children,
  href = "#",
  variant = "gradient",
  media,
  withArrow = true,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  /** Overrides legacy `withArrow` when set. */
  media?: Media;
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const resolvedMedia: Media = media ?? (withArrow ? "arrow" : "none");

  const isGradient = variant === "gradient" || variant === "compact";
  const isCompact = variant === "compact";

  const base =
    "group relative inline-flex items-center overflow-hidden uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2";
  const gradientChrome =
    "rounded-pill border border-button-border bg-primary-blue text-ink shadow-blue-glow transition-[filter,box-shadow] duration-300 hover:brightness-[1.03] hover:shadow-blue-glow-lg";

  const variants: Record<Variant, string> = {
    gradient: `min-h-[50px] gap-2.5 pl-7 pr-[3px] ${gradientChrome}`,
    compact: `h-[50px] min-h-[50px] w-40 justify-center px-5 ${gradientChrome}`,
    outline:
      "z-[1] min-h-[50px] gap-2.5 rounded-pill border border-primary-blue bg-transparent pl-7 pr-[3px] text-white transition-colors duration-300 hover:border-primary-blue hover:bg-primary-blue hover:text-ink",
    light:
      "min-h-[50px] gap-2.5 rounded-pill border border-white/10 bg-navy-800 pl-7 pr-[3px] text-white shadow-soft",
  };

  const labelClass =
    "relative z-[1] font-semibold " +
    (isCompact
      ? "text-[13px] leading-[15px] tracking-[0.08em]"
      : "text-[15px] leading-[1.2] tracking-[1.17px]");

  const outlineLabelClass =
    "relative z-[1] text-[15px] font-semibold leading-[1.2] tracking-[1.17px] text-white transition-colors duration-300 group-hover:text-ink";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {isGradient && (
        <span
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(142,253,255,0.5),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        />
      )}

      {!isGradient && variant !== "outline" && (
        <span
          className="pointer-events-none absolute inset-0 w-0 bg-primary-blue/5 transition-[width] duration-[550ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full group-focus-visible:w-full"
          aria-hidden="true"
        />
      )}

      <span className={variant === "outline" ? outlineLabelClass : labelClass}>
        {children}
      </span>

      {resolvedMedia === "arrow" && isGradient && (
        <span className="relative z-[1] h-10 shrink-0">
          <Image
            src="/button-arrow.svg"
            alt=""
            width={40}
            height={40}
            className="block h-10 w-10 rounded-full object-contain object-right"
            aria-hidden
          />
        </span>
      )}

      {resolvedMedia === "avatars" && isGradient && (
        <span className="relative z-[1] h-10 min-w-10 max-w-[116px] shrink-0">
          <Image
            src="/button-avatars.png"
            alt=""
            width={116}
            height={40}
            className="block h-10 w-auto max-w-[116px] object-contain object-right"
            aria-hidden
          />
        </span>
      )}

      {resolvedMedia === "arrow" && variant === "outline" && (
        <span className="relative z-[1] h-10 shrink-0">
          <Image
            src="/button-arrow-outline.svg"
            alt=""
            width={40}
            height={40}
            className="block h-10 w-10 rounded-full border border-button-border object-contain object-right"
            aria-hidden
          />
        </span>
      )}
    </a>
  );
}
