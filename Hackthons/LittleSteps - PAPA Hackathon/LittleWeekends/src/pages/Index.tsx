import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedActivities } from '@/components/FeaturedActivities';
import { CategoriesSection } from '@/components/CategoriesSection';
import { motion } from 'framer-motion';
import { Lightbulb, Clock, Heart, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Spark Creativity',
    description: 'Encourage imagination and artistic expression through hands-on activities.',
    color: 'bg-sunshine',
  },
  {
    icon: Clock,
    title: 'Quality Time',
    description: 'Create meaningful moments with family away from screens.',
    color: 'bg-mint',
  },
  {
    icon: Heart,
    title: 'Bonding Moments',
    description: 'Strengthen family connections through shared experiences.',
    color: 'bg-coral',
  },
  {
    icon: Shield,
    title: 'Safe & Fun',
    description: 'Age-appropriate activities with clear instructions and safety tips.',
    color: 'bg-lavender',
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LittleWeekends - Fun Screen-Free Activities for Kids 5-15</title>
        <meta name="description" content="Discover 20+ screen-free activities including drawing tutorials, coloring pages, arts & crafts, and family fun. Step-by-step guides and video tutorials for kids aged 5-15." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <FeaturedActivities />
          <CategoriesSection />

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Why Choose LittleWeekends?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We believe in the magic of unplugged play and creative expression
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border hover:shadow-card transition-shadow"
                    >
                      <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-sunshine/20 to-coral/10">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Ready to Start Creating? 🎨
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Join thousands of families making unforgettable memories with our activities. All free, all fun!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/activities" className="inline-flex">
                    <button className="h-14 px-8 rounded-2xl bg-gradient-warm text-foreground font-display font-bold shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300">
                      Browse Activities
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
