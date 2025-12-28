import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import YoungExplorersSection from "@/components/YoungExplorersSection";
import SkillBuildersSection from "@/components/SkillBuildersSection";
import VideosSection from "@/components/VideosSection";
import AdvancedSkillsSection from "@/components/AdvancedSkillsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <YoungExplorersSection />
      <SkillBuildersSection />
      <VideosSection />
      <AdvancedSkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
