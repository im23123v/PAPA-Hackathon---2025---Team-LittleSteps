import { BookOpen, Star, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const stories = [
  {
    title: "The Story of Lord Rama",
    source: "Ramayana",
    description: "Learn about truth, courage, and keeping your promises through Rama's journey.",
    lessons: ["Always keep your word", "Respect your parents", "Good wins over evil"],
    emoji: "🏹",
    readTime: "10 min",
    difficulty: "Easy",
    color: "bg-primary/10 border-primary/20",
    link: "/ramayana",
  },
  {
    title: "Arjuna's Dilemma",
    source: "Bhagavad Gita",
    description: "What happens when you don't know what's right? Krishna teaches Arjuna.",
    lessons: ["Do your duty", "Don't fear results", "Stay calm in difficulty"],
    emoji: "🕉️",
    readTime: "8 min",
    difficulty: "Medium",
    color: "bg-secondary/10 border-secondary/20",
    link: null,
  },
  {
    title: "The Pandavas & Kauravas",
    source: "Mahabharata",
    description: "A tale of two families and the importance of dharma (righteousness).",
    lessons: ["Truth always wins", "Unity is strength", "Greed leads to downfall"],
    emoji: "⚔️",
    readTime: "12 min",
    difficulty: "Medium",
    color: "bg-lavender/10 border-lavender/20",
    link: null,
  },
];

const StoriesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (link: string | null) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <section id="stories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Moral Stories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
              Wisdom from <span className="text-gradient">Ancient Tales</span> 📜
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Discover life lessons from our great epics, explained simply for young minds.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            View All Stories <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={story.title}
              onClick={() => handleCardClick(story.link)}
              className={`group relative rounded-3xl border-2 ${story.color} p-6 transition-all duration-500 hover:shadow-kid-hover cursor-pointer animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Available Badge */}
              {story.link && (
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  Available!
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-card shadow-card-kid flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {story.emoji}
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>

              {/* Source Badge */}
              <div className="inline-block bg-muted rounded-full px-3 py-1 text-xs font-medium text-muted-foreground mb-3">
                {story.source}
              </div>

              {/* Content */}
              <h3 className="font-fredoka text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {story.description}
              </p>

              {/* Lessons */}
              <div className="space-y-2 mb-4">
                {story.lessons.map((lesson) => (
                  <div key={lesson} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">✓</span>
                    <span className="text-muted-foreground">{lesson}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {story.readTime}
                  </span>
                  <span className="bg-muted px-2 py-0.5 rounded-full">
                    {story.difficulty}
                  </span>
                </div>
                <span className="text-primary font-medium text-sm group-hover:underline">
                  {story.link ? "Read Story →" : "Coming Soon"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
