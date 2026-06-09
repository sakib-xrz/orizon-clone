"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Quote = {
  text: string;
  name: string;
  role: string;
  company: string;
  from: string;
  to: string;
};

const QUOTES: Quote[] = [
  {
    text: "Very few firms can make products look beautiful and work well at the same time, and that's what I love about Orizon!",
    name: "Sean Rad",
    role: "Founder at",
    company: "Tinder",
    from: "#2a2a32",
    to: "#0a0a0f",
  },
  {
    text: "The Orizon team has been an absolute pleasure to work with and done exceptional work. They gave us more optionality and design iterations than could reasonably be asked for!",
    name: "Bryan Johnson",
    role: "Founder at",
    company: "Kernel",
    from: "#1f3a8a",
    to: "#0c1b54",
  },
  {
    text: "Working with Orizon was truly a delightful experience. They have the creative depth to go from an idea to a fully packaged and branded deliverable.",
    name: "David Kalt",
    role: "Founder, CEO of",
    company: "Reverb",
    from: "#5b2a86",
    to: "#1b0f3a",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const go = (dir: number) =>
    setIdx((p) => (p + dir + QUOTES.length) % QUOTES.length);
  const q = QUOTES[idx];

  return (
    <section className="container-x py-20 lg:py-28">
      <SectionLabel>Word on the street</SectionLabel>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[320px_1fr]">
        <AnimatePresence mode="wait">
          <motion.div
            key={q.company}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[3/3.4] w-full max-w-[320px] overflow-hidden rounded-card"
            style={{ backgroundImage: `linear-gradient(160deg,${q.from},${q.to})` }}
          >
            <button
              aria-label="Play testimonial video"
              className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-blue shadow-soft transition hover:scale-105"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M3 1.5v11l9-5.5z" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 flex gap-1.5">
              {QUOTES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === idx ? "w-6 bg-white" : "w-3 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div>
          <svg
            width="56"
            height="44"
            viewBox="0 0 56 44"
            fill="none"
            aria-hidden="true"
            className="text-ink/10"
          >
            <path
              d="M0 44V24C0 10 8 2 22 0l3 8C16 10 12 14 12 22h10v22H0Zm34 0V24C34 10 42 2 56 0l-1 8c-9 2-13 6-13 14h10v22H34Z"
              fill="currentColor"
            />
          </svg>

          <AnimatePresence mode="wait">
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-4 max-w-2xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {q.text}
              </p>
              <div className="mt-10">
                <p className="text-lg font-bold text-ink">{q.name}</p>
                <p className="text-sm text-muted">
                  {q.role}{" "}
                  <span className="font-semibold text-ink">{q.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-2">
            <Arrow direction="left" onClick={() => go(-1)} />
            <Arrow direction="right" onClick={() => go(1)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
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
