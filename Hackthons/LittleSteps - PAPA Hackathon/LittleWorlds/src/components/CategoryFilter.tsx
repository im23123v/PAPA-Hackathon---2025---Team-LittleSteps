import { motion } from 'framer-motion';
import { categories } from '@/data/curiosities';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.name)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
            ${selectedCategory === category.name
              ? 'bg-secondary text-secondary-foreground shadow-card'
              : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }
          `}
        >
          <span>{category.emoji}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;