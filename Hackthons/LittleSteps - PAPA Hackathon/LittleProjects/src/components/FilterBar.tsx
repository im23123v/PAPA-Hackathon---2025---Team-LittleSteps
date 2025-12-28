import { Button } from "@/components/ui/button";
import { categories } from "@/data/projects";

interface FilterBarProps {
  selectedAge: "all" | "5-10" | "10-15";
  selectedCategory: string;
  selectedLevel: "all" | "beginner" | "intermediate" | "advanced";
  onAgeChange: (age: "all" | "5-10" | "10-15") => void;
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: "all" | "beginner" | "intermediate" | "advanced") => void;
}

export const FilterBar = ({
  selectedAge,
  selectedCategory,
  selectedLevel,
  onAgeChange,
  onCategoryChange,
  onLevelChange,
}: FilterBarProps) => {
  const ageOptions: Array<{ value: "all" | "5-10" | "10-15"; label: string; emoji: string }> = [
    { value: "all", label: "All Ages", emoji: "👥" },
    { value: "5-10", label: "Ages 5-10", emoji: "🧒" },
    { value: "10-15", label: "Ages 10-15", emoji: "🧑‍🎓" },
  ];

  const levelOptions: Array<{ value: "all" | "beginner" | "intermediate" | "advanced"; label: string }> = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "🌱 Beginner" },
    { value: "intermediate", label: "⚡ Intermediate" },
    { value: "advanced", label: "🚀 Advanced" },
  ];

  return (
    <section className="py-8">
      <div className="container">
        {/* Age Filter */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Age Group
          </h3>
          <div className="flex flex-wrap gap-2">
            {ageOptions.map((age) => (
              <Button
                key={age.value}
                variant={selectedAge === age.value ? "pillActive" : "pill"}
                size="sm"
                onClick={() => onAgeChange(age.value)}
              >
                <span>{age.emoji}</span>
                {age.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Level Filter (only show for 10-15 age group) */}
        {(selectedAge === "10-15" || selectedAge === "all") && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Skill Level
            </h3>
            <div className="flex flex-wrap gap-2">
              {levelOptions.map((level) => (
                <Button
                  key={level.value}
                  variant={selectedLevel === level.value ? "pillActive" : "pill"}
                  size="sm"
                  onClick={() => onLevelChange(level.value)}
                >
                  {level.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "pillActive" : "pill"}
                size="sm"
                onClick={() => onCategoryChange(category.name)}
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
