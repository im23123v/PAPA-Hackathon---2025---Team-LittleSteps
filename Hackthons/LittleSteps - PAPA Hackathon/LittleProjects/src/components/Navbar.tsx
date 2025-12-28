import { Rocket, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-foreground transition-colors hover:text-primary">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
            <Rocket className="h-5 w-5" />
          </div>
          <span>LittleProjects</span>
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            🧒 Ages 5-10
          </Button>
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            🧑‍🎓 Ages 10-15
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
