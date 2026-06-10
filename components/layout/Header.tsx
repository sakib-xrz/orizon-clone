"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MaxVerseLogo } from "@/components/ui/MaxVerseLogo";
import { GradientButton } from "@/components/ui/GradientButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

type HeaderMode = "full" | "compact" | "hidden";

const TOP_THRESHOLD = 32;

function resolveMode(scrollY: number, direction: 1 | -1 | 0): HeaderMode {
  if (scrollY <= TOP_THRESHOLD) return "full";
  if (direction === 1) return "hidden";
  if (direction === -1) return "compact";
  return scrollY > TOP_THRESHOLD ? "hidden" : "full";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<HeaderMode>("full");
  const lenis = useLenis();

  useEffect(() => {
    const update = (scrollY: number, direction: 1 | -1 | 0) => {
      setMode((current) => {
        const next = resolveMode(scrollY, direction);
        return direction === 0 && scrollY > TOP_THRESHOLD ? current : next;
      });
    };

    if (lenis) {
      const unsubscribe = lenis.on("scroll", (instance) => {
        update(instance.scroll, instance.direction);
      });
      update(lenis.scroll, lenis.direction);
      return unsubscribe;
    }

    let lastY = window.scrollY;
    const onScroll = () => {
      const scrollY = window.scrollY;
      const direction: 1 | -1 | 0 =
        scrollY > lastY ? 1 : scrollY < lastY ? -1 : 0;
      update(scrollY, direction);
      lastY = scrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const showLogo = mode === "full";
  const isHidden = mode === "hidden";

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: isHidden ? "-100%" : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex w-full max-w-[1200px] items-center px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
            showLogo ? "justify-between py-5" : "justify-end py-3"
          } ${isHidden ? "pointer-events-none" : "pointer-events-auto"}`}
        >
          <motion.a
            href="#"
            aria-label="MaxVerse home"
            className="relative z-10 overflow-hidden"
            animate={{
              opacity: showLogo ? 1 : 0,
              width: showLogo ? "auto" : 0,
            }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: showLogo ? "auto" : "none" }}
          >
            <MaxVerseLogo />
          </motion.a>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <GradientButton
                href="#contact"
                variant="compact"
                withArrow={false}
              >
                Contact Us
              </GradientButton>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[90] flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-full border-0 bg-[linear-gradient(#fff,rgba(255,255,255,0.55))] p-0 shadow-[-22px_-27px_40px_4px_rgba(96,96,116,0.2),22px_27px_40px_4px_rgba(96,96,116,0.14)] transition-transform duration-200 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-[7px]" aria-hidden="true" />
              <span className="relative flex h-full w-full flex-col items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-ink/[0.04] opacity-50" aria-hidden="true" />
                <span className="relative mb-[5px] block h-0.5 w-5 rounded bg-primary-blue" />
                <span className="relative block h-0.5 w-5 rounded bg-primary-blue" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
