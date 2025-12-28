import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Sparkles, BookOpen } from 'lucide-react';
import { Curiosity } from '@/data/curiosities';

interface VideoModalProps {
  curiosity: Curiosity | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ curiosity, isOpen, onClose }: VideoModalProps) => {
  if (!curiosity) return null;

  const isYoung = curiosity.ageGroup === 'young';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-foreground/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-8 bg-card rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-foreground/20 hover:bg-foreground/30 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X className="h-6 w-6 text-card" />
            </button>

            {/* Header with gradient */}
            <div className={`relative p-6 pb-4 ${isYoung ? 'gradient-card-young' : 'gradient-card-teen'}`}>
              <div className="flex items-start gap-4">
                <motion.span 
                  className="text-6xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  {curiosity.emoji}
                </motion.span>
                <div className="flex-1 pr-12">
                  <div className={`
                    inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-2
                    ${isYoung ? 'bg-primary/20 text-primary-foreground' : 'bg-secondary/20 text-secondary'}
                  `}>
                    {curiosity.category} • Ages {isYoung ? '5-10' : '10-15'}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                    {curiosity.question}
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 pt-4 space-y-6">
              {/* YouTube Video Embed */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-foreground/5">
                <iframe
                  src={`https://www.youtube.com/embed/${curiosity.youtubeVideoId}?rel=0&modestbranding=1`}
                  title={curiosity.question}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Detailed Explanation */}
              <motion.div 
                className="bg-muted/50 rounded-2xl p-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className={`h-5 w-5 ${isYoung ? 'text-primary' : 'text-secondary'}`} />
                  <h3 className="font-display font-bold text-lg text-foreground">Learn More</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed text-base">
                  {curiosity.detailedExplanation}
                </p>
              </motion.div>

              {/* Takeaway */}
              <motion.div 
                className={`
                  flex items-center gap-3 p-4 rounded-2xl
                  ${isYoung ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/10 border border-secondary/20'}
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className={`h-6 w-6 flex-shrink-0 ${isYoung ? 'text-primary' : 'text-secondary'}`} />
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Key Takeaway
                  </div>
                  <p className="text-lg font-semibold text-foreground">{curiosity.takeaway}</p>
                </div>
              </motion.div>

              {/* Curiosity points */}
              <motion.div 
                className="flex items-center justify-center gap-2 py-2 text-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">+1 Curiosity Point Earned!</span>
                <Star className="h-5 w-5 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
