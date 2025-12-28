import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sky/10 rounded-full blur-3xl animate-float-slow animation-delay-300" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-coral/10 rounded-full blur-2xl animate-float animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-soft" />
            <span className="text-sm font-medium">Start your adventure today!</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-slide-up animation-delay-100">
            Ready to Build Your{" "}
            <span className="text-primary">Little World</span>?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200">
            Join thousands of kids building amazing worlds, completing challenges, 
            and growing together. It's free, fun, and safe!
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-slide-up animation-delay-300">
            <Button variant="hero" size="xl">
              <Sparkles className="w-6 h-6" />
              Create Your World
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-border/50 animate-slide-up animation-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm font-medium">COPPA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-medium">Privacy First</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <span className="text-sm font-medium">Parent Approved</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🌟</span>
              <span className="text-sm font-medium">Ad-Free Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
