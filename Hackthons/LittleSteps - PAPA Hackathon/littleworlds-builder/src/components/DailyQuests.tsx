import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DailyQuest } from '@/types';
import { Clock, Gift, CheckCircle2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DailyQuestsProps {
  quests: DailyQuest[];
  onComplete: (questId: string) => void;
}

export function DailyQuests({ quests, onComplete }: DailyQuestsProps) {
  const completedCount = quests.filter(q => q.completed).length;
  const progress = (completedCount / quests.length) * 100;

  const getTypeStyles = (type: DailyQuest['type']) => {
    switch (type) {
      case 'creative':
        return 'bg-coral/10 text-coral border-coral/30';
      case 'habit':
        return 'bg-nature/10 text-nature border-nature/30';
      case 'learning':
        return 'bg-sky/10 text-sky border-sky/30';
      case 'social':
        return 'bg-lavender/10 text-lavender border-lavender/30';
    }
  };

  const getTimeRemaining = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const diff = endOfDay.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-coral/10 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <CardTitle className="text-lg">Daily Quests</CardTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Resets in {getTimeRemaining()}</span>
              </div>
            </div>
          </div>
          <Badge variant="accent" className="text-sm">
            {completedCount}/{quests.length}
          </Badge>
        </div>
        
        <div className="mt-3">
          <Progress value={progress} className="h-2" />
          {completedCount === quests.length && (
            <div className="flex items-center gap-2 mt-2 text-sm text-accent font-medium">
              <Gift className="w-4 h-4" />
              <span>All quests complete! Bonus +50 coins! 🎉</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={cn(
              "p-4 rounded-xl border-2 transition-all duration-300",
              quest.completed 
                ? "bg-muted/30 border-nature/30 opacity-75"
                : "bg-card border-border/50 hover:border-accent/50 hover:shadow-md"
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0",
                quest.completed ? "bg-nature/20" : "bg-muted"
              )}>
                {quest.completed ? <CheckCircle2 className="w-6 h-6 text-nature" /> : quest.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className={cn(
                      "font-semibold",
                      quest.completed && "line-through text-muted-foreground"
                    )}>
                      {quest.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {quest.description}
                    </p>
                  </div>
                  <Badge variant="outline" className={cn("shrink-0", getTypeStyles(quest.type))}>
                    +{quest.reward} 🪙
                  </Badge>
                </div>

                {!quest.completed && (
                  <Button
                    size="sm"
                    variant="nature"
                    className="mt-2"
                    onClick={() => onComplete(quest.id)}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Complete
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}