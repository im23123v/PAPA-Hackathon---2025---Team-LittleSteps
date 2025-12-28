import { Activity } from '@/types';
import { Button } from './ui/button';
import { CoinDisplay } from './CoinDisplay';
import { cn } from '@/lib/utils';

interface ActivityCardProps {
  activity: Activity;
  onComplete: (activity: Activity) => void;
  disabled?: boolean;
}

export function ActivityCard({ activity, onComplete, disabled }: ActivityCardProps) {
  return (
    <div className={cn(
      'group relative overflow-hidden rounded-xl bg-card p-4 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
      disabled && 'opacity-60'
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform group-hover:scale-110',
            activity.color,
            'bg-opacity-20'
          )}>
            {activity.icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{activity.name}</h3>
            <CoinDisplay amount={activity.coins} size="sm" showPlus />
          </div>
        </div>
        
        <Button
          variant="success"
          size="sm"
          onClick={() => onComplete(activity)}
          disabled={disabled}
          className="opacity-0 transition-opacity group-hover:opacity-100"
        >
          Complete
        </Button>
      </div>
    </div>
  );
}
