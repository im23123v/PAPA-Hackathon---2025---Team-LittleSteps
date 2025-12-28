import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  title?: string;
  subtitle?: string;
}

export const ProjectGrid = ({
  projects,
  onProjectClick,
  title,
  subtitle,
}: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="mb-4 text-6xl">🔍</div>
        <h3 className="mb-2 text-xl font-bold text-foreground">No projects found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters to find more projects!
        </p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && (
              <h2 className="mb-2 text-3xl font-bold text-foreground lg:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
            >
              <ProjectCard
                project={project}
                onClick={() => onProjectClick(project)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
