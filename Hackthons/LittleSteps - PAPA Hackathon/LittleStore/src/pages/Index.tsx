import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import LittleKitsShowcase from '@/components/LittleKitsShowcase';
import AttentionCoinsInfo from '@/components/AttentionCoinsInfo';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>LittleStore - Educational Products for Indian Kids (5-15 years)</title>
        <meta name="description" content="Discover books, games, puzzles, and LittleKits for Indian students aged 5-15. Shop with Attention Coins + Rupees. Free shipping on orders above ₹499!" />
        <meta name="keywords" content="educational products, kids books, LittleSteps, puzzles, chess, Indian children, learning toys" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <CategorySection />
          <FeaturedProducts />
          <LittleKitsShowcase />
          <AttentionCoinsInfo />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
