"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientButton } from "@/components/ui/GradientButton";

const CDN = "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972";

const QUOTE_MARK = `${CDN}/62bd7aa3c165042ca303a4c6_quotes%20alt.svg`;

type Segment = { text: string; bold?: boolean };

type Quote = {
  name: string;
  role: string;
  company: string;
  logo: string;
  logoWidth: number;
  image: string;
  imagePosition?: string;
  segments: Segment[];
  video?: string;
};

const QUOTES: Quote[] = [
  {
    name: "Sean Rad",
    role: "Founder at",
    company: "Tinder",
    logo: `${CDN}/62c881e3afbd27ed3a915855_Frame%201160444055%20(1).svg`,
    logoWidth: 88,
    image: `${CDN}/628b84f384075d3a9be8fe28_testimonial%202%20(1).avif`,
    imagePosition: "50% 0%",
    segments: [
      {
        text: "Very few firms can make products look beautiful and work well at the same time, and that\u2019s what I love about MaxVerse!",
      },
    ],
    video:
      "https://dl.dropboxusercontent.com/s/5kgbgonjt0npp2c/Sean%20Rad.MOV?dl=0",
  },
  {
    name: "Bryan Johnson",
    role: "Founder at",
    company: "Venmo and Kernel",
    logo: `${CDN}/62bd782aec3f0ee386d56e07_Group%201160445007.svg`,
    logoWidth: 150,
    image: `${CDN}/628b84f57c55b942d17f8fbd_testimonial%20(1).avif`,
    segments: [
      { text: "The MaxVerse team a) has been an absolute " },
      { text: "pleasure", bold: true },
      { text: " to work with and b) done " },
      { text: "exceptional work", bold: true },
      {
        text: ". We gave them an impossible deadline, and even with that, they ",
      },
      { text: "gave us more optionality, design iterations", bold: true },
      { text: " and degrees of freedom than could be reasonably asked for!" },
    ],
  },
  {
    name: "David Kalt",
    role: "Founder, CEO of",
    company: "Reverb",
    logo: `${CDN}/62c86e3f777ee53ded8e9c28_Frame%20116044988.png`,
    logoWidth: 96,
    image: `${CDN}/628b84f4e5012af6f1c0984c_testimonial%201%20(1).avif`,
    segments: [
      { text: "Working with MaxVerse was truly a " },
      { text: "delightful experience", bold: true },
      {
        text: ". From our kick-off meeting to our final delivery, MaxVerse has the ",
      },
      { text: "creative depth", bold: true },
      {
        text: " to go from an idea to a fully packaged and branded deliverable. Their design commitment always focuses on brand and impact - which is very refreshing. On top of that, they are ",
      },
      { text: "world class communicators", bold: true },
      { text: " which makes the process fun and non-intimidating." },
    ],
  },
  {
    name: "Mark Solomon",
    role: "Founder & CPO at",
    company: "GoodTrust",
    logo: `${CDN}/62c86e030b60d46a0a81438c_Frame%20116044988.svg`,
    logoWidth: 110,
    image: `${CDN}/628b84f5bec87d520fc49eb3_testimonial%203%20(1).avif`,
    segments: [
      { text: "The MaxVerse team is excellent. They put in an " },
      { text: "incredible amount of effort", bold: true },
      {
        text: " on our project and delivered something we're really happy with. Would highly recommend.",
      },
    ],
  },
  {
    name: "Dean Bloembergen",
    role: "Cofounder & CTO at",
    company: "NextWave",
    logo: `${CDN}/62cd4be34959408e0dc50b58_Frame%20116044988%20(1).png`,
    logoWidth: 110,
    image: `${CDN}/628b84f6cd9e566517ff4488_testimonial%204%20(1).avif`,
    segments: [
      { text: "Could not be more impressed with MaxVerse! ", bold: true },
      { text: "Have worked with them for many projects now and am " },
      {
        text: "always blown away by their ability to bring our products to life.",
        bold: true,
      },
    ],
  },
  {
    name: "Colleen Doll",
    role: "Manager, Smart Spaces at",
    company: "Telus",
    logo: `${CDN}/62c86def92d61647f274108e_Frame%20116044988222.svg`,
    logoWidth: 96,
    image: `${CDN}/628b84f7ddb811e79ec07328_testimonial%205%20(1).avif`,
    segments: [
      { text: "\u201CWe had " },
      { text: "many detailed requirements", bold: true },
      { text: " for the new Telus Sky building which MaxVerse were " },
      { text: "able to easily meet", bold: true },
      {
        text: ". They developed an MVP of the kiosk that focused on the most important features first. This made our employees and guests very satisfied thanks to the improved support, engagement, and navigation their system brought us.\u201D",
      },
    ],
  },
  {
    name: "Christoph Rahe",
    role: "Founder at",
    company: "Tucan",
    logo: `${CDN}/62c86dedfed22c34942c967a_Frame%20116044988123.svg`,
    logoWidth: 96,
    image: `${CDN}/628b84f7bec7d0a185b409dd_testimonial%206%20(1).avif`,
    segments: [
      {
        text: "MaxVerse did a fantastic job \u2013 They turned a highly complex product into a simple but premium user experience. We really loved how they ",
      },
      { text: "fought for the best solution", bold: true },
      { text: " and due to the " },
      { text: "structured project planning and execution", bold: true },
      {
        text: ", we always had the feeling that this project will end with great results.",
      },
    ],
  },
];

function QuoteText({ segments }: { segments: Segment[] }) {
  return (
    <p className="relative z-[1] max-w-[660px] text-lg leading-[1.6] text-ink sm:text-[22px] sm:leading-[1.5] lg:text-[26px]">
      {segments.map((s, i) =>
        s.bold ? (
          <strong key={i} className="font-bold">
            {s.text}
          </strong>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </p>
  );
}

function PlayIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 1.5v11l9-5.5z" />
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={
        direction === "left" ? "Previous testimonial" : "Next testimonial"
      }
      className="flex h-12 w-12 items-center justify-center rounded-full border border-button-border/70 bg-white text-primary-blue transition hover:border-primary-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 lg:h-[58px] lg:w-[58px]"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
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

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-white/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Testimonial video"
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-button-border/70 bg-white text-ink transition hover:border-primary-blue hover:text-primary-blue"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 2l10 10M12 2L2 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src}
          autoPlay
          controls
          playsInline
          className="max-h-[68vh] w-auto max-w-[92vw] bg-black shadow-soft"
        />
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const q = QUOTES[idx];
  const go = useCallback(
    (dir: number) => setIdx((p) => (p + dir + QUOTES.length) % QUOTES.length),
    [],
  );

  const onCardMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const dimmed = hovering && !!q.video;

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="w-full pt-16 md:pt-24"
    >
      <div className="mx-auto w-full max-w-[1160px] px-6 min-[480px]:px-8 md:px-[50px] lg:px-[60px]">
        <SectionLabel>Word on the street</SectionLabel>

        <div className="relative mt-8 md:mt-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col md:flex-row md:items-stretch md:justify-between"
            >
              {/* Mobile header: small portrait + name + logo */}
              <div className="mb-5 flex items-center md:hidden">
                <button
                  type="button"
                  onClick={() => q.video && setLightbox(true)}
                  className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[16px] ${
                    q.video ? "" : "pointer-events-none"
                  }`}
                  aria-label={
                    q.video
                      ? `Play video testimonial from ${q.name}`
                      : undefined
                  }
                  tabIndex={q.video ? 0 : -1}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={q.image}
                    alt={`Portrait of ${q.name}`}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: q.imagePosition ?? "50% 10%" }}
                  />
                  {q.video && (
                    <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary-blue shadow-soft">
                      <PlayIcon size={9} />
                    </span>
                  )}
                </button>
                <div className="ml-4">
                  <p className="mb-1 text-xl font-medium leading-7 text-ink">
                    {q.name}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="whitespace-nowrap text-sm leading-5 text-muted">
                      {q.role}
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={q.logo}
                      alt={q.company}
                      className="max-h-[22px] w-auto object-contain object-left"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop portrait card */}
              <div
                ref={cardRef}
                onMouseEnter={() => {
                  setHovering(true);
                  setPreviewLoaded(true);
                }}
                onMouseLeave={() => setHovering(false)}
                onMouseMove={onCardMove}
                onClick={() => q.video && setLightbox(true)}
                onKeyDown={(e) => {
                  if (q.video && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setLightbox(true);
                  }
                }}
                role={q.video ? "button" : undefined}
                tabIndex={q.video ? 0 : undefined}
                aria-label={
                  q.video ? `Play video testimonial from ${q.name}` : undefined
                }
                className={`relative hidden w-2/5 max-w-[360px] shrink-0 self-start overflow-hidden rounded-[20px] md:block ${
                  q.video ? "cursor-pointer" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={q.image}
                  alt={`Portrait of ${q.name}`}
                  className="block h-auto w-full"
                />

                {/* Hover video preview (Sean Rad) */}
                {q.video && previewLoaded && (
                  <video
                    src={q.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className={`absolute inset-0 z-[5] h-full w-full object-cover transition-opacity duration-200 ${
                      hovering ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                )}

                {/* Static play button */}
                {q.video && (
                  <span
                    className={`absolute bottom-7 right-6 z-[6] flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-blue shadow-soft transition-opacity duration-200 ${
                      hovering ? "opacity-0" : "opacity-100"
                    }`}
                    aria-hidden="true"
                  >
                    <PlayIcon />
                  </span>
                )}

                {/* Floating play cursor on hover */}
                {q.video && hovering && (
                  <span
                    className="pointer-events-none absolute z-[7] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-blue/80 text-white shadow-blue-glow backdrop-blur-sm"
                    style={{ left: cursor.x, top: cursor.y }}
                    aria-hidden="true"
                  >
                    <PlayIcon size={12} />
                  </span>
                )}

                {/* Pager dots */}
                <div className="absolute bottom-3 left-4 z-[8] flex items-center gap-1.5">
                  {QUOTES.map((quote, i) => (
                    <button
                      key={quote.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIdx(i);
                      }}
                      aria-label={`Show testimonial ${i + 1} of ${QUOTES.length}`}
                      aria-current={i === idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === idx
                          ? "w-5 bg-white"
                          : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quote column */}
              <div
                className={`relative flex w-full flex-col items-start md:ml-8 md:min-h-[360px] md:w-[55%] md:max-w-[666px] md:pb-16 lg:ml-20 ${
                  dimmed ? "opacity-20" : "opacity-100"
                } transition-opacity duration-300`}
              >
                <div className="relative md:mt-10 lg:mt-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={QUOTE_MARK}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-6 -top-8 z-0 w-[90px] max-md:hidden lg:-left-[26px] lg:-top-12 lg:w-[140px]"
                  />
                  <QuoteText segments={q.segments} />
                </div>

                {/* Desktop name + logo */}
                <div className="mt-auto hidden pt-10 md:block">
                  <p className="mb-2 text-[22px] font-medium leading-[29px] text-ink lg:text-[26px]">
                    {q.name}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="whitespace-nowrap text-base leading-[21px] text-muted lg:text-xl">
                      {q.role}
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={q.logo}
                      alt={q.company}
                      className="h-7 w-auto object-contain object-left"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div
            className={`mt-8 flex gap-3 md:absolute md:bottom-16 md:right-0 md:mt-0 lg:gap-3.5 ${
              dimmed ? "opacity-20" : "opacity-100"
            } transition-opacity duration-300`}
          >
            <ArrowButton direction="left" onClick={() => go(-1)} />
            <ArrowButton direction="right" onClick={() => go(1)} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && q.video && (
          <VideoLightbox src={q.video} onClose={() => setLightbox(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
