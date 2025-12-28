import { Sparkles, Heart, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">LittleSteps</span>
            </div>
            <p className="text-background/70 text-sm">
              Empowering children to use digital devices for learning, creativity, and healthy growth.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#features" className="hover:text-background transition-colors">LittleCuriosity</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">LittleSkills</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">LittleCourses</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">LittleDiscipline</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">View All Features</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#books" className="hover:text-background transition-colors">Level 1 Book</a></li>
              <li><a href="#books" className="hover:text-background transition-colors">Level 2 Book</a></li>
              <li><a href="#books" className="hover:text-background transition-colors">CyberSafeGirls</a></li>
              <li><a href="#certificate" className="hover:text-background transition-colors">Certificates</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@littlesteps.foundation" className="hover:text-background transition-colors">
                  hello@littlesteps.foundation
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <a href="https://littlesteps.foundation" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  littlesteps.foundation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> by Little Steps Foundation
          </p>
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} LittleSteps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
