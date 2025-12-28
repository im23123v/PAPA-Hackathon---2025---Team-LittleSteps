import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Palette, Gamepad2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-coral/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-[15%] animate-bounce-slow hidden lg:block">
        <div className="w-16 h-16 rounded-2xl bg-card shadow-card-kid flex items-center justify-center">
          <span className="text-3xl">🎨</span>
        </div>
      </div>
      <div className="absolute top-48 right-[10%] animate-bounce-slow hidden lg:block" style={{ animationDelay: "0.3s" }}>
        <div className="w-14 h-14 rounded-2xl bg-card shadow-card-kid flex items-center justify-center">
          <span className="text-2xl">🧩</span>
        </div>
      </div>
      <div className="absolute bottom-32 left-[10%] animate-bounce-slow hidden lg:block" style={{ animationDelay: "0.6s" }}>
        <div className="w-14 h-14 rounded-2xl bg-card shadow-card-kid flex items-center justify-center">
          <span className="text-2xl">📖</span>
        </div>
      </div>
      <div className="absolute bottom-48 right-[15%] animate-bounce-slow hidden lg:block" style={{ animationDelay: "0.9s" }}>
        <div className="w-16 h-16 rounded-2xl bg-card shadow-card-kid flex items-center justify-center">
          <span className="text-3xl">🎮</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card shadow-card-kid rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Learning made fun for ages 5-15!</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-fredoka font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Where Little Minds
            <br />
            <span className="text-gradient">Grow Big! 🌟</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover the magic of learning through stories, art, games, and wisdom from ancient tales like Ramayana & Bhagavad Gita — all in one playful place!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              <Sparkles className="w-5 h-5" />
              Start My Adventure!
            </Button>
            <Button variant="outline" size="xl">
              Explore Topics 📚
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: BookOpen, label: "Epic Stories", color: "bg-primary/10 text-primary" },
              { icon: Palette, label: "Art & Craft", color: "bg-secondary/10 text-secondary" },
              { icon: Gamepad2, label: "Fun Games", color: "bg-accent/10 text-accent-foreground" },
            ].map((feature) => (
              <div
                key={feature.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${feature.color} font-medium transition-transform hover:scale-105`}
              >
                <feature.icon className="w-4 h-4" />
                {feature.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--muted))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
