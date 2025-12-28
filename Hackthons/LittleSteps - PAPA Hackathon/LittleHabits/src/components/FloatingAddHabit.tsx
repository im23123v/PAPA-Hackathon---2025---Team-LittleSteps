import { useState } from "react";
import { Plus, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FloatingAddHabitProps {
  onAddHabit: (title: string, emoji: string) => void;
}

const defaultEmojis = ["📚", "🏃", "🎨", "🎵", "🧘", "💪", "🌱", "💧", "😴", "🍎"];

const quickHabits = [
  { title: "Read for 15 minutes", emoji: "📖" },
  { title: "Drink water", emoji: "💧" },
  { title: "Exercise", emoji: "🏃" },
  { title: "Practice gratitude", emoji: "🙏" },
];

export function FloatingAddHabit({ onAddHabit }: FloatingAddHabitProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newHabitTitle, setNewHabitTitle] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("📚");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleAdd = () => {
    if (newHabitTitle.trim()) {
      onAddHabit(newHabitTitle.trim(), selectedEmoji);
      setNewHabitTitle("");
      setSelectedEmoji("📚");
      setIsOpen(false);
    }
  };

  const handleQuickAdd = (habit: { title: string; emoji: string }) => {
    onAddHabit(habit.title, habit.emoji);
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Form */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-80 bg-card rounded-2xl shadow-xl border-2 border-border p-4 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sunshine" />
              Quick Add Habit
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex gap-2">
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="w-12 h-12 rounded-xl bg-muted border-2 border-border flex items-center justify-center text-2xl hover:border-primary transition-colors shrink-0"
              >
                {selectedEmoji}
              </button>
              <input
                type="text"
                value={newHabitTitle}
                onChange={(e) => setNewHabitTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="New habit..."
                className="flex-1 bg-muted border-2 border-border rounded-xl px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                autoFocus
              />
            </div>

            {showEmojiPicker && (
              <div className="flex flex-wrap gap-2 p-3 bg-muted rounded-xl border-2 border-border">
                {defaultEmojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      setSelectedEmoji(emoji);
                      setShowEmojiPicker(false);
                    }}
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center text-lg hover:bg-card transition-colors",
                      selectedEmoji === emoji && "bg-primary/20 ring-2 ring-primary"
                    )}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}

            <Button
              variant="hero"
              className="w-full"
              onClick={handleAdd}
              disabled={!newHabitTitle.trim()}
            >
              <Plus className="w-4 h-4" />
              Add Habit
            </Button>

            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Quick add:</p>
              <div className="flex flex-wrap gap-2">
                {quickHabits.map((habit, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickAdd(habit)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-muted rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span>{habit.emoji}</span>
                    <span>{habit.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen
            ? "bg-muted text-muted-foreground rotate-45"
            : "bg-gradient-hero text-primary-foreground shadow-glow-coral"
        )}
      >
        <Plus className="w-7 h-7" />
      </button>
    </>
  );
}

export default FloatingAddHabit;
