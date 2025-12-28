import { motion } from 'framer-motion';
import { useUserProgress } from '@/context/UserProgressContext';
import { courses } from '@/data/courses';
import { Trophy, Lock } from 'lucide-react';

const BadgeShowcase = () => {
  const { hasBadge, progress } = useUserProgress();
  
  // Get all unique badges from courses
  const allBadges = courses
    .filter(c => c.badge)
    .map(c => c.badge!)
    .filter((badge, index, self) => 
      index === self.findIndex(b => b.id === badge.id)
    );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 mb-4">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="font-bold text-sm text-accent">Badge Collection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            Unlock Awesome Badges! 🏆
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete courses to earn exclusive badges. You've earned {progress.badges.length} of {allBadges.length} badges!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allBadges.map((badge, index) => {
            const unlocked = hasBadge(badge.id);
            
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={unlocked ? { scale: 1.1, rotate: 5 } : {}}
                className={`relative flex flex-col items-center rounded-2xl p-4 transition-all ${
                  unlocked 
                    ? 'bg-card shadow-lg cursor-pointer' 
                    : 'bg-muted/50 opacity-60'
                }`}
              >
                <div className={`text-5xl mb-2 ${unlocked ? '' : 'grayscale'}`}>
                  {unlocked ? badge.emoji : <Lock className="h-10 w-10 text-muted-foreground" />}
                </div>
                <h4 className="text-sm font-bold text-center text-foreground">
                  {badge.name}
                </h4>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  {unlocked ? badge.description : 'Complete course to unlock'}
                </p>
                
                {unlocked && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-success flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    <span className="text-xs">✓</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BadgeShowcase;
