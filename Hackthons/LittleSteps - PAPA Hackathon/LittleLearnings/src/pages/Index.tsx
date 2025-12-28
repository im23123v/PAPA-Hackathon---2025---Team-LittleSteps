import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BooksSection from "@/components/BooksSection";
import CertificateSection from "@/components/CertificateSection";
import AIChatSection from "@/components/AIChatSection";
import VoiceSection from "@/components/VoiceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BooksSection />
      <CertificateSection />
      <AIChatSection />
      <VoiceSection />
      <Footer />
    </main>
  );
};

export default Index;
