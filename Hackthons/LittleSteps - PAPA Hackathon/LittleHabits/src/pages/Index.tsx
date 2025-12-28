import { useState, useRef, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AgeGroupTabs from "@/components/AgeGroupTabs";
import HabitsSection from "@/components/HabitsSection";
import DailyTasks from "@/components/DailyTasks";
import BadgeDisplay from "@/components/BadgeDisplay";
import HabitBox from "@/components/HabitBox";
import HabitDetailModal from "@/components/HabitDetailModal";
import FloatingAddHabit from "@/components/FloatingAddHabit";
import { habitsAge5to10, habitsAge10to15, categoriesAge5to10, categoriesAge10to15, Habit } from "@/data/habits";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type AgeGroup = "5-10" | "10-15";

interface CustomHabit {
  id: string;
  title: string;
  emoji: string;
  streak: number;
  completedToday: boolean;
  createdAt: Date;
}

const Index = () => {
  const [activeGroup, setActiveGroup] = useState<AgeGroup>("5-10");
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const [customHabits, setCustomHabits] = useState<CustomHabit[]>([]);
  const [unlockedBadges, setUnlockedBadges] = useState<Set<string>>(new Set());
  const [totalHabitsAdded, setTotalHabitsAdded] = useState(0);
  const [totalHabitsCompleted, setTotalHabitsCompleted] = useState(0);
  const habitsRef = useRef<HTMLDivElement>(null);
  const habitBoxRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const unlockBadge = (key: string, badgeName: string, emoji: string) => {
    setUnlockedBadges((prev) => {
      if (prev.has(key)) return prev;
      const newSet = new Set(prev);
      newSet.add(key);
      toast({
        title: `${emoji} Badge Unlocked!`,
        description: `You earned the "${badgeName}" badge!`,
      });
      return newSet;
    });
  };

  // Check badge unlocks based on stats
  useEffect(() => {
    if (totalHabitsAdded >= 1) unlockBadge("firstAdd", "Rising Star", "⭐");
    if (totalHabitsCompleted >= 1) unlockBadge("firstComplete", "First Step", "👣");
    if (totalHabitsCompleted >= 3) unlockBadge("complete3", "Go Getter", "🚀");
    if (totalHabitsCompleted >= 10) unlockBadge("complete10", "Habit Master", "👑");
  }, [totalHabitsAdded, totalHabitsCompleted]);

  const handleAddHabit = (title: string, emoji: string) => {
    const newHabit: CustomHabit = {
      id: Date.now().toString(),
      title,
      emoji,
      streak: 0,
      completedToday: false,
      createdAt: new Date(),
    };
    setCustomHabits((prev) => [...prev, newHabit]);
    setTotalHabitsAdded((prev) => prev + 1);
    habitBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCompleteHabit = (habitId: string) => {
    setCustomHabits((prev) =>
      prev.map((h) =>
        h.id === habitId && !h.completedToday
          ? { ...h, completedToday: true, streak: h.streak + 1 }
          : h
      )
    );
    const habit = customHabits.find((h) => h.id === habitId);
    if (habit && !habit.completedToday) {
      setTotalHabitsCompleted((prev) => prev + 1);
    }
  };

  const handleGetStarted = () => {
    habitsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenHabit = (habit: Habit) => {
    setSelectedHabit(habit);
  };

  const currentHabits = activeGroup === "5-10" ? habitsAge5to10 : habitsAge10to15;
  const currentCategories = activeGroup === "5-10" ? categoriesAge5to10 : categoriesAge10to15;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-xl font-black">
              <span className="text-foreground">LITTLE</span>
              <span className="text-gradient-hero">DISCIPLINE</span>
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#habits" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Habits</a>
            <a href="#habitbox" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">HabitBox</a>
            <a href="#tasks" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Daily Tasks</a>
            <a href="#badges" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Badges</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection onGetStarted={handleGetStarted} />

        {/* Habits Section */}
        <section id="habits" ref={habitsRef} className="py-12 sm:py-16 bg-muted/50">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                📖 Choose Your Age Group
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click any habit to learn the Atomic Habits method and watch educational videos!
              </p>
            </div>

            <AgeGroupTabs activeGroup={activeGroup} onGroupChange={setActiveGroup} />

            <div className="max-w-7xl mx-auto">
              {currentCategories.map((category) => {
                const categoryHabits = currentHabits.filter((h) => h.category === category.key);
                if (categoryHabits.length === 0) return null;
                return (
                  <HabitsSection
                    key={category.key}
                    habits={categoryHabits}
                    categoryTitle={category.title}
                    categoryIcon={category.icon}
                    onPlayVideo={(_, __, habit) => handleOpenHabit(habit)}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section id="habitbox" ref={habitBoxRef}>
          <HabitBox habits={customHabits} setHabits={setCustomHabits} onComplete={handleCompleteHabit} onAdd={() => setTotalHabitsAdded((prev) => prev + 1)} />
        </section>
        <section id="tasks"><DailyTasks /></section>
        <section id="badges"><BadgeDisplay unlockedBadges={unlockedBadges} /></section>
      </main>

      <FloatingAddHabit onAddHabit={handleAddHabit} />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">⭐</span>
            <span className="text-xl font-black">
              <span className="text-foreground">LITTLE</span>
              <span className="text-gradient-hero">DISCIPLINE</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for kids everywhere
          </p>
        </div>
      </footer>

      <HabitDetailModal
        isOpen={!!selectedHabit}
        onClose={() => setSelectedHabit(null)}
        habit={selectedHabit}
      />
    </div>
  );
};

export default Index;
