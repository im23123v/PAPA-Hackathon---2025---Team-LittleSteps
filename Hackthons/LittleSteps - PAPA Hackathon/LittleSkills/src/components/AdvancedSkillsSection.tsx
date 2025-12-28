import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Lightbulb, 
  Rocket, 
  Heart, 
  BookOpen, 
  Users,
  Lock
} from "lucide-react";
import { Button } from "./ui/button";

const advancedSkills = [
  {
    title: "Creative Problem Solving",
    description: "Think outside the box to find unique solutions",
    icon: Lightbulb,
  },
  {
    title: "Project Planning",
    description: "Plan and execute complex projects successfully",
    icon: Rocket,
  },
  {
    title: "Innovation Thinking",
    description: "Develop ideas that change the world",
    icon: Zap,
  },
  {
    title: "Tech-for-Good Mindset",
    description: "Use technology to make a positive impact",
    icon: Heart,
  },
  {
    title: "Independent Learning",
    description: "Master the art of self-directed education",
    icon: BookOpen,
  },
  {
    title: "Mentorship Readiness",
    description: "Prepare to guide and help others learn",
    icon: Users,
  },
];

const AdvancedSkillsSection = () => {
  return (
    <section id="advanced" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 gradient-hero rounded-full mb-4">
            <Lock className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Unlockable</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-fredoka mb-4">
            Advanced Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For fast learners ready to take on bigger challenges. 
            These advanced skills prepare you for leadership and innovation!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {advancedSkills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover:scale-105 cursor-pointer border-2 border-dashed border-primary/30 hover:border-primary bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto gradient-hero rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow-teal">
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-fredoka font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
                
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium">
                  <Lock className="w-3 h-3" />
                  <span>Complete 5 skills to unlock</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSkillsSection;
