import { X, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ project, isOpen, onClose }: VideoModalProps) => {
  if (!isOpen || !project) return null;

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${project.youtubeSearch}`;
  const videoEmbedUrl = project.videoId 
    ? `https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/80 backdrop-blur-sm animate-scale-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl rounded-3xl bg-card p-6 shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-coral text-secondary-foreground shadow-lg transition-transform hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-muted text-3xl">
            {project.icon}
          </div>
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge variant={project.color as any}>{project.category}</Badge>
              <Badge variant={project.ageGroup === "5-10" ? "sunny" : "teal"}>
                Ages {project.ageGroup}
              </Badge>
              {project.level && (
                <Badge variant={project.level as any}>
                  {project.level.charAt(0).toUpperCase() + project.level.slice(1)}
                </Badge>
              )}
            </div>
            <h2 className="text-2xl font-bold text-card-foreground">
              {project.title}
            </h2>
            <p className="mt-1 text-muted-foreground">{project.description}</p>
          </div>
        </div>

        {/* Video Embed or Placeholder */}
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
          {videoEmbedUrl ? (
            <iframe
              src={videoEmbedUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="text-6xl">{project.icon}</div>
              <p className="text-lg text-muted-foreground">
                Click below to find the best tutorials for this project!
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            🎓 Perfect for ages {project.ageGroup} years
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open(youtubeSearchUrl, '_blank')}
          >
            <ExternalLink className="h-4 w-4" />
            Find More Videos on YouTube
          </Button>
        </div>
      </div>
    </div>
  );
};
