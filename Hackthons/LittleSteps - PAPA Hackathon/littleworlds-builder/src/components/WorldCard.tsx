import { World } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, ArrowRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorldCardProps {
  world: World;
  onJoin?: (worldId: string) => void;
  onView?: (worldId: string) => void;
}

export function WorldCard({ world, onJoin, onView }: WorldCardProps) {
  const themeColors = {
    creativity: 'coral',
    nature: 'nature',
    learning: 'sky',
    tech: 'lavender',
  };

  const color = themeColors[world.theme];

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={cn('h-3 bg-gradient-to-r', {
        'from-coral to-coral/50': color === 'coral',
        'from-nature to-nature/50': color === 'nature',
        'from-sky to-sky/50': color === 'sky',
        'from-lavender to-lavender/50': color === 'lavender',
      })} />
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center text-3xl', {
            'bg-coral/10': color === 'coral',
            'bg-nature/10': color === 'nature',
            'bg-sky/10': color === 'sky',
            'bg-lavender/10': color === 'lavender',
          })}>
            {world.image}
          </div>
          <Badge variant={color as any} className="capitalize">
            {world.theme}
          </Badge>
        </div>

        <h3 className="font-display font-bold text-xl mb-2">{world.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {world.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{world.members} members</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <TrendingUp className="w-4 h-4" />
            <span>Level {world.level}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{world.progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={cn('h-full rounded-full transition-all duration-500', {
                'bg-coral': color === 'coral',
                'bg-nature': color === 'nature',
                'bg-sky': color === 'sky',
                'bg-lavender': color === 'lavender',
              })}
              style={{ width: `${world.progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onView?.(world.id)}
          >
            <Eye className="w-4 h-4 mr-1" /> Explore
          </Button>
          <Button 
            size="sm" 
            className="flex-1"
            onClick={() => onJoin?.(world.id)}
          >
            Join <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
