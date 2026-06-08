import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { SolutionsList } from "@/components/sections/SolutionsList";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Comparison } from "@/components/sections/Comparison";
import { TeamTeaser } from "@/components/sections/TeamTeaser";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ReachSection } from "@/components/sections/ReachSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SolutionsList />
      <StatsBand />
      <ServicesGrid />
      <DashboardShowcase />
      <ProcessTimeline />
      <Comparison />
      <TeamTeaser />
      <CaseStudies />
      <IndustriesGrid />
      <ReachSection />
      <FAQ />
      <ContactCTA />
    </>
  );
}
