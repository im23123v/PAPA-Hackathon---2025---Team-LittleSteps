import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ActivityItem } from '@/types';
import { Activity, Sparkles, Trophy, Target, Users, ArrowUp, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActivityFeedProps {
  activities: ActivityItem[];
  maxItems?: number;
}

export function ActivityFeed({ activities, maxItems = 10 }: ActivityFeedProps) {
  const getActionIcon = (action: ActivityItem['action']) => {
    switch (action) {
      case 'completed_challenge':
        return <Target className="w-4 h-4" />;
      case 'completed_habit':
        return <Sparkles className="w-4 h-4" />;
      case 'earned_badge':
        return <Trophy className="w-4 h-4" />;
      case 'joined_world':
        return <Users className="w-4 h-4" />;
      case 'leveled_up':
        return <ArrowUp className="w-4 h-4" />;
      case 'completed_quest':
        return <Star className="w-4 h-4" />;
    }
  };

  const getActionColor = (action: ActivityItem['action']) => {
    switch (action) {
      case 'completed_challenge':
        return 'bg-coral/20 text-coral';
      case 'completed_habit':
        return 'bg-nature/20 text-nature';
      case 'earned_badge':
        return 'bg-accent/20 text-accent';
      case 'joined_world':
        return 'bg-sky/20 text-sky';
      case 'leveled_up':
        return 'bg-lavender/20 text-lavender';
      case 'completed_quest':
        return 'bg-accent/20 text-accent';
    }
  };

  const getActionText = (activity: ActivityItem) => {
    switch (activity.action) {
      case 'completed_challenge':
        return <>completed challenge <span className="font-semibold text-foreground">{activity.targetName}</span></>;
      case 'completed_habit':
        return <>finished habit <span className="font-semibold text-foreground">{activity.targetName}</span></>;
      case 'earned_badge':
        return <>earned the <span className="font-semibold text-foreground">{activity.targetName}</span> badge</>;
      case 'joined_world':
        return <>joined <span className="font-semibold text-foreground">{activity.targetName}</span></>;
      case 'leveled_up':
        return <>reached <span className="font-semibold text-foreground">Level {activity.targetName}</span></>;
      case 'completed_quest':
        return <>completed quest <span className="font-semibold text-foreground">{activity.targetName}</span></>;
    }
  };

  const getRelativeTime = (timestamp: string) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky/20 flex items-center justify-center">
            <Activity className="w-4 h-4 text-sky" />
          </div>
          <CardTitle className="text-lg">Activity Feed</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {activities.slice(0, maxItems).map((activity, index) => (
            <div
              key={activity.id}
              className={cn(
                "flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-2xl">{activity.userAvatar}</div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-sm">{activity.userName}</span>
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center",
                    getActionColor(activity.action)
                  )}>
                    {getActionIcon(activity.action)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {getActionText(activity)}
                </p>
                {activity.worldName && (
                  <Badge variant="outline" className="mt-1 text-xs">
                    🌍 {activity.worldName}
                  </Badge>
                )}
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-muted-foreground">
                  {getRelativeTime(activity.timestamp)}
                </span>
                {activity.coins && (
                  <div className="text-xs font-medium text-accent mt-1">
                    +{activity.coins} 🪙
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {activities.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Activity className="w-10 h-10 mx-auto mb-2 opacity-40" />
            <p>No activity yet. Start exploring!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}