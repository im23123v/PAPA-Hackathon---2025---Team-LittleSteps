import { useState } from "react";
import { ArrowLeft, BookOpen, Star, Clock, ChevronRight, Heart, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chapters = [
  {
    id: 1,
    title: "The Birth of Lord Rama",
    emoji: "👶",
    readTime: "5 min",
    story: `Long ago, in the beautiful city of Ayodhya, there lived a great king named Dasharatha. He was a kind and just ruler, loved by all his people. But the king had one wish - he wanted children to carry on his legacy.

King Dasharatha performed a special prayer called 'Putrakameshti Yagna'. The gods were pleased and blessed him with four sons: Rama, Bharata, Lakshmana, and Shatrughna.

Rama was the eldest and showed signs of greatness from childhood. He was brave, kind, and always spoke the truth. Everyone in the kingdom adored him.`,
    morals: [
      "Patience and prayer can fulfill our deepest wishes",
      "Good qualities like kindness and truthfulness make us special",
    ],
    quiz: [
      { question: "What was the name of Rama's father?", options: ["Dasharatha", "Vishwamitra", "Janaka"], answer: 0 },
      { question: "How many brothers did Rama have?", options: ["2", "3", "4"], answer: 1 },
    ],
  },
  {
    id: 2,
    title: "Rama Meets Sita",
    emoji: "💕",
    readTime: "6 min",
    story: `When Rama grew up, the great sage Vishwamitra took him and Lakshmana to protect his prayers from demons. Rama bravely defeated the demons and earned everyone's respect.

Then they traveled to the kingdom of Mithila, ruled by King Janaka. The king had a beautiful daughter named Sita. He announced that whoever could lift Lord Shiva's mighty bow would marry Sita.

Many strong princes tried but failed. When Rama's turn came, he not only lifted the bow but also strung it so powerfully that it broke! King Janaka was overjoyed and Rama and Sita were married in a grand ceremony.`,
    morals: [
      "True strength comes from a pure heart",
      "Courage and determination help us achieve the impossible",
    ],
    quiz: [
      { question: "Who took Rama to protect his prayers?", options: ["King Janaka", "Sage Vishwamitra", "Dasharatha"], answer: 1 },
      { question: "What did Rama have to lift to win Sita's hand?", options: ["A mountain", "Shiva's bow", "A sword"], answer: 1 },
    ],
  },
  {
    id: 3,
    title: "The Forest Exile",
    emoji: "🌲",
    readTime: "7 min",
    story: `King Dasharatha wanted to make Rama the next king. Everyone was happy, except Queen Kaikeyi, who was influenced by her evil maid Manthara.

Kaikeyi reminded the king of two wishes he had promised her long ago. She asked that her son Bharata become king, and Rama be sent to the forest for 14 years.

Though his heart was breaking, King Dasharatha had to keep his promise. Rama accepted his fate with a smile, showing everyone that keeping one's word is most important. Sita and Lakshmana lovingly chose to go with him.`,
    morals: [
      "A promise must always be kept",
      "True love means staying together in difficult times",
      "Accept challenges with courage and grace",
    ],
    quiz: [
      { question: "For how many years was Rama exiled?", options: ["10 years", "12 years", "14 years"], answer: 2 },
      { question: "Who went to the forest with Rama?", options: ["Only Sita", "Sita and Lakshmana", "All his brothers"], answer: 1 },
    ],
  },
  {
    id: 4,
    title: "Ravana Takes Sita",
    emoji: "😈",
    readTime: "8 min",
    story: `In the forest, Rama, Sita, and Lakshmana lived peacefully. But the demon king Ravana heard about Sita's beauty and wanted to capture her.

Ravana sent a magical golden deer to distract Rama and Lakshmana. While they were away, he disguised himself as a sage and tricked Sita into stepping out of her protected area.

Ravana then revealed his true form and carried Sita away to his island kingdom of Lanka. The brave bird Jatayu tried to stop him but was injured. Sita dropped her jewelry along the way, hoping Rama would find the trail.`,
    morals: [
      "Be careful of strangers, even if they seem kind",
      "Evil may win temporarily, but good always triumphs in the end",
    ],
    quiz: [
      { question: "Who was the demon king?", options: ["Jatayu", "Ravana", "Vibhishana"], answer: 1 },
      { question: "What did Sita drop to leave a trail?", options: ["Flowers", "Her jewelry", "Coins"], answer: 1 },
    ],
  },
  {
    id: 5,
    title: "Friends and Allies",
    emoji: "🐵",
    readTime: "6 min",
    story: `Rama and Lakshmana searched everywhere for Sita. They met the dying Jatayu, who told them about Ravana.

On their journey, they met Hanuman, the mighty monkey devotee, and his king Sugriva. Rama helped Sugriva become king again, and in return, the monkey army joined Rama's mission.

Hanuman was given Rama's ring and flew across the ocean to Lanka. He found Sita in Ravana's garden, gave her Rama's ring, and assured her that rescue was coming. Before leaving, he burned down parts of Lanka to show Ravana's army what was coming!`,
    morals: [
      "True friends help each other in times of need",
      "Devotion and bravery can move mountains",
    ],
    quiz: [
      { question: "Who flew to Lanka to find Sita?", options: ["Sugriva", "Hanuman", "Jatayu"], answer: 1 },
      { question: "What did Hanuman give Sita?", options: ["Food", "Rama's ring", "A weapon"], answer: 1 },
    ],
  },
  {
    id: 6,
    title: "Victory and Return",
    emoji: "🏆",
    readTime: "8 min",
    story: `Rama's army built a bridge across the ocean to Lanka. Even Ravana's good brother, Vibhishana, joined Rama's side because he knew Ravana was wrong.

A great battle took place. Rama fought Ravana in an epic duel. With a special arrow blessed by the gods, Rama finally defeated the demon king.

Sita was freed, and they all returned to Ayodhya on a flying chariot called Pushpaka Vimana. The people of Ayodhya lit thousands of oil lamps to welcome them home. This celebration is now known as Diwali, the festival of lights!`,
    morals: [
      "Good always wins over evil",
      "Standing for what is right may be hard but is always rewarding",
      "Celebrations bring people together in joy",
    ],
    quiz: [
      { question: "What festival celebrates Rama's return?", options: ["Holi", "Diwali", "Navratri"], answer: 1 },
      { question: "Who was Ravana's good brother?", options: ["Kumbhakarna", "Vibhishana", "Indrajit"], answer: 1 },
    ],
  },
];

const Ramayana = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentChapter = selectedChapter !== null ? chapters[selectedChapter] : null;

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const checkQuiz = () => {
    setShowResults(true);
  };

  const resetChapter = () => {
    setQuizAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/#stories">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>

          {!currentChapter ? (
            <>
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Epic Story</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-fredoka font-bold mb-4">
                  The <span className="text-gradient">Ramayana</span> 🏹
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Join Lord Rama on his incredible journey! Learn about courage, love, and the triumph of good over evil.
                </p>
              </div>

              {/* Key Characters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { name: "Lord Rama", emoji: "🏹", desc: "The hero prince" },
                  { name: "Sita", emoji: "👸", desc: "Rama's devoted wife" },
                  { name: "Hanuman", emoji: "🐵", desc: "The mighty devotee" },
                  { name: "Lakshmana", emoji: "⚔️", desc: "Loyal brother" },
                ].map((char) => (
                  <div key={char.name} className="bg-card rounded-2xl p-4 text-center shadow-card-kid">
                    <div className="text-4xl mb-2">{char.emoji}</div>
                    <h3 className="font-fredoka font-bold">{char.name}</h3>
                    <p className="text-sm text-muted-foreground">{char.desc}</p>
                  </div>
                ))}
              </div>

              {/* Chapters */}
              <h2 className="text-2xl font-fredoka font-bold mb-6 text-center">Choose a Chapter 📖</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => { setSelectedChapter(index); resetChapter(); }}
                    className="group bg-card rounded-3xl p-6 shadow-card-kid hover:shadow-kid-hover transition-all duration-500 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                        {chapter.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <Clock className="w-3 h-3" />
                          {chapter.readTime}
                        </div>
                        <h3 className="font-fredoka font-bold text-lg group-hover:text-primary transition-colors">
                          Chapter {chapter.id}: {chapter.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-2">
                          {[1, 2, 3].map((s) => (
                            <Star key={s} className="w-4 h-4 text-accent fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Story <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-3xl mx-auto">
              {/* Chapter Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentChapter.emoji}</div>
                <h1 className="text-3xl md:text-4xl font-fredoka font-bold mb-2">
                  Chapter {currentChapter.id}: {currentChapter.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentChapter.readTime}
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="bg-card rounded-3xl p-8 shadow-card-kid mb-8">
                <div className="prose prose-lg max-w-none">
                  {currentChapter.story.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-lg leading-relaxed mb-4 text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Moral Lessons */}
              <div className="bg-secondary/10 rounded-3xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-secondary" />
                  <h3 className="font-fredoka font-bold text-lg">What We Learn</h3>
                </div>
                <ul className="space-y-3">
                  {currentChapter.morals.map((moral, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-coral mt-0.5" />
                      <span>{moral}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quiz */}
              <div className="bg-card rounded-3xl p-6 shadow-card-kid mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-accent" />
                  <h3 className="font-fredoka font-bold text-lg">Quick Quiz!</h3>
                </div>
                
                {currentChapter.quiz.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{qIndex + 1}. {q.question}</p>
                    <div className="grid gap-2">
                      {q.options.map((option, oIndex) => (
                        <button
                          key={oIndex}
                          onClick={() => handleQuizAnswer(qIndex, oIndex)}
                          disabled={showResults}
                          className={`p-3 rounded-xl text-left transition-all ${
                            quizAnswers[qIndex] === oIndex
                              ? showResults
                                ? oIndex === q.answer
                                  ? "bg-secondary/20 border-2 border-secondary"
                                  : "bg-coral/20 border-2 border-coral"
                                : "bg-primary/20 border-2 border-primary"
                              : showResults && oIndex === q.answer
                              ? "bg-secondary/20 border-2 border-secondary"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {!showResults ? (
                  <Button 
                    variant="hero" 
                    onClick={checkQuiz}
                    disabled={Object.keys(quizAnswers).length !== currentChapter.quiz.length}
                  >
                    Check Answers
                  </Button>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-fredoka">
                      Score: {currentChapter.quiz.filter((q, i) => quizAnswers[i] === q.answer).length} / {currentChapter.quiz.length} ⭐
                    </div>
                    <Button variant="outline" onClick={resetChapter}>
                      Try Again
                    </Button>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setSelectedChapter(null)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Chapters
                </Button>
                {selectedChapter < chapters.length - 1 && (
                  <Button variant="hero" onClick={() => { setSelectedChapter(selectedChapter + 1); resetChapter(); }}>
                    Next Chapter
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ramayana;
