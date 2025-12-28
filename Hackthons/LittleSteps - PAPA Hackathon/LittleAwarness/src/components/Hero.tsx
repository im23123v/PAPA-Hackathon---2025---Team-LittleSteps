import { Button } from "@/components/ui/button";
import { ArrowDown, Star, Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-10 w-14 h-14 rounded-full bg-mental/20 animate-float" style={{ animationDelay: "1.5s" }} />
        
        {/* Floating icons */}
        <div className="absolute top-32 right-1/4 animate-float" style={{ animationDelay: "0.3s" }}>
          <Star className="w-8 h-8 text-accent fill-accent" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: "0.8s" }}>
          <Heart className="w-10 h-10 text-primary fill-primary/50" />
        </div>
        <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: "1.2s" }}>
          <Sparkles className="w-8 h-8 text-secondary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hackathon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-sm font-medium text-secondary">🏆 Built for PAPA.Community Hackathon</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Learning Made Fun!</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: "100ms" }}>
            Empowering Kids with{" "}
            <span className="text-gradient">Essential Life Skills</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: "200ms" }}>
            From healthy habits to digital safety, we teach children the important things 
            they need to know for a brighter, safer, and more aware future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: "300ms" }}>
            <Button variant="hero" size="xl">
              Explore Topics
            </Button>
            <Button variant="outline" size="xl">
              For Parents
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: "400ms" }}>
            <div className="text-center p-4">
              <div className="text-2xl md:text-4xl font-display font-black text-primary mb-1">20+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Topics</div>
            </div>
            <div className="text-center p-4 border-x border-border">
              <div className="text-2xl md:text-4xl font-display font-black text-secondary mb-1">Fun</div>
              <div className="text-xs md:text-sm text-muted-foreground">Learning</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-4xl font-display font-black text-accent mb-1">Safe</div>
              <div className="text-xs md:text-sm text-muted-foreground">Content</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#topics" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
