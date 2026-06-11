"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[idx];

  return (
    <section className="relative z-10 pb-16 pt-24 md:pb-[7.5rem] md:pt-[8.5rem] min-[992px]:pb-40 min-[992px]:pt-[9.5rem]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative mb-3 h-7 overflow-hidden md:h-[2.625rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-1 whitespace-nowrap text-xs font-thin uppercase leading-[1.5] tracking-[1.2px] text-ink md:text-sm md:tracking-[1.2px]"
            >
              {slide.starsFirst ? (
                <>
                  <span
                    className="text-xs tracking-[0.05em] text-primary-blue"
                    aria-hidden="true"
                  >
                    ★★★★★
                  </span>
                  <span>{slide.text}</span>
                </>
              ) : (
                <>
                  <span>{slide.text}</span>
                  <span className="text-base leading-none" aria-hidden="true">
                    {slide.icon}
                  </span>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="grid max-w-full grid-cols-1 gap-8 md:max-w-[30rem] min-[992px]:max-w-none min-[992px]:grid-cols-[2fr_1.15fr] min-[992px]:gap-x-10 min-[992px]:gap-y-[4.5rem]">
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-[30rem] min-[992px]:max-w-none"
          >
            <h1 className="m-0 font-display text-[40px] font-semibold leading-[1.05] tracking-normal text-ink min-[480px]:text-5xl md:text-[56px] min-[992px]:text-[64px] xl:text-[80px]">
              <span className="flex flex-wrap gap-x-3">
                <span className="bg-heading-gradient bg-clip-text text-transparent">
                  We
                </span>
                <span className="bg-heading-gradient bg-clip-text text-transparent">
                  make
                </span>
                <span>apps,</span>
              </span>
              <span className="flex flex-wrap gap-x-3">
                <span className="block">websites</span>
                <span className="block">&amp; brands</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-[32rem] min-[992px]:self-start min-[992px]:pt-2"
          >
            <p className="m-0 mt-5 text-base leading-[1.5] text-ink md:text-lg">
              MaxVerse is a leading UX design agency based in Canada. We help
              startups &amp; Fortune 500 companies delight humans on the other
              side of the screen.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="col-span-full"
          >
            <div className="relative block w-full min-w-0 max-w-full md:inline-block md:w-auto md:min-w-[275px]">
              <GradientButton
                href="#contact"
                media={isMobile ? "arrow" : "avatars"}
                className="justify-between w-full sm:w-auto md:justify-start"
              >
                Let&apos;s talk
              </GradientButton>

              <Image
                src="/hero-booked-fast.svg"
                alt=""
                width={280}
                height={80}
                className="pointer-events-none absolute sm:right-[-205px] xl:right-[-190px] top-[23%] hidden h-auto w-auto max-w-[280px] md:block"
                aria-hidden
              />
              <Image
                src="/hero-booked-fast-mob.webp"
                alt=""
                width={200}
                height={72}
                className="pointer-events-none relative mx-auto mt-6 block h-auto w-auto max-w-[240px] md:absolute md:bottom-0 md:right-[-84px] md:top-auto md:mt-0 md:max-w-[170px] md:hidden"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
