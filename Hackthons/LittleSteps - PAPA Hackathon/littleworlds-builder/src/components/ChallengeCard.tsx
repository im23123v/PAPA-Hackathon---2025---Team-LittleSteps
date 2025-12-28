import { Challenge } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Palette, Clock, Brain, Coins, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChallengeCardProps {
  challenge: Challenge;
  onComplete?: (challengeId: string) => void;
}

export function ChallengeCard({ challenge, onComplete }: ChallengeCardProps) {
  const typeConfig = {
    creative: { icon: Palette, color: 'coral', label: 'Creative' },
    habit: { icon: Clock, color: 'lavender', label: 'Habit' },
    learning: { icon: Brain, color: 'sky', label: 'Learning' },
  };

  const difficultyColors = {
    easy: 'bg-nature/10 text-nature',
    medium: 'bg-accent/10 text-accent',
    hard: 'bg-coral/10 text-coral',
  };

  const config = typeConfig[challenge.type];
  const Icon = config.icon;

  return (
    <Card className={cn(
      'group overflow-hidden transition-all duration-300',
      challenge.completed 
        ? 'bg-muted/50 opacity-75' 
        : 'hover:shadow-lg hover:-translate-y-0.5'
    )}>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
            `bg-${config.color}/10`
          )}>
            {challenge.completed ? (
              <Check className="w-6 h-6 text-nature" />
            ) : (
              <Icon className={`w-6 h-6 text-${config.color}`} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={config.color as any} className="text-xs">
                {config.label}
              </Badge>
              <span className={cn('text-xs px-2 py-0.5 rounded-full capitalize', difficultyColors[challenge.difficulty])}>
                {challenge.difficulty}
              </span>
            </div>

            <h4 className={cn(
              'font-display font-semibold mb-1',
              challenge.completed && 'line-through text-muted-foreground'
            )}>
              {challenge.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {challenge.description}
            </p>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1.5 text-accent font-medium">
                <Coins className="w-4 h-4" />
                <span>{challenge.coins} coins</span>
              </div>

              {!challenge.completed && (
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => onComplete?.(challenge.id)}
                >
                  Complete
                </Button>
              )}

              {challenge.completed && (
                <span className="text-sm text-nature font-medium flex items-center gap-1">
                  <Check className="w-4 h-4" /> Done!
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
