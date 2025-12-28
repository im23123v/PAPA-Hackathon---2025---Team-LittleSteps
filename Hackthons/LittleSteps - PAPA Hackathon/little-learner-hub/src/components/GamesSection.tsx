import { Gamepad2, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const games = [
  {
    name: "Chess",
    description: "Master the king of games! Learn strategy and think ahead.",
    emoji: "♟️",
    players: "1-2",
    difficulty: "All Levels",
    color: "from-primary to-coral",
  },
  {
    name: "Sudoku",
    description: "Fill the grid with numbers. Great for logical thinking!",
    emoji: "🔢",
    players: "1",
    difficulty: "Easy to Hard",
    color: "from-secondary to-mint",
  },
  {
    name: "Puzzles",
    description: "Solve picture puzzles and brain teasers!",
    emoji: "🧩",
    players: "1",
    difficulty: "Fun for All",
    color: "from-lavender to-sky",
  },
  {
    name: "Memory Match",
    description: "Flip cards and find matching pairs. Train your memory!",
    emoji: "🎴",
    players: "1-4",
    difficulty: "Easy",
    color: "from-accent to-primary",
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-16 md:py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🎮</div>
        <div className="absolute top-40 right-20 text-6xl">🏆</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🎯</div>
        <div className="absolute bottom-40 right-10 text-5xl">⭐</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-lavender/20 rounded-full px-4 py-2 mb-4">
            <Gamepad2 className="w-4 h-4 text-lavender" />
            <span className="text-sm font-medium text-lavender">Brain Games</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            Play & Learn with <span className="text-gradient">Fun Games!</span> 🎮
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharpen your mind with puzzles, chess, and brain-boosting games designed just for you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={game.name}
              className="group bg-card rounded-3xl p-6 shadow-card-kid hover:shadow-kid-hover transition-all duration-500 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Game Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-4xl mb-4 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-kid`}>
                {game.emoji}
              </div>

              {/* Content */}
              <h3 className="font-fredoka text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors">
                {game.name}
              </h3>
              <p className="text-muted-foreground text-sm text-center mb-4">
                {game.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {game.players}
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {game.difficulty}
                </span>
              </div>

              {/* Play Button */}
              <Button variant="teal" className="w-full">
                Play Now! 🎯
              </Button>
            </div>
          ))}
        </div>

        {/* Leaderboard Teaser */}
        <div className="mt-12 bg-card rounded-3xl p-8 shadow-card-kid">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-fredoka text-2xl font-bold">Weekly Leaderboard</h3>
                <p className="text-muted-foreground">Compete with friends and earn badges!</p>
              </div>
            </div>
            <Button variant="hero" size="lg">
              View Rankings 🏆
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
