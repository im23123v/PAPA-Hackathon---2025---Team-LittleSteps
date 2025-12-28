import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "health" | "mental" | "environment" | "money" | "digital" | "family";
  delay?: number;
  slug?: string;
  isClickable?: boolean;
}

const colorVariants = {
  health: "bg-health-light border-health/30 hover:border-health group-hover:text-health",
  mental: "bg-mental-light border-mental/30 hover:border-mental group-hover:text-mental",
  environment: "bg-environment-light border-environment/30 hover:border-environment group-hover:text-environment",
  money: "bg-money-light border-money/30 hover:border-money group-hover:text-money",
  digital: "bg-digital-light border-digital/30 hover:border-digital group-hover:text-digital",
  family: "bg-family-light border-family/30 hover:border-family group-hover:text-family",
};

const iconColorVariants = {
  health: "bg-health text-primary-foreground",
  mental: "bg-mental text-primary-foreground",
  environment: "bg-environment text-primary-foreground",
  money: "bg-money text-accent-foreground",
  digital: "bg-digital text-primary-foreground",
  family: "bg-family text-primary-foreground",
};

const TopicCard = ({ icon: Icon, title, description, color, delay = 0, slug, isClickable = false }: TopicCardProps) => {
  const cardContent = (
    <>
      {/* Icon */}
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
        iconColorVariants[color]
      )}>
        <Icon className="w-7 h-7" />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-current transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Hover arrow */}
      <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Clickable indicator for health topics */}
      {isClickable && (
        <div className="absolute bottom-4 right-4 text-xs font-medium text-health opacity-0 group-hover:opacity-100 transition-opacity">
          Click to learn more →
        </div>
      )}
    </>
  );

  const cardClasses = cn(
    "group relative p-6 rounded-3xl border-2 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-card",
    colorVariants[color]
  );

  if (isClickable && slug) {
    return (
      <Link
        to={`/health/${slug}`}
        className={cardClasses}
        style={{ animationDelay: `${delay}ms` }}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className={cardClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      {cardContent}
    </div>
  );
};

export default TopicCard;
