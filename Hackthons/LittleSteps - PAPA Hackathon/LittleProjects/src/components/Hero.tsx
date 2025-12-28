import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Star } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
}

export const Hero = ({ onExplore }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-30">🚀</div>
        <div className="absolute top-40 right-20 text-5xl animate-float stagger-2 opacity-30">💡</div>
        <div className="absolute bottom-32 left-1/4 text-4xl animate-float stagger-3 opacity-30">🎨</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-float stagger-4 opacity-30">🔬</div>
        <div className="absolute top-1/3 right-10 text-4xl animate-float stagger-5 opacity-30">🐍</div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sunny/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm animate-scale-in">
            <Sparkles className="h-4 w-4 text-sunny" />
            <span className="text-sm font-medium text-primary-foreground">
              22+ Fun Projects for Kids
            </span>
            <Star className="h-4 w-4 text-sunny" />
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-7xl animate-slide-up">
            Little
            <span className="relative mx-3">
              Projects
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="hsl(var(--sunny))"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg text-primary-foreground/90 sm:text-xl lg:text-2xl animate-slide-up stagger-2">
            Learn coding, science, art & more through{" "}
            <span className="font-bold text-sunny">hands-on projects</span> designed for{" "}
            <span className="font-bold text-coral-light">ages 5-15</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up stagger-3">
            <Button 
              variant="sunny" 
              size="xl" 
              onClick={onExplore}
              className="group"
            >
              <Rocket className="transition-transform group-hover:-translate-y-1 group-hover:rotate-12" />
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={onExplore}
            >
              Ages 5-10
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={onExplore}
            >
              Ages 10-15
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 animate-slide-up stagger-4">
            <div className="rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary-foreground">22+</div>
              <div className="text-sm text-primary-foreground/70">Projects</div>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary-foreground">2</div>
              <div className="text-sm text-primary-foreground/70">Age Groups</div>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary-foreground">9</div>
              <div className="text-sm text-primary-foreground/70">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
