import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const memoryCardsData = [
  {
    id: 1,
    topic: "Bhagavad Gita",
    question: "What is Karma Yoga?",
    answer: "Doing your duty without attachment to results. Focus on actions, not outcomes!",
    emoji: "🕉️",
    color: "from-primary to-coral",
  },
  {
    id: 2,
    topic: "Ramayana",
    question: "Why is Lord Rama considered ideal?",
    answer: "He always kept his promises, respected elders, and treated everyone with kindness.",
    emoji: "🏹",
    color: "from-secondary to-mint",
  },
  {
    id: 3,
    topic: "Mahabharata",
    question: "What is the key lesson from Mahabharata?",
    answer: "Dharma (righteousness) always wins. Choose the right path even when it's difficult.",
    emoji: "⚔️",
    color: "from-lavender to-sky",
  },
  {
    id: 4,
    topic: "Science",
    question: "What are the 3 states of matter?",
    answer: "Solid, Liquid, and Gas! Ice → Water → Steam is a perfect example.",
    emoji: "🔬",
    color: "from-mint to-teal",
  },
  {
    id: 5,
    topic: "English",
    question: "What is a noun?",
    answer: "A word that names a person, place, thing, or idea. Examples: dog, school, happiness!",
    emoji: "📚",
    color: "from-accent to-primary",
  },
  {
    id: 6,
    topic: "Biology",
    question: "What do plants need to grow?",
    answer: "Sunlight, water, air (CO2), and nutrients from soil. This is called photosynthesis!",
    emoji: "🌱",
    color: "from-teal to-secondary",
  },
  {
    id: 7,
    topic: "Math",
    question: "What is the order of operations?",
    answer: "BODMAS - Brackets, Orders, Division, Multiplication, Addition, Subtraction!",
    emoji: "🔢",
    color: "from-coral to-primary",
  },
  {
    id: 8,
    topic: "GK",
    question: "What is the largest planet?",
    answer: "Jupiter! It's so big that 1,300 Earths could fit inside it.",
    emoji: "🪐",
    color: "from-sky to-lavender",
  },
  {
    id: 9,
    topic: "Bhagavad Gita",
    question: "What does 'Atman' mean?",
    answer: "The soul or true self. It is eternal and cannot be destroyed.",
    emoji: "✨",
    color: "from-primary to-accent",
  },
  {
    id: 10,
    topic: "Moral Values",
    question: "Why is honesty important?",
    answer: "Truth builds trust. When we're honest, people believe in us and we feel good inside!",
    emoji: "💎",
    color: "from-secondary to-teal",
  },
];

const MemoryCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % memoryCardsData.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + memoryCardsData.length) % memoryCardsData.length);
    }, 200);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentCard = memoryCardsData[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Quick Revision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            Memory Cards <span className="text-gradient">Flash Review!</span> 🧠
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Swipe through these cards to quickly revise what you've learned. Tap to reveal the answer!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Card */}
          <div
            className="relative h-80 perspective-1000 cursor-pointer mb-8"
            onClick={() => setIsFlipped(!isFlipped)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentCard.color} p-8 shadow-kid flex flex-col items-center justify-center text-center backface-hidden`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-5xl mb-4">{currentCard.emoji}</span>
                <div className="bg-card/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                  <span className="text-primary-foreground/80 text-sm font-medium">
                    {currentCard.topic}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-fredoka font-bold text-primary-foreground">
                  {currentCard.question}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-4">Tap to reveal answer</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-3xl bg-card p-8 shadow-kid flex flex-col items-center justify-center text-center border-4 border-primary/20"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <span className="text-4xl mb-4">💡</span>
                <div className="bg-primary/10 rounded-full px-4 py-1 mb-4">
                  <span className="text-primary text-sm font-medium">Answer</span>
                </div>
                <p className="text-lg md:text-xl font-medium text-foreground">
                  {currentCard.answer}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {memoryCardsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsFlipped(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Card {currentIndex + 1} of {memoryCardsData.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoryCards;
