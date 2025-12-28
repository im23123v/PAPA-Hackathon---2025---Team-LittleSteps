import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { curiosities } from '@/data/curiosities';
import CuriosityCard from './CuriosityCard';
import VideoModal from './VideoModal';
import AgeFilter from './AgeFilter';
import RandomCuriosity from './RandomCuriosity';
import type { Curiosity } from '@/data/curiosities';

const CuriosityGrid = () => {
  const [activeAge, setActiveAge] = useState<'all' | 'young' | 'teen'>('all');
  const [selectedCuriosity, setSelectedCuriosity] = useState<Curiosity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCuriosities = useMemo(() => {
    if (activeAge === 'all') return curiosities;
    return curiosities.filter(c => c.ageGroup === activeAge);
  }, [activeAge]);

  const handleCardClick = (curiosity: Curiosity) => {
    setSelectedCuriosity(curiosity);
    setIsModalOpen(true);
  };

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * curiosities.length);
    setSelectedCuriosity(curiosities[randomIndex]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCuriosity(null), 300);
  };

  return (
    <>
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              What Are You Curious About? 🤔
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tap any card to discover the answer and watch fun videos!
            </p>
          </motion.div>

          <AgeFilter activeAge={activeAge} onAgeChange={setActiveAge} />

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredCuriosities.map((curiosity, index) => (
                <CuriosityCard
                  key={curiosity.id}
                  curiosity={curiosity}
                  onClick={() => handleCardClick(curiosity)}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <RandomCuriosity onRandomClick={handleRandomClick} />

      <VideoModal
        curiosity={selectedCuriosity}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CuriosityGrid;
