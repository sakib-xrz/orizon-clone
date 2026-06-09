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
  const resolvedMedia: Media =
    media ?? (withArrow ? "arrow" : "none");

  const isGradient = variant === "gradient" || variant === "compact";
  const isCompact = variant === "compact";

  const base =
    "orizon-btn group relative inline-flex items-center overflow-hidden uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2";

  const variants: Record<Variant, string> = {
    gradient: "orizon-btn-main orizon-btn-gradient orizon-btn-shadow",
    compact: "orizon-btn-compact orizon-btn-gradient orizon-btn-shadow",
    outline: "orizon-btn-outline",
    light: "orizon-btn-light",
  };

  const labelClass =
    "btn-label relative z-[1] font-semibold text-white " +
    (isCompact
      ? "text-[13px] leading-[15px] tracking-[0.08em]"
      : "text-[15px] leading-[1.2] tracking-[1.17px]");

  const outlineLabelClass =
    "btn-label relative z-[1] text-[15px] font-semibold leading-[1.2] tracking-[1.17px] text-primary-blue";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {isGradient ? (
        <span className="bg-btn-layer" aria-hidden="true" />
      ) : (
        <span className="hover-btn-layer" aria-hidden="true" />
      )}

      <span className={variant === "outline" ? outlineLabelClass : labelClass}>
        {children}
      </span>

      {resolvedMedia === "arrow" && isGradient && (
        <span className="btn-image-holder">
          <Image
            src="/button-arrow.svg"
            alt=""
            width={40}
            height={40}
            className="btn-image btn-image-shadow"
            aria-hidden
          />
        </span>
      )}

      {resolvedMedia === "avatars" && isGradient && (
        <span className="btn-image-holder btn-image-holder-avatars">
          <Image
            src="/button-avatars.png"
            alt=""
            width={116}
            height={40}
            className="btn-image btn-image-avatars"
            aria-hidden
          />
        </span>
      )}

      {resolvedMedia === "arrow" && variant === "outline" && (
        <span className="btn-image-holder">
          <Image
            src="/button-arrow-outline.svg"
            alt=""
            width={40}
            height={40}
            className="btn-image btn-image-shadow"
            aria-hidden
          />
        </span>
      )}
    </a>
  );
}
