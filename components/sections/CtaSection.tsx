"use client";

import { GradientButton } from "@/components/ui/GradientButton";
import { Reveal } from "@/components/ui/Reveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CDN = "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972";

const VIDEO_POSTER = `${CDN}/69c2b62af714083e2b66a658_Orizon-UXMiniShowreel-optimized_poster.0000000.jpg`;
const VIDEO_MP4 = `${CDN}/69c2b62af714083e2b66a658_Orizon-UXMiniShowreel-optimized_mp4.mp4`;
const VIDEO_WEBM = `${CDN}/69c2b62af714083e2b66a658_Orizon-UXMiniShowreel-optimized_webm.webm`;

export function CtaSection() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 md:px-8 lg:px-[50px] lg:py-[120px] xl:px-[60px]"
    >
      <Reveal>
        <div className="flex flex-col-reverse items-center gap-8 overflow-hidden rounded-[28px] border border-white/10 bg-navy-800 p-5 sm:p-6 lg:flex-row lg:justify-between lg:gap-8 lg:p-8">
          <div className="flex w-full max-w-[20rem] flex-col items-center gap-8 text-center lg:max-w-[20rem] lg:items-start lg:gap-10 lg:text-left">
            <div className="flex flex-col gap-4 lg:gap-5">
              <h2 className="text-[38px] font-semibold leading-[1.1] tracking-[-0.5px] text-white sm:text-[44px] lg:text-[52px] lg:tracking-[-1px]">
                Let&apos;s{" "}
                <span className="bg-heading-gradient bg-clip-text text-transparent">
                  talk
                </span>
              </h2>
              <p className="text-base leading-[1.65] text-muted lg:text-[17px] lg:leading-[1.75]">
                Design done right and fast by people you can trust.
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:items-start">
              <GradientButton
                href="#contact"
                media={isMobile ? "arrow" : "avatars"}
              >
                Contact Us
              </GradientButton>

              <p className="font-hand text-lg text-muted/90">
                * We also get booked fast 🔥
              </p>
            </div>
          </div>

          <div className="relative z-[2] w-full max-w-[43.1rem] overflow-hidden rounded-[20px]">
            <div className="relative aspect-[16/10] w-full sm:aspect-auto sm:h-[57vw] sm:max-h-[420px] lg:aspect-[16/10] lg:h-auto lg:max-h-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={VIDEO_POSTER}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={VIDEO_MP4} type="video/mp4" />
                <source src={VIDEO_WEBM} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
