import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useUserProgress } from '@/context/UserProgressContext';
import { courses } from '@/data/courses';
import { Trophy, Lock, ArrowLeft, Coins, Flame, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BadgesPage = () => {
  const { hasBadge, progress } = useUserProgress();
  
  const allBadges = courses
    .filter(c => c.badge)
    .map(c => ({ ...c.badge!, courseId: c.id, courseName: c.title }))
    .filter((badge, index, self) => 
      index === self.findIndex(b => b.id === badge.id)
    );

  const unlockedBadges = allBadges.filter(b => hasBadge(b.id));
  const lockedBadges = allBadges.filter(b => !hasBadge(b.id));

  return (
    <>
      <Helmet>
        <title>My Badges | LittleCourses</title>
        <meta 
          name="description" 
          content="View your badge collection! Complete courses to unlock new badges and show off your achievements." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <motion.div 
                className="inline-flex items-center gap-2 rounded-full gradient-badge text-accent-foreground px-6 py-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Trophy className="h-5 w-5" />
                <span className="font-bold text-lg">Badge Collection</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Your Achievements 🏆
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                You've earned {unlockedBadges.length} of {allBadges.length} badges. Keep learning to unlock them all!
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
            >
              <div className="text-center p-4 rounded-2xl bg-card shadow-sm">
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-coin mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Coins className="h-6 w-6" />
                </motion.div>
                <p className="text-2xl font-black text-foreground">{progress.coins}</p>
                <p className="text-sm text-muted-foreground">CourseCoins</p>
              </div>
              
              <div className="text-center p-4 rounded-2xl bg-card shadow-sm">
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Flame className="h-6 w-6 text-secondary-foreground" />
                </motion.div>
                <p className="text-2xl font-black text-foreground">{progress.currentStreak}</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
              
              <div className="text-center p-4 rounded-2xl bg-card shadow-sm">
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success mb-2"
                >
                  <Star className="h-6 w-6 text-success-foreground" />
                </motion.div>
                <p className="text-2xl font-black text-foreground">{progress.completedCourses.length}</p>
                <p className="text-sm text-muted-foreground">Courses Done</p>
              </div>
            </motion.div>

            {/* Unlocked Badges */}
            {unlockedBadges.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-2xl">🎉</span> Unlocked Badges
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {unlockedBadges.map((badge, index) => (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative flex flex-col items-center rounded-2xl bg-card p-6 shadow-lg cursor-pointer"
                    >
                      <motion.div 
                        className="text-6xl mb-3"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {badge.emoji}
                      </motion.div>
                      <h4 className="text-sm font-bold text-center text-foreground mb-1">
                        {badge.name}
                      </h4>
                      <p className="text-xs text-muted-foreground text-center">
                        {badge.description}
                      </p>
                      
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-success flex items-center justify-center shadow-md"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.3 }}
                      >
                        <span className="text-sm">✓</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Locked Badges */}
            {lockedBadges.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Lock className="h-5 w-5" /> Badges to Unlock
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {lockedBadges.map((badge, index) => (
                    <Link key={badge.id} to={`/course/${badge.courseId}`}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center rounded-2xl bg-muted/50 p-6 cursor-pointer hover:bg-muted transition-colors"
                      >
                        <div className="text-4xl mb-3 grayscale opacity-50">
                          <Lock className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <h4 className="text-sm font-bold text-center text-muted-foreground mb-1">
                          {badge.name}
                        </h4>
                        <p className="text-xs text-muted-foreground/70 text-center">
                          Complete "{badge.courseName}"
                        </p>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BadgesPage;
