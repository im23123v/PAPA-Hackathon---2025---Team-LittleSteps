import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface AddHabitModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (habit: { title: string; icon: string; category: string }) => void;
}

const categories = [
  { id: 'health', label: 'Health', color: 'coral' },
  { id: 'learning', label: 'Learning', color: 'sky' },
  { id: 'creativity', label: 'Creativity', color: 'lavender' },
  { id: 'kindness', label: 'Kindness', color: 'nature' },
];

const iconOptions = ['🌟', '📚', '🎨', '🏃', '💤', '🦷', '🧹', '💚', '🎵', '✏️', '🌱', '🧘'];

export function AddHabitModal({ open, onClose, onAdd }: AddHabitModalProps) {
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('🌟');
  const [selectedCategory, setSelectedCategory] = useState('health');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      onAdd({ title, icon: selectedIcon, category: selectedCategory });
      setTitle('');
      setSelectedIcon('🌟');
      setSelectedCategory('health');
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">Add New Habit</DialogTitle>
          <DialogDescription>
            Create a daily habit to build your streak!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Habit Title */}
          <div className="space-y-2">
            <Label htmlFor="habit-title">Habit Name</Label>
            <Input
              id="habit-title"
              placeholder="e.g., Drink water, Practice piano..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Icon Selection */}
          <div className="space-y-2">
            <Label>Choose an Icon</Label>
            <div className="flex flex-wrap gap-2">
              {iconOptions.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setSelectedIcon(icon)}
                  className={cn(
                    'w-10 h-10 rounded-lg text-xl flex items-center justify-center transition-all',
                    selectedIcon === icon
                      ? 'bg-primary text-primary-foreground scale-110'
                      : 'bg-muted hover:bg-muted/80'
                  )}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <Label>Category</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    selectedCategory === cat.id
                      ? `bg-${cat.color} text-white`
                      : 'bg-muted hover:bg-muted/80'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={!title}>
              Add Habit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
