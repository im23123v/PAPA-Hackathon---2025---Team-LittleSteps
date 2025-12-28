import { useState, Dispatch, SetStateAction } from "react";
import { Plus, Check, Trash2, Flame, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomHabit {
  id: string;
  title: string;
  emoji: string;
  streak: number;
  completedToday: boolean;
  createdAt: Date;
}

interface HabitBoxProps {
  habits: CustomHabit[];
  setHabits: Dispatch<SetStateAction<CustomHabit[]>>;
  onComplete?: (habitId: string) => void;
  onAdd?: () => void;
}

const defaultEmojis = ["📚", "🏃", "🎨", "🎵", "🧘", "💪", "🌱", "💧", "😴", "🍎"];

const suggestedHabits = [
  { title: "Read for 15 minutes", emoji: "📖" },
  { title: "Drink 8 glasses of water", emoji: "💧" },
  { title: "Practice gratitude", emoji: "🙏" },
  { title: "Exercise for 20 minutes", emoji: "🏃" },
  { title: "No phone for 1 hour", emoji: "📵" },
  { title: "Help someone today", emoji: "🤝" },
];

export function HabitBox({ habits, setHabits, onComplete, onAdd }: HabitBoxProps) {
  const [newHabitTitle, setNewHabitTitle] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("📚");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const addHabit = () => {
    if (newHabitTitle.trim()) {
      const newHabit: CustomHabit = {
        id: Date.now().toString(),
        title: newHabitTitle.trim(),
        emoji: selectedEmoji,
        streak: 0,
        completedToday: false,
        createdAt: new Date(),
      };
      setHabits([...habits, newHabit]);
      setNewHabitTitle("");
      setSelectedEmoji("📚");
      setShowAddForm(false);
      onAdd?.();
    }
  };

  const toggleHabit = (id: string) => {
    const habit = habits.find((h) => h.id === id);
    if (habit && !habit.completedToday) {
      onComplete?.(id);
    }
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          const newCompleted = !h.completedToday;
          return {
            ...h,
            completedToday: newCompleted,
            streak: newCompleted ? h.streak + 1 : Math.max(0, h.streak - 1),
          };
        }
        return h;
      })
    );
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const addSuggestedHabit = (suggestion: { title: string; emoji: string }) => {
    const newHabit: CustomHabit = {
      id: Date.now().toString(),
      title: suggestion.title,
      emoji: suggestion.emoji,
      streak: 0,
      completedToday: false,
      createdAt: new Date(),
    };
    setHabits([...habits, newHabit]);
    onAdd?.();
  };

  const completedCount = habits.filter((h) => h.completedToday).length;
  const totalStreak = habits.reduce((acc, h) => acc + h.streak, 0);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-2 rounded-full mb-4 shadow-glow-coral">
              <Target className="w-5 h-5" />
              <span className="font-bold">HabitBox</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              📦 Your Personal Habit Tracker
            </h2>
            <p className="text-muted-foreground">
              Build your own habits and track your streaks! Consistency is key.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-card rounded-2xl p-4 text-center shadow-card border-2 border-border">
              <div className="text-3xl font-black text-coral">{habits.length}</div>
              <div className="text-xs text-muted-foreground font-semibold">Total Habits</div>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-card border-2 border-border">
              <div className="text-3xl font-black text-teal">{completedCount}/{habits.length}</div>
              <div className="text-xs text-muted-foreground font-semibold">Done Today</div>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-card border-2 border-border">
              <div className="text-3xl font-black text-sunshine flex items-center justify-center gap-1">
                {totalStreak}
                <Flame className="w-6 h-6 text-coral" />
              </div>
              <div className="text-xs text-muted-foreground font-semibold">Total Streak</div>
            </div>
          </div>

          {/* Habit List */}
          <div className="bg-card rounded-3xl shadow-card border-2 border-border overflow-hidden">
            <div className="p-4 sm:p-6">
              {/* Existing Habits */}
              <div className="space-y-3 mb-6">
                {habits.map((habit, index) => (
                  <div
                    key={habit.id}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300",
                      habit.completedToday
                        ? "bg-mint/20 border-mint"
                        : "bg-background border-border hover:border-primary"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <button
                      onClick={() => toggleHabit(habit.id)}
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                        habit.completedToday
                          ? "bg-mint text-primary-foreground scale-105"
                          : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                      )}
                    >
                      {habit.completedToday ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <span className="text-2xl">{habit.emoji}</span>
                      )}
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <span
                        className={cn(
                          "font-semibold block truncate transition-all",
                          habit.completedToday ? "text-mint line-through" : "text-foreground"
                        )}
                      >
                        {habit.title}
                      </span>
                      {habit.streak > 0 && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Flame className="w-4 h-4 text-coral" />
                          <span>{habit.streak} day streak</span>
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => deleteHabit(habit.id)}
                      className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}

                {habits.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <div className="text-4xl mb-2">📭</div>
                    <p>No habits yet. Add your first one!</p>
                  </div>
                )}
              </div>

              {/* Add Habit Form */}
              {showAddForm ? (
                <div className="bg-muted/50 rounded-2xl p-4 space-y-4 animate-scale-in">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="w-12 h-12 rounded-xl bg-card border-2 border-border flex items-center justify-center text-2xl hover:border-primary transition-colors shrink-0"
                    >
                      {selectedEmoji}
                    </button>
                    <input
                      type="text"
                      value={newHabitTitle}
                      onChange={(e) => setNewHabitTitle(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addHabit()}
                      placeholder="Enter your new habit..."
                      className="flex-1 bg-card border-2 border-border rounded-xl px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      autoFocus
                    />
                  </div>
                  
                  {showEmojiPicker && (
                    <div className="flex flex-wrap gap-2 p-3 bg-card rounded-xl border-2 border-border">
                      {defaultEmojis.map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => {
                            setSelectedEmoji(emoji);
                            setShowEmojiPicker(false);
                          }}
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center text-xl hover:bg-muted transition-colors",
                            selectedEmoji === emoji && "bg-primary/20 ring-2 ring-primary"
                          )}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      className="flex-1"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="hero"
                      className="flex-1"
                      onClick={addHabit}
                      disabled={!newHabitTitle.trim()}
                    >
                      <Sparkles className="w-4 h-4" />
                      Add Habit
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-dashed border-2"
                  onClick={() => setShowAddForm(true)}
                >
                  <Plus className="w-5 h-5" />
                  Add New Habit
                </Button>
              )}
            </div>

            {/* Suggested Habits */}
            <div className="bg-muted/50 p-4 sm:p-6 border-t-2 border-border">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sunshine" />
                Quick Add Suggestions
              </h4>
              <div className="flex flex-wrap gap-2">
                {suggestedHabits.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => addSuggestedHabit(suggestion)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border-2 border-border hover:border-primary hover:shadow-soft transition-all text-sm font-medium"
                  >
                    <span>{suggestion.emoji}</span>
                    <span>{suggestion.title}</span>
                    <Plus className="w-4 h-4 text-primary" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HabitBox;
