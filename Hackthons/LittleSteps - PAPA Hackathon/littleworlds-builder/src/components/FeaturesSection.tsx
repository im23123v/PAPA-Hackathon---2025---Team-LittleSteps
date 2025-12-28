import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Users, 
  Building2, 
  Trophy, 
  Flame, 
  Target,
  Heart,
  Coins
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Create a World",
    description: "Build themed virtual worlds around Learning, Nature, Creativity, or Tech-for-Good.",
    color: "primary",
    badge: "🌍 Explore",
  },
  {
    icon: Users,
    title: "Add Friends Safely",
    description: "Join via invite code or QR. Age-matched groups with emoji-only chat for safety.",
    color: "sky",
    badge: "🛡️ Safe",
  },
  {
    icon: Building2,
    title: "Collaborative Building",
    description: "Worlds grow visually as your team completes good activities together!",
    color: "nature",
    badge: "🏗️ Build",
  },
  {
    icon: Trophy,
    title: "Positive Leaderboards",
    description: "Compete on Consistency, Creativity, Learning, and Good Deeds - not toxic rankings.",
    color: "coral",
    badge: "🏆 Compete",
  },
  {
    icon: Flame,
    title: "Streaks & Consistency",
    description: "Individual and team streaks with soft resets - no punishment, just encouragement!",
    color: "lavender",
    badge: "🔥 Streak",
  },
  {
    icon: Target,
    title: "Team Goals",
    description: "Complete shared goals together to unlock amazing world upgrades.",
    color: "sky",
    badge: "🎯 Goals",
  },
  {
    icon: Heart,
    title: "Tech-for-Good",
    description: "Awareness tasks, kindness challenges, and eco activities to make a difference.",
    color: "nature",
    badge: "💚 Kind",
  },
  {
    icon: Coins,
    title: "Rewards & Economy",
    description: "Earn coins from challenges. Spend on world upgrades, customization, and badges!",
    color: "primary",
    badge: "💰 Earn",
  },
];

const colorMap = {
  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  sky: "bg-sky/20 text-sky-foreground group-hover:bg-sky group-hover:text-sky-foreground",
  nature: "bg-nature/10 text-nature group-hover:bg-nature group-hover:text-nature-foreground",
  coral: "bg-coral/10 text-coral group-hover:bg-coral group-hover:text-coral-foreground",
  lavender: "bg-lavender/10 text-lavender-foreground group-hover:bg-lavender group-hover:text-lavender-foreground",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">
            ✨ Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Everything Kids Love,{" "}
            <span className="text-primary">Parents Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A safe space where creativity meets good habits. Build worlds, complete challenges, 
            and grow together with friends!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group cursor-pointer border-2 border-transparent hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${colorMap[feature.color as keyof typeof colorMap]}`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <span className="text-2xl">{feature.badge.split(" ")[0]}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
