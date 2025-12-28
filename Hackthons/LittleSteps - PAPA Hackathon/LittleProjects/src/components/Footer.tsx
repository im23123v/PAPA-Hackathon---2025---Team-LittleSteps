import { Heart, Rocket } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <div className="font-bold text-foreground">LittleProjects</div>
              <div className="text-sm text-muted-foreground">
                Learn, Create, Explore!
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span>🎮 Coding</span>
            <span>•</span>
            <span>🔬 Science</span>
            <span>•</span>
            <span>🎨 Art</span>
            <span>•</span>
            <span>🐍 Python</span>
            <span>•</span>
            <span>❤️ Tech for Good</span>
          </div>

          {/* Made With Love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-coral text-coral" /> for young creators
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            🎓 Perfect for kids ages 5-15 • Watch tutorials • Build amazing projects
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} LittleProjects. All projects are educational and free to explore.
          </p>
        </div>
      </div>
    </footer>
  );
};
