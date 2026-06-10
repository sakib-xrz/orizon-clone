import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ShowreelVideo } from "@/components/sections/ShowreelVideo";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Engagements } from "@/components/sections/Engagements";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutCards } from "@/components/sections/AboutCards";
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
        <ShowreelVideo />
        <LogoStrip />
        <FeaturedProjects />
        <Engagements />
        <Testimonials />
        <AboutCards />
        <Services />
        <ServiceTags />
        {/* <DeepUx />
        <TrustedBy />
        <CtaSection /> */}
      </main>
      <Footer />
    </>
  );
}
