import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Palette, Gamepad2, Brain, Mic } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Stories", icon: BookOpen, href: "#stories" },
    { name: "Art & Craft", icon: Palette, href: "#art" },
    { name: "Games", icon: Gamepad2, href: "#games" },
    { name: "Learn", icon: Brain, href: "#learn" },
    { name: "Read Aloud", icon: Mic, href: "#read" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl gradient-hero flex items-center justify-center animate-float">
              <span className="text-2xl">📚</span>
            </div>
            <span className="font-fredoka text-xl md:text-2xl font-bold text-gradient">
              LittleLearnings
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-foreground/80 hover:text-foreground hover:bg-muted transition-all duration-300 font-medium"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Start Learning! 🚀
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/80 hover:text-foreground hover:bg-muted transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>
            ))}
            <div className="mt-4 px-4">
              <Button variant="hero" className="w-full">
                Start Learning! 🚀
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
