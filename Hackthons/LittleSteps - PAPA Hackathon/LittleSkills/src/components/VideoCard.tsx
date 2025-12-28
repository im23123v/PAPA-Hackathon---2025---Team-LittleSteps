import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Star } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  youtubeId: string;
  duration: string;
  category: string;
  ageGroup: string;
  thumbnail?: string;
}

const VideoCard = ({ 
  title, 
  youtubeId, 
  duration, 
  category, 
  ageGroup,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <Card className="group overflow-hidden hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center shadow-glow-teal group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </button>
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium">
                {ageGroup}
              </span>
            </div>
            <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-foreground/80 rounded-md">
              <Clock className="w-3 h-3 text-primary-foreground" />
              <span className="text-xs text-primary-foreground font-medium">{duration}</span>
            </div>
          </>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 text-yellow fill-yellow" />
          <span className="text-xs text-muted-foreground font-medium">{category}</span>
        </div>
        <h3 className="font-fredoka font-semibold line-clamp-2">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
