"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientButton } from "@/components/ui/GradientButton";
import { Reveal } from "@/components/ui/Reveal";

const CDN = "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972";

type ShadowVariant = "purple" | "blue" | "gray" | "green" | "dark" | "navy";

type CaseStudy = {
  href: string;
  logo: string;
  logoAlt: string;
  description: string;
  mockup: string;
  mockupAlt: string;
  video?: string;
  backgroundImage: string;
  backgroundColor?: string;
  shadow: ShadowVariant;
  mockupClassName?: string;
  mobileMockup?: string;
};

const SHADOW_COLORS: Record<ShadowVariant, string> = {
  purple: "bg-[#00F8FF33]",
  blue: "bg-[#00F8FF40]",
  gray: "bg-[#29292966]",
  green: "bg-[#00F8FF4d]",
  dark: "bg-[#18181966]",
  navy: "bg-[#00F8FF26]",
};

const CASE_STUDIES: CaseStudy[] = [
  {
    href: "/work/vivodyne",
    logo: `${CDN}/667bf07d8d678fb7aaff095a_Vivodyne%20Logo.svg`,
    logoAlt: "Vivodyne logo",
    description:
      "UI/UX, 3D rendering, and Implementation to take the Vivodyne website to the next level and establish them as an innovative leader in the biotech industry",
    mockup: `${CDN}/667c87037a19bc64512d6e0d_Mask%20group%20(6).webp`,
    mockupAlt: "Vivodyne website design on laptop",
    video:
      "https://dl.dropboxusercontent.com/scl/fi/35jualb18cz4svtuxfch7/Vivodyne-Showreel-1.mp4?rlkey=fqpitldqshaq52rxiibj6qfh0&st=1zf19vg4&dl=0",
    backgroundImage: `${CDN}/667c86d726fe14368e34f629_Frame%201410126659.svg`,
    shadow: "purple",
    mockupClassName: "relative -bottom-[11%] min-w-[106%]",
  },
  {
    href: "/work/travelwise",
    logo: `${CDN}/69f78f0a9206ce4df6f4bc19_options%202.svg`,
    logoAlt: "Travelwise logo",
    description:
      "Designing the responsive web app for all-in-one travel planning platform.",
    mockup: `${CDN}/6a0cdc261fef797462f34187_Frame%201410126658.avif`,
    mockupAlt: "Travelwise website design on laptop",
    video:
      "https://dl.dropboxusercontent.com/scl/fi/s70zpzc2r7wf9edscgn1c/Orizon_Showreel_Travelwise_new-2026.mp4?rlkey=8r5l13v9l8wlt2w4awvuefhgi&st=5s4xizd6&dl=0",
    backgroundImage: `${CDN}/6a0cdcdbaf6cd7e191095e50_case%20study%20card%20(1).avif`,
    backgroundColor: "#00F8FF",
    shadow: "blue",
    mockupClassName: "relative -bottom-10 left-[5%]",
  },
  {
    href: "/work/instantly-ai",
    logo: `${CDN}/667c0561b3395b022d4d2307_Instantly%20Logo%202.svg`,
    logoAlt: "Instantly logo",
    description:
      "Designing a best-in-class web app and mobile experience for a top lead generation platform",
    mockup: `${CDN}/667c05ae60f87bc2d297cdeb_Macbook_Air_084%201.png`,
    mockupAlt: "Instantly website design on laptop",
    video:
      "https://dl.dropboxusercontent.com/scl/fi/4gtutmirufbp07o43dhl6/Instantly-Showreel-v2__91pct_smaller.mp4?rlkey=mcyscfmt17uv5shvw9b0huoct&st=5zokt1u3&dl=0",
    backgroundImage: `${CDN}/667c07473dcf77a998e708e6_Frame%201410126658.svg`,
    shadow: "blue",
    mockupClassName: "relative -bottom-10 max-w-[65%] -top-12",
  },
  {
    href: "/work/creek",
    logo: `${CDN}/667ef15e79bb7c993c84eeee_Mask%20group%20(3).webp`,
    logoAlt: "Creek logo",
    description:
      "Designing the watch interface and accompanying applications for Creek's new smart watch",
    mockup: `${CDN}/667bfae034bcf05700de8bc8_Group%201171275987.webp`,
    mockupAlt: "Creek smart watch interface design",
    video:
      "https://dl.dropboxusercontent.com/scl/fi/8inzq0n1x34owgx77tdrj/Creek-Showreel__90pct_smaller.mp4?rlkey=mt84vaemwpqup303dkb1wzue9&st=0c3emxpq&dl=0",
    backgroundImage: `${CDN}/6685474f95e765ced6da5b10_Frame%201160444033.webp`,
    shadow: "gray",
    mockupClassName: "relative -bottom-[11%] min-w-[106%]",
  },
  {
    href: "/lovethesales",
    logo: `${CDN}/64f87728d5f596d5ae029660_options%202.svg`,
    logoAlt: "Love the Sales logo",
    description:
      "E-commerce redesign with a 30% uplift in signups and nearly +50% in cart conversion rate. We rebuilt the brand identity and took their design to the next level.",
    mockup: `${CDN}/667bf5f6cd29d63ebcca871f_Group%201410126275.webp`,
    mockupAlt: "Love the Sales e-commerce design",
    video:
      "https://dl.dropboxusercontent.com/scl/fi/o0n76tinknaz26r09q88c/LTS-Showreel-vertical-3-__92pct_smaller.mp4?rlkey=p9azcvlrw9ix2y8bb4snlgsxj&st=mh3n91ie&dl=0",
    backgroundImage: `${CDN}/667bf5f5fb9bb30617e42e48_Frame%201410126657%20(1).svg`,
    shadow: "green",
    mockupClassName: "relative -bottom-[11%] min-w-[106%]",
  },
  {
    href: "/telus",
    logo: `${CDN}/667c91a47c186db9a3bc53e2_Logo%20(1).svg`,
    logoAlt: "Telus logo",
    description:
      "UX for futuristic skyscrapers. We made a leading Canadian telecom's new building easy to navigate with taps and maps.",
    mockup: `${CDN}/667ee18a8130efab4275c36c_Mask%20group%20(2).webp`,
    mockupAlt: "Telus Sky building navigation design",
    video:
      "https://dl.dropboxusercontent.com/scl/fi/yz7ndr54cy3zqeixnepwg/Vertical-v3-Telus.mp4?rlkey=9gki5ahoglu1wnluctcn0mk3r&st=eaphmncb&dl=0",
    backgroundImage: `${CDN}/667ee18bfb01a5a0b80c4dad_Frame%201160444009.webp`,
    shadow: "dark",
    mockupClassName: "relative -bottom-[11%] min-w-[106%]",
  },
  {
    href: "/work/boston-dynamics",
    logo: `${CDN}/667c89d761ced58af17b9c63_Frame%201410125569%20(1).svg`,
    logoAlt: "Boston Dynamics logo",
    description:
      "A futuristic and bold redesign and brand overhaul for an innovative robotics company, Boston Dynamics.",
    mockup: `${CDN}/667c89a96f19380105811888_Group%201410126274%20(1).webp`,
    mockupAlt: "Boston Dynamics website design on laptop",
    mobileMockup: `${CDN}/667c89a65ba9a9a800bcef15_Group%202.webp`,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/1dslmlok8shp1km1wr6lu/Boston-Dynamics-Vertical-__94pct_smaller.mp4?rlkey=bgp813xim18djired1jlu1qpw&st=0duzlwkx&dl=0",
    backgroundImage: `${CDN}/667c89c4db25eb41fe174420_Frame%201410126656.webp`,
    shadow: "navy",
    mockupClassName: "relative -bottom-[11%] min-w-[106%]",
  },
];

const CARD_WIDTH =
  "w-[calc((100vw-3rem-0.75rem)/1.1)] min-[480px]:max-md:w-[calc((100vw-4rem-0.75rem)/1.5)] md:max-lg:w-[calc((100vw-3.125rem-1.5rem)/1.8)] lg:w-[412px]";

const CARD_HEIGHT =
  "h-[500px] max-h-none md:h-[600px] md:max-h-[62vw] lg:max-h-[56vw]";

export function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const [thumbWidth, setThumbWidth] = useState(100);
  const [thumbLeft, setThumbLeft] = useState(0);

  const updateScrollbar = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const ratio = el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1;
    const width = max > 0 ? Math.max(ratio * 100, 12) : 100;
    const progress = max > 0 ? el.scrollLeft / max : 0;
    const left = max > 0 ? progress * (100 - width) : 0;

    setThumbWidth(width);
    setThumbLeft(left);
  }, []);

  const onScroll = useCallback(() => {
    updateScrollbar();
  }, [updateScrollbar]);

  const scrollToProgress = useCallback((progress: number) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollLeft = Math.max(0, Math.min(max, progress * max));
  }, []);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 452, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    updateScrollbar();

    const observer = new ResizeObserver(updateScrollbar);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateScrollbar]);

  const handleScrollbarPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const bar = scrollbarRef.current;
    const el = trackRef.current;
    if (!bar || !el) return;

    const rect = bar.getBoundingClientRect();
    const clickProgress = (event.clientX - rect.left) / rect.width;
    const max = el.scrollWidth - el.clientWidth;
    const thumbWidthPx = (thumbWidth / 100) * rect.width;
    const thumbLeftPx = (thumbLeft / 100) * rect.width;
    const isThumb =
      event.clientX >= rect.left + thumbLeftPx &&
      event.clientX <= rect.left + thumbLeftPx + thumbWidthPx;

    dragState.current = {
      active: isThumb,
      startX: event.clientX,
      startScrollLeft: el.scrollLeft,
    };

    if (!isThumb) {
      scrollToProgress(clickProgress);
    }

    bar.setPointerCapture(event.pointerId);
  };

  const handleScrollbarPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!dragState.current.active) return;

    const bar = scrollbarRef.current;
    const el = trackRef.current;
    if (!bar || !el) return;

    const rect = bar.getBoundingClientRect();
    const max = el.scrollWidth - el.clientWidth;
    const thumbTravel = rect.width * (1 - thumbWidth / 100);
    if (thumbTravel <= 0) return;

    const deltaX = event.clientX - dragState.current.startX;
    const scrollDelta = (deltaX / thumbTravel) * max;
    el.scrollLeft = Math.max(
      0,
      Math.min(max, dragState.current.startScrollLeft + scrollDelta),
    );
  };

  const handleScrollbarPointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    dragState.current.active = false;
    scrollbarRef.current?.releasePointerCapture(event.pointerId);
  };

  return (
    <section
      id="work"
      className="relative w-full overflow-x-clip py-16 md:py-24"
      aria-label="Featured projects"
    >
      <div className="mx-auto w-full max-w-[1160px] px-6 min-[480px]:px-8 md:px-[50px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <SectionLabel>Featured projects</SectionLabel>
          <div className="flex items-center gap-4">
            <GradientButton href="/work" variant="outline" className="px-5">
              Recent Projects
            </GradientButton>
            <div className="hidden gap-2 sm:flex">
              <CarouselArrow direction="left" onClick={() => scrollBy(-1)} />
              <CarouselArrow direction="right" onClick={() => scrollBy(1)} />
            </div>
          </div>
        </div>
      </div>

      <Reveal className="mt-10">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="featured-projects-track flex w-full gap-3 overflow-x-auto pb-4 [scrollbar-width:none] max-md:snap-x max-md:snap-mandatory min-[480px]:gap-6 md:gap-6 lg:gap-10 [&::-webkit-scrollbar]:hidden"
        >
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.href} study={study} />
          ))}
          <ViewMoreCard />
        </div>
      </Reveal>

      <div className="mx-auto w-full max-w-[1160px] px-6 min-[480px]:px-8 md:px-[50px]">
        <div
          ref={scrollbarRef}
          role="scrollbar"
          aria-controls="work"
          aria-valuenow={Math.round(thumbLeft)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="relative mx-auto mt-8 hidden h-16 w-full max-w-[496px] cursor-pointer touch-none select-none lg:block"
          onPointerDown={handleScrollbarPointerDown}
          onPointerMove={handleScrollbarPointerMove}
          onPointerUp={handleScrollbarPointerUp}
          onPointerCancel={handleScrollbarPointerUp}
        >
          <div className="absolute top-0 h-1.5 w-full rounded-full bg-[#F2F2F2]" />
          <div
            className="absolute top-0 h-1.5 rounded-full bg-primary-blue transition-[left,width] duration-150 ease-out"
            style={{
              left: `${thumbLeft}%`,
              width: `${thumbWidth}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
  };

  const handleLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <Link
      href={study.href}
      className={`group relative block shrink-0 max-md:snap-start ${CARD_WIDTH}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={`pointer-events-none absolute inset-[70px_-70px_-70px_70px] -z-10 opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden
      />

      <div
        className={`relative w-full overflow-hidden rounded-[20px] perspective-[1000px] ${CARD_HEIGHT}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-200 group-hover:opacity-0"
          style={{
            backgroundImage: `url('${study.backgroundImage}')`,
            backgroundColor: study.backgroundColor,
          }}
          aria-hidden
        />

        {study.video && (
          <div className="pointer-events-none absolute inset-0 z-[3] hidden opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 lg:block">
            <video
              ref={videoRef}
              className="absolute inset-0 size-full object-cover"
              muted
              loop
              playsInline
              preload="true"
            >
              <source src={study.video} type="video/mp4" />
            </video>
          </div>
        )}

        <div className="relative z-[2] flex h-full w-full flex-col transition-opacity duration-200 ease-out group-hover:pointer-events-none group-hover:opacity-0">
          <div className="relative z-[1] px-6 pt-10 max-lg:px-10 lg:px-12">
            <div className="mb-6 h-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.logo}
                alt={study.logoAlt}
                className="h-full max-w-[75%] object-contain object-left"
              />
            </div>
            <div className="mb-12 md:mb-20">
              <p className="max-w-[440px] text-base leading-[1.5] text-white/72 md:text-[17px] text-white">
                {study.description}
              </p>
            </div>
          </div>

          <div className="relative mt-auto flex w-[97%] items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.mockup}
              alt={study.mockupAlt}
              className={
                study.mockupClassName ?? "relative -bottom-[11%] min-w-[106%]"
              }
            />
            {study.mobileMockup && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={study.mobileMockup}
                alt=""
                className="absolute bottom-0 right-0 w-[162px]"
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function ViewMoreCard() {
  return (
    <Link
      href="/work"
      className={`group relative block shrink-0 max-md:snap-start ${CARD_WIDTH}`}
    >
      <div
        className={`relative flex w-full flex-col overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat text-center text-white ${CARD_HEIGHT}`}
        style={{
          backgroundImage: `url('${CDN}/6a0cddd9cc098403f8167c91_case%20study%20card%20(2).avif')`,
        }}
      >
        <div className="relative z-[2] flex flex-1 flex-col items-center px-6 pt-16 max-lg:px-10 lg:px-12">
          <div className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN}/667c8dcc8550c9289917c4eb_Book%20a%20pro%2C%20get%20phot.webp`}
              alt="100+ design projects"
              width={115}
              className="mx-auto"
            />
          </div>
          <div className="mb-10">
            <p className="text-[17px] leading-[1.5] text-white/72">
              Design Projects
            </p>
          </div>
          <span className="relative inline-flex min-h-[50px] items-center overflow-hidden rounded-pill border border-white/30 px-7 text-[15px] font-semibold uppercase tracking-[1.17px] transition-colors group-hover:border-white/60">
            View MORE WORK
          </span>
        </div>

        <div className="relative z-[2] mt-auto flex w-full items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CDN}/6a0cddd9e2372a0c70b94a84_Group%201171277177.avif`}
            alt="Design project mockups"
            className="relative -bottom-10 w-[90%]"
          />
        </div>
      </div>
    </Link>
  );
}

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous projects" : "Next projects"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-blue bg-white text-ink transition hover:border-primary-blue hover:bg-primary-blue hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
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
