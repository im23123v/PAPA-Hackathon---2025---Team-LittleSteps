import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Check, X, RefreshCw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const challenges = [
  {
    question: "What makes the sky appear blue?",
    options: ["Reflection from oceans", "Rayleigh scattering of sunlight", "Blue gas in atmosphere", "Earth's magnetic field"],
    correct: 1,
    explanation: "Blue light has shorter wavelengths and scatters more when sunlight hits air molecules!"
  },
  {
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "Octopuses have 3 hearts - two pump blood to the gills, one pumps it to the body!"
  },
  {
    question: "What do plants need to make their own food?",
    options: ["Soil and water only", "Sunlight, water, and CO2", "Oxygen and minerals", "Rain and wind"],
    correct: 1,
    explanation: "Through photosynthesis, plants use sunlight, water, and carbon dioxide to make glucose!"
  },
  {
    question: "Why do stars appear to twinkle?",
    options: ["They're actually blinking", "Earth's atmosphere bends light", "They're very far away", "Clouds block them"],
    correct: 1,
    explanation: "Earth's moving atmosphere bends starlight, making stars appear to twinkle!"
  },
  {
    question: "What percentage of your brain is used thinking?",
    options: ["10%", "50%", "75%", "100%"],
    correct: 3,
    explanation: "Contrary to myths, we use all parts of our brain - just not all at once!"
  }
];

const DailyChallenge = () => {
  const [currentChallenge] = useState(() => challenges[Math.floor(Math.random() * challenges.length)]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === currentChallenge.correct;

  return (
    <section className="py-16 px-4">
      <div className="container max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 shadow-card border border-border"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-curious-orange/10 px-4 py-2 rounded-full mb-4">
              <Target className="h-5 w-5 text-curious-orange" />
              <span className="font-semibold text-curious-orange">Daily Challenge</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Test Your Knowledge! 🧠
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground text-center mb-6">
              {currentChallenge.question}
            </h3>

            <div className="grid gap-3">
              {currentChallenge.options.map((option, index) => {
                let buttonClass = "w-full p-4 rounded-xl text-left font-medium transition-all ";
                
                if (showResult) {
                  if (index === currentChallenge.correct) {
                    buttonClass += "bg-success/20 text-success border-2 border-success";
                  } else if (index === selectedAnswer) {
                    buttonClass += "bg-destructive/20 text-destructive border-2 border-destructive";
                  } else {
                    buttonClass += "bg-muted/50 text-muted-foreground";
                  }
                } else {
                  buttonClass += "bg-muted/50 hover:bg-primary/10 hover:border-primary/50 border-2 border-transparent";
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    className={buttonClass}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                      {showResult && index === currentChallenge.correct && (
                        <Check className="h-5 w-5 ml-auto text-success" />
                      )}
                      {showResult && index === selectedAnswer && index !== currentChallenge.correct && (
                        <X className="h-5 w-5 ml-auto text-destructive" />
                      )}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl ${isCorrect ? 'bg-success/10' : 'bg-curious-blue/10'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isCorrect ? 'bg-success/20' : 'bg-curious-blue/20'}`}>
                  {isCorrect ? (
                    <Sparkles className="h-5 w-5 text-success" />
                  ) : (
                    <RefreshCw className="h-5 w-5 text-curious-blue" />
                  )}
                </div>
                <div>
                  <p className={`font-bold ${isCorrect ? 'text-success' : 'text-curious-blue'}`}>
                    {isCorrect ? "🎉 Correct! You're a genius!" : "Nice try! Keep learning!"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {currentChallenge.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DailyChallenge;
