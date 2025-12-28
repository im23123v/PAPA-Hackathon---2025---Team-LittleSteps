import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BuildingsSection } from "@/components/BuildingsSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { SafetySection } from "@/components/SafetySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LittleWorlds - Build Virtual Worlds with Friends | Safe Kids App for Ages 5-15</title>
        <meta 
          name="description" 
          content="LittleWorlds is a safe, fun app where kids ages 5-15 create virtual worlds with friends and siblings. Complete challenges, build habits, and grow together!" 
        />
        <meta name="keywords" content="kids app, virtual worlds, safe kids game, educational app, habit building, children collaboration" />
        <link rel="canonical" href="https://littleworlds.app" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <BuildingsSection />
          <ChallengesSection />
          <SafetySection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
