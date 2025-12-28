import { Button } from "@/components/ui/button";
import { Rocket, Star, Lightbulb, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-light rounded-full blur-3xl opacity-60 animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-coral-light rounded-full blur-3xl opacity-60 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-purple-light rounded-full blur-3xl opacity-60 animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-yellow-light rounded-full blur-3xl opacity-60 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Floating icons */}
      <div className="absolute top-32 left-[15%] animate-float" style={{ animationDelay: '0s' }}>
        <div className="w-16 h-16 bg-coral rounded-2xl flex items-center justify-center shadow-glow-coral">
          <Star className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute top-48 right-[20%] animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-glow-teal">
          <Lightbulb className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute bottom-32 left-[20%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-glow-purple">
          <Sparkles className="w-6 h-6 text-accent-foreground" />
        </div>
      </div>
      <div className="absolute bottom-48 right-[15%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-14 h-14 bg-yellow rounded-2xl flex items-center justify-center">
          <Rocket className="w-7 h-7 text-foreground" />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">For Kids Ages 5-15</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-fredoka mb-6 leading-tight">
            Discover Your{" "}
            <span className="text-gradient-hero">SuperPowers</span>
            <br />
            Through Skills
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            An exciting journey of learning where kids explore creativity, technology, 
            problem-solving, and life skills through fun interactive content and videos!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Rocket className="w-5 h-5" />
              Start Your Adventure
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto">
              Explore Skills
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-fredoka text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Skills to Learn</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-fredoka text-coral">100+</div>
              <div className="text-sm text-muted-foreground">Video Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-fredoka text-accent">Fun!</div>
              <div className="text-sm text-muted-foreground">Learning Style</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-muted/50"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
