import { motion } from 'framer-motion';
import { useUserProgress } from '@/context/UserProgressContext';
import { Coins, Trophy, Flame, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { progress } = useUserProgress();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
            className="text-3xl"
          >
            📚
          </motion.div>
          <span className="text-xl font-extrabold text-gradient">LittleCourses</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/courses/5-10" 
            className="font-semibold text-muted-foreground hover:text-age-young transition-colors"
          >
            Ages 5-10
          </Link>
          <Link 
            to="/courses/10-15" 
            className="font-semibold text-muted-foreground hover:text-age-teen transition-colors"
          >
            Ages 10-15
          </Link>
          <Link 
            to="/badges" 
            className="font-semibold text-muted-foreground hover:text-accent transition-colors"
          >
            My Badges
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Streak */}
          <motion.div 
            className="flex items-center gap-1.5 rounded-full bg-secondary/20 px-3 py-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <Flame className="h-4 w-4 text-secondary" />
            <span className="text-sm font-bold text-secondary">{progress.currentStreak}</span>
          </motion.div>

          {/* Badges Count */}
          <motion.div 
            className="hidden sm:flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-sm font-bold text-accent">{progress.badges.length}</span>
          </motion.div>

          {/* Coins */}
          <motion.div 
            className="flex items-center gap-1.5 rounded-full gradient-coin px-3 py-1.5 shadow-coin"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: ['0 4px 20px hsl(45 100% 50% / 0.3)', '0 4px 30px hsl(45 100% 50% / 0.5)', '0 4px 20px hsl(45 100% 50% / 0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Coins className="h-4 w-4 text-foreground" />
            <span className="text-sm font-bold">{progress.coins}</span>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
