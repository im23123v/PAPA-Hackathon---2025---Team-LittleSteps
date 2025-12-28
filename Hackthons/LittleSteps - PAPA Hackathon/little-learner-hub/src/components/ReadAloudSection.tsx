import { useState, useRef, useEffect, useCallback } from "react";
import { Mic, MicOff, Volume2, BookOpen, Star, RefreshCw, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const readingTexts = [
  {
    title: "The Sunset",
    level: "Easy",
    text: "The sun was setting behind the mountains. Little Ravi watched the sky turn orange and pink. He felt happy and grateful for the beautiful day.",
  },
  {
    title: "The Brave Ant",
    level: "Easy", 
    text: "A tiny ant was carrying a big leaf. Other ants came to help. Together they moved it quickly. Teamwork makes everything easier.",
  },
  {
    title: "The Magic Garden",
    level: "Medium",
    text: "Maya discovered a secret garden behind her house. Colorful butterflies danced among the flowers. A little rabbit hopped across the green grass. It was the most beautiful place she had ever seen.",
  },
  {
    title: "The Wise Owl",
    level: "Medium",
    text: "In the old banyan tree lived a wise owl. All the forest animals came to him for advice. He taught them to be patient and kind. Knowledge comes from listening and learning.",
  },
  {
    title: "The River Journey",
    level: "Hard",
    text: "The mighty river started as a tiny stream high in the mountains. It traveled through forests and villages, bringing life to everything it touched. People and animals gathered at its banks, grateful for the precious gift of water.",
  },
];

const ReadAloudSection = () => {
  const { toast } = useToast();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [completedWords, setCompletedWords] = useState<number[]>([]);
  const [spokenWords, setSpokenWords] = useState<string[]>([]);
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  const currentReading = readingTexts[currentTextIndex];
  const words = currentReading.text.split(" ");

  // Normalize word for comparison
  const normalizeWord = (word: string) => {
    return word.toLowerCase().replace(/[.,!?;:'"]/g, "").trim();
  };

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      
      const spokenWordsList = transcript.toLowerCase().split(" ").filter(w => w.trim());
      setSpokenWords(spokenWordsList);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === "not-allowed") {
        toast({
          title: "Microphone Access Denied",
          description: "Please allow microphone access to use Read Aloud.",
          variant: "destructive",
        });
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [isListening, toast]);

  // Match spoken words to text
  useEffect(() => {
    if (!isListening || spokenWords.length === 0) return;

    const normalizedTextWords = words.map(normalizeWord);
    let matchedIndex = completedWords.length > 0 ? Math.max(...completedWords) : -1;

    for (const spoken of spokenWords) {
      const normalizedSpoken = normalizeWord(spoken);
      const nextIndex = matchedIndex + 1;
      
      if (nextIndex < normalizedTextWords.length) {
        const targetWord = normalizedTextWords[nextIndex];
        
        // Check if spoken word matches or is similar enough
        if (normalizedSpoken === targetWord || 
            targetWord.includes(normalizedSpoken) || 
            normalizedSpoken.includes(targetWord)) {
          if (!completedWords.includes(nextIndex)) {
            setCompletedWords(prev => [...prev, nextIndex]);
            setCurrentWordIndex(nextIndex);
            matchedIndex = nextIndex;
          }
        }
      }
    }
  }, [spokenWords, words, isListening, completedWords]);

  const startListening = useCallback(async () => {
    if (!isSupported) {
      toast({
        title: "Not Supported",
        description: "Speech recognition is not supported in your browser. Try Chrome or Edge.",
        variant: "destructive",
      });
      return;
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsListening(true);
      setCurrentWordIndex(0);
      setCompletedWords([]);
      setSpokenWords([]);
      recognitionRef.current?.start();
    } catch (error) {
      toast({
        title: "Microphone Error",
        description: "Could not access your microphone. Please check permissions.",
        variant: "destructive",
      });
    }
  }, [isSupported, toast]);

  const stopListening = useCallback(() => {
    setIsListening(false);
    recognitionRef.current?.stop();
  }, []);

  const resetReading = () => {
    stopListening();
    setCurrentWordIndex(-1);
    setCompletedWords([]);
    setSpokenWords([]);
  };

  const nextText = () => {
    resetReading();
    setCurrentTextIndex((prev) => (prev + 1) % readingTexts.length);
  };

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(currentReading.text);
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const isComplete = completedWords.length === words.length;

  return (
    <section id="read" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-coral/20 rounded-full px-4 py-2 mb-4">
            <Mic className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-coral">Read Aloud</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            Practice Reading with <span className="text-gradient">Voice Tracking!</span> 🎤
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read the text aloud and watch the words light up as you speak. Your voice controls the progress!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!isSupported && (
            <div className="mb-6 p-4 bg-coral/10 border border-coral/20 rounded-2xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-coral" />
              <p className="text-sm text-coral">
                Speech recognition is not supported in your browser. Please use Chrome or Edge for the best experience.
              </p>
            </div>
          )}

          {/* Reading Card */}
          <div className="bg-card rounded-3xl p-8 shadow-card-kid border-2 border-primary/10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-lg">{currentReading.title}</h3>
                  <p className="text-muted-foreground text-sm">Level: {currentReading.level}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      isComplete ? "text-accent fill-current" : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Reading Text */}
            <div className="bg-muted rounded-2xl p-6 mb-6">
              <p className="text-xl md:text-2xl leading-relaxed font-medium">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block mr-2 px-1 py-0.5 rounded transition-all duration-300 ${
                      completedWords.includes(index)
                        ? "bg-secondary/30 text-secondary"
                        : currentWordIndex === index && isListening
                        ? "bg-primary/20 text-primary scale-110 font-bold animate-pulse"
                        : "text-foreground"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium text-primary">
                  {completedWords.length} / {words.length} words
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-hero rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedWords.length / words.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant={isListening ? "destructive" : "hero"}
                size="lg"
                onClick={isListening ? stopListening : startListening}
                className="gap-2"
                disabled={!isSupported}
              >
                {isListening ? (
                  <>
                    <MicOff className="w-5 h-5" />
                    Stop Reading
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5" />
                    Start Reading
                  </>
                )}
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={speakText}>
                <Volume2 className="w-5 h-5" />
                Listen First
              </Button>
              <Button variant="ghost" size="lg" className="gap-2" onClick={resetReading}>
                <RefreshCw className="w-5 h-5" />
                Reset
              </Button>
              <Button variant="ghost" size="lg" className="gap-2" onClick={nextText}>
                Next Story
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Status */}
            {isListening && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Listening... Read aloud!</span>
                </div>
              </div>
            )}

            {isComplete && (
              <div className="mt-6 text-center animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-6 py-3">
                  <span className="text-2xl">🎉</span>
                  <span className="font-fredoka font-bold text-secondary">Excellent! You read it all!</span>
                </div>
              </div>
            )}
          </div>

          {/* Tips */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { emoji: "🎯", tip: "Read clearly and at your own pace" },
              { emoji: "🔊", tip: "Speak loud enough for the mic to hear" },
              { emoji: "⭐", tip: "Practice daily to improve!" },
            ].map((item) => (
              <div
                key={item.tip}
                className="bg-muted rounded-2xl p-4 flex items-center gap-3"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm text-muted-foreground">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadAloudSection;
