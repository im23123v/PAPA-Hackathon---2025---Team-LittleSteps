import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface CreateWorldModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (world: { name: string; theme: string; description: string }) => void;
}

const themes = [
  { id: 'creativity', label: 'Creativity', icon: '🎨', color: 'coral', description: 'Art, music, and storytelling' },
  { id: 'nature', label: 'Nature', icon: '🌳', color: 'nature', description: 'Plants, animals, and eco-actions' },
  { id: 'learning', label: 'Learning', icon: '📚', color: 'sky', description: 'Courses, projects, and discovery' },
  { id: 'tech', label: 'Tech-for-Good', icon: '🚀', color: 'lavender', description: 'Building helpful technology' },
];

export function CreateWorldModal({ open, onClose, onCreate }: CreateWorldModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && selectedTheme) {
      onCreate({ name, theme: selectedTheme, description });
      setName('');
      setDescription('');
      setSelectedTheme('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            Create Your World
          </DialogTitle>
          <DialogDescription>
            Build a new world where you and your friends can grow together!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* World Name */}
          <div className="space-y-2">
            <Label htmlFor="name">World Name</Label>
            <Input
              id="name"
              placeholder="e.g., Adventure Island, Cozy Corner..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-base"
            />
          </div>

          {/* Theme Selection */}
          <div className="space-y-3">
            <Label>Choose a Theme</Label>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setSelectedTheme(theme.id)}
                  className={cn(
                    'p-4 rounded-xl border-2 text-left transition-all',
                    selectedTheme === theme.id
                      ? `border-${theme.color} bg-${theme.color}/10`
                      : 'border-border hover:border-primary/50 bg-muted/30'
                  )}
                >
                  <div className="text-2xl mb-2">{theme.icon}</div>
                  <div className="font-display font-semibold text-sm">{theme.label}</div>
                  <div className="text-xs text-muted-foreground">{theme.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              id="description"
              placeholder="Tell everyone what your world is about..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={!name || !selectedTheme}>
              Create World ✨
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
