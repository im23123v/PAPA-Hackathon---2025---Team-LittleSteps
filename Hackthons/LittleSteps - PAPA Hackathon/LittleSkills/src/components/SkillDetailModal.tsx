import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LucideIcon, Play, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";

interface Video {
  title: string;
  youtubeId: string;
  duration: string;
}

interface Step {
  title: string;
  description: string;
}

export interface SkillDetailData {
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  colorClass: string;
  lightColorClass: string;
  skills: string[];
  steps: Step[];
  videos: Video[];
}

interface SkillDetailModalProps {
  skill: SkillDetailData | null;
  isOpen: boolean;
  onClose: () => void;
}

const SkillDetailModal = ({ skill, isOpen, onClose }: SkillDetailModalProps) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className={`${skill.lightColorClass} p-6 rounded-t-3xl`}>
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 bg-card rounded-2xl flex items-center justify-center shadow-md`}>
                <Icon className={`w-8 h-8 ${skill.colorClass}`} />
              </div>
              <div>
                <DialogTitle className="text-2xl font-fredoka">{skill.title}</DialogTitle>
                <p className="text-muted-foreground mt-1">{skill.description}</p>
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-8">
          {/* Full Description */}
          <div>
            <h3 className="text-lg font-fredoka font-semibold mb-3">About This Skill</h3>
            <p className="text-muted-foreground leading-relaxed">{skill.fullDescription}</p>
          </div>

          {/* Skills Tags */}
          <div>
            <h3 className="text-lg font-fredoka font-semibold mb-3">What You'll Learn</h3>
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((s, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full ${skill.lightColorClass} ${skill.colorClass} font-medium text-sm`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Steps */}
          <div>
            <h3 className="text-lg font-fredoka font-semibold mb-4">Learning Path</h3>
            <div className="space-y-4">
              {skill.steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 bg-muted/50 rounded-2xl hover:bg-muted transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full ${skill.lightColorClass} flex items-center justify-center flex-shrink-0`}>
                    <span className={`font-fredoka font-bold ${skill.colorClass}`}>{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold font-fredoka">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Videos */}
          <div>
            <h3 className="text-lg font-fredoka font-semibold mb-4">Related Videos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skill.videos.map((video) => (
                <div key={video.youtubeId} className="rounded-2xl overflow-hidden bg-muted/30 border border-border">
                  <div className="relative aspect-video">
                    {playingVideo === video.youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img 
                          src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-foreground/20 hover:bg-foreground/30 transition-colors" />
                        <button 
                          onClick={() => setPlayingVideo(video.youtubeId)}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-14 h-14 gradient-hero rounded-full flex items-center justify-center shadow-glow-teal hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </button>
                        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 bg-foreground/80 rounded-md">
                          <Clock className="w-3 h-3 text-primary-foreground" />
                          <span className="text-xs text-primary-foreground font-medium">{video.duration}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm line-clamp-2">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-3 p-4 bg-green-light rounded-2xl">
            <CheckCircle2 className="w-6 h-6 text-green" />
            <p className="text-sm font-medium text-green">
              Start with Step 1 and work your way through. Watch videos to reinforce learning!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDetailModal;
