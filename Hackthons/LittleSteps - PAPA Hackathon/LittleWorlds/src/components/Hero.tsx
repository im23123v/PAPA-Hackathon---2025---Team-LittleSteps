import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Rocket, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] gradient-hero flex items-center justify-center overflow-hidden px-4 py-16">
      {/* PAPA Hackathon Badge */}
      <motion.div
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-gradient-to-r from-primary to-secondary px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border-2 border-white/20">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Trophy className="h-4 w-4 md:h-5 md:w-5 text-white" />
            <span className="text-xs md:text-sm font-bold text-white">PAPA Hackathon Demo</span>
          </div>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-5xl opacity-60"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute top-32 right-16 text-4xl opacity-60"
        animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        🌙
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-20 text-5xl opacity-50"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🔬
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-24 text-4xl opacity-50"
        animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        🌍
      </motion.div>
      <motion.div
        className="absolute top-40 left-1/4 text-3xl opacity-40"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        💫
      </motion.div>

      <div className="container relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-card"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Learning is an adventure!</span>
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Little
          <span className="text-gradient">Curiosity</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the amazing world around you! Fun answers to your biggest questions, with videos that make learning exciting.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center gap-2 bg-card px-4 py-3 rounded-2xl shadow-card"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Lightbulb className="h-6 w-6 text-primary" />
            <span className="font-semibold">20+ Questions</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 bg-card px-4 py-3 rounded-2xl shadow-card"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Rocket className="h-6 w-6 text-secondary" />
            <span className="font-semibold">Ages 5-15</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
