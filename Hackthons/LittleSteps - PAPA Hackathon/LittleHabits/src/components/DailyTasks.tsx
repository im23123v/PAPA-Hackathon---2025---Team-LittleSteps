import { useState } from "react";
import { Check, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  emoji: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: "1", title: "Wake up on time", emoji: "⏰", completed: false },
  { id: "2", title: "Complete one task fully", emoji: "✅", completed: false },
  { id: "3", title: "No screen before homework", emoji: "📵", completed: false },
  { id: "4", title: "Reflect: What did I do right today?", emoji: "🤔", completed: false },
];

export function DailyTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [coins, setCoins] = useState(0);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const newCompleted = !task.completed;
          if (newCompleted && !task.completed) {
            setCoins((c) => c + 10);
          } else if (!newCompleted && task.completed) {
            setCoins((c) => Math.max(0, c - 10));
          }
          return { ...task, completed: newCompleted };
        }
        return task;
      })
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <section className="py-12 sm:py-16">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              ⭐ Daily Micro-Tasks
            </h2>
            <p className="text-muted-foreground">
              Complete daily tasks to earn coins and build discipline!
            </p>
          </div>

          {/* Coin Counter */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-sunshine px-6 py-3 rounded-full shadow-soft">
              <Coins className="w-6 h-6 text-foreground" />
              <span className="text-xl font-bold text-foreground">{coins}</span>
              <span className="text-sm font-semibold text-foreground/70">coins</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-foreground">Progress</span>
              <span className="font-bold text-primary">{completedCount}/{tasks.length}</span>
            </div>
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-hero transition-all duration-500 ease-out rounded-full"
                style={{ width: `${(completedCount / tasks.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <button
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 text-left",
                  task.completed
                    ? "bg-mint/20 border-mint shadow-soft"
                    : "bg-card border-border hover:border-primary hover:shadow-soft"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-2xl">{task.emoji}</span>
                <span
                  className={cn(
                    "flex-1 font-semibold transition-all",
                    task.completed ? "text-mint-dark line-through" : "text-foreground"
                  )}
                >
                  {task.title}
                </span>
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    task.completed
                      ? "bg-mint text-primary-foreground scale-110"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {task.completed && <Check className="w-5 h-5" />}
                </div>
                {task.completed && (
                  <div className="flex items-center gap-1 text-sunshine font-bold animate-bounce-in">
                    <Coins className="w-4 h-4" />
                    <span>+10</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {completedCount === tasks.length && (
            <div className="mt-6 text-center animate-bounce-in">
              <div className="inline-block bg-gradient-hero text-primary-foreground px-8 py-4 rounded-2xl shadow-glow-coral">
                <span className="text-3xl mb-2 block">🎉</span>
                <span className="font-bold text-lg">All tasks completed! Amazing discipline!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DailyTasks;
