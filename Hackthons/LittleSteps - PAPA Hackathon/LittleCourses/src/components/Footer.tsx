import { motion } from 'framer-motion';
import { Heart, BookOpen, Star, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background py-12">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 text-3xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ⭐
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 text-3xl opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🚀
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-black">LittleCourses</span>
          </motion.div>

          {/* Tagline */}
          <p className="text-background/70 max-w-md mb-8">
            Making learning fun for kids aged 5-15. 
            Earn CourseCoins, unlock badges, and become a learning superstar! 🌟
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
            <a href="/courses/5-10" className="hover:text-primary transition-colors">Ages 5-10</a>
            <a href="/courses/10-15" className="hover:text-primary transition-colors">Ages 10-15</a>
            <a href="/badges" className="hover:text-primary transition-colors">Badges</a>
          </div>

          {/* Bottom */}
          <div className="flex items-center gap-2 text-sm text-background/60">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-destructive fill-destructive" />
            </motion.div>
            <span>for curious young minds</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
