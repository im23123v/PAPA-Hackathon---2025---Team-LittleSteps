import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import CuriosityGrid from '@/components/CuriosityGrid';
import BadgesSection from '@/components/BadgesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LittleCuriosity - Fun Learning for Kids Ages 5-15</title>
        <meta 
          name="description" 
          content="Discover amazing answers to your biggest questions! Fun, visual learning for curious kids ages 5-15 with engaging videos and interactive content." 
        />
        <meta name="keywords" content="kids learning, curiosity, science for kids, educational videos, fun facts for children" />
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <CuriosityGrid />
        <BadgesSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
