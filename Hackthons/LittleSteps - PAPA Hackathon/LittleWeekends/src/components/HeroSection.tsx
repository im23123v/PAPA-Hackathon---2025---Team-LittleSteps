import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Play, Palette, Scissors } from 'lucide-react';
import { Button } from './ui/button';

const floatingIcons = [
  { emoji: '🎨', delay: 0, x: '10%', y: '20%' },
  { emoji: '✂️', delay: 0.2, x: '85%', y: '15%' },
  { emoji: '🖍️', delay: 0.4, x: '75%', y: '70%' },
  { emoji: '📚', delay: 0.6, x: '15%', y: '75%' },
  { emoji: '🎲', delay: 0.8, x: '90%', y: '45%' },
  { emoji: '🌳', delay: 1, x: '5%', y: '50%' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-peach/30 to-mint/30">
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-5xl opacity-60 pointer-events-none"
          style={{ left: icon.x, top: icon.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay: icon.delay, duration: 0.5 },
            scale: { delay: icon.delay, duration: 0.5 },
            y: { delay: icon.delay + 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 py-12 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft border border-border"
          >
            <Sparkles className="w-4 h-4 text-sunshine" />
            <span className="text-sm font-medium text-muted-foreground">
              For Kids Aged 5-15 Years
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Make Every Weekend{' '}
            <span className="text-gradient">Little & Magical</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Discover 20+ screen-free activities including drawing tutorials, coloring pages, arts & crafts, and family fun — all with step-by-step guides and video tutorials!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/activities">
              <Button variant="hero" size="xl" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Activities
              </Button>
            </Link>
            <Link to="/coloring">
              <Button variant="outline" size="xl">
                <Palette className="w-5 h-5" />
                Coloring Pages
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-12 md:mt-16"
          >
            {[
              { value: '20+', label: 'Activities' },
              { value: '6', label: 'Categories' },
              { value: '100%', label: 'Free' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};
