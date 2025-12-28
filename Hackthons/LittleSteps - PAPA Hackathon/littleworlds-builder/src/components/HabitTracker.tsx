import { Habit } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame, Check, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HabitTrackerProps {
  habits: Habit[];
  onToggle?: (habitId: string) => void;
  onAddHabit?: () => void;
}

export function HabitTracker({ habits, onToggle, onAddHabit }: HabitTrackerProps) {
  const categoryColors = {
    health: 'coral',
    learning: 'sky',
    creativity: 'lavender',
    kindness: 'nature',
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display">Daily Habits</CardTitle>
          <Button variant="outline" size="sm" onClick={onAddHabit}>
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {habits.map((habit) => {
          const color = categoryColors[habit.category];
          return (
            <div
              key={habit.id}
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer',
                habit.completedToday 
                  ? 'bg-nature/10' 
                  : 'bg-muted/50 hover:bg-muted'
              )}
              onClick={() => onToggle?.(habit.id)}
            >
              <div className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center text-xl',
                habit.completedToday ? 'bg-nature/20' : `bg-${color}/10`
              )}>
                {habit.completedToday ? <Check className="w-5 h-5 text-nature" /> : habit.icon}
              </div>

              <div className="flex-1">
                <h4 className={cn(
                  'font-medium text-sm',
                  habit.completedToday && 'text-nature'
                )}>
                  {habit.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Flame className="w-3 h-3 text-accent" />
                  <span>{habit.streak} day streak</span>
                </div>
              </div>

              <div className={cn(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all',
                habit.completedToday 
                  ? 'bg-nature border-nature text-white' 
                  : 'border-muted-foreground/30 hover:border-primary'
              )}>
                {habit.completedToday && <Check className="w-4 h-4" />}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
