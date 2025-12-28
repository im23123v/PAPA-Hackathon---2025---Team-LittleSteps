import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { leaderboardData } from '@/data/staticData';
import { LeaderboardEntry } from '@/types';
import { Trophy, Flame, Award, Crown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const leaderboardCategories = [
  { id: 'consistency', label: 'Consistency Champs', icon: '🔥', color: 'coral', description: 'Longest streaks' },
  { id: 'creative', label: 'Creative Stars', icon: '🎨', color: 'lavender', description: 'Best artwork & designs' },
  { id: 'learning', label: 'Learning Leaders', icon: '📚', color: 'sky', description: 'Most courses completed' },
  { id: 'kindness', label: 'Good Deeds', icon: '💚', color: 'nature', description: 'Kindness & eco actions' },
  { id: 'world', label: 'Best Worlds', icon: '🌟', color: 'accent', description: 'Top team collaboration' },
];

export default function Leaderboards() {
  const [activeCategory, setActiveCategory] = useState('consistency');

  // Simulate different data for different categories
  const getLeaderboardData = (category: string): LeaderboardEntry[] => {
    const shuffled = [...leaderboardData].sort(() => Math.random() - 0.5);
    return shuffled.map((entry, index) => ({
      ...entry,
      score: Math.floor(entry.score * (1 + Math.random() * 0.3)),
    }));
  };

  const currentData = getLeaderboardData(activeCategory);
  const currentCategory = leaderboardCategories.find(c => c.id === activeCategory)!;

  return (
    <>
      <Helmet>
        <title>Leaderboards | LittleWorlds</title>
        <meta name="description" content="See who's leading in consistency, creativity, learning, and kindness. Positive competition for positive growth!" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="accent" className="mb-4">
              <Trophy className="w-3 h-3 mr-1" /> Leaderboards
            </Badge>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Positive Leaderboards
            </h1>
            <p className="text-muted-foreground">
              Celebrate achievements, not just wins. Everyone can shine in their own way!
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {leaderboardCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all',
                  activeCategory === cat.id
                    ? `bg-${cat.color} text-white shadow-lg`
                    : 'bg-muted hover:bg-muted/80'
                )}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Leaderboard Content */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{currentCategory.icon}</div>
                <CardTitle className="text-2xl font-display">{currentCategory.label}</CardTitle>
                <p className="text-muted-foreground text-sm">{currentCategory.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentData.map((entry, index) => (
                  <div
                    key={entry.id}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-2xl transition-all animate-slide-up',
                      index === 0 && 'bg-accent/10 border-2 border-accent',
                      index === 1 && 'bg-muted/80',
                      index === 2 && 'bg-coral/5',
                      index > 2 && 'bg-muted/50'
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Rank */}
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center font-bold',
                      index === 0 && 'bg-accent text-white',
                      index === 1 && 'bg-muted-foreground/30 text-foreground',
                      index === 2 && 'bg-coral/30 text-coral',
                      index > 2 && 'bg-muted text-muted-foreground'
                    )}>
                      {index === 0 ? <Crown className="w-5 h-5" /> : index + 1}
                    </div>

                    {/* Avatar */}
                    <div className={cn(
                      'w-14 h-14 rounded-full flex items-center justify-center text-2xl',
                      index === 0 ? 'bg-accent/20 ring-2 ring-accent' : 'bg-muted'
                    )}>
                      {entry.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold">{entry.name}</h3>
                        {index === 0 && <Star className="w-4 h-4 text-accent fill-accent" />}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-coral" />
                          {entry.streak} days
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-lavender" />
                          {entry.badges} badges
                        </span>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <div className="text-xl font-bold">{entry.score.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Bottom Message */}
            <div className="text-center mt-8 p-6 bg-muted/30 rounded-2xl">
              <p className="text-muted-foreground">
                🌈 Remember: Every step counts! Keep growing at your own pace.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
