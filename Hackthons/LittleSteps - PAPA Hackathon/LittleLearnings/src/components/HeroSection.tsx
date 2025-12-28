import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";
import AttentionWallet from "./AttentionWallet";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-coral/20 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-mint/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-lavender/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
      
      {/* Floating stars */}
      <Star className="absolute top-32 right-1/4 w-6 h-6 text-sunshine animate-bounce-slow" style={{ animationDelay: "0.5s" }} />
      <Star className="absolute top-48 left-1/3 w-4 h-4 text-coral animate-bounce-slow" style={{ animationDelay: "1s" }} />
      <Star className="absolute bottom-1/3 right-1/3 w-5 h-5 text-mint animate-bounce-slow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">LittleSteps</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#books" className="text-muted-foreground hover:text-foreground transition-colors">Books</a>
              <a href="#certificate" className="text-muted-foreground hover:text-foreground transition-colors">Certificates</a>
              <a href="#ai-chat" className="text-muted-foreground hover:text-foreground transition-colors">AI Chat</a>
            </div>
            
            <Button variant="hero" size="sm">Get Started</Button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Empowering Young Digital Citizens</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Help Children
              <span className="block text-gradient">Learn & Grow</span>
              <span className="block">Digitally</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              LittleSteps empowers children to use digital devices for learning, creativity, and growth with healthy habits and parental guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Explore Features
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-foreground">10,000+ Families</p>
                <p className="text-sm text-muted-foreground">trust LittleSteps</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-coral/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Happy children learning with digital devices" 
                className="relative rounded-3xl shadow-float w-full"
              />
            </div>
            
            {/* Attention Wallet */}
            <AttentionWallet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
