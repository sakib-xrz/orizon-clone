"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";

type HeroSlide =
  | { text: string; icon: string; starsFirst?: false }
  | { text: string; icon: string; starsFirst: true };

const SLIDES: HeroSlide[] = [
  { text: "SMILE-centered DESIGN", icon: "😊" },
  { text: "400+ projects completed", icon: "🚀" },
  { text: "Based in Montreal, Canada", icon: "🇨🇦" },
  { text: "App featured by oprah winfrey", icon: "⭐" },
  { text: "Recent TOP client Red bull", icon: "🔥" },
  { text: "DESIGN LEADER: 100K+ FOLLOWERS", icon: "🌍" },
  { text: "ON GOOGLE MAPS", icon: "★★★★★", starsFirst: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((p) => (p + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[idx];

  return (
    <section className="hero-section">
      <div className="container-x">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="hero-eyebrow"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="hero-eyebrow-slide"
            >
              {slide.starsFirst ? (
                <>
                  <span className="hero-eyebrow-stars" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span>{slide.text}</span>
                </>
              ) : (
                <>
                  <span>{slide.text}</span>
                  <span className="hero-eyebrow-icon" aria-hidden="true">
                    {slide.icon}
                  </span>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="hero-component">
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="hero-left"
          >
            <h1 className="hero-heading">
              <span className="hero-heading-row hero-heading-row-gap">
                <span className="span-bg-image">We</span>
                <span className="span-bg-image">make</span>
                <span>apps,</span>
              </span>
              <span className="hero-heading-line">
                <span className="hero-heading-word">websites</span>
                <span className="hero-heading-word">&amp; brands</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="hero-right"
          >
            <p className="hero-description">
              Orizon is a leading UX design agency based in Canada. We help
              startups &amp; Fortune 500 companies delight humans on the other
              side of the screen.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="hero-cta-wrapper"
          >
            <div className="hero-cta-holder">
              <GradientButton href="#contact" media="avatars">
                Let&apos;s talk
              </GradientButton>

              <Image
                src="/hero-booked-fast.svg"
                alt=""
                width={280}
                height={80}
                className="hero-booked-note only-desktop"
                aria-hidden
              />
              <Image
                src="/hero-booked-fast-mob.webp"
                alt=""
                width={200}
                height={72}
                className="hero-booked-note only-mob"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
