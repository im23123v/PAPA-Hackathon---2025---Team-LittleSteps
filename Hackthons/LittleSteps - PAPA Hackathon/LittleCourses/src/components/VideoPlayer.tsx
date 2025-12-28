import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '@/data/courses';
import { useUserProgress } from '@/context/UserProgressContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Coins, Trophy, Play, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VideoPlayerProps {
  course: Course;
}

const VideoPlayer = ({ course }: VideoPlayerProps) => {
  const { isCourseCompleted, completeCourse, addCoins } = useUserProgress();
  const [showCompletion, setShowCompletion] = useState(false);
  const completed = isCourseCompleted(course.id);

  const handleComplete = () => {
    if (completed) return;
    
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#14b8a6', '#f59e0b', '#8b5cf6', '#22c55e'],
    });

    addCoins(course.coinsReward);
    completeCourse(course.id, course.badge);
    setShowCompletion(true);

    setTimeout(() => setShowCompletion(false), 4000);
  };

  return (
    <div className="w-full">
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5 shadow-lg">
        <iframe
          src={course.videoUrl}
          title={course.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Complete Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-muted/50">
        <div className="flex items-center gap-3">
          <motion.div
            className="flex items-center gap-2 rounded-full gradient-coin px-4 py-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Coins className="h-5 w-5" />
            <span className="font-bold">+{course.coinsReward} CourseCoins</span>
          </motion.div>
          
          {course.badge && (
            <div className="flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
              <span className="text-xl">{course.badge.emoji}</span>
              <span className="font-bold text-accent">{course.badge.name}</span>
            </div>
          )}
        </div>

        <Button
          size="lg"
          variant={completed ? 'success' : 'hero'}
          onClick={handleComplete}
          disabled={completed}
          className="gap-2"
        >
          {completed ? (
            <>
              <CheckCircle2 className="h-5 w-5" />
              Course Completed!
            </>
          ) : (
            <>
              <Play className="h-5 w-5" />
              Mark as Complete
            </>
          )}
        </Button>
      </div>

      {/* Completion Celebration Modal */}
      <AnimatePresence>
        {showCompletion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm"
            onClick={() => setShowCompletion(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              className="bg-card rounded-3xl p-8 shadow-2xl text-center max-w-md mx-4"
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              
              <h3 className="text-2xl font-black text-foreground mb-2">
                Amazing Job!
              </h3>
              
              <p className="text-muted-foreground mb-6">
                You completed "{course.title}"
              </p>

              <div className="flex flex-col gap-3 mb-6">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-2 rounded-xl gradient-coin p-3"
                >
                  <Coins className="h-6 w-6" />
                  <span className="text-xl font-bold">+{course.coinsReward} CourseCoins!</span>
                </motion.div>

                {course.badge && (
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-2 rounded-xl gradient-badge text-accent-foreground p-3"
                  >
                    <Trophy className="h-6 w-6" />
                    <span className="text-xl font-bold">
                      {course.badge.emoji} {course.badge.name} Unlocked!
                    </span>
                  </motion.div>
                )}
              </div>

              <Button variant="hero" size="lg" onClick={() => setShowCompletion(false)}>
                <PartyPopper className="h-5 w-5 mr-2" />
                Keep Learning!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoPlayer;
