import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopicsOverview from "@/components/TopicsOverview";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TopicsOverview />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
