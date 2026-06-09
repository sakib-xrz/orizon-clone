"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OrizonLogo } from "@/components/ui/OrizonLogo";
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
          className={`container-x flex items-center transition-all duration-300 ${
            showLogo ? "justify-between py-5" : "justify-end py-3"
          } ${isHidden ? "pointer-events-none" : "pointer-events-auto"}`}
        >
          <motion.a
            href="#"
            aria-label="Orizon home"
            className="relative z-10 overflow-hidden"
            animate={{
              opacity: showLogo ? 1 : 0,
              width: showLogo ? "auto" : 0,
            }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: showLogo ? "auto" : "none" }}
          >
            <OrizonLogo />
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
              className="menu-button"
            >
              <span className="menu-button-glass" aria-hidden="true" />
              <span className="menu-button-inner">
                <span className="menu-button-bg" aria-hidden="true" />
                <span className="menu-line" />
                <span className="menu-line-bottom" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
