import { Link } from 'react-router-dom';
import { Heart, Mail, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-warm rounded-xl flex items-center justify-center shadow-soft">
                <span className="text-xl">🎨</span>
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Little<span className="text-primary">Weekends</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Inspiring creativity and family bonding through fun, screen-free activities for kids aged 5-15.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  All Activities
                </Link>
              </li>
              <li>
                <Link to="/coloring" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Coloring Pages
                </Link>
              </li>
              <li>
                <Link to="/activities?category=crafts" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Arts & Crafts
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for families everywhere
          </p>
          <p className="text-muted-foreground text-sm">
            © 2024 LittleWeekends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
