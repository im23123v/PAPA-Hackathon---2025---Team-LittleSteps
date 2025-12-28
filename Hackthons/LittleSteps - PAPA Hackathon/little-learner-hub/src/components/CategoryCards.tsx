import { BookOpen, Palette, Gamepad2, Brain, Mic, FlaskConical, Globe, Calculator } from "lucide-react";

const categories = [
  {
    title: "Epic Stories",
    description: "Learn from Ramayana, Mahabharata & Bhagavad Gita",
    icon: BookOpen,
    emoji: "📖",
    gradient: "from-primary to-coral",
    delay: "0s",
  },
  {
    title: "Art & Craft",
    description: "Draw, paint, and create beautiful crafts",
    icon: Palette,
    emoji: "🎨",
    gradient: "from-secondary to-mint",
    delay: "0.1s",
  },
  {
    title: "Brain Games",
    description: "Chess, Sudoku, Puzzles & more!",
    icon: Gamepad2,
    emoji: "🧩",
    gradient: "from-lavender to-sky",
    delay: "0.2s",
  },
  {
    title: "Science Lab",
    description: "Biology, Chemistry & exciting experiments",
    icon: FlaskConical,
    emoji: "🔬",
    gradient: "from-mint to-teal",
    delay: "0.3s",
  },
  {
    title: "English Fun",
    description: "Reading, writing, and vocabulary games",
    icon: Brain,
    emoji: "📝",
    gradient: "from-accent to-primary",
    delay: "0.4s",
  },
  {
    title: "Read Aloud",
    description: "Practice reading with voice tracking",
    icon: Mic,
    emoji: "🎤",
    gradient: "from-coral to-primary",
    delay: "0.5s",
  },
  {
    title: "World Facts",
    description: "General knowledge & amazing facts",
    icon: Globe,
    emoji: "🌍",
    gradient: "from-sky to-secondary",
    delay: "0.6s",
  },
  {
    title: "Math Magic",
    description: "Numbers, puzzles & problem solving",
    icon: Calculator,
    emoji: "🔢",
    gradient: "from-teal to-mint",
    delay: "0.7s",
  },
];

const CategoryCards = () => {
  return (
    <section id="learn" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            What Would You Like to <span className="text-gradient">Learn Today?</span> 🎯
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your adventure! Each category is packed with fun lessons, activities, and games.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-card rounded-3xl p-6 shadow-card-kid hover:shadow-kid-hover transition-all duration-500 cursor-pointer animate-fade-up overflow-hidden"
              style={{ animationDelay: category.delay }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Icon Container */}
              <div className="relative mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className="text-3xl">{category.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-fredoka text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span className="text-primary">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
