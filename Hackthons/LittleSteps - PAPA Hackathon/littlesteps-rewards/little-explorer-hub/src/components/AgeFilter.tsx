import { motion } from 'framer-motion';

interface AgeFilterProps {
  activeAge: 'all' | 'young' | 'teen';
  onAgeChange: (age: 'all' | 'young' | 'teen') => void;
}

const AgeFilter = ({ activeAge, onAgeChange }: AgeFilterProps) => {
  const filters = [
    { id: 'all' as const, label: 'All Ages', emoji: '🌟' },
    { id: 'young' as const, label: 'Ages 5-10', emoji: '🎨' },
    { id: 'teen' as const, label: 'Ages 10-15', emoji: '🚀' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => onAgeChange(filter.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative px-5 py-3 rounded-2xl font-semibold text-base
            transition-all duration-300 flex items-center gap-2
            ${activeAge === filter.id 
              ? 'bg-primary text-primary-foreground shadow-button' 
              : 'bg-card text-foreground hover:bg-muted shadow-card'
            }
          `}
        >
          <span className="text-xl">{filter.emoji}</span>
          <span>{filter.label}</span>
          {activeAge === filter.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default AgeFilter;
