import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Shield, ArrowRight } from "lucide-react";
import heroWorld from "@/assets/hero-world.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute top-48 right-20 w-32 h-32 bg-sky/20 rounded-full blur-3xl animate-float-slow animation-delay-200" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-coral/15 rounded-full blur-2xl animate-float animation-delay-400" />
        <div className="absolute bottom-60 right-1/3 w-16 h-16 bg-nature/20 rounded-full blur-xl animate-float-slow animation-delay-600" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <Badge variant="secondary" className="inline-flex items-center gap-2 animate-slide-up">
              <Shield className="w-4 h-4" />
              Safe & Fun for Ages 5-15
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-slide-up animation-delay-100">
              Build Your Own{" "}
              <span className="text-primary relative">
                Little World
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 100 2 150 4C200 6 250 8 298 5"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                </svg>
              </span>{" "}
              With Friends!
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up animation-delay-200">
              Create magical worlds with siblings and friends. Complete challenges, build good habits, 
              and watch your world grow together! 🌟
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up animation-delay-300">
              <Button variant="hero" size="lg">
                <Sparkles className="w-5 h-5" />
                Start Your World
              </Button>
              <Button variant="heroOutline" size="lg">
                <Users className="w-5 h-5" />
                Join a Friend
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 animate-slide-up animation-delay-400">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Kids</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Worlds Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Safe & Fun</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up animation-delay-200">
            <div className="relative z-10">
              <img
                src={heroWorld}
                alt="Magical floating world with colorful buildings"
                className="w-full h-auto rounded-3xl shadow-medium animate-float-slow"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-3 shadow-card animate-bounce-gentle z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-nature/20 flex items-center justify-center">
                  🌳
                </div>
                <span className="font-display font-semibold text-sm">Eco Park</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-3 shadow-card animate-bounce-gentle animation-delay-300 z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-coral/20 flex items-center justify-center">
                  🎨
                </div>
                <span className="font-display font-semibold text-sm">Art Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <a href="#features" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Explore More</span>
          <ArrowRight className="w-5 h-5 rotate-90" />
        </a>
      </div>
    </section>
  );
}
