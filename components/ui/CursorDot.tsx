"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE =
  'a, button, input, textarea, select, summary, [role="button"], [data-cursor-hide]';

export function CursorDot() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const springX = useSpring(dotX, { stiffness: 550, damping: 40, mass: 0.15 });
  const springY = useSpring(dotY, { stiffness: 550, damping: 40, mass: 0.15 });
  const scale = useSpring(visible ? 1 : 0, {
    stiffness: 260,
    damping: 22,
    mass: 0.3,
  });
  const opacity = useSpring(visible ? 1 : 0, {
    stiffness: 260,
    damping: 22,
    mass: 0.3,
  });

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      setEnabled(desktop.matches && !reduced.matches);
    };

    syncEnabled();
    desktop.addEventListener("change", syncEnabled);
    reduced.addEventListener("change", syncEnabled);

    return () => {
      desktop.removeEventListener("change", syncEnabled);
      reduced.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      return Boolean(target.closest(INTERACTIVE));
    };

    const onMove = (event: MouseEvent) => {
      dotX.set(event.clientX);
      dotY.set(event.clientY);
      setVisible(!isInteractive(event.target));
    };

    const onOver = (event: MouseEvent) => {
      setVisible(!isInteractive(event.target));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [enabled, dotX, dotY]);

  if (!enabled) return null;

  return (
    <motion.span
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue lg:block"
      style={{ x: springX, y: springY, scale, opacity }}
      aria-hidden="true"
    />
  );
}
