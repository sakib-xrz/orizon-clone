import { LogoCarouselLottie } from "@/components/ui/LogoCarouselLottie";
import { Reveal } from "@/components/ui/Reveal";

const BY_GRADIENT =
  'url("https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972/696e706420dc45f15268b34d_Group%202147261870%20(1).svg")';

export function TrustedBy() {
  return (
    <section
      id="home-clients-trusted"
      className="mx-auto w-full max-w-[1200px] px-5 pb-16 pt-20 sm:px-6 md:px-8 lg:px-[50px] lg:pb-20 lg:pt-40 xl:px-[60px]"
      aria-label="Trusted by awesome clients"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10">
        <h2 className="text-[38px] font-semibold leading-[1.1] tracking-[-0.5px] sm:text-[44px] lg:text-[52px] lg:tracking-[-1px]">
          <span className="block">
            <span className="bg-heading-gradient bg-clip-text text-transparent">
              Trusted{" "}
            </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: BY_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "cover",
              }}
            >
              by
            </span>
          </span>
          <span className="block">awesome clients</span>
        </h2>
        <p className="text-base leading-[1.65] text-muted lg:text-[17px] lg:leading-[1.75]">
          Not to brag, but a lot of hot startups and market leaders reach out
          &amp; touch base to commission our work.
        </p>
      </div>

      <Reveal className="mt-10 md:mt-16 lg:mt-28">
        <div className="relative mx-auto w-full overflow-hidden">
          <LogoCarouselLottie
            variant="desktop"
            className="hidden w-[110%] min-w-[110%] -ml-[5%] md:block"
          />
          <LogoCarouselLottie
            variant="mobile"
            className="mx-auto w-full min-w-0 md:hidden sm:w-[120%] sm:min-w-[113%] sm:-ml-[6.5%]"
          />
        </div>
      </Reveal>
    </section>
  );
}
