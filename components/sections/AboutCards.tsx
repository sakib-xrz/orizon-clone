"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CDN = "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972";

const ASSETS = {
  card1Bg: `${CDN}/62bb5096f57e04850fee3e5e_Group%201160445006.svg`,
  teamPhoto: `${CDN}/64cd491f57f3906c23104aac_64c83dd4c24c55594ea64c51_Mask%20(17)%20(1).webp`,
  footerLogos: `${CDN}/62e951a7dda6203bae6145ac_Frame%201160444075%20(1).svg`,
  footerStats: `${CDN}/62e951a0b1925e83c615aa0b_Frame%201160444136.svg`,
  mobileLogos: `${CDN}/62bac7601ac79573d916aee7_Frame%201160444075.svg`,
  noMoney: `${CDN}/62e95521b1925ebf7815d220_no%20money.svg`,
  star: `${CDN}/62c3713a7865bc5006bf81fe_star.svg`,
  card3Bg: `${CDN}/62e42224686358f076a5588a_Frame%201160444085%20(1).jpg`,
  avatarBg: `${CDN}/62e86e6b2af9a97390ab261e_Group%201160445027.png`,
  tinderBadge: `${CDN}/62e878af6cfafa1f8fc32f9b_Frame%20116044987%20(2).svg`,
  avatar1: `${CDN}/62e866caff2ecd233b947518_ii_kjaipfng2%208%20(1).avif`,
  avatar2: `${CDN}/62e866cabdfe03bbcdc61be9_ii_kjaipfng2%207%20(1).avif`,
  avatar3: `${CDN}/62e868610208731b01198a29_ii_kjaipfng2%204%20(1).avif`,
  avatar4: `${CDN}/62e866c9273b5c8bf073d58f_ii_kjaipfng2%209%20(1).avif`,
  avatar5: `${CDN}/62e866c8ae45607bbd2f6df6_ii_kjaipfng2%2010%20(1).avif`,
};

const VIDEO_DESKTOP =
  "https://dl.dropboxusercontent.com/s/3yyyft54x7luwpa/Section2_1x_full%20%281%29%20%281%29.mp4?dl=0";
const VIDEO_MOBILE =
  "https://dl.dropboxusercontent.com/s/ai0ucj82qskb3wg/Section%202%20Blue%20Mobile%20%281%29.mp4?dl=0";

/* ---------------------------------- shared bits --------------------------------- */

function CardHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[38px] font-semibold leading-[1.15] tracking-[-0.5px] text-white sm:text-[44px] lg:text-[52px] lg:tracking-[-1px] xl:text-[60px] xl:tracking-[-1.5px] ${className}`}
    >
      {children}
    </h2>
  );
}

function ColTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mb-5 text-[22px] font-semibold leading-[1.4] text-white lg:mb-6 lg:text-[26px] ${className}`}
    >
      {children}
    </h3>
  );
}

function ColBody({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] leading-[1.5] text-white/65 lg:text-[17px]">
      {children}
    </p>
  );
}

/* ------------------------------- card 1: why maxverse ------------------------------ */

function CardWhyMaxVerse({ isStatic }: { isStatic?: boolean }) {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-[20px] bg-[#23184f] px-6 py-20 sm:px-10 lg:px-[60px] lg:pb-[18vh] lg:pt-[16vh]"
      style={{
        backgroundImage: `url(${ASSETS.card1Bg})`,
        backgroundPosition: "50% 100%",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1014px]">
        <div className="max-w-[440px]">
          <CardHeading>We are a design leader</CardHeading>
        </div>

        {/* team photo — top right on desktop, full width below heading on mobile */}
        <div className="relative mt-12 aspect-[2.1/1] w-full overflow-hidden rounded-[20px] lg:absolute lg:-top-14 lg:right-0 lg:mt-0 lg:aspect-auto lg:h-[200px] lg:w-[49%] lg:max-w-[469px]">
          <img
            src={ASSETS.teamPhoto}
            alt="The MaxVerse design team"
            className="absolute -left-[12%] top-0 h-[120%] w-[120%] max-w-none object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:mt-[clamp(80px,16vh,160px)] lg:grid-cols-2 lg:gap-x-20">
          <div>
            <ColTitle>Designing world-class products &amp; brands</ColTitle>
            <ColBody>
              We&apos;ve helped top startups and other enterprises turn their
              ideas and goals into refined products and brands that generate
              millions in revenue.
            </ColBody>
            <img
              src={ASSETS.mobileLogos}
              alt="Tinder, Kernel, Uber Eats, Love the sales logos"
              className="mt-10 w-full max-w-[420px] lg:hidden"
              loading="lazy"
            />
          </div>
          <div>
            <ColTitle>
              Pushing boundaries &amp; influencing designers everywhere
            </ColTitle>
            <ColBody>
              Our designs are inspiring millions of people across social media
              and product teams. We shape new trends and push the boundaries.
            </ColBody>
            <div className="mt-10 flex items-end gap-6 lg:hidden">
              <p className="flex items-end gap-1.5">
                <span className="text-[20px] font-semibold leading-[30px] text-white">
                  10M+
                </span>
                <span className="text-[16px] leading-[30px] text-white/65">
                  views
                </span>
              </p>
              <p className="flex items-end gap-1.5">
                <span className="text-[20px] font-semibold leading-[30px] text-white">
                  200k
                </span>
                <span className="text-[16px] leading-[30px] text-white/65">
                  followers
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* desktop footer: client logos + stats */}
      {!isStatic && (
        <div className="absolute inset-x-0 bottom-0 z-10 hidden px-[60px] lg:block">
          <div className="flex items-center justify-between gap-20 border-t border-[#a9aaee]/30 py-[clamp(20px,4vh,42px)]">
            <img
              src={ASSETS.footerLogos}
              alt="Tinder, Kernel, Uber Eats, Love the sales logos"
              className="w-[44%] max-w-[460px]"
              loading="lazy"
            />
            <img
              src={ASSETS.footerStats}
              alt="10M+ views, 200k followers"
              className="w-[27%] max-w-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- card 2: get things done --------------------------- */

function CardGetThingsDone({ isStatic }: { isStatic?: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-[20px] bg-[#2900d2] px-6 py-20 sm:px-10 lg:px-[60px] lg:pb-[18vh] lg:pt-[16vh]">
      {/* background videos */}
      <video
        className="absolute inset-0 z-0 hidden h-full w-full object-cover md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VIDEO_DESKTOP} type="video/mp4" />
      </video>
      <video
        className="absolute left-0 top-0 z-0 w-full md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VIDEO_MOBILE} type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto w-full max-w-[1014px]">
        <div className="max-w-[480px]">
          <CardHeading>We get things done, right &amp; fast</CardHeading>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-[clamp(80px,18vh,160px)] lg:grid-cols-3 lg:gap-x-12">
          <div>
            <ColTitle className="lg:max-w-[200px]">
              Fast-paced &amp; no bullshit
            </ColTitle>
            <ColBody>
              Forget a useless 80-slide presentation. We focus on design
              deliverables every week. And when we commit to a deadline, we
              make it happen. Always.
            </ColBody>
            <p className="mt-10 flex items-end gap-1.5 lg:hidden">
              <span className="text-[20px] font-semibold leading-[30px] text-white">
                2-3x
              </span>
              <span className="text-[16px] leading-[30px] text-white/65">
                faster than internal design teams
              </span>
            </p>
          </div>
          <div>
            <ColTitle>We make the complex simple</ColTitle>
            <ColBody>
              From neurotech companies to admin tools with intricate access
              policies, we understand your product and simplify it for the
              people who use it.
            </ColBody>
          </div>
          <div>
            <ColTitle>Flexible collaboration &amp; payments</ColTitle>
            <ColBody>
              Whether you&apos;re starting from scratch and need an autonomous
              team or are looking for staff augmentation with a lot of
              collaboration, we&apos;ve got you covered.
            </ColBody>
            <p className="mt-10 text-[16px] leading-[30px] text-white/65 lg:hidden">
              No big upfront payment. No commitment.
            </p>
          </div>
        </div>
      </div>

      {/* desktop footer */}
      {!isStatic && (
        <div className="absolute inset-x-0 bottom-0 z-10 hidden px-[60px] lg:block">
          <div className="flex items-center gap-10 border-t border-white/20 py-[clamp(20px,4vh,42px)]">
            <p className="flex items-end gap-1.5">
              <span className="text-[26px] font-semibold leading-[30px] text-white">
                2-3x
              </span>
              <span className="text-[17px] leading-[30px] text-white/65">
                faster than internal design teams
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <img
                src={ASSETS.noMoney}
                alt=""
                className="h-[22px] w-[22px]"
                loading="lazy"
              />
              <span className="text-[17px] leading-[30px] text-white/65">
                No big upfront payment. No commitment.
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------ card 3: people love ------------------------------ */

const AVATARS = [
  // matches live site positioning (% of cluster width)
  { src: ASSETS.avatar1, w: "26%", bottom: "22%", left: "49%", z: 3 },
  { src: ASSETS.avatar2, w: "15%", bottom: "38%", left: "30%", z: 1 },
  { src: ASSETS.avatar3, w: "10.5%", bottom: "75%", left: "40.5%", z: 1 },
  { src: ASSETS.avatar4, w: "18.5%", bottom: "46%", left: "76.5%", z: 1 },
  { src: ASSETS.avatar5, w: "10%", bottom: "82%", left: "67%", z: 1 },
];

function AvatarCluster() {
  return (
    <div className="relative mt-10 w-full lg:absolute lg:-top-20 lg:-right-[5%] lg:mt-0 lg:w-[70%] lg:max-w-[710px]">
      <img
        src={ASSETS.avatarBg}
        alt=""
        className="relative z-[2] w-full"
        loading="lazy"
      />
      <img
        src={ASSETS.tinderBadge}
        alt="Tinder logo"
        className="absolute z-[6] max-w-[18%]"
        style={{ bottom: "24%", left: "66%" }}
        loading="lazy"
      />
      {AVATARS.map((a, i) => (
        <div
          key={i}
          className="absolute overflow-hidden rounded-full"
          style={{
            width: a.w,
            paddingBottom: a.w,
            bottom: a.bottom,
            left: a.left,
            zIndex: a.z,
          }}
        >
          <img
            src={a.src}
            alt="A photograph of a happy client"
            className="absolute bottom-0 -left-[10%] min-w-[120%] max-w-[120%] object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function CardPeopleLove() {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-[20px] bg-[#32929d] px-6 py-20 sm:px-10 lg:px-[60px] lg:pb-[18vh] lg:pt-[16vh]"
      style={{
        backgroundImage: `url(${ASSETS.card3Bg})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1014px]">
        <div className="max-w-[480px]">
          <CardHeading>People love working with us</CardHeading>
        </div>

        <AvatarCluster />

        <div className="mt-16 grid gap-12 lg:mt-[clamp(80px,18vh,160px)] lg:grid-cols-3 lg:gap-x-12">
          <div>
            <ColTitle>
              &ldquo;Meeting with MaxVerse was our favorite part of the
              week!&rdquo;
            </ColTitle>
            <ColBody>
              We do hear that a lot. And we can&apos;t wait to make you feel
              the same way.
            </ColBody>
          </div>
          <div>
            <ColTitle>
              4.9{" "}
              <img
                src={ASSETS.star}
                alt="White star icon"
                className="inline-block h-[22px] w-[22px] -translate-y-0.5"
                loading="lazy"
              />{" "}
              That&apos;s what we call a stellar reputation
            </ColTitle>
            <ColBody>
              No one&apos;s perfect and that&apos;s okay. With 400+ projects
              under our belt, we&apos;ve worked with incredible teams and built
              fantastic relationships.
            </ColBody>
          </div>
          <div>
            <ColTitle>
              Committed to putting a smile on people&apos;s faces
            </ColTitle>
            <ColBody>
              This is our mission. We put our all into every projects because
              knowing we&apos;ve made a positive impact is the best feeling in
              the world.
            </ColBody>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- sticky stack shell ------------------------------ */

function StickyCard({
  y,
  zIndex,
  children,
}: {
  y?: MotionValue<string>;
  zIndex: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ y, zIndex, willChange: "transform" }}
    >
      <div className="h-full w-[90%] max-w-[1294px]">{children}</div>
    </motion.div>
  );
}

export function AboutCards() {
  const stackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0.06, 0.48], ["0%", "-112%"]);
  const y2 = useTransform(scrollYProgress, [0.52, 0.94], ["0%", "-112%"]);

  return (
    <section className="relative pt-16 lg:pt-24">
      <div className="mx-auto mb-8 w-[90%] max-w-[1294px]">
        <SectionLabel>Why MaxVerse</SectionLabel>
      </div>

      {/* desktop: sticky stacked cards revealed on scroll */}
      <div ref={stackRef} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <StickyCard y={y1} zIndex={30}>
            <CardWhyMaxVerse />
          </StickyCard>
          <StickyCard y={y2} zIndex={20}>
            <CardGetThingsDone />
          </StickyCard>
          <StickyCard zIndex={10}>
            <CardPeopleLove />
          </StickyCard>
        </div>
      </div>

      {/* mobile / tablet: simple stacked cards */}
      <div className="mx-auto w-full space-y-5 px-5 sm:px-6 lg:hidden">
        <CardWhyMaxVerse isStatic />
        <CardGetThingsDone isStatic />
        <CardPeopleLove />
      </div>
    </section>
  );
}
