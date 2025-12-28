import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, BookOpen, Puzzle, Gift } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-12 md:py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 float-animation" />
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/20 float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-level1/20 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-24 h-24 rounded-full bg-level2/10 float-animation" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Made for Indian Kids (5-15 years)</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where <span className="text-gradient">Learning</span> Meets{' '}
              <span className="text-secondary">Fun!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Discover books, games, puzzles, and exclusive LittleKits designed to spark curiosity and build bright futures. Pay with Attention Coins + Rupees!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/littlekits">
                <Button variant="kit" size="xl" className="w-full sm:w-auto">
                  <Gift className="h-5 w-5" />
                  Shop LittleKits
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-border/50">
              <div className="text-center">
                <p className="font-display font-bold text-2xl text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Kids</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display font-bold text-2xl text-secondary">500+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display font-bold text-2xl text-level1">100%</p>
                <p className="text-sm text-muted-foreground">Made in India</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-card rounded-2xl p-6 shadow-card card-hover border border-border/50 slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-14 h-14 rounded-xl bg-level1/20 flex items-center justify-center mb-4">
                  <BookOpen className="h-7 w-7 text-level1" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">LittleSteps Books</h3>
                <p className="text-sm text-muted-foreground">Level 1 & 2 learning series for different age groups</p>
              </div>

              {/* Card 2 */}
              <div className="bg-card rounded-2xl p-6 shadow-card card-hover border border-border/50 mt-8 slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <Puzzle className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">Brain Games</h3>
                <p className="text-sm text-muted-foreground">Chess, Rubik's cube, puzzles & more</p>
              </div>

              {/* Card 3 */}
              <div className="bg-card rounded-2xl p-6 shadow-card card-hover border border-border/50 slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 rounded-xl bg-level2/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">🗺️</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">Maps & Geography</h3>
                <p className="text-sm text-muted-foreground">World map & India map puzzles</p>
              </div>

              {/* Card 4 - LittleKits */}
              <div className="gradient-kit rounded-2xl p-6 shadow-lg card-hover mt-8 slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 rounded-xl bg-card/20 flex items-center justify-center mb-4">
                  <Gift className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-accent-foreground">LittleKits</h3>
                <p className="text-sm text-accent-foreground/80">Complete bundles with everything!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
