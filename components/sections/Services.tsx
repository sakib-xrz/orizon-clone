"use client";

import { useEffect, useRef, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { Reveal } from "@/components/ui/Reveal";

const CDN = "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972";

const BG = {
  uiux: `${CDN}/66aa806598a82fb9e8f4e6f3_Frame%201160444057%20(1).webp`,
  landing: `${CDN}/66aa88c1658b54524b675687_Frame%201410126859.webp`,
  ai: `${CDN}/69dcda65a6dee422bca89a2e_Frame%201160444058.svg`,
  spatial: `${CDN}/66ab5d886450c857796a7fd6_Frame%201160444057%20(2).webp`,
  mobileApp: `${CDN}/66b0dff02751d24666632392_Frame%201160444084.webp`,
  designSystem: `${CDN}/66ab63491ea1c5be06cfaf5a_Frame%201410126864.webp`,
  web3: `${CDN}/66ab653dd932d780c0e1d9f2_Frame%201160444057%20(3).webp`,
  more: `${CDN}/66b0e5d01952090c96609796_Frame%201160444058%20(1).webp`,
};

const IMG = {
  uiux: `${CDN}/66aa7f70a653928a8a9d8c49_Mask%20group.webp`,
  landingLaptop: `${CDN}/66aa85b7492240421f72212b_Frame%201410126866%20(1).webp`,
  landingMobile: `${CDN}/66aa85c5c675b703f9e426a3_Frame%201410126866.webp`,
  aiSphere: `${CDN}/66ab5563a7787080ec83a679_Frame%201410126866%20(2).webp`,
  spatial: `${CDN}/66ab5d1bcaddd370ddece794_Frame%201410126867.webp`,
  mobileApp: `${CDN}/66b0dfb8ca69eece16097de7_Frame%201410127001.webp`,
  bottle: `${CDN}/66ab627602bb6b59902dd899_WaterBottleMockup008%201.webp`,
  designSystem: `${CDN}/69ce2b26afb16c19eb95bbe6_a.avif`,
  web3: `${CDN}/66ab64dd7db80d5f38302094_Group%201160443893.webp`,
};

const MORE_IMAGES = [
  `${CDN}/66b0e7550fd14210f94ae6e6_Frame%201410127005%20(2).webp`,
  `${CDN}/66b0e7979d57262d2564f3a3_Frame%201410127005%20(3).webp`,
  `${CDN}/66b0e7d81bec51fe9a16684d_Frame%201410127005%20(4).webp`,
  `${CDN}/66b0e6d6a51f637eb02ac643_Frame%201410127005%20(1).webp`,
];

const bgImage = (src: string) => `url("${src}")`;

const BIG_CARD =
  "relative z-[1] flex w-[300px] flex-none flex-col overflow-hidden rounded-[20px] bg-cover bg-no-repeat text-white md:w-[420px]";

const SMALL_CARD =
  "relative z-[1] flex min-h-[194px] items-center justify-end overflow-hidden rounded-[20px] bg-cover bg-no-repeat py-8 pr-6 text-white md:min-h-[254px] md:py-12 md:pr-10";

function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mb-1.5 text-[20px] font-semibold leading-8 tracking-[-0.5px] md:mb-2 md:text-[30px] md:leading-[1.2] ${className}`}
    >
      {children}
    </h3>
  );
}

function CardDesc({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[14px] leading-[1.5] text-white/80 md:text-base ${className}`}>
      {children}
    </p>
  );
}

/* --------------------------------- big cards --------------------------------- */

function CardUiUx() {
  return (
    <a
      href="#services"
      className={`${BIG_CARD} justify-between shadow-[17px_17px_40px_1px_rgba(125,64,164,0.2)] md:w-[440px] md:shadow-[34px_34px_60px_1px_rgba(125,64,164,0.2)]`}
      style={{ backgroundColor: "#21113a", backgroundImage: bgImage(BG.uiux) }}
    >
      <div className="relative z-[2] px-6 pt-10 md:px-12 md:pt-11">
        <CardTitle>UI/UX Design</CardTitle>
        <CardDesc className="max-w-[300px]">
          Design experiences that feel effortless, premium, and built to win
          loyalty.
        </CardDesc>
      </div>
      <div className="relative">
        <img
          src={IMG.uiux}
          alt="A modern website design for Vivodyne shown on a laptop"
          className="relative -bottom-[10%] left-[-5%] min-w-[110%] max-w-[110%] object-cover"
          loading="lazy"
        />
      </div>
    </a>
  );
}

function CardSpatial() {
  return (
    <a
      href="#services"
      className={`${BIG_CARD} justify-between pt-3.5 shadow-[17px_17px_40px_1px_rgba(88,74,62,0.2)] md:shadow-[34px_34px_60px_1px_rgba(88,74,62,0.2)]`}
      style={{
        backgroundColor: "#17110d",
        backgroundImage: bgImage(BG.spatial),
        backgroundPosition: "50% 0",
      }}
    >
      <div className="relative">
        <img
          src={IMG.spatial}
          alt="A group of people collaborating on a video call in a spatial computing headset"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative z-[2] px-6 pb-8 pt-6 md:px-12 md:pb-12">
        <CardTitle>Spatial Computing Design, 3D &amp; AR</CardTitle>
        <CardDesc>
          Bring 3D and AR to life through experiences that feel fluid and real.
        </CardDesc>
      </div>
    </a>
  );
}

function CardMobileApp() {
  return (
    <a
      href="#services"
      className={`${BIG_CARD} justify-between shadow-[17px_17px_40px_1px_rgba(48,86,202,0.2)] md:shadow-[34px_34px_60px_1px_rgba(48,86,202,0.2)]`}
      style={{ backgroundColor: "#2458e8", backgroundImage: bgImage(BG.mobileApp) }}
    >
      <div className="relative z-[2] px-6 pt-10 md:px-12 md:pt-11">
        <CardTitle>Mobile App Design</CardTitle>
        <CardDesc className="max-w-[300px]">
          Beautiful mobile apps that drive engagement, trust, and everyday
          habit.
        </CardDesc>
      </div>
      <div className="relative">
        <img
          src={IMG.mobileApp}
          alt="Two iPhones displaying the same app interface side by side"
          className="relative -bottom-6 left-[-5%] min-w-[110%] max-w-[110%] object-cover"
          loading="lazy"
        />
      </div>
    </a>
  );
}

function CardWeb3() {
  return (
    <a
      href="#services"
      className={`${BIG_CARD} shadow-[17px_17px_40px_1px_rgba(103,103,111,0.2)] md:shadow-[34px_34px_60px_1px_rgba(103,103,111,0.2)]`}
      style={{ backgroundColor: "#22232b", backgroundImage: bgImage(BG.web3) }}
    >
      <div className="relative z-[2] px-6 pt-10 md:px-12 md:pt-11">
        <CardTitle>Web 3.0 Design &amp; NFTs</CardTitle>
        <CardDesc className="max-w-[300px]">
          From wallets to dApps, we make blockchain experiences feel intuitive
          and premium.
        </CardDesc>
      </div>
      <div className="absolute inset-x-0 bottom-10 md:bottom-20">
        <img
          src={IMG.web3}
          alt="Three iPhones displaying web 3.0 application interfaces"
          className="relative left-[-5%] min-w-[110%] max-w-[110%] object-cover"
          loading="lazy"
        />
      </div>
    </a>
  );
}

function CardEvenMore() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIdx((i) => (i + 1) % MORE_IMAGES.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <a
      href="#services"
      className={`${BIG_CARD} items-center text-center shadow-[17px_17px_40px_1px_rgba(2,2,2,0.2)] md:shadow-[34px_34px_60px_1px_rgba(2,2,2,0.2)]`}
      style={{
        backgroundColor: "#020202",
        backgroundImage: bgImage(BG.more),
        backgroundPosition: "50% 0",
      }}
    >
      <div className="relative z-[2] flex flex-col items-center px-6 pt-10 md:px-12 md:pt-11">
        <CardTitle>And even more...</CardTitle>
        <CardDesc className="mb-8 md:mb-10">
          Services tailored for your specific needs.
        </CardDesc>
        <span className="inline-flex min-h-[46px] items-center rounded-pill border border-white/30 px-6 text-[13px] font-semibold uppercase tracking-[1.17px] transition-colors hover:border-white/60 md:min-h-[50px] md:px-7 md:text-[15px]">
          View all services
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-auto">
        {MORE_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="A product designed by MaxVerse"
            className={`bottom-[-24px] left-[-5%] min-w-[110%] max-w-[110%] object-cover transition-opacity duration-700 ${
              i === activeIdx ? "relative opacity-100" : "absolute opacity-0"
            }`}
            style={i === activeIdx ? undefined : { bottom: "-24px" }}
            loading="lazy"
          />
        ))}
      </div>
    </a>
  );
}

/* -------------------------------- small cards -------------------------------- */

function CardLanding() {
  return (
    <a
      href="#services"
      className={`${SMALL_CARD} shadow-[17px_17px_30px_1px_rgba(105,31,116,0.25)] md:shadow-[34px_34px_60px_1px_rgba(82,63,195,0.2)]`}
      style={{ backgroundColor: "#523fc3", backgroundImage: bgImage(BG.landing) }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMG.landingLaptop}
          alt=""
          className="absolute bottom-[-7%] left-[-7%] h-[105%] w-auto max-w-none object-cover"
          loading="lazy"
        />
        <img
          src={IMG.landingMobile}
          alt=""
          className="absolute left-[-8%] top-[5%] z-[2] h-[75%] w-auto max-w-none object-cover md:h-full"
          loading="lazy"
        />
      </div>
      <div className="relative z-[3] w-[62%]">
        <CardTitle>Landing Page Design</CardTitle>
        <CardDesc>
          Turn first impressions into momentum with landing pages built to
          convert.
        </CardDesc>
      </div>
    </a>
  );
}

function CardAi() {
  return (
    <a
      href="#services"
      className={`${SMALL_CARD} shadow-[17px_17px_30px_1px_rgba(10,53,127,0.2)] md:shadow-[34px_34px_60px_1px_rgba(206,79,148,0.2)]`}
      style={{
        backgroundColor: "#ce4f94",
        backgroundImage: bgImage(BG.ai),
        backgroundPosition: "0%",
      }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMG.aiSphere}
          alt=""
          className="h-full w-auto max-w-none object-contain md:object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative z-[3] w-[62%]">
        <CardTitle>Design for AI, LLMs, NLP</CardTitle>
        <CardDesc className="max-w-[305px]">
          Design AI experiences that go far beyond chat and feel clear in
          context.
        </CardDesc>
      </div>
    </a>
  );
}

function CardBranding() {
  return (
    <a
      href="#services"
      className={`${SMALL_CARD} bg-black shadow-[17px_17px_30px_1px_rgba(10,53,127,0.2)] md:shadow-[34px_34px_60px_1px_rgba(0,0,0,0.2)]`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMG.bottle}
          alt=""
          className="absolute left-[-6%] top-1/2 h-[120%] w-auto max-w-none -translate-y-1/2 object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative z-[3] w-[58%]">
        <CardTitle>Branding &amp; Identity</CardTitle>
        <CardDesc>
          Build a brand people recognize, remember, and want to be part of.
        </CardDesc>
      </div>
    </a>
  );
}

function CardDesignSystem() {
  return (
    <a
      href="#services"
      className={`${SMALL_CARD} shadow-[17px_17px_30px_1px_rgba(10,53,127,0.2)] md:shadow-[34px_34px_60px_1px_rgba(47,77,184,0.2)]`}
      style={{
        backgroundColor: "#2f4db8",
        backgroundImage: bgImage(BG.designSystem),
        backgroundPosition: "0 0",
      }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMG.designSystem}
          alt=""
          className="h-full w-full object-cover object-left"
          loading="lazy"
        />
      </div>
      <div className="relative z-[3] w-[58%]">
        <CardTitle className="md:whitespace-nowrap">
          Design System &amp; UI Kit
        </CardTitle>
        <CardDesc className="max-w-[305px]">
          Scale faster with token-driven systems built for consistency and
          flexibility.
        </CardDesc>
      </div>
    </a>
  );
}

function StackedPair({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-[86vw] max-w-[460px] flex-none grid-rows-2 gap-5 md:w-[560px] md:max-w-none md:gap-10">
      {children}
    </div>
  );
}

/* ---------------------------------- arrows ---------------------------------- */

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
      aria-label={direction === "left" ? "Previous services" : "Next services"}
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

/* ---------------------------------- section ---------------------------------- */

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="w-full overflow-x-clip pt-20 lg:pt-28"
      aria-label="What we excel at"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-heading-gradient bg-clip-text text-transparent">
              What
            </span>
            <br className="hidden sm:block" /> we excel at
          </h2>
          <div className="flex items-center gap-4">
            <GradientButton href="#services" variant="outline" className="px-5">
              View all services
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
          className="flex w-full items-stretch gap-5 overflow-x-auto pb-16 pl-5 pr-5 [scrollbar-width:none] sm:pl-6 sm:pr-6 md:gap-10 lg:pb-24 lg:pl-[max(2rem,calc((100vw-1136px)/2))] lg:pr-[max(2rem,calc((100vw-1136px)/2))] [&::-webkit-scrollbar]:hidden"
        >
          <CardUiUx />
          <StackedPair>
            <CardLanding />
            <CardAi />
          </StackedPair>
          <CardSpatial />
          <CardMobileApp />
          <StackedPair>
            <CardBranding />
            <CardDesignSystem />
          </StackedPair>
          <CardWeb3 />
          <CardEvenMore />
        </div>
      </Reveal>
    </section>
  );
}
