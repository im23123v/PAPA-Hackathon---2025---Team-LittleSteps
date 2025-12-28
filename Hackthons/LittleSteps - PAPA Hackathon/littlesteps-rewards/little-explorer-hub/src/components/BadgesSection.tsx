import { motion } from 'framer-motion';
import { Trophy, Lock, Star } from 'lucide-react';
import { badges } from '@/data/curiosities';

const BadgesSection = () => {
  // More earned badges to show progress (easy to unlock!)
  const earnedBadges = [
    'first-step', 'curious-starter', 'explorer', // milestones
    'space-cadet', 'nature-friend', 'body-beginner', 'science-spark', // categories
    'video-watcher', 'random-explorer', 'quiz-whiz' // achievements
  ];

  const badgeCategories = [
    { id: 'milestone', name: 'Milestones', emoji: '🏆' },
    { id: 'category', name: 'Topics', emoji: '📚' },
    { id: 'achievement', name: 'Achievements', emoji: '⭐' },
  ];

  const groupedBadges = badgeCategories.map(cat => ({
    ...cat,
    badges: badges.filter(b => {
      if (cat.id === 'milestone') return b.category === 'milestone';
      if (cat.id === 'achievement') return b.category === 'achievement';
      return !['milestone', 'achievement'].includes(b.category);
    })
  }));

  return (
    <section id="badges" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Trophy className="h-5 w-5 text-success" />
            <span className="font-semibold text-success">Curiosity Badges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Collect Them All! 🏅
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore topics and earn special badges for your curiosity journey. 
            You've earned {earnedBadges.length} of {badges.length} badges!
          </p>
          
          {/* Progress bar */}
          <div className="max-w-md mx-auto mt-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-bold text-success">{Math.round((earnedBadges.length / badges.length) * 100)}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-success to-curious-green rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${(earnedBadges.length / badges.length) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Badge categories */}
        {groupedBadges.map((category, catIndex) => (
          <motion.div 
            key={category.id}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span>{category.emoji}</span>
              {category.name}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {category.badges.map((badge, index) => {
                const isEarned = earnedBadges.includes(badge.id);
                
                return (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`
                      relative p-4 rounded-2xl text-center cursor-pointer
                      ${isEarned 
                        ? 'bg-card shadow-card border border-success/30' 
                        : 'bg-muted/50 border border-border'
                      }
                      transition-all duration-300
                    `}
                  >
                    {!isEarned && (
                      <div className="absolute top-2 right-2">
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                    
                    <motion.div 
                      className={`text-4xl mb-2 ${!isEarned && 'grayscale opacity-50'}`}
                      animate={isEarned ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {badge.emoji}
                    </motion.div>
                    
                    <h4 className={`font-semibold text-sm mb-1 ${!isEarned && 'text-muted-foreground'}`}>
                      {badge.name}
                    </h4>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {badge.description}
                    </p>

                    {isEarned && (
                      <motion.div 
                        className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <span className="text-xs text-success-foreground">✓</span>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BadgesSection;
