import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { WorldCard } from '@/components/WorldCard';
import { CreateWorldModal } from '@/components/CreateWorldModal';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { defaultWorlds } from '@/data/staticData';
import { World } from '@/types';
import { Plus, Globe, Users, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function Worlds() {
  const navigate = useNavigate();
  const [worlds, setWorlds] = useState<World[]>(defaultWorlds);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateWorld = (newWorld: { name: string; theme: string; description: string }) => {
    const world: World = {
      id: String(Date.now()),
      name: newWorld.name,
      theme: newWorld.theme as World['theme'],
      description: newWorld.description || `A wonderful ${newWorld.theme} world!`,
      members: 1,
      level: 1,
      progress: 0,
      image: newWorld.theme === 'creativity' ? '🎨' : newWorld.theme === 'nature' ? '🌳' : newWorld.theme === 'learning' ? '📚' : '🚀',
      color: newWorld.theme === 'creativity' ? 'coral' : newWorld.theme === 'nature' ? 'nature' : newWorld.theme === 'learning' ? 'sky' : 'lavender',
      buildings: [],
      challenges: [],
      habits: [],
    };
    setWorlds([world, ...worlds]);
    toast.success(`${newWorld.name} has been created! 🎉`);
  };

  const handleJoinWorld = (worldId: string) => {
    const world = worlds.find(w => w.id === worldId);
    toast.success(`You joined ${world?.name}! Welcome aboard! 🚀`);
  };

  const handleViewWorld = (worldId: string) => {
    navigate(`/worlds/${worldId}`);
  };

  return (
    <>
      <Helmet>
        <title>Explore Worlds | LittleWorlds</title>
        <meta name="description" content="Explore and create magical worlds with your friends. Join learning, creativity, nature, and tech-for-good communities!" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <Badge variant="sky" className="mb-3">
                <Globe className="w-3 h-3 mr-1" /> Worlds
              </Badge>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                Explore Worlds
              </h1>
              <p className="text-muted-foreground">
                Join a world or create your own adventure!
              </p>
            </div>
            <Button size="lg" onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="w-5 h-5 mr-2" />
              Create World
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-card rounded-2xl p-4 text-center shadow-card">
              <div className="text-3xl font-bold text-primary">{worlds.length}</div>
              <div className="text-sm text-muted-foreground">Total Worlds</div>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-card">
              <div className="text-3xl font-bold text-nature">{worlds.reduce((acc, w) => acc + w.members, 0)}</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-card">
              <div className="text-3xl font-bold text-accent">
                {Math.round(worlds.reduce((acc, w) => acc + w.progress, 0) / worlds.length)}%
              </div>
              <div className="text-sm text-muted-foreground">Avg Progress</div>
            </div>
          </div>

          {/* Worlds Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {worlds.map((world, index) => (
              <div
                key={world.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <WorldCard
                  world={world}
                  onJoin={handleJoinWorld}
                  onView={handleViewWorld}
                />
              </div>
            ))}
          </div>

          {/* Empty State CTA */}
          {worlds.length === 0 && (
            <div className="text-center py-20">
              <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">No worlds yet!</h3>
              <p className="text-muted-foreground mb-6">Be the first to create a magical world.</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>
                <Plus className="w-5 h-5 mr-2" /> Create Your First World
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <CreateWorldModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateWorld}
      />
    </>
  );
}
