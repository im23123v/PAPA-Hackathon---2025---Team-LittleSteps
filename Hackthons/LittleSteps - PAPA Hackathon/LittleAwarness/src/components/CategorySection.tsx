import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import TopicCard from "./TopicCard";

interface Topic {
  icon: LucideIcon;
  title: string;
  description: string;
  slug?: string;
}

interface CategorySectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: "health" | "mental" | "environment" | "money" | "digital" | "family";
  topics: Topic[];
  reverse?: boolean;
}

const colorVariants = {
  health: "text-health",
  mental: "text-mental",
  environment: "text-environment",
  money: "text-money",
  digital: "text-digital",
  family: "text-family",
};

const bgVariants = {
  health: "bg-health/10",
  mental: "bg-mental/10",
  environment: "bg-environment/10",
  money: "bg-money/10",
  digital: "bg-digital/10",
  family: "bg-family/10",
};

const CategorySection = ({ id, icon: Icon, title, subtitle, color, topics, reverse = false }: CategorySectionProps) => {
  const isHealthSection = id === "health";

  return (
    <section id={id} className={cn("py-16 md:py-24", bgVariants[color])}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn("flex flex-col md:flex-row items-start md:items-center gap-4 mb-12", reverse && "md:flex-row-reverse")}>
          <div className={cn(
            "w-16 h-16 rounded-3xl flex items-center justify-center",
            bgVariants[color]
          )}>
            <Icon className={cn("w-8 h-8", colorVariants[color])} />
          </div>
          <div className={cn(reverse && "md:text-right")}>
            <h2 className={cn("text-3xl md:text-4xl font-display font-bold mb-2", colorVariants[color])}>
              {title}
            </h2>
            <p className="text-muted-foreground text-lg">{subtitle}</p>
            {isHealthSection && (
              <p className="text-sm text-health mt-2 font-medium">✨ Click any topic to explore in detail!</p>
            )}
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <TopicCard
              key={topic.title}
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
              color={color}
              delay={index * 100}
              slug={topic.slug}
              isClickable={isHealthSection}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
