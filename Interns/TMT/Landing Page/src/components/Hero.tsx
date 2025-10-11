import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Users, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional background */}
      <div className="absolute inset-0 professional-gradient"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="TechMecha Torque - Professional University Platform" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-32 left-16 opacity-30">
        <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center animate-float border border-white/20">
          <TrendingUp className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="absolute top-48 right-20 opacity-30" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center animate-float border border-white/20">
          <Shield className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="mb-8 animate-fade-up">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 glow-effect">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Enterprise EdTech Solutions</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/90 to-accent backdrop-blur-md rounded-full px-6 py-3 border border-white/30 animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm font-bold">Coming Soon</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">TechMecha</span>
            <span className="text-gradient block">Torque</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive digital transformation platform designed specifically for universities. 
            Streamline operations, enhance learning experiences, and modernize your institution 
            with our integrated suite of advanced tools.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg group shadow-professional-xl transition-all duration-300"
          >
            Schedule Demo
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('features');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-white/40 text-white hover:bg-white/15 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;