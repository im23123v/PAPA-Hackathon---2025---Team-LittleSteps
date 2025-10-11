import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">TechMecha</div>
              <div className="text-sm text-primary font-semibold -mt-1">Torque</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link 
              to="/founder"
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Leadership
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/careers"
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-semibold text-foreground hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-dark font-semibold px-6 shadow-professional">
              Get Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border shadow-lg">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Solutions
              </button>
              <Link
                to="/founder"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Leadership
              </Link>
              <Link
                to="/careers"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Careers
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Contact
              </button>
              <div className="flex flex-col gap-3 mt-4 pt-4">
                <Button variant="ghost" className="justify-start font-semibold">
                  Sign In
                </Button>
                <Button className="justify-start bg-primary hover:bg-primary-dark font-semibold">
                  Get Demo
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;