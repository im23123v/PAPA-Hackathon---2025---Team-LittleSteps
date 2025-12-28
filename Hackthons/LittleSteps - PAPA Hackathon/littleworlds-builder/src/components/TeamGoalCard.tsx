import { TeamGoal } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamGoalCardProps {
  teamGoal: TeamGoal;
  color: string;
}

export function TeamGoalCard({ teamGoal, color }: TeamGoalCardProps) {
  const progress = Math.round((teamGoal.current / teamGoal.target) * 100);

  return (
    <Card className={cn(
      'overflow-hidden',
      {
        'border-coral/30': color === 'coral',
        'border-nature/30': color === 'nature',
        'border-sky/30': color === 'sky',
        'border-lavender/30': color === 'lavender',
      }
    )}>
      <div className={cn(
        'h-2',
        {
          'bg-gradient-to-r from-coral to-coral/50': color === 'coral',
          'bg-gradient-to-r from-nature to-nature/50': color === 'nature',
          'bg-gradient-to-r from-sky to-sky/50': color === 'sky',
          'bg-gradient-to-r from-lavender to-lavender/50': color === 'lavender',
        }
      )} />
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className={cn(
            'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0',
            {
              'bg-coral/10': color === 'coral',
              'bg-nature/10': color === 'nature',
              'bg-sky/10': color === 'sky',
              'bg-lavender/10': color === 'lavender',
            }
          )}>
            <Target className={cn(
              'w-7 h-7',
              {
                'text-coral': color === 'coral',
                'text-nature': color === 'nature',
                'text-sky': color === 'sky',
                'text-lavender': color === 'lavender',
              }
            )} />
          </div>

          <div className="flex-1">
            <h3 className="font-display font-bold text-lg mb-1">
              Team Goal: {teamGoal.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {teamGoal.description}
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{teamGoal.current} / {teamGoal.target} completed</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
          </div>

          <div className={cn(
            'flex items-center gap-2 px-4 py-3 rounded-xl text-sm shrink-0',
            {
              'bg-coral/10 text-coral': color === 'coral',
              'bg-nature/10 text-nature': color === 'nature',
              'bg-sky/10 text-sky': color === 'sky',
              'bg-lavender/10 text-lavender': color === 'lavender',
            }
          )}>
            <Gift className="w-5 h-5" />
            <span className="font-medium">{teamGoal.reward}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
