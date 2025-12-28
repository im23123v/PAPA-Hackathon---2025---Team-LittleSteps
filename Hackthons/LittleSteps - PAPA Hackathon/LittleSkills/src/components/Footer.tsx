import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl gradient-hero flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-fredoka font-bold text-gradient-hero">
                LittleSkills
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Empowering kids ages 5-15 to discover their passions and build essential 
              skills for the future through fun, interactive learning.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-fredoka font-semibold mb-4">Age Groups</h4>
            <ul className="space-y-2">
              <li><a href="#young-explorers" className="text-muted-foreground hover:text-primary transition-colors">Ages 5-9</a></li>
              <li><a href="#skill-builders" className="text-muted-foreground hover:text-primary transition-colors">Ages 10-15</a></li>
              <li><a href="#advanced" className="text-muted-foreground hover:text-primary transition-colors">Advanced Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-fredoka font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#videos" className="text-muted-foreground hover:text-primary transition-colors">Video Lessons</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">For Parents</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">For Teachers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 LittleSkills. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for young learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
