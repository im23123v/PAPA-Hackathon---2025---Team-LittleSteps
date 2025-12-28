import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AgeGroupSection from '@/components/AgeGroupSection';
import BadgeShowcase from '@/components/BadgeShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LittleCourses - Fun Learning for Kids 5-15 | Earn Rewards & Badges</title>
        <meta 
          name="description" 
          content="LittleCourses offers engaging educational courses for kids aged 5-15. Learn coding, math, science, art and more. Earn CourseCoins and unlock achievement badges!" 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          
          <AgeGroupSection
            ageGroup="5-10"
            title="Adventures for Young Explorers"
            description="Fun and colorful courses designed for our youngest learners. Build foundational skills through play!"
          />
          
          <AgeGroupSection
            ageGroup="10-15"
            title="Level Up Your Skills"
            description="Challenging courses for growing minds. Start coding, master math, and prepare for the future!"
          />
          
          <BadgeShowcase />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
