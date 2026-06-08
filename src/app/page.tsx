import { Hero } from "@/components/sections/Hero";
import { LogosBand } from "@/components/sections/LogosBand";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";
import { SolutionsList } from "@/components/sections/SolutionsList";
import { WhyUs } from "@/components/sections/WhyUs";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { OrgRoles } from "@/components/sections/OrgRoles";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { Comparison } from "@/components/sections/Comparison";
import { Guarantees } from "@/components/sections/Guarantees";
import { TeamTeaser } from "@/components/sections/TeamTeaser";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ReachSection } from "@/components/sections/ReachSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogosBand />
      <Marquee />
      <Manifesto />
      <SolutionsList />
      <WhyUs />
      <StatsBand />
      <ServicesGrid />
      <EngagementModels />
      <DashboardShowcase />
      <OrgRoles />
      <ProcessTimeline />
      <TechStackSection />
      <Comparison />
      <Guarantees />
      <TeamTeaser />
      <CaseStudies />
      <IndustriesGrid />
      <ReachSection />
      <Testimonials />
      <InsightsTeaser />
      <FAQ />
      <ContactCTA />
    </>
  );
}
