import { motion } from 'framer-motion';
import { categories } from '@/data/activities';
import { Button } from './ui/button';

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={selected === null ? 'default' : 'outline'}
          onClick={() => onSelect(null)}
          className="rounded-full"
        >
          ✨ All Activities
        </Button>
      </motion.div>
      {categories.map((category) => (
        <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={selected === category.id ? 'default' : 'outline'}
            onClick={() => onSelect(category.id)}
            className="rounded-full"
          >
            {category.emoji} {category.name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};
