import { rewardTiers } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Lock, CheckCircle2 } from 'lucide-react';
import { Progress } from './ui/progress';

interface RewardTiersProps {
  bonusPoints: number;
}

export function RewardTiers({ bonusPoints }: RewardTiersProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Reward Tiers</h3>
        <div className="flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1">
          <span className="text-sm font-medium text-accent">⭐ {bonusPoints} points</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {rewardTiers.map((tier, index) => {
          const isUnlocked = bonusPoints >= tier.pointsRequired;
          const progress = Math.min(100, (bonusPoints / tier.pointsRequired) * 100);
          const isNext = !isUnlocked && (index === 0 || bonusPoints >= rewardTiers[index - 1].pointsRequired);
          
          return (
            <div
              key={tier.id}
              className={cn(
                'relative overflow-hidden rounded-xl border p-4 transition-all',
                isUnlocked 
                  ? 'border-success bg-success/5' 
                  : isNext 
                    ? 'border-accent bg-accent/5' 
                    : 'border-border bg-card opacity-60'
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-xl text-2xl',
                  isUnlocked ? 'bg-success/20' : 'bg-muted'
                )}>
                  {tier.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{tier.name}</h4>
                    {isUnlocked ? (
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    ) : (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                
                <div className="text-right">
                  <p className={cn(
                    'text-sm font-medium',
                    isUnlocked ? 'text-success' : 'text-muted-foreground'
                  )}>
                    {tier.pointsRequired} pts
                  </p>
                </div>
              </div>
              
              {!isUnlocked && isNext && (
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{bonusPoints} / {tier.pointsRequired}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="mt-1 h-2" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
