import { cn } from "@/lib/utils";

interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: string;
  unlockKey: string;
}

const badgeDefinitions: Badge[] = [
  // Easy to earn - First actions
  { id: "1", name: "First Step", emoji: "👣", description: "Complete your first habit!", color: "from-mint-light to-mint", unlockKey: "firstComplete" },
  { id: "2", name: "Rising Star", emoji: "⭐", description: "Add your first habit", color: "from-sunshine-light to-sunshine", unlockKey: "firstAdd" },
  { id: "3", name: "Go Getter", emoji: "🚀", description: "Complete 3 habits in one day", color: "from-coral-light to-coral", unlockKey: "complete3" },
  
  // Week 1 achievements
  { id: "4", name: "Early Bird", emoji: "🌅", description: "Wake up on time for 3 days", color: "from-sky-light to-sky", unlockKey: "earlyBird" },
  { id: "5", name: "Bookworm", emoji: "📖", description: "Read for 2 days in a row", color: "from-teal-light to-teal", unlockKey: "bookworm" },
  { id: "6", name: "Tidy Tiger", emoji: "🐯", description: "Clean room for 2 days", color: "from-lavender-light to-lavender", unlockKey: "tidyTiger" },
  { id: "7", name: "Helper Bee", emoji: "🐝", description: "Help with chores once", color: "from-sunshine-light to-sunshine", unlockKey: "helperBee" },
  { id: "8", name: "Kind Heart", emoji: "💝", description: "Do something kind today", color: "from-coral-light to-coral", unlockKey: "kindHeart" },
  
  // Streak badges
  { id: "9", name: "3-Day Streak", emoji: "🔥", description: "3 days in a row!", color: "from-coral-light to-coral", unlockKey: "streak3" },
  { id: "10", name: "5-Day Streak", emoji: "💪", description: "5 days strong!", color: "from-teal-light to-teal", unlockKey: "streak5" },
  { id: "11", name: "Week Warrior", emoji: "🏆", description: "Complete a full week", color: "from-lavender-light to-lavender", unlockKey: "weekWarrior" },
  
  // Skill badges
  { id: "12", name: "Focus Friend", emoji: "🎯", description: "Stay focused for 10 mins", color: "from-sky-light to-sky", unlockKey: "focusFriend" },
  { id: "13", name: "Homework Hero", emoji: "📚", description: "Finish homework first", color: "from-mint-light to-mint", unlockKey: "homeworkHero" },
  { id: "14", name: "Screen Smart", emoji: "📱", description: "Follow screen time once", color: "from-sunshine-light to-sunshine", unlockKey: "screenSmart" },
  
  // Fun badges
  { id: "15", name: "Super Sipper", emoji: "💧", description: "Drink water 5 times", color: "from-sky-light to-sky", unlockKey: "superSipper" },
  { id: "16", name: "Veggie Victor", emoji: "🥦", description: "Eat veggies 3 days", color: "from-mint-light to-mint", unlockKey: "veggieVictor" },
  { id: "17", name: "Sleep Star", emoji: "🌙", description: "Sleep on time 3 nights", color: "from-lavender-light to-lavender", unlockKey: "sleepStar" },
  { id: "18", name: "Exercise Expert", emoji: "🏃", description: "Exercise 3 times", color: "from-coral-light to-coral", unlockKey: "exerciseExpert" },
  
  // Master badges
  { id: "19", name: "Habit Master", emoji: "👑", description: "Complete 10 habits", color: "from-sunshine-light to-sunshine", unlockKey: "complete10" },
  { id: "20", name: "Legend", emoji: "🌟", description: "Earn 15 badges!", color: "from-teal-light to-teal", unlockKey: "legend" },
];

interface BadgeDisplayProps {
  unlockedBadges: Set<string>;
}

export function BadgeDisplay({ unlockedBadges }: BadgeDisplayProps) {
  const earnedCount = badgeDefinitions.filter((b) => unlockedBadges.has(b.unlockKey)).length;

  return (
    <section className="py-12 sm:py-16 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            🏅 Discipline Badges
          </h2>
          <p className="text-muted-foreground">
            Earn badges by building good habits! You've earned {earnedCount} of {badgeDefinitions.length} badges.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {badgeDefinitions.map((badge, index) => {
            const earned = unlockedBadges.has(badge.unlockKey);
            return (
              <div
                key={badge.id}
                className={cn(
                  "relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 opacity-0 animate-scale-in",
                  earned
                    ? `bg-gradient-to-br ${badge.color} shadow-card hover:shadow-card-hover hover:-translate-y-1`
                    : "bg-card border-2 border-dashed border-muted-foreground/30"
                )}
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
              >
                <div
                  className={cn(
                    "text-4xl mb-2 transition-all",
                    earned ? "" : "grayscale opacity-40"
                  )}
                >
                  {badge.emoji}
                </div>
                <h3
                  className={cn(
                    "font-bold text-sm text-center mb-1",
                    earned ? "text-primary-foreground" : "text-muted-foreground"
                  )}
                >
                  {badge.name}
                </h3>
                <p
                  className={cn(
                    "text-xs text-center",
                    earned ? "text-primary-foreground/80" : "text-muted-foreground/60"
                  )}
                >
                  {badge.description}
                </p>
                {!earned && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card/60 rounded-2xl">
                    <span className="text-2xl">🔒</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BadgeDisplay;
