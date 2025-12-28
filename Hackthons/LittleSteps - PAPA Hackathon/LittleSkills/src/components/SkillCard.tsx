import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, ChevronRight } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  lightColorClass: string;
  skills: string[];
  delay?: number;
  onClick?: () => void;
}

const SkillCard = ({ 
  title, 
  description, 
  icon: Icon, 
  colorClass, 
  lightColorClass,
  skills,
  delay = 0,
  onClick 
}: SkillCardProps) => {
  return (
    <Card 
      className="group hover:scale-105 cursor-pointer overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 ${lightColorClass} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className={`w-7 h-7 ${colorClass}`} />
          </div>
          <div className={`w-8 h-8 rounded-full ${lightColorClass} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
            <ChevronRight className={`w-4 h-4 ${colorClass}`} />
          </div>
        </div>
        
        <h3 className="text-xl font-fredoka font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <span 
              key={index}
              className={`text-xs px-3 py-1 rounded-full ${lightColorClass} ${colorClass} font-medium`}
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
              +{skills.length - 3} more
            </span>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className={`text-xs font-medium ${colorClass} flex items-center gap-1`}>
            Click to explore
            <ChevronRight className="w-3 h-3" />
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
