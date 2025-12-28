import { motion } from 'framer-motion';
import { Shuffle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RandomCuriosityProps {
  onRandomClick: () => void;
}

const RandomCuriosity = ({ onRandomClick }: RandomCuriosityProps) => {
  return (
    <motion.section 
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container max-w-2xl mx-auto">
        <motion.div 
          className="relative overflow-hidden rounded-3xl gradient-random p-8 text-center shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 left-8 text-3xl opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-8 text-3xl opacity-30"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            🎲
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-magic-foreground" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-magic-foreground mb-3">
            Feeling Curious?
          </h2>
          <p className="text-magic-foreground/80 mb-6 text-lg">
            Let the magic pick a random question for you!
          </p>

          <Button
            variant="default"
            size="xl"
            onClick={onRandomClick}
            className="bg-card text-foreground hover:bg-card/90 shadow-lg gap-3"
          >
            <Shuffle className="h-6 w-6" />
            Random Curiosity!
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RandomCuriosity;
