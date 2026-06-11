import { GradientButton } from "@/components/ui/GradientButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const CDN = "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972";

const DASHBOARD = `${CDN}/69b146c3c47905cf3f2da901_1%20(7).avif`;
const WIREFRAME = `${CDN}/6926d80bdff0aa131b4313b0_Frame%202147230052.avif`;

function SectionHeading() {
  return (
    <>
      <h2 className="hidden text-[38px] font-semibold leading-[1.1] tracking-[-0.5px] sm:text-[44px] lg:block lg:text-[52px] lg:tracking-[-1px]">
        <span className="block text-white">
          From{" "}
          <span className="bg-heading-gradient bg-clip-text text-transparent">
            simple{" "}
          </span>
          <span className="bg-heading-gradient bg-clip-text text-transparent">
            apps{" "}
          </span>
          to
        </span>
        <span className="block text-white">enterprise-scale UX</span>
      </h2>

      <h2 className="text-[38px] font-semibold leading-[1.1] tracking-[-0.5px] sm:text-[44px] lg:hidden">
        <span className="block text-white">
          From{" "}
          <span className="bg-heading-gradient bg-clip-text text-transparent">
            Simple{" "}
          </span>
          <span className="bg-heading-gradient bg-clip-text text-transparent">
            Apps
          </span>
        </span>
        <span className="block text-white">To Enterprise-Scale UX</span>
      </h2>
    </>
  );
}

export function DeepUx() {
  return (
    <section
      className="mx-auto w-full max-w-[1200px] px-5 pb-16 pt-20 sm:px-6 md:px-8 lg:px-[50px] lg:pb-24 lg:pt-28 xl:px-[60px]"
      aria-label="Enterprise-scale UX"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10">
        <SectionHeading />
        <p className="text-base leading-[1.65] text-muted lg:text-[17px] lg:leading-[1.75]">
          We don&apos;t just create screens – we design experiences optimized
          for conversion and retention.
        </p>
      </div>

      <Reveal className="mt-10 lg:mt-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <article className="relative flex min-h-[360px] aspect-auto w-full max-w-none flex-col justify-start overflow-hidden rounded-[20px] bg-[#0f0928] p-6 sm:min-h-[400px] sm:p-8 lg:aspect-[764/400] lg:min-h-0 lg:max-w-[764px] lg:flex-[764] lg:pb-[68px] lg:pl-10 lg:pr-0 lg:pt-12">
            <div className="relative z-[2] flex w-full max-w-none flex-col lg:w-1/2 lg:max-w-[300px]">
              <SectionLabel light>Deep UX</SectionLabel>
              <h3 className="mt-6 text-[28px] font-medium leading-[1.2] tracking-[-0.04em] text-white lg:mt-7">
                Multi-tenant B2B, workflow-heavy, data-dense products
              </h3>
              <div className="mt-8 lg:mt-10">
                <GradientButton href="#contact">Contact us</GradientButton>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DASHBOARD}
                alt=""
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f0928_0%,transparent_62%)]" />
            </div>
          </article>

          <article className="relative aspect-[370/400] w-full max-w-none overflow-hidden rounded-[20px] bg-[#0a0820] md:h-[50vw] md:max-h-[420px] lg:aspect-[370/400] lg:h-auto lg:max-h-none lg:max-w-[370px] lg:flex-[370]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={WIREFRAME}
              alt="Flowchart-style wireframe layout for complex B2B product screens"
              className="absolute inset-0 h-full w-full object-cover object-[50%_100%]"
              loading="lazy"
            />
          </article>
        </div>
      </Reveal>
    </section>
  );
}
