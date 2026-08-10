import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LoveDesignSection } from "@/components/sections/LoveDesignSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { portfolioData } from "@/data/portfolio";
import MouseFollower from "@/components/shared/MouseFollower";

export default function Home() {
  return (
    <main className="portfolio-root">
      <MouseFollower />
      <HeroSection data={portfolioData.hero} />
      <QuoteSection data={portfolioData.quote} />
      <AboutSection data={portfolioData.about} />
      <ExperienceSection data={portfolioData.experience} />
      <WorksSection data={portfolioData.works} />
      <LoveDesignSection data={portfolioData.loveDesign} />
      <ContactSection data={portfolioData.contact} />
    </main>
  );
}
