import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeCard } from '@/components/ChallengeCard';
import { HabitTracker } from '@/components/HabitTracker';
import { Leaderboard } from '@/components/Leaderboard';
import { AddHabitModal } from '@/components/AddHabitModal';
import { AddChallengeModal } from '@/components/AddChallengeModal';
import { DailyQuests } from '@/components/DailyQuests';
import { ActivityFeed } from '@/components/ActivityFeed';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { defaultChallenges, defaultHabits, leaderboardData, defaultUsers, defaultDailyQuests, defaultActivities } from '@/data/staticData';
import { Challenge, Habit, DailyQuest, ActivityItem } from '@/types';
import { Coins, Flame, Award, Plus, Target } from 'lucide-react';
import { toast } from 'sonner';

export default function Dashboard() {
  const [challenges, setChallenges] = useState<Challenge[]>(defaultChallenges);
  const [habits, setHabits] = useState<Habit[]>(defaultHabits);
  const [dailyQuests, setDailyQuests] = useState<DailyQuest[]>(defaultDailyQuests);
  const [activities, setActivities] = useState<ActivityItem[]>(defaultActivities);
  const [isAddHabitOpen, setIsAddHabitOpen] = useState(false);
  const [isAddChallengeOpen, setIsAddChallengeOpen] = useState(false);

  const currentUser = defaultUsers[0]; // Simulated current user
  const completedChallenges = challenges.filter(c => c.completed).length;
  const currentStreak = Math.max(...habits.map(h => h.streak));
  const todayCompleted = habits.filter(h => h.completedToday).length;
  const questsCompleted = dailyQuests.filter(q => q.completed).length;

  const handleCompleteChallenge = (challengeId: string) => {
    setChallenges(prev =>
      prev.map(c =>
        c.id === challengeId ? { ...c, completed: true } : c
      )
    );
    const challenge = challenges.find(c => c.id === challengeId);
    toast.success(`Challenge completed! +${challenge?.coins} coins 🪙`);
    
    // Add to activity feed
    const newActivity: ActivityItem = {
      id: `a${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      action: 'completed_challenge',
      targetName: challenge?.title || '',
      coins: challenge?.coins,
      timestamp: new Date().toISOString(),
    };
    setActivities(prev => [newActivity, ...prev]);
  };

  const handleCompleteQuest = (questId: string) => {
    const quest = dailyQuests.find(q => q.id === questId);
    setDailyQuests(prev =>
      prev.map(q => q.id === questId ? { ...q, completed: true } : q)
    );
    toast.success(`Quest completed! +${quest?.reward} coins 🎯`);
    
    // Add to activity feed
    const newActivity: ActivityItem = {
      id: `a${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      action: 'completed_quest',
      targetName: quest?.title || '',
      coins: quest?.reward,
      timestamp: new Date().toISOString(),
    };
    setActivities(prev => [newActivity, ...prev]);
  };

  const handleToggleHabit = (habitId: string) => {
    setHabits(prev =>
      prev.map(h =>
        h.id === habitId
          ? { ...h, completedToday: !h.completedToday, streak: !h.completedToday ? h.streak + 1 : h.streak - 1 }
          : h
      )
    );
    const habit = habits.find(h => h.id === habitId);
    if (!habit?.completedToday) {
      toast.success(`${habit?.title} done! Keep it up! 🔥`);
    }
  };

  const handleAddHabit = (newHabit: { title: string; icon: string; category: string }) => {
    const habit: Habit = {
      id: String(habits.length + 1),
      title: newHabit.title,
      icon: newHabit.icon,
      streak: 0,
      completedToday: false,
      category: newHabit.category as Habit['category'],
    };
    setHabits([...habits, habit]);
    toast.success(`New habit "${newHabit.title}" added! 🌟`);
  };

  const handleAddChallenge = (newChallenge: { title: string; description: string; type: string; difficulty: string; coins: number }) => {
    const challenge: Challenge = {
      id: String(challenges.length + 1),
      title: newChallenge.title,
      description: newChallenge.description,
      type: newChallenge.type as Challenge['type'],
      difficulty: newChallenge.difficulty as Challenge['difficulty'],
      coins: newChallenge.coins,
      completed: false,
    };
    setChallenges([challenge, ...challenges]);
    toast.success(`New challenge created! 🎯`);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | LittleWorlds</title>
        <meta name="description" content="Track your progress, complete challenges, and build healthy habits in LittleWorlds!" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Welcome back, {currentUser.name}! {currentUser.avatar}
            </h1>
            <p className="text-muted-foreground">
              Let's make today awesome!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{currentUser.coins}</div>
                  <div className="text-sm text-muted-foreground">Coins</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-coral/10 to-coral/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{currentStreak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-nature/10 to-nature/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-nature/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-nature" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{completedChallenges}/{challenges.length}</div>
                  <div className="text-sm text-muted-foreground">Challenges</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lavender/10 to-lavender/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-lavender" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{currentUser.badges.length}</div>
                  <div className="text-sm text-muted-foreground">Badges</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Daily Quests & Challenges */}
            <div className="lg:col-span-2 space-y-8">
              {/* Daily Quests */}
              <DailyQuests quests={dailyQuests} onComplete={handleCompleteQuest} />

              {/* Challenges Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="coral" className="mb-2">🎯 Challenges</Badge>
                    <h2 className="text-xl font-display font-bold">Active Challenges</h2>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setIsAddChallengeOpen(true)}>
                    <Plus className="w-4 h-4 mr-1" /> Add
                  </Button>
                </div>

                <div className="space-y-4">
                  {challenges.slice(0, 4).map((challenge, index) => (
                    <div
                      key={challenge.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ChallengeCard
                        challenge={challenge}
                        onComplete={handleCompleteChallenge}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Activity Feed, Habits & Leaderboard */}
            <div className="space-y-6">
              <ActivityFeed activities={activities} maxItems={6} />

              <HabitTracker
                habits={habits}
                onToggle={handleToggleHabit}
                onAddHabit={() => setIsAddHabitOpen(true)}
              />

              <Leaderboard
                entries={leaderboardData}
                title="Top Players"
                type="consistency"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <AddHabitModal
        open={isAddHabitOpen}
        onClose={() => setIsAddHabitOpen(false)}
        onAdd={handleAddHabit}
      />

      <AddChallengeModal
        open={isAddChallengeOpen}
        onClose={() => setIsAddChallengeOpen(false)}
        onAdd={handleAddChallenge}
      />
    </>
  );
}
