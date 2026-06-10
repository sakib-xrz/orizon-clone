"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GradientButton } from "@/components/ui/GradientButton";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const NAV = [
  { label: "Home", index: "01", href: "/" },
  { label: "Work", index: "400+", href: "#work" },
  { label: "Services", index: "08", href: "#services" },
  { label: "Engagements", index: "03", href: "#engagements" },
  { label: "Blog", index: "58+", href: "#" },
] as const;

const BOTTOM_LINKS = [
  { label: "Why Orizon", href: "#why" },
  { label: "Reviews", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Subscription", href: "#" },
] as const;

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/orizon.design/",
    icon: "/social-instagram.svg",
  },
  {
    label: "X",
    href: "https://twitter.com/orizondesign",
    icon: "/social-x.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCThOM8aCf3XRocelDMFPyVA",
    icon: "/social-youtube.svg",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@orizon.design",
    icon: "/social-tiktok.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/orizon-design/",
    icon: "/social-linkedin.svg",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/Orizon/shots",
    icon: "/social-dribbble.svg",
  },
] as const;

const PANEL_EASE = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.055, delayChildren: 0.12 },
  },
};

const staggerItem = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: PANEL_EASE },
  },
};

function NavItem({
  label,
  index,
  href,
  active,
  onClose,
}: {
  label: string;
  index: string;
  href: string;
  active: boolean;
  onClose: () => void;
}) {
  return (
    <motion.a
      variants={staggerItem}
      href={href}
      onClick={onClose}
      className="group block px-[0.9375rem] py-1 text-inherit no-underline min-[480px]:p-0"
    >
      <span className="flex cursor-pointer items-stretch justify-between gap-[0.21875rem]">
        <span
          className={`m-0 text-[2rem] font-normal leading-[1.5] tracking-[-1.2px] transition-colors duration-200 ${
            active ? "text-ink" : "text-ink/40 group-hover:text-ink"
          }`}
        >
          {label}
        </span>

        {/* Index counter — slides into view on hover (always visible on active) */}
        <span className="mr-auto h-5 overflow-hidden" aria-hidden="true">
          <span
            className={`block text-sm font-medium leading-5 tracking-[-0.08px] text-gray-500 transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              active
                ? "translate-y-0"
                : "translate-y-full group-hover:translate-y-0"
            }`}
          >
            {index}
          </span>
        </span>

        {/* Chevron — plain on desktop idle, gray pill on mobile, blue pill on hover/active */}
        <span
          className={`relative flex h-7 w-7 shrink-0 items-center justify-center self-center rounded-full transition-colors duration-200 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            active
              ? "bg-primary-blue text-white"
              : "bg-ink/[0.04] text-ink group-hover:bg-primary-blue group-hover:text-white min-[480px]:bg-transparent min-[480px]:group-hover:bg-primary-blue"
          }`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10.9766 9.99999L6.85156 5.87499L8.0299 4.69666L13.3332 9.99999L8.0299 15.3033L6.85156 14.125L10.9766 9.99999Z"
              fill="currentColor"
            />
          </svg>
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(162deg,rgba(255,255,255,0.1)_11%,rgba(255,255,255,0.02))] opacity-50" />
        </span>
      </span>
    </motion.a>
  );
}

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const lenis = useLenis();
  const isMobile = useMediaQuery("(max-width: 479px)");
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (lenis) {
      if (open) lenis.stop();
      else lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isActive = (href: string) => href === "/" && pathname === "/";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] cursor-default border-0 bg-transparent p-0 min-[480px]:bg-ink/40 min-[480px]:backdrop-blur-lg"
            aria-label="Close menu"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: PANEL_EASE }}
            className="fixed inset-y-0 right-0 z-[80] h-dvh w-full max-w-full overflow-hidden bg-white min-[480px]:w-[420px] min-[480px]:rounded-l-[20px] min-[480px]:py-[1.1rem] min-[992px]:w-[500px]"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="absolute right-5 top-4 z-[2] flex size-12 items-center justify-center rounded-full border-0 bg-white text-ink shadow-md transition-transform duration-200 hover:scale-105 min-[480px]:right-12 min-[480px]:top-6 min-[480px]:size-14 min-[480px]:bg-ink/[0.04] min-[480px]:shadow-none"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div
              className="flex h-full flex-col overflow-y-auto px-2.5 pb-10 pt-0 min-[480px]:px-12 min-[480px]:pb-6 min-[480px]:pt-[6.5875rem] min-[992px]:px-[5.5rem]"
              data-lenis-prevent
            >
              <div className="block h-[230px] w-full flex-none overflow-hidden rounded-[1.25rem] min-[480px]:hidden">
                <Image
                  src="/side-nav-mobile.avif"
                  alt=""
                  width={800}
                  height={230}
                  className="h-full w-full object-cover object-[50%_70%]"
                  priority
                />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="closed"
                animate="open"
                className="flex w-full flex-1 flex-col px-[1.575rem] pt-8 min-[480px]:w-[324px] min-[480px]:p-0"
              >
                <nav
                  className="-mx-[0.9375rem] flex w-[calc(100%+1.875rem)] flex-col gap-2 min-[480px]:mx-0 min-[480px]:w-full min-[480px]:gap-4"
                  aria-label="Primary"
                >
                  {NAV.map((item) => (
                    <NavItem
                      key={item.label}
                      label={item.label}
                      index={item.index}
                      href={item.href}
                      active={isActive(item.href)}
                      onClose={onClose}
                    />
                  ))}
                </nav>

                <motion.div
                  variants={staggerItem}
                  className="mt-8 h-px w-full bg-[linear-gradient(90deg,#0f0928,rgba(15,9,40,0.18))] opacity-[0.08]"
                  aria-hidden="true"
                />

                <motion.div variants={staggerItem} className="mt-8">
                  <p className="mb-5 text-xl font-normal leading-[1.4] text-ink">
                    Have a project for us?
                  </p>
                  <GradientButton
                    href="#contact"
                    media={isMobile ? "arrow" : "avatars"}
                    className="w-full justify-between min-[480px]:w-auto"
                  >
                    Let&apos;s talk
                  </GradientButton>
                  <div className="mt-6 flex flex-col gap-1">
                    <p className="m-0 text-sm leading-[1.5] text-ink">
                      Need top designs at an affordable rate?
                    </p>
                    <p className="m-0 text-sm leading-[1.5] text-ink">
                      <a
                        href="#"
                        onClick={onClose}
                        className="text-primary-blue no-underline"
                      >
                        Check out our Design Subscription
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="mt-8 h-px w-full bg-[linear-gradient(90deg,#0f0928,rgba(15,9,40,0.18))] opacity-[0.08]"
                  aria-hidden="true"
                />

                <motion.div
                  variants={staggerItem}
                  className="-ml-1.5 mr-1.5 mt-8 grid w-[calc(100%+12px)] grid-cols-2 gap-2 min-[480px]:mx-0 min-[480px]:w-full min-[480px]:gap-4"
                >
                  {BOTTOM_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="p-1.5 text-inherit no-underline min-[480px]:p-0"
                    >
                      <span className="flex items-center gap-1 text-base leading-[1.5] text-ink">
                        <span>{item.label}</span>
                        <Image
                          src="/chevron-right.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="h-4 w-4 shrink-0"
                          aria-hidden
                        />
                      </span>
                    </a>
                  ))}
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex flex-1 flex-col justify-end"
                >
                  <div className="mt-8 flex w-full items-center justify-between p-6">
                    {SOCIAL.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="flex items-center justify-center opacity-85 transition-opacity duration-200 hover:opacity-100"
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5"
                          aria-hidden
                        />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
