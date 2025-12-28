import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50">
      <div className="container max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-2xl font-display font-bold text-foreground">
            <Sparkles className="h-6 w-6 text-primary" />
            <span>Little<span className="text-gradient">Curiosity</span></span>
          </div>
          
          <p className="text-muted-foreground flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent fill-current" /> for curious minds everywhere
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>🧠 20+ Fun Facts</span>
            <span>•</span>
            <span>🎬 Video Learning</span>
            <span>•</span>
            <span>🏅 Earn Badges</span>
          </div>

          <p className="text-xs text-muted-foreground/60 mt-4">
            © {new Date().getFullYear()} LittleCuriosity. Keep asking questions!
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
