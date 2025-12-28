import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const funFacts = [
  "Honey never spoils! Archaeologists found 3000-year-old honey in Egyptian tombs! 🍯",
  "Octopuses have three hearts and blue blood! 🐙",
  "A day on Venus is longer than a year on Venus! 🌟",
  "Bananas are berries, but strawberries aren't! 🍌",
  "You can't hum while holding your nose! Try it! 🎵",
  "Sharks existed before trees! 🦈",
  "The Eiffel Tower grows taller in summer! 🗼",
  "Cows have best friends and get stressed when separated! 🐄",
];

const FunFactsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % funFacts.length);
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-r from-curious-purple/10 via-curious-blue/10 to-curious-pink/10">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4">
          <motion.button
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </motion.button>
          
          <div className="flex-1 text-center overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-curious-yellow" />
              <span className="text-sm font-semibold text-curious-yellow">Did You Know?</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-medium text-foreground"
              >
                {funFacts[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          
          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </motion.button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center gap-1 mt-4">
          {funFacts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsTicker;