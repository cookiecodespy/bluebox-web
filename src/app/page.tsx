import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CaseStudies />
      <IndustriesGrid />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
