import SkillCard from "@/components/SkillCard";
import { 
  Code, 
  Puzzle, 
  Target, 
  Shield, 
  Presentation, 
  Heart 
} from "lucide-react";

const skillBuilderSkills = [
  {
    title: "Technical Skills",
    description: "Master programming fundamentals and computational thinking!",
    icon: Code,
    colorClass: "text-primary",
    lightColorClass: "bg-teal-light",
    skills: ["Python basics", "C fundamentals", "Computational thinking", "Debugging mindset", "Algorithmic thinking"]
  },
  {
    title: "Problem Solving & Logic",
    description: "Think like a programmer and solve complex challenges!",
    icon: Puzzle,
    colorClass: "text-accent",
    lightColorClass: "bg-purple-light",
    skills: ["Breaking problems down", "Flowcharts", "Decision-making", "Analytical thinking", "Pseudocode"]
  },
  {
    title: "Productivity & Management",
    description: "Build habits that lead to success in everything you do!",
    icon: Target,
    colorClass: "text-coral",
    lightColorClass: "bg-coral-light",
    skills: ["Goal setting", "Time management", "Habit tracking", "Task prioritization", "Consistency"]
  },
  {
    title: "Digital Citizenship",
    description: "Stay safe online and be a responsible digital citizen!",
    icon: Shield,
    colorClass: "text-blue",
    lightColorClass: "bg-blue-light",
    skills: ["Cyber safety", "Scam awareness", "Password hygiene", "Social media safety", "Ethical tech use"]
  },
  {
    title: "Communication & Leadership",
    description: "Lead teams, present ideas, and collaborate effectively!",
    icon: Presentation,
    colorClass: "text-yellow",
    lightColorClass: "bg-yellow-light",
    skills: ["Presentation skills", "Explaining tech ideas", "Team collaboration", "Feedback skills", "Leadership basics"]
  },
  {
    title: "Life Skills",
    description: "Essential non-tech skills for a balanced, successful life!",
    icon: Heart,
    colorClass: "text-green",
    lightColorClass: "bg-green-light",
    skills: ["Financial awareness", "Decision making", "Emotional intelligence", "Stress handling", "Growth mindset"]
  }
];

const SkillBuildersSection = () => {
  return (
    <section id="skill-builders" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-primary">Ages 10-15</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-fredoka mb-4">
            Skill Builders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Growth skills that prepare you for the future. Learn to code, lead, 
            and thrive in the digital world!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillBuilderSkills.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillBuildersSection;
