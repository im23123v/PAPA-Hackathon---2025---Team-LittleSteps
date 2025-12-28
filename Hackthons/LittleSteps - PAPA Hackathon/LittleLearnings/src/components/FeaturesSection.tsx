import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Wrench, 
  GraduationCap, 
  Timer, 
  Palmtree, 
  Globe, 
  FolderKanban,
  Target,
  Shield,
  BookOpen,
  ShoppingBag,
  Brain,
  Heart
} from "lucide-react";

const features = [
  {
    name: "LittleCuriosity",
    description: "Spark wonder and encourage exploration",
    icon: Lightbulb,
    color: "from-sunshine to-coral",
    bgColor: "bg-sunshine-light"
  },
  {
    name: "LittleSkills",
    description: "Build practical life skills step by step",
    icon: Wrench,
    color: "from-mint to-primary",
    bgColor: "bg-mint-light"
  },
  {
    name: "LittleCourses",
    description: "Structured learning paths for every age",
    icon: GraduationCap,
    color: "from-primary to-lavender",
    bgColor: "bg-sky-light"
  },
  {
    name: "LittleDiscipline",
    description: "Develop healthy screen time habits",
    icon: Timer,
    color: "from-coral to-secondary",
    bgColor: "bg-coral-light"
  },
  {
    name: "LittleWeekends",
    description: "Fun weekend activities and challenges",
    icon: Palmtree,
    color: "from-mint to-sunshine",
    bgColor: "bg-mint-light"
  },
  {
    name: "LittleWorlds",
    description: "Explore virtual learning environments",
    icon: Globe,
    color: "from-lavender to-primary",
    bgColor: "bg-lavender-light"
  },
  {
    name: "LittleProjects",
    description: "Hands-on creative projects to build",
    icon: FolderKanban,
    color: "from-coral to-sunshine",
    bgColor: "bg-coral-light"
  },
  {
    name: "Habit Box",
    description: "Track and reward positive habits",
    icon: Target,
    color: "from-primary to-mint",
    bgColor: "bg-sky-light"
  },
  {
    name: "LittleAwareness",
    description: "Mindfulness and emotional intelligence",
    icon: Shield,
    color: "from-lavender to-coral",
    bgColor: "bg-lavender-light"
  },
  {
    name: "LittleBooks",
    description: "Curated digital library for children",
    icon: BookOpen,
    color: "from-sunshine to-mint",
    bgColor: "bg-sunshine-light"
  },
  {
    name: "LittleStore",
    description: "Educational resources and materials",
    icon: ShoppingBag,
    color: "from-coral to-lavender",
    bgColor: "bg-coral-light"
  },
  {
    name: "LittleLearnings",
    description: "Personalized learning recommendations",
    icon: Brain,
    color: "from-primary to-sunshine",
    bgColor: "bg-sky-light"
  },
  {
    name: "LittleMorals",
    description: "Stories and lessons on values",
    icon: Heart,
    color: "from-coral to-mint",
    bgColor: "bg-coral-light"
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-lavender/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-mint-light text-mint font-semibold text-sm mb-4">
            Our Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything Your Child Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete ecosystem designed to make digital time productive, safe, and fun for children of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.name} 
              variant="feature"
              className="group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-soft`}>
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{feature.name}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
