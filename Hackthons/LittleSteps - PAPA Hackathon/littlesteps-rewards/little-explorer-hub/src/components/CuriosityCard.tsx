import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Curiosity } from '@/data/curiosities';

interface CuriosityCardProps {
  curiosity: Curiosity;
  onClick: () => void;
  index: number;
}

const CuriosityCard = ({ curiosity, onClick, index }: CuriosityCardProps) => {
  const isYoung = curiosity.ageGroup === 'young';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative cursor-pointer rounded-3xl p-6 
        ${isYoung ? 'gradient-card-young' : 'gradient-card-teen'}
        shadow-card hover:shadow-card-hover
        transition-all duration-300 ease-out
        border border-border/50
        group overflow-hidden
      `}
    >
      {/* Decorative corner */}
      <div className={`
        absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20
        ${isYoung ? 'bg-primary' : 'bg-secondary'}
      `} />

      {/* Category badge */}
      <div className={`
        inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-4
        ${isYoung ? 'bg-primary/20 text-primary-foreground' : 'bg-secondary/20 text-secondary'}
      `}>
        {curiosity.category}
      </div>

      {/* Emoji */}
      <motion.div 
        className="text-5xl mb-4"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        {curiosity.emoji}
      </motion.div>

      {/* Question */}
      <h3 className="text-xl font-display font-bold text-foreground mb-3 pr-8 leading-tight">
        {curiosity.question}
      </h3>

      {/* Play button hint */}
      <motion.div 
        className={`
          absolute bottom-4 right-4 w-10 h-10 rounded-full 
          flex items-center justify-center
          ${isYoung ? 'bg-primary' : 'bg-secondary'}
          text-primary-foreground
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        `}
        whileHover={{ scale: 1.1 }}
      >
        <Play className="h-5 w-5 ml-0.5" />
      </motion.div>

      {/* Age indicator */}
      <div className="absolute top-4 right-4 text-xs font-medium text-muted-foreground">
        {isYoung ? '5-10' : '10-15'}
      </div>
    </motion.div>
  );
};

export default CuriosityCard;
