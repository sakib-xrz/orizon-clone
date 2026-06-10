"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { GradientButton } from "@/components/ui/GradientButton";

const TABS = [
  "Take your designs to next level",
  "Get design help to raise capital",
  "Create a clickable prototype",
];

const Check = () => (
  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.2l2.3 2.3 4.7-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

type Card = {
  eyebrow: string;
  title: string;
  items: string[];
  cta: string;
  gradient: string;
};

const CARDS: Card[] = [
  {
    eyebrow: "Launch Fast",
    title: "Founders & early teams",
    items: [
      "High-converting website in 2 weeks",
      "Investor-ready pitch deck",
      "Brand identity in 10 days",
      "App, website & product design",
    ],
    cta: "Get a quick quote",
    gradient: "linear-gradient(135deg,#f7b6d2,#b3a4ff)",
  },
  {
    eyebrow: "Enterprise at Speed",
    title: "Scale-ups & enterprise",
    items: [
      "World-class pod-based engagement",
      "Multiple pods in parallel",
      "Design system rollout",
      "WCAG 2.2 AA Compliance",
    ],
    cta: "Book a scoping call",
    gradient: "linear-gradient(135deg,#cdbdfb,#9fb4ff)",
  },
];

export function Engagements() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="engagements"
      className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-2xl text-4xl font-bold sm:text-5xl">
          What do you need help with?
        </h2>
        <div
          className="mt-8 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Engagement needs"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-pill border px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 ${
                active === i
                  ? "border-primary-blue bg-primary-blue text-white"
                  : "border-ink/10 text-muted hover:border-primary-blue/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1}>
            <article className="flex h-full flex-col">
              <p className="text-sm text-muted">{card.eyebrow}</p>
              <h3 className="mt-1 text-3xl font-bold">{card.title}</h3>
              <ul className="mt-6 space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink/80">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <GradientButton href="#contact">{card.cta}</GradientButton>
              </div>
              <div
                className="mt-9 aspect-[16/11] w-full overflow-hidden rounded-card-lg"
                style={{ backgroundImage: card.gradient }}
              >
                <div className="flex h-full items-end justify-center p-6">
                  <div className="h-3/4 w-2/3 rounded-t-2xl bg-white/85 shadow-soft" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
