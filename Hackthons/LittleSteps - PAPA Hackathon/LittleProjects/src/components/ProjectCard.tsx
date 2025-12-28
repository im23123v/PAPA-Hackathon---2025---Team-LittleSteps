import { Play } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const colorClasses = {
  teal: "bg-teal/10 hover:shadow-glow-teal border-teal/20",
  coral: "bg-coral/10 hover:shadow-glow-coral border-coral/20",
  sunny: "bg-sunny/10 hover:shadow-lg border-sunny/20",
  purple: "bg-purple/10 hover:shadow-lg border-purple/20",
  mint: "bg-mint/10 hover:shadow-lg border-mint/20",
  sky: "bg-sky/10 hover:shadow-lg border-sky/20",
};

const iconBgClasses = {
  teal: "bg-teal/20",
  coral: "bg-coral/20",
  sunny: "bg-sunny/20",
  purple: "bg-purple/20",
  mint: "bg-mint/20",
  sky: "bg-sky/20",
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1",
        colorClasses[project.color]
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
          iconBgClasses[project.color]
        )}
      >
        {project.icon}
      </div>

      {/* Badges */}
      <div className="mb-3 flex flex-wrap gap-2">
        <Badge variant={project.color as any}>{project.category}</Badge>
        {project.level && (
          <Badge variant={project.level as any}>
            {project.level.charAt(0).toUpperCase() + project.level.slice(1)}
          </Badge>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-foreground transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
        {project.description}
      </p>

      {/* Play Button */}
      <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Play className="h-4 w-4 fill-current" />
        </div>
        Watch Tutorial
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
    </div>
  );
};
