import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const floatingElements = [
  { emoji: '🎨', delay: 0, x: '10%', y: '20%' },
  { emoji: '🔬', delay: 0.5, x: '85%', y: '15%' },
  { emoji: '📐', delay: 1, x: '15%', y: '70%' },
  { emoji: '🚀', delay: 1.5, x: '80%', y: '75%' },
  { emoji: '💡', delay: 2, x: '50%', y: '10%' },
  { emoji: '🎯', delay: 0.8, x: '90%', y: '45%' },
];

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden gradient-hero">
      {/* Floating Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-5xl opacity-80"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.8, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            delay: el.delay,
            duration: 3,
            y: { repeat: Infinity, duration: 3 + i * 0.5 }
          }}
        >
          {el.emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-semibold text-primary-foreground">
            Learn • Play • Earn Rewards!
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl font-black leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
        >
          Where Learning
          <br />
          Becomes an
          <motion.span
            className="relative inline-block ml-3"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Adventure!
            <motion.div
              className="absolute -right-6 -top-6"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Star className="h-8 w-8 fill-coin text-coin" />
            </motion.div>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl"
        >
          Fun courses for kids aged 5-15. Complete lessons, earn CourseCoins, 
          unlock awesome badges, and become a learning superstar! 🌟
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/courses/5-10">
            <Button size="xl" variant="coin" className="gap-2 text-lg font-bold">
              Ages 5-10
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Button>
          </Link>
          <Link to="/courses/10-15">
            <Button 
              size="xl" 
              className="gap-2 text-lg font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Ages 10-15
              <Zap className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
        >
          {[
            { value: '15+', label: 'Fun Courses' },
            { value: '100+', label: 'CourseCoins' },
            { value: '15', label: 'Badges to Earn' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-black text-primary-foreground"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.1, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-primary-foreground/80 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(45, 40%, 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
