"use client";

import { useCallback, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientButton } from "@/components/ui/GradientButton";
import { Reveal } from "@/components/ui/Reveal";

type Project = {
  name: string;
  desc: string;
  from: string;
  to: string;
};

const PROJECTS: Project[] = [
  {
    name: "vivodyne",
    desc: "UI/UX, 3D rendering, and Implementation to take the Vivodyne website to the next level and establish them as an innovative leader in the biotech industry.",
    from: "#5b2a86",
    to: "#1b0f3a",
  },
  {
    name: "travelwise",
    desc: "Designing the responsive web app for all-in-one travel planning platform.",
    from: "#1f3a8a",
    to: "#0c1b54",
  },
  {
    name: "Instantly",
    desc: "Designing a best-in-class web app and mobile experience for a top lead generation platform.",
    from: "#2c6fe0",
    to: "#1746b0",
  },
  {
    name: "Creek",
    desc: "Designing the watch interface and accompanying applications for Creek's new smart watch.",
    from: "#2a2a32",
    to: "#0a0a0f",
  },
  {
    name: "Better Therapeutics",
    desc: "E-commerce redesign with a 30% uplift in signups and nearly +50% in cart conversion rate.",
    from: "#7a2a6a",
    to: "#2a0f3a",
  },
  {
    name: "Telus Sky",
    desc: "UX for futuristic skyscrapers. We made a leading Canadian telecom's new building easy to navigate.",
    from: "#1f7a6a",
    to: "#0c3a32",
  },
];

export function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 420);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SectionLabel>Featured projects</SectionLabel>
        <div className="flex items-center gap-4">
          <GradientButton href="#work" variant="outline" className="px-5">
            Recent Projects
          </GradientButton>
          <div className="flex gap-2">
            <CarouselArrow direction="left" onClick={() => scrollBy(-1)} />
            <CarouselArrow direction="right" onClick={() => scrollBy(1)} />
          </div>
        </div>
      </div>

      <Reveal className="mt-10">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-card sm:w-[46%] lg:w-[31%]"
              style={{
                backgroundImage: `linear-gradient(160deg, ${p.from}, ${p.to})`,
              }}
            >
              <div className="flex h-full flex-col p-7 text-white">
                <h3 className="text-2xl font-bold lowercase tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-white/75">
                  {p.desc}
                </p>
                <div className="mt-auto h-40 rounded-xl bg-white/10 backdrop-blur-[1px] transition-transform duration-500 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <div className="mt-6 h-[3px] w-full max-w-md rounded-full bg-ink/10">
        <div
          className="h-full rounded-full bg-primary-blue transition-[width] duration-150"
          style={{ width: `${Math.max(12, progress * 100)}%` }}
        />
      </div>
    </section>
  );
}

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous projects" : "Next projects"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-button-border/60 text-primary-blue transition hover:border-primary-blue hover:bg-primary-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d={direction === "left" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
