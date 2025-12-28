import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface HabitCardProps {
  title: string;
  description: string;
  icon: string;
  color: "coral" | "teal" | "lavender" | "mint" | "sky" | "sunshine";
  onPlayClick: () => void;
  index: number;
}

const colorClasses = {
  coral: "from-coral-light to-coral",
  teal: "from-teal-light to-teal",
  lavender: "from-lavender-light to-lavender",
  mint: "from-mint-light to-mint",
  sky: "from-sky-light to-sky",
  sunshine: "from-sunshine-light to-sunshine",
};

const iconBgClasses = {
  coral: "bg-coral-dark/20",
  teal: "bg-teal-dark/20",
  lavender: "bg-lavender/30",
  mint: "bg-mint/30",
  sky: "bg-sky/30",
  sunshine: "bg-sunshine/30",
};

export function HabitCard({ title, description, icon, color, onPlayClick, index }: HabitCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden",
        colorClasses[color],
        "opacity-0 animate-slide-up"
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
      onClick={onPlayClick}
    >
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary-foreground/10 blur-xl" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-primary-foreground/10 blur-lg" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className={cn("text-3xl sm:text-4xl p-2 rounded-xl", iconBgClasses[color])}>
            {icon}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlayClick();
            }}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/90 text-foreground shadow-soft hover:scale-110 transition-transform duration-200 group-hover:animate-pulse-soft"
            aria-label="Play video"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </button>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-primary-foreground/80 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HabitCard;
