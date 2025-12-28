import { useState, useEffect, useCallback } from "react";
import { Calculator, Trophy, Timer, RefreshCw, Zap, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type GameType = "addition" | "subtraction" | "multiplication" | "quickfire";

interface Problem {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

const generateProblem = (type: GameType, level: number): Problem => {
  const max = level === 1 ? 10 : level === 2 ? 50 : 100;
  const num1 = Math.floor(Math.random() * max) + 1;
  const num2 = Math.floor(Math.random() * (type === "multiplication" ? 12 : max)) + 1;

  const operators = type === "quickfire" 
    ? ["+", "-", "×"][Math.floor(Math.random() * 3)]
    : type === "addition" ? "+" : type === "subtraction" ? "-" : "×";

  let answer: number;
  switch (operators) {
    case "+": answer = num1 + num2; break;
    case "-": answer = Math.max(num1, num2) - Math.min(num1, num2); break;
    case "×": answer = num1 * num2; break;
    default: answer = num1 + num2;
  }

  const finalNum1 = operators === "-" ? Math.max(num1, num2) : num1;
  const finalNum2 = operators === "-" ? Math.min(num1, num2) : num2;

  return { num1: finalNum1, num2: finalNum2, operator: operators, answer };
};

const MathMagicSection = () => {
  const [activeGame, setActiveGame] = useState<GameType | null>(null);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const games = [
    { type: "addition" as GameType, title: "Addition Adventure", emoji: "➕", color: "from-primary to-coral" },
    { type: "subtraction" as GameType, title: "Subtraction Safari", emoji: "➖", color: "from-secondary to-mint" },
    { type: "multiplication" as GameType, title: "Multiplication Mania", emoji: "✖️", color: "from-lavender to-sky" },
    { type: "quickfire" as GameType, title: "Quickfire Challenge", emoji: "⚡", color: "from-accent to-primary" },
  ];

  const startGame = (type: GameType) => {
    setActiveGame(type);
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    setIsPlaying(true);
    setFeedback(null);
    setUserAnswer("");
    setProblem(generateProblem(type, level));
  };

  const checkAnswer = useCallback(() => {
    if (!problem || !userAnswer) return;

    const isCorrect = parseInt(userAnswer) === problem.answer;
    setFeedback(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      const points = streak >= 5 ? 15 : streak >= 3 ? 12 : 10;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setFeedback(null);
      setUserAnswer("");
      setProblem(generateProblem(activeGame!, level));
    }, 500);
  }, [problem, userAnswer, streak, activeGame, level]);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      if (score > highScore) setHighScore(score);
    }
  }, [isPlaying, timeLeft, score, highScore]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") checkAnswer();
  };

  if (!activeGame) {
    return (
      <section id="math" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-2 mb-4">
              <Calculator className="w-4 h-4 text-teal" />
              <span className="text-sm font-medium text-teal">Math Magic</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
              Numbers are <span className="text-gradient">Fun!</span> 🔢
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Practice math with exciting games. Beat your high score and become a math wizard!
            </p>
          </div>

          {/* Level Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {[1, 2, 3].map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-6 py-2 rounded-full font-fredoka font-medium transition-all ${
                  level === l
                    ? "bg-primary text-primary-foreground shadow-kid-hover"
                    : "bg-card hover:bg-muted"
                }`}
              >
                Level {l}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <button
                key={game.type}
                onClick={() => startGame(game.type)}
                className="group bg-card rounded-3xl p-6 shadow-card-kid hover:shadow-kid-hover transition-all duration-500 text-left"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  {game.emoji}
                </div>
                <h3 className="font-fredoka text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {game.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {game.type === "quickfire" 
                    ? "Mix of all operations - be fast!" 
                    : `Practice ${game.type} with fun challenges`}
                </p>
                <div className="mt-4 text-primary font-medium text-sm">
                  Play Now →
                </div>
              </button>
            ))}
          </div>

          {highScore > 0 && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-6 py-3">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="font-fredoka font-bold text-accent">High Score: {highScore}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Game Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={() => setActiveGame(null)}>
              ← Back to Games
            </Button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                <Timer className="w-4 h-4 text-coral" />
                <span className={`font-bold ${timeLeft <= 10 ? "text-coral animate-pulse" : ""}`}>
                  {timeLeft}s
                </span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-accent" />
                <span className="font-bold">{score}</span>
              </div>
            </div>
          </div>

          {isPlaying && problem ? (
            <div className="bg-card rounded-3xl p-8 shadow-card-kid text-center">
              {/* Streak Indicator */}
              {streak >= 3 && (
                <div className="mb-4 inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 animate-bounce-slow">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="font-bold text-accent">{streak} Streak! +Bonus Points</span>
                </div>
              )}

              {/* Problem Display */}
              <div className={`text-6xl md:text-8xl font-fredoka font-bold mb-8 transition-all ${
                feedback === "correct" ? "text-secondary scale-110" : 
                feedback === "wrong" ? "text-coral shake" : ""
              }`}>
                {problem.num1} {problem.operator} {problem.num2} = ?
              </div>

              {/* Answer Input */}
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-40 text-center text-4xl font-fredoka font-bold bg-muted rounded-2xl p-4 border-2 border-primary/20 focus:border-primary focus:outline-none"
                placeholder="?"
                autoFocus
              />

              <div className="mt-6">
                <Button variant="hero" size="lg" onClick={checkAnswer}>
                  <Target className="w-5 h-5 mr-2" />
                  Check Answer
                </Button>
              </div>

              {feedback && (
                <div className={`mt-6 text-2xl font-fredoka font-bold animate-fade-up ${
                  feedback === "correct" ? "text-secondary" : "text-coral"
                }`}>
                  {feedback === "correct" ? "🎉 Correct!" : `❌ It was ${problem.answer}`}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-card rounded-3xl p-8 shadow-card-kid text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-3xl font-fredoka font-bold mb-2">Time's Up!</h3>
              <p className="text-xl text-muted-foreground mb-2">
                Your Score: <span className="text-primary font-bold">{score}</span>
              </p>
              {score > highScore && (
                <p className="text-accent font-bold mb-4 animate-bounce-slow">🎉 New High Score!</p>
              )}
              <div className="flex justify-center gap-4 mt-6">
                <Button variant="hero" onClick={() => startGame(activeGame)}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Play Again
                </Button>
                <Button variant="outline" onClick={() => setActiveGame(null)}>
                  Choose Game
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MathMagicSection;
