import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-coral/20 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal/20 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-sunshine/30 rounded-full blur-2xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-lavender/30 rounded-full blur-xl animate-float animation-delay-300" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating emojis */}
          <div className="flex justify-center gap-4 mb-6 text-4xl sm:text-5xl">
            <span className="animate-float animation-delay-100">🌟</span>
            <span className="animate-float animation-delay-200">📚</span>
            <span className="animate-float animation-delay-300">⏰</span>
            <span className="animate-float animation-delay-400">🏆</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">LITTLE</span>
            <span className="text-gradient-hero">DISCIPLINE</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">
            Habits That Shape Life
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Help your kids aged 5-15 build amazing habits through fun videos, daily tasks, and rewarding badges! 🎯
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={onGetStarted}>
              <Sparkles className="w-6 h-6" />
              Start Building Habits
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-coral mb-1">16+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Good Habits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-teal mb-1">6</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Fun Badges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-sunshine mb-1">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Coins to Earn</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-muted/50"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
