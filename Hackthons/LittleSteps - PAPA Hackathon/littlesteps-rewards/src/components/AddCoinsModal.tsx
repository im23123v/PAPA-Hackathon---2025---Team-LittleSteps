import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { activities } from '@/data/mockData';
import { Activity, User } from '@/types';
import { CoinDisplay } from './CoinDisplay';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

interface AddCoinsModalProps {
  open: boolean;
  onClose: () => void;
  child: User;
  onAddCoins: (childId: string, amount: number, source: string) => void;
}

export function AddCoinsModal({ open, onClose, child, onAddCoins }: AddCoinsModalProps) {
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

  const toggleActivity = (activity: Activity) => {
    setSelectedActivities(prev => {
      const exists = prev.find(a => a.id === activity.id);
      if (exists) {
        return prev.filter(a => a.id !== activity.id);
      }
      return [...prev, activity];
    });
  };

  const totalCoins = selectedActivities.reduce((sum, a) => sum + a.coins, 0);

  const handleSubmit = () => {
    if (selectedActivities.length === 0) {
      toast.error('Please select at least one activity');
      return;
    }

    selectedActivities.forEach(activity => {
      onAddCoins(child.id, activity.coins, activity.name);
    });

    toast.success(`Added ${totalCoins} coins to ${child.name}'s wallet!`);
    setSelectedActivities([]);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <span className="text-2xl">{child.avatar}</span>
            Add Coins for {child.name}
          </DialogTitle>
          <DialogDescription>
            Select completed activities to reward with coins
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          {activities.map(activity => {
            const isSelected = selectedActivities.find(a => a.id === activity.id);
            
            return (
              <button
                key={activity.id}
                onClick={() => toggleActivity(activity)}
                className={cn(
                  'flex w-full items-center justify-between rounded-xl border-2 p-4 transition-all',
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-transparent bg-muted hover:border-border'
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{activity.icon}</span>
                  <span className="font-medium">{activity.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CoinDisplay amount={activity.coins} size="sm" showPlus />
                  {isSelected && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-sm text-muted-foreground">Total to add</p>
            <CoinDisplay amount={totalCoins} size="lg" animate={totalCoins > 0} />
          </div>
          <Button 
            variant="coin" 
            size="lg" 
            onClick={handleSubmit}
            disabled={selectedActivities.length === 0}
          >
            Add Coins
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
