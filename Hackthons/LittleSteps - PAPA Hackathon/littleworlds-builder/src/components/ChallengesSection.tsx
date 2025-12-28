import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Clock, Brain, ArrowRight } from "lucide-react";

const challengeTypes = [
  {
    icon: Palette,
    title: "Creative Challenges",
    description: "Draw, design, and tell stories",
    examples: ["Daily drawing prompts", "Design your dream room", "Write a short story"],
    color: "coral",
    gradient: "from-coral/20 to-coral/5",
  },
  {
    icon: Clock,
    title: "Habit Challenges",
    description: "Build healthy daily routines",
    examples: ["Sleep on time", "Complete homework", "Screen time control"],
    color: "lavender",
    gradient: "from-lavender/20 to-lavender/5",
  },
  {
    icon: Brain,
    title: "Learning Challenges",
    description: "Grow your knowledge",
    examples: ["Complete a mini-course", "Start a curiosity project", "Learn a new skill"],
    color: "sky",
    gradient: "from-sky/20 to-sky/5",
  },
];

const leaderboardTypes = [
  { emoji: "🔥", name: "Consistency Champs", description: "Longest streaks" },
  { emoji: "🎨", name: "Creative Stars", description: "Best artwork & designs" },
  { emoji: "📚", name: "Learning Leaders", description: "Most courses completed" },
  { emoji: "💚", name: "Good Deeds Rank", description: "Kindness & eco actions" },
  { emoji: "🌟", name: "Best World of the Week", description: "Top team collaboration" },
];

export function ChallengesSection() {
  return (
    <section id="challenges" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="sky" className="mb-4">
            🎯 Challenges
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Fun Challenges,{" "}
            <span className="text-primary">Real Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete challenges to earn coins, build streaks, and climb the positive leaderboards. 
            No toxic competition - just healthy fun!
          </p>
        </div>

        {/* Challenge Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {challengeTypes.map((challenge, index) => (
            <Card 
              key={challenge.title}
              className="group overflow-hidden border-2 border-transparent hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${challenge.gradient}`} />
              <CardContent className="p-6 space-y-4">
                <div className={`w-14 h-14 rounded-2xl bg-${challenge.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <challenge.icon className={`w-7 h-7 text-${challenge.color}`} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                </div>
                <ul className="space-y-2">
                  {challenge.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leaderboards */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
              🏆 Positive Leaderboards
            </h3>
            <p className="text-muted-foreground">
              Celebrate achievements, not just wins. Everyone can shine!
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {leaderboardTypes.map((board, index) => (
              <div 
                key={board.name}
                className="bg-muted/50 rounded-2xl p-4 text-center hover:bg-muted transition-colors cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2 group-hover:animate-bounce-gentle">{board.emoji}</div>
                <h4 className="font-display font-semibold text-sm mb-1">{board.name}</h4>
                <p className="text-xs text-muted-foreground">{board.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="default" size="lg">
              View All Leaderboards
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
