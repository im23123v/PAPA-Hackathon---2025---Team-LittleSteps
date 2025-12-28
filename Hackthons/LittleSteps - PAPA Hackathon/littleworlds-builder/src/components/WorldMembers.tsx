import { WorldMember } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorldMembersProps {
  members: WorldMember[];
  color: string;
}

export function WorldMembers({ members, color }: WorldMembersProps) {
  const sortedMembers = [...members].sort((a, b) => b.contribution - a.contribution);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-display font-bold mb-4">World Members</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedMembers.map((member, index) => (
          <Card 
            key={member.id}
            className={cn(
              'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
              index === 0 && {
                'ring-2 ring-coral': color === 'coral',
                'ring-2 ring-nature': color === 'nature',
                'ring-2 ring-sky': color === 'sky',
                'ring-2 ring-lavender': color === 'lavender',
              }
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center text-3xl',
                    {
                      'bg-coral/10': color === 'coral',
                      'bg-nature/10': color === 'nature',
                      'bg-sky/10': color === 'sky',
                      'bg-lavender/10': color === 'lavender',
                    }
                  )}>
                    {member.avatar}
                  </div>
                  {member.role === 'leader' && (
                    <Crown className={cn(
                      'w-5 h-5 absolute -top-2 -right-2',
                      {
                        'text-coral': color === 'coral',
                        'text-nature': color === 'nature',
                        'text-sky': color === 'sky',
                        'text-lavender': color === 'lavender',
                      }
                    )} />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{member.name}</span>
                    {member.role === 'leader' && (
                      <Badge variant={color as any} className="text-xs">Leader</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Star className="w-3 h-3" />
                    <span>{member.contribution} contribution</span>
                  </div>
                </div>

                <div className={cn(
                  'text-2xl font-bold',
                  {
                    'text-coral': color === 'coral' && index === 0,
                    'text-nature': color === 'nature' && index === 0,
                    'text-sky': color === 'sky' && index === 0,
                    'text-lavender': color === 'lavender' && index === 0,
                    'text-muted-foreground': index !== 0,
                  }
                )}>
                  #{index + 1}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {members.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-3">👥</div>
          <p className="text-muted-foreground">No members yet. Invite friends to join!</p>
        </div>
      )}
    </div>
  );
}
