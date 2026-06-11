import { Reveal } from "@/components/ui/Reveal";

const COL_A = [
  "Branding & Visual Identity",
  "Mobile App & Web Design",
  "User Experience Design",
  "Marketing",
  "Design Systems",
  "Website Development",
  "Blockchain / Decentralized Platforms",
];

const COL_B = [
  "Wireframing & User Testing",
  "Strategy & Design",
  "Prototyping",
  "E-commerce & Shopify",
  "CRM, CMS, Web Apps",
  "Web 3.0 Design",
  "Audit",
];

const COL_C = [
  "App Development",
  "Animation & Motion Design",
  "Accessibility",
  "AI design",
  "AR, XR Design",
  "SaaS",
];

function Col({
  items,
  children,
}: {
  items: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="w-[260px] max-w-[80vw] flex-none md:w-auto md:max-w-none">
      <ul className="flex h-full flex-col gap-4 rounded-[20px] bg-white/[0.04] px-6 py-8 lg:gap-6 lg:bg-transparent lg:p-0">
        {items.map((item) => (
          <li
            key={item}
            className="text-[16px] leading-6 text-white/90 lg:text-[18px] lg:leading-9"
          >
            {item}
          </li>
        ))}
        {children}
      </ul>
    </div>
  );
}

function AskUsIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <rect width="36" height="36" rx="18" className="fill-primary-blue" />
      <path
        d="M19.8695 14.9525L13.548 14.9525L13.548 13.2861H22.7144V22.4526L21.048 22.4526L21.048 16.131L13.8756 23.3035L12.6971 22.125L19.8695 14.9525Z"
        className="fill-ink"
      />
    </svg>
  );
}

export function ServiceTags() {
  return (
    <section className="w-full overflow-x-clip pb-16 lg:mx-auto lg:max-w-[1200px] lg:px-8">
      <Reveal>
        <div className="flex items-stretch gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:px-6 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible lg:flex lg:justify-between lg:gap-6 lg:rounded-[20px] lg:bg-white/[0.04] lg:p-11 lg:px-11 [&::-webkit-scrollbar]:hidden">
          <Col items={COL_A} />
          <Col items={COL_B} />
          <Col items={COL_C}>
            <li className="flex items-center text-[16px] leading-6 text-white/90 lg:text-[18px] lg:leading-9">
              <span>
                Don&apos;t see it?{" "}
                <a
                  href="mailto:info@maxverse.com?subject=Questions%20on%20additional%20services"
                  className="font-semibold text-primary-blue transition-opacity hover:opacity-80"
                >
                  Ask us
                </a>
              </span>
              <a
                href="mailto:info@maxverse.com?subject=Questions%20on%20additional%20services"
                className="flex h-8 items-center pl-3 transition-opacity hover:opacity-80"
                aria-label="Email us about additional services"
              >
                <AskUsIcon />
              </a>
            </li>
          </Col>
        </div>
      </Reveal>
    </section>
  );
}
