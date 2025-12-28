import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Globe } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-sky/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="text-center relative z-10 px-4">
        <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
          <Globe className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="mb-4 text-6xl md:text-8xl font-display font-bold text-foreground">
          404
        </h1>
        
        <p className="mb-2 text-2xl font-display font-semibold text-foreground">
          Oops! World Not Found
        </p>
        
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Looks like this world doesn't exist yet. Maybe it's waiting for you to create it!
        </p>
        
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            <Home className="w-5 h-5" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
