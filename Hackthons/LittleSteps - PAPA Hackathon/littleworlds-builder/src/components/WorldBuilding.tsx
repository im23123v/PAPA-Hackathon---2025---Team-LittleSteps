import { Building } from '@/types';
import { cn } from '@/lib/utils';
import { Lock } from 'lucide-react';

interface WorldBuildingProps {
  building: Building;
  color: string;
  onClick?: () => void;
}

export function WorldBuilding({ building, color, onClick }: WorldBuildingProps) {
  return (
    <button
      onClick={onClick}
      disabled={!building.unlocked}
      className={cn(
        'relative p-4 rounded-2xl text-center transition-all duration-300 group',
        building.unlocked 
          ? 'cursor-pointer hover:scale-105 hover:shadow-lg' 
          : 'cursor-not-allowed opacity-60',
        {
          'bg-coral/10 hover:bg-coral/20': color === 'coral' && building.unlocked,
          'bg-nature/10 hover:bg-nature/20': color === 'nature' && building.unlocked,
          'bg-sky/10 hover:bg-sky/20': color === 'sky' && building.unlocked,
          'bg-lavender/10 hover:bg-lavender/20': color === 'lavender' && building.unlocked,
          'bg-muted': !building.unlocked,
        }
      )}
    >
      {!building.unlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-2xl">
          <Lock className="w-6 h-6 text-muted-foreground" />
        </div>
      )}
      
      <div className="text-4xl mb-2 group-hover:animate-bounce">{building.icon}</div>
      <div className="font-medium text-sm mb-1">{building.name}</div>
      <div className="text-xs text-muted-foreground">Level {building.level}</div>
      
      {/* Level indicator dots */}
      <div className="flex justify-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className={cn(
              'w-1.5 h-1.5 rounded-full transition-colors',
              i < building.level 
                ? {
                    'bg-coral': color === 'coral',
                    'bg-nature': color === 'nature',
                    'bg-sky': color === 'sky',
                    'bg-lavender': color === 'lavender',
                  }
                : 'bg-muted-foreground/30'
            )}
          />
        ))}
      </div>
    </button>
  );
}
