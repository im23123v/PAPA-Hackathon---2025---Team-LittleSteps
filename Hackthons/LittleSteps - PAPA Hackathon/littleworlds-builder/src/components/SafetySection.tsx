import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MessageCircle, Trophy, Eye, Sparkles, Ban } from "lucide-react";

const safetyFeatures = [
  {
    icon: MessageCircle,
    title: "No Free Chat",
    description: "Kids communicate through emojis and preset messages only. No strangers, no bullying.",
    color: "bg-nature/10 text-nature",
  },
  {
    icon: Trophy,
    title: "No Toxic Competition",
    description: "Positive leaderboards celebrate effort and kindness, not just winning.",
    color: "bg-sky/10 text-sky-foreground",
  },
  {
    icon: Ban,
    title: "No Pay-to-Win",
    description: "Everyone has fair access. Progress is earned through good actions, not money.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Eye,
    title: "Parent Overview",
    description: "Parents get a silent dashboard to see progress without interfering.",
    color: "bg-lavender/10 text-lavender-foreground",
  },
  {
    icon: Sparkles,
    title: "No Infinite Scroll",
    description: "Purpose-driven gameplay with meaningful goals. No addictive patterns.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Shield,
    title: "Age-Appropriate",
    description: "Different experiences for 5-10 and 10-15 year olds. Always appropriate.",
    color: "bg-nature/10 text-nature",
  },
];

const ageGroups = [
  {
    age: "5-10",
    title: "Little Explorers",
    features: ["Visual rewards & simple tasks", "Group celebrations", "Easy challenges", "Lots of encouragement"],
    emoji: "🧸",
  },
  {
    age: "10-15",
    title: "World Builders",
    features: ["Leadership roles", "Strategic planning", "Advanced challenges", "Mentoring younger kids"],
    emoji: "🚀",
  },
];

export function SafetySection() {
  return (
    <section id="safety" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-nature/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="nature" className="mb-4">
            🛡️ Safety First
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Safe by Design,{" "}
            <span className="text-primary">Fun by Nature</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We built LittleWorlds with child safety at its core. Parents can trust, kids can explore freely.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {safetyFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group border-2 border-transparent hover:border-nature/30 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center shrink-0`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Age Groups */}
        <div className="bg-muted/50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Age-Appropriate Experiences
            </h3>
            <p className="text-muted-foreground">
              Different features for different ages, all equally fun and safe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
              <Card 
                key={group.age}
                className="overflow-hidden border-2 hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 flex items-center gap-4">
                  <div className="text-5xl">{group.emoji}</div>
                  <div>
                    <div className="text-sm font-medium text-primary">Ages {group.age}</div>
                    <h4 className="font-display font-bold text-xl">{group.title}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {group.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
