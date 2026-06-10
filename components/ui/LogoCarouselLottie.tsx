"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const LOTTIE_SOURCES = {
  desktop:
    "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972/677f974e2b01dfb9d8dbb312_Orizon%20Logo%20Carousel.json",
  mobile:
    "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972/677f974efd98874007e8c758_Orizon%20Logo%20Carousel%20Mobile.json",
} as const;

type LogoCarouselVariant = keyof typeof LOTTIE_SOURCES;

export function LogoCarouselLottie({
  variant,
  className = "",
}: {
  variant: LogoCarouselVariant;
  className?: string;
}) {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(LOTTIE_SOURCES[variant])
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {
        if (!cancelled) setAnimationData(null);
      });

    return () => {
      cancelled = true;
    };
  }, [variant]);

  if (!animationData) {
    return (
      <div
        aria-hidden
        className={className}
        style={{ aspectRatio: variant === "mobile" ? "375 / 176" : "2472 / 348" }}
      />
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={!reduceMotion}
      autoplay={!reduceMotion}
      className={className}
      aria-hidden
    />
  );
}
