"use client";

import { LogoCarouselLottie } from "@/components/ui/LogoCarouselLottie";

export function LogoStrip() {
  return (
    <section
      id="home-clients"
      className="relative mx-auto w-full max-w-[1440px]"
      aria-label="Trusted by"
    >
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="relative mx-auto w-full overflow-hidden">
            <LogoCarouselLottie
              variant="desktop"
              className="hidden w-[110%] min-w-[110%] -ml-[5%] md:block"
            />
            <LogoCarouselLottie variant="mobile" className="w-full md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
