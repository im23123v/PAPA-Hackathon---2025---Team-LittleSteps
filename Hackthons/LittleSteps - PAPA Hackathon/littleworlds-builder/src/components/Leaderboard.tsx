import { LeaderboardEntry } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flame, Award, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  title?: string;
  type?: 'consistency' | 'creative' | 'learning' | 'kindness';
}

export function Leaderboard({ entries, title = 'Top Players', type = 'consistency' }: LeaderboardProps) {
  const typeConfig = {
    consistency: { icon: '🔥', color: 'coral', label: 'Consistency Champs' },
    creative: { icon: '🎨', color: 'lavender', label: 'Creative Stars' },
    learning: { icon: '📚', color: 'sky', label: 'Learning Leaders' },
    kindness: { icon: '💚', color: 'nature', label: 'Good Deeds' },
  };

  const config = typeConfig[type];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{config.icon}</span>
          <CardTitle className="text-xl font-display">{title || config.label}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {entries.slice(0, 5).map((entry, index) => (
          <div
            key={entry.id}
            className={cn(
              'flex items-center gap-3 p-3 rounded-xl transition-all',
              index === 0 ? 'bg-accent/10' : 'bg-muted/50'
            )}
          >
            {/* Rank */}
            <div className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm',
              index === 0 && 'bg-accent text-accent-foreground',
              index === 1 && 'bg-muted-foreground/20 text-foreground',
              index === 2 && 'bg-coral/20 text-coral',
              index > 2 && 'bg-muted text-muted-foreground'
            )}>
              {index === 0 ? <Trophy className="w-4 h-4" /> : index + 1}
            </div>

            {/* Avatar & Name */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
              {entry.avatar}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">{entry.name}</h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-0.5">
                  <Flame className="w-3 h-3 text-accent" />
                  {entry.streak}d
                </span>
                <span className="flex items-center gap-0.5">
                  <Award className="w-3 h-3 text-lavender" />
                  {entry.badges}
                </span>
              </div>
            </div>

            {/* Score */}
            <div className="text-right">
              <div className="font-bold text-sm">{entry.score.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">points</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
