import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Engagements } from "@/components/sections/Engagements";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyOrizon } from "@/components/sections/WhyOrizon";
import { GetThingsDone } from "@/components/sections/GetThingsDone";
import { PeopleLove } from "@/components/sections/PeopleLove";
import { Services } from "@/components/sections/Services";
import { ServiceTags } from "@/components/sections/ServiceTags";
import { DeepUx } from "@/components/sections/DeepUx";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <LogoStrip />
        <FeaturedProjects />
        <Engagements />
        <Testimonials />
        <WhyOrizon />
        <GetThingsDone />
        <PeopleLove />
        <Services />
        <ServiceTags />
        <DeepUx />
        <TrustedBy />
        <CtaSection /> */}
      </main>
      <Footer />
    </>
  );
}
