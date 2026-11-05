import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import BeyondSection from "@/components/BeyondSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ProcessSection />
        <BeyondSection />
        <ContactSection />
      </main>
    </>
  );
}
