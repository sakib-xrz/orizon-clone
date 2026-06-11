"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GradientButton } from "@/components/ui/GradientButton";

const CDN = "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972";

type Card = {
  eyebrow: string;
  title: string;
  items: string[];
  cta: string;
  image: string;
  imageAlt: string;
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
    image: `${CDN}/6926c87ae615955bd1cfa944_Frame%202147230031.avif`,
    imageAlt:
      "Blue smartphone showing a gaming community app screen with text 'Level Up Your Community' against a pink gradient background and gray rocks.",
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
    image: `${CDN}/6926c88b91ff4d5030200774_Frame%202147230033.avif`,
    imageAlt:
      "Hands holding a tablet displaying a property analysis app with a 3D building model and site statistics.",
  },
];

function FeatureCard({ card, index }: { card: Card; index: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <article className="relative w-full overflow-hidden rounded-[20px] max-lg:pb-[67%] max-lg:min-h-0 max-sm:min-h-[550px] lg:min-h-[720px]">
        <div className="relative z-[2] flex w-full flex-col items-start px-4 pt-7 md:px-7">
          <p className="mb-2 text-xl font-normal leading-6 text-ink">
            {card.eyebrow}
          </p>
          <h3 className="mb-4 text-2xl font-semibold leading-[1.4] tracking-normal text-ink sm:mb-6 sm:text-4xl sm:tracking-[-0.5px]">
            {card.title}
          </h3>
          <ul className="mb-6 flex w-full list-none flex-col gap-2 p-0 text-sm leading-[26px] text-ink sm:text-base">
            {card.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-primary-blue"
                >
                  <path
                    d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                    fill="currentColor"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <GradientButton href="#contact">{card.cta}</GradientButton>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden max-sm:inset-x-0 max-sm:bottom-0 max-sm:top-auto"
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt=""
            className="h-full w-full object-cover object-[50%_100%] max-sm:object-contain"
          />
        </div>
      </article>
    </Reveal>
  );
}

export function Engagements() {
  return (
    <section
      id="engagements"
      className="w-full pt-10 md:pt-20"
      aria-label="Engagement offerings"
    >
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-16 px-6 min-[480px]:px-8 md:px-[50px] lg:grid-cols-2 lg:gap-6 lg:px-[60px]">
        {CARDS.map((card, i) => (
          <FeatureCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
