import { Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const links = {
    learn: ["Epic Stories", "Science Lab", "Math Magic", "English Fun"],
    play: ["Chess", "Sudoku", "Puzzles", "Memory Match"],
    explore: ["Art & Craft", "Read Aloud", "World Facts", "Memory Cards"],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <span className="font-fredoka text-xl font-bold">LittleLearnings</span>
            </div>
            <p className="text-background/70 text-sm mb-4">
              Where little minds grow big! Making learning fun for kids aged 5-15.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <Heart className="w-4 h-4 text-coral" />
              Made with love for young learners
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-fredoka font-bold mb-4">Learn</h4>
            <ul className="space-y-2">
              {links.learn.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-fredoka font-bold mb-4">Play</h4>
            <ul className="space-y-2">
              {links.play.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-fredoka font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              {links.explore.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2024 LittleLearnings. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Use
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
