import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface AddChallengeModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (challenge: { title: string; description: string; type: string; difficulty: string; coins: number }) => void;
}

const types = [
  { id: 'creative', label: 'Creative', icon: '🎨', color: 'coral' },
  { id: 'habit', label: 'Habit', icon: '⏰', color: 'lavender' },
  { id: 'learning', label: 'Learning', icon: '🧠', color: 'sky' },
];

const difficulties = [
  { id: 'easy', label: 'Easy', coins: 30 },
  { id: 'medium', label: 'Medium', coins: 60 },
  { id: 'hard', label: 'Hard', coins: 100 },
];

export function AddChallengeModal({ open, onClose, onAdd }: AddChallengeModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedType, setSelectedType] = useState('creative');
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      const coins = difficulties.find(d => d.id === selectedDifficulty)?.coins || 30;
      onAdd({ title, description, type: selectedType, difficulty: selectedDifficulty, coins });
      setTitle('');
      setDescription('');
      setSelectedType('creative');
      setSelectedDifficulty('easy');
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">Create Challenge</DialogTitle>
          <DialogDescription>
            Add a new challenge for you or your world!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="challenge-title">Challenge Title</Label>
            <Input
              id="challenge-title"
              placeholder="e.g., Draw a sunset, Read for 30 mins..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="challenge-desc">Description</Label>
            <Textarea
              id="challenge-desc"
              placeholder="What do you need to do?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
            />
          </div>

          {/* Type Selection */}
          <div className="space-y-2">
            <Label>Challenge Type</Label>
            <div className="flex gap-2">
              {types.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={cn(
                    'flex-1 p-3 rounded-xl border-2 text-center transition-all',
                    selectedType === type.id
                      ? `border-${type.color} bg-${type.color}/10`
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  <div className="text-xl mb-1">{type.icon}</div>
                  <div className="text-xs font-medium">{type.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className="space-y-2">
            <Label>Difficulty</Label>
            <div className="flex gap-2">
              {difficulties.map((diff) => (
                <button
                  key={diff.id}
                  type="button"
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={cn(
                    'flex-1 p-3 rounded-xl border-2 transition-all',
                    selectedDifficulty === diff.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  <div className="text-sm font-medium">{diff.label}</div>
                  <div className="text-xs text-muted-foreground">{diff.coins} coins</div>
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
              Create Challenge
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
