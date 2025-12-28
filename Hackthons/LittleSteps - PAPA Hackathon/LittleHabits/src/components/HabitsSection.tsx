import { HabitCard } from "./HabitCard";
import { Habit } from "@/data/habits";

interface HabitsSectionProps {
  habits: Habit[];
  categoryTitle: string;
  categoryIcon: string;
  onPlayVideo: (videoQuery: string, title: string, habit: Habit) => void;
}

export function HabitsSection({ habits, categoryTitle, categoryIcon, onPlayVideo }: HabitsSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span>{categoryIcon}</span>
        <span>{categoryTitle}</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {habits.map((habit, index) => (
          <HabitCard
            key={habit.id}
            title={habit.title}
            description={habit.description}
            icon={habit.icon}
            color={habit.color}
            index={index}
            onPlayClick={() => onPlayVideo(habit.videoQuery, habit.title, habit)}
          />
        ))}
      </div>
    </div>
  );
}

export default HabitsSection;
