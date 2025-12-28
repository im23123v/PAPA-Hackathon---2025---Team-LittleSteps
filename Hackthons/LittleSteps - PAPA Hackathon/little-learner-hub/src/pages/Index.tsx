import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import StoriesSection from "@/components/StoriesSection";
import MemoryCards from "@/components/MemoryCards";
import GamesSection from "@/components/GamesSection";
import MathMagicSection from "@/components/MathMagicSection";
import ReadAloudSection from "@/components/ReadAloudSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryCards />
      <StoriesSection />
      <MemoryCards />
      <GamesSection />
      <MathMagicSection />
      <ReadAloudSection />
      <Footer />
    </div>
  );
};

export default Index;
