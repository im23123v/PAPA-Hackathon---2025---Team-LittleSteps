import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-fredoka font-bold text-gradient-hero">
              LittleSkills
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#young-explorers" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Ages 5-9
            </a>
            <a href="#skill-builders" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Ages 10-15
            </a>
            <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Videos
            </a>
            <a href="#advanced" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Advanced
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Start Learning
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <a href="#young-explorers" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Ages 5-9
              </a>
              <a href="#skill-builders" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Ages 10-15
              </a>
              <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Videos
              </a>
              <a href="#advanced" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Advanced
              </a>
              <Button variant="hero" className="mt-2">
                Start Learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
