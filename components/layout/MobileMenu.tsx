"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GradientButton } from "@/components/ui/GradientButton";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

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

function NavChevron({ active }: { active: boolean }) {
  return (
    <span
      className={`side-nav-link-button${active ? " is-active" : ""}`}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10.9766 9.99999L6.85156 5.87499L8.0299 4.69666L13.3332 9.99999L8.0299 15.3033L6.85156 14.125L10.9766 9.99999Z"
          fill="currentColor"
        />
      </svg>
      <span className="side-nav-border-line" />
    </span>
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
            className="side-nav-overlay"
            aria-label="Close menu"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="side-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="side-nav-scroller" data-lenis-prevent>
              <div className="side-nav-mobile-image-wrap">
                <Image
                  src="/side-nav-mobile.avif"
                  alt=""
                  width={800}
                  height={230}
                  className="side-nav-mobile-image"
                  priority
                />
              </div>

              <div className="side-nav-inner relative max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="side-nav-close right-1.5"
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

                <nav className="side-nav-links mt-5" aria-label="Primary">
                  {NAV.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className={`side-nav-link${active ? " is-active" : ""}`}
                      >
                        <span className="side-nav-link-row">
                          <span className="side-nav-link-title">
                            <span className="side-nav-link-label">
                              {item.label}
                            </span>
                            {active && (
                              <span className="side-nav-link-index-wrap">
                                <span className="side-nav-link-index">
                                  {item.index}
                                </span>
                              </span>
                            )}
                          </span>
                          <NavChevron active={active} />
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <div className="side-nav-spacer" aria-hidden="true" />

                <div className="side-nav-cta-block">
                  <p className="side-nav-cta-title mt-5">
                    Have a project for us?
                  </p>
                  <GradientButton
                    href="#contact"
                    media="avatars"
                    className="orizon-btn-menu"
                  >
                    Let&apos;s talk
                  </GradientButton>
                  <div className="side-nav-footnote">
                    <p>Need top designs at an affordable rate?</p>
                    <p>
                      <a href="#" onClick={onClose}>
                        Check out our Design Subscription
                      </a>
                    </p>
                  </div>
                </div>

                <div className="side-nav-spacer" aria-hidden="true" />

                <div className="side-nav-bottom-links">
                  {BOTTOM_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="side-nav-bottom-link"
                    >
                      <span className="side-nav-bottom-link-row">
                        <span>{item.label}</span>
                        <Image
                          src="/chevron-right.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="side-nav-bottom-chevron"
                          aria-hidden
                        />
                      </span>
                    </a>
                  ))}
                </div>

                <div className="side-nav-social">
                  <div className="side-nav-social-row">
                    {SOCIAL.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="side-nav-social-link"
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="side-nav-social-icon"
                          aria-hidden
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
