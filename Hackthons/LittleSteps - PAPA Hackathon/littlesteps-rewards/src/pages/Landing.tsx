import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Coins, Users, Trophy, Shield, BarChart3, Gamepad2 } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Coins,
      title: 'Coin Rewards',
      description: 'Earn coins for healthy activities like reading, exercise, and family time',
    },
    {
      icon: Shield,
      title: 'Screen Time Control',
      description: 'Coins are spent automatically based on app usage - YouTube, games & more',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track spending patterns and see which apps consume the most coins',
    },
    {
      icon: Trophy,
      title: 'Unlock Rewards',
      description: 'Save bonus points to unlock real rewards like books and study kits',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl">
              👣
            </div>
            <span className="text-xl font-bold font-display text-foreground">LittleSteps</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate('/parent')}>
              Parent Login
            </Button>
            <Button variant="default" onClick={() => navigate('/child')}>
              Child Login
            </Button>
          </div>
        </nav>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <span>🌟</span>
            <span>Teaching healthy screen habits, one step at a time</span>
          </div>
          
          <h1 className="text-5xl font-bold font-display text-foreground leading-tight md:text-6xl">
            Rewarding <span className="text-gradient-primary">Real Activities</span>,
            <br />Managing <span className="text-gradient-accent">Screen Time</span>
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            LittleSteps helps families balance screen time with healthy activities. 
            Children earn coins for positive behaviors and spend them on entertainment apps.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" onClick={() => navigate('/parent')}>
              <Users className="mr-2 h-5 w-5" />
              Start as Parent
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => navigate('/child')}>
              <Gamepad2 className="mr-2 h-5 w-5" />
              Start as Child
            </Button>
          </div>
        </div>

        {/* Floating Coins Animation */}
        <div className="relative mt-16 flex justify-center gap-8">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-coin to-yellow-400 text-3xl shadow-coin">
              🪙
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-4xl shadow-primary">
              📚
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-orange-400 text-3xl shadow-accent">
              🏆
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold font-display text-center text-foreground">
          How It Works
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
          A simple system that motivates children to engage in healthy activities 
          while naturally limiting screen time
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-6 shadow-card transition-all hover:shadow-lg hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coin Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl bg-card p-8 shadow-lg md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold font-display text-foreground flex items-center gap-2">
                <span className="text-3xl">✨</span> Earn Coins
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  { activity: 'Reading', coins: 50, emoji: '📚' },
                  { activity: 'Homework', coins: 100, emoji: '📝' },
                  { activity: 'Exercise', coins: 50, emoji: '💪' },
                  { activity: 'Creative Time', coins: 100, emoji: '🎨' },
                ].map(item => (
                  <div key={item.activity} className="flex items-center justify-between rounded-lg bg-success/10 p-3">
                    <span className="flex items-center gap-2">
                      <span>{item.emoji}</span>
                      <span className="font-medium">{item.activity}</span>
                    </span>
                    <span className="font-bold text-success">+{item.coins} 🪙</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-display text-foreground flex items-center gap-2">
                <span className="text-3xl">📱</span> Spend Coins
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  { app: 'YouTube', coins: 5, emoji: '▶️' },
                  { app: 'Instagram', coins: 4, emoji: '📷' },
                  { app: 'Games', coins: 3, emoji: '🎮' },
                  { app: 'Learning Apps', coins: 1, emoji: '📖' },
                ].map(item => (
                  <div key={item.app} className="flex items-center justify-between rounded-lg bg-destructive/10 p-3">
                    <span className="flex items-center gap-2">
                      <span>{item.emoji}</span>
                      <span className="font-medium">{item.app}</span>
                    </span>
                    <span className="font-bold text-destructive">-{item.coins} 🪙/min</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 LittleSteps. Helping families build healthy habits together.</p>
        </div>
      </footer>
    </div>
  );
}
