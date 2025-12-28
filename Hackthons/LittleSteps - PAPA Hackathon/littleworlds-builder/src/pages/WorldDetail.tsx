import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChallengeCard } from '@/components/ChallengeCard';
import { HabitTracker } from '@/components/HabitTracker';
import { AddChallengeModal } from '@/components/AddChallengeModal';
import { AddHabitModal } from '@/components/AddHabitModal';
import { WorldBuilding } from '@/components/WorldBuilding';
import { WorldMembers } from '@/components/WorldMembers';
import { TeamGoalCard } from '@/components/TeamGoalCard';
import { defaultWorlds, worldMembers } from '@/data/staticData';
import { World, Challenge, Habit, Building } from '@/types';
import { 
  ArrowLeft, Plus, Users, TrendingUp, Target, Sparkles, 
  Home, Palette, BookOpen, Leaf, Trophy, Coins
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function WorldDetail() {
  const { worldId } = useParams<{ worldId: string }>();
  const navigate = useNavigate();
  const [world, setWorld] = useState<World | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isAddChallengeOpen, setIsAddChallengeOpen] = useState(false);
  const [isAddHabitOpen, setIsAddHabitOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);

  useEffect(() => {
    const foundWorld = defaultWorlds.find(w => w.id === worldId);
    if (foundWorld) {
      setWorld({ ...foundWorld });
    }
  }, [worldId]);

  if (!world) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌍</div>
          <h2 className="text-xl font-display font-bold mb-2">World not found</h2>
          <Button onClick={() => navigate('/worlds')}>Back to Worlds</Button>
        </div>
      </div>
    );
  }

  const themeColors: Record<string, string> = {
    creativity: 'coral',
    nature: 'nature',
    learning: 'sky',
    tech: 'lavender',
  };

  const color = themeColors[world.theme];
  const members = worldMembers[world.id] || [];

  const handleAddChallenge = (challenge: { title: string; description: string; type: string; difficulty: string; coins: number }) => {
    const newChallenge: Challenge = {
      id: `c${Date.now()}`,
      title: challenge.title,
      description: challenge.description,
      type: challenge.type as Challenge['type'],
      difficulty: challenge.difficulty as Challenge['difficulty'],
      coins: challenge.coins,
      completed: false,
      worldId: world.id,
    };
    setWorld(prev => prev ? { ...prev, challenges: [newChallenge, ...prev.challenges] } : prev);
    toast.success(`Challenge "${challenge.title}" added! 🎯`);
  };

  const handleAddHabit = (habit: { title: string; icon: string; category: string }) => {
    const newHabit: Habit = {
      id: `h${Date.now()}`,
      title: habit.title,
      icon: habit.icon,
      streak: 0,
      completedToday: false,
      category: habit.category as Habit['category'],
      worldId: world.id,
    };
    setWorld(prev => prev ? { ...prev, habits: [newHabit, ...prev.habits] } : prev);
    toast.success(`Habit "${habit.title}" added! ✨`);
  };

  const handleToggleHabit = (habitId: string) => {
    setWorld(prev => {
      if (!prev) return prev;
      const habits = prev.habits.map(h => 
        h.id === habitId 
          ? { ...h, completedToday: !h.completedToday, streak: !h.completedToday ? h.streak + 1 : h.streak - 1 }
          : h
      );
      return { ...prev, habits };
    });
  };

  const handleCompleteChallenge = (challengeId: string) => {
    setWorld(prev => {
      if (!prev) return prev;
      const challenges = prev.challenges.map(c => 
        c.id === challengeId ? { ...c, completed: !c.completed } : c
      );
      const challenge = prev.challenges.find(c => c.id === challengeId);
      if (challenge && !challenge.completed) {
        toast.success(`You earned ${challenge.coins} coins! 🪙`);
      }
      return { ...prev, challenges };
    });
  };

  const handleBuildingClick = (building: Building) => {
    setSelectedBuilding(building);
    if (building.type === 'home') setActiveTab('habits');
    else if (building.type === 'art' || building.type === 'knowledge') setActiveTab('challenges');
    else if (building.type === 'fame') setActiveTab('members');
    else setActiveTab('overview');
  };

  return (
    <>
      <Helmet>
        <title>{world.name} | LittleWorlds</title>
        <meta name="description" content={world.description} />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate('/worlds')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Worlds
          </Button>

          {/* World Header */}
          <div className={cn(
            'rounded-3xl p-6 md:p-8 mb-8 relative overflow-hidden',
            {
              'bg-gradient-to-br from-coral/20 to-coral/5': color === 'coral',
              'bg-gradient-to-br from-nature/20 to-nature/5': color === 'nature',
              'bg-gradient-to-br from-sky/20 to-sky/5': color === 'sky',
              'bg-gradient-to-br from-lavender/20 to-lavender/5': color === 'lavender',
            }
          )}>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className={cn(
                'w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-lg',
                {
                  'bg-coral/20': color === 'coral',
                  'bg-nature/20': color === 'nature',
                  'bg-sky/20': color === 'sky',
                  'bg-lavender/20': color === 'lavender',
                }
              )}>
                {world.image}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-display font-bold">{world.name}</h1>
                  <Badge variant={color as any} className="capitalize">{world.theme}</Badge>
                </div>
                <p className="text-muted-foreground mb-4 max-w-xl">{world.description}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{world.members} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span>Level {world.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span>{world.progress}% progress</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => toast.info('Invite link copied! 📋')}>
                  Invite Friends
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>World Progress</span>
                <span className="font-medium">{world.progress}%</span>
              </div>
              <Progress value={world.progress} className="h-3" />
            </div>
          </div>

          {/* Buildings Visual */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Your World Buildings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {world.buildings.map(building => (
                  <WorldBuilding 
                    key={building.id} 
                    building={building} 
                    color={color}
                    onClick={() => handleBuildingClick(building)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Goal */}
          {world.teamGoal && (
            <TeamGoalCard teamGoal={world.teamGoal} color={color} />
          )}

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <TabsList className="w-full justify-start mb-6 overflow-x-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="habits">Habits</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Active Challenges</span>
                      <Badge>{world.challenges.filter(c => !c.completed).length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Completed Today</span>
                      <Badge variant="nature">{world.challenges.filter(c => c.completed).length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Active Habits</span>
                      <Badge variant="sky">{world.habits.length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Coins Available</span>
                      <Badge variant="accent" className="flex items-center gap-1">
                        <Coins className="w-3 h-3" />
                        {world.challenges.filter(c => !c.completed).reduce((sum, c) => sum + c.coins, 0)}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {members.slice(0, 4).map((member, i) => (
                        <div key={member.id} className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">{member.avatar}</span>
                          <span className="flex-1">{member.name} earned {20 + i * 10} coins</span>
                          <span className="text-muted-foreground text-xs">{i + 1}h ago</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="challenges">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-display font-bold">World Challenges</h2>
                <Button onClick={() => setIsAddChallengeOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" /> Add Challenge
                </Button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {world.challenges.map((challenge, i) => (
                  <div key={challenge.id} className="animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                    <ChallengeCard 
                      challenge={challenge} 
                      onComplete={handleCompleteChallenge}
                    />
                  </div>
                ))}
              </div>
              {world.challenges.length === 0 && (
                <div className="text-center py-12">
                  <Target className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No challenges yet. Add one to get started!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="habits">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-display font-bold">World Habits</h2>
                <Button onClick={() => setIsAddHabitOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" /> Add Habit
                </Button>
              </div>
              <HabitTracker 
                habits={world.habits} 
                onToggle={handleToggleHabit}
              />
              {world.habits.length === 0 && (
                <div className="text-center py-12">
                  <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No habits yet. Add one to start building streaks!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="members">
              <WorldMembers members={members} color={color} />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />

      <AddChallengeModal
        open={isAddChallengeOpen}
        onClose={() => setIsAddChallengeOpen(false)}
        onAdd={handleAddChallenge}
      />

      <AddHabitModal
        open={isAddHabitOpen}
        onClose={() => setIsAddHabitOpen(false)}
        onAdd={handleAddHabit}
      />
    </>
  );
}
