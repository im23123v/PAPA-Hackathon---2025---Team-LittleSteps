import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const buildings = [
  {
    emoji: "🏡",
    name: "Home",
    description: "Daily routines & habits tracking",
    details: "Set bedtime reminders, track homework, and build healthy daily habits together.",
    color: "bg-primary/5 border-primary/20",
    iconBg: "bg-primary/10",
  },
  {
    emoji: "🎨",
    name: "Art Studio",
    description: "Drawing & creativity challenges",
    details: "Express yourself through art! Drawing contests, design challenges, and storytelling.",
    color: "bg-coral/5 border-coral/20",
    iconBg: "bg-coral/10",
  },
  {
    emoji: "📚",
    name: "Knowledge Hub",
    description: "Courses, curiosity & projects",
    details: "Learn something new every day. Complete courses, explore projects, and ask questions.",
    color: "bg-sky/5 border-sky/20",
    iconBg: "bg-sky/10",
  },
  {
    emoji: "🌳",
    name: "Eco Park",
    description: "Kindness & eco tasks",
    details: "Plant virtual trees, complete eco challenges, and spread kindness in your world.",
    color: "bg-nature/5 border-nature/20",
    iconBg: "bg-nature/10",
  },
  {
    emoji: "🏆",
    name: "Hall of Fame",
    description: "Badges & leaderboards",
    details: "Celebrate achievements! View badges earned, climb positive leaderboards, and shine.",
    color: "bg-lavender/5 border-lavender/20",
    iconBg: "bg-lavender/10",
  },
];

export function BuildingsSection() {
  return (
    <section id="buildings" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="coral" className="mb-4">
            🏗️ Buildings
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Buildings with{" "}
            <span className="text-primary">Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each building in your world has a special purpose. Complete activities to unlock new 
            features and watch your world grow!
          </p>
        </div>

        {/* Buildings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildings.map((building, index) => (
            <Card 
              key={building.name}
              className={`group cursor-pointer border-2 transition-all duration-300 hover:scale-105 hover:shadow-medium ${building.color} animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${building.iconBg} flex items-center justify-center text-3xl group-hover:animate-wiggle`}>
                    {building.emoji}
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {building.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {building.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {building.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
