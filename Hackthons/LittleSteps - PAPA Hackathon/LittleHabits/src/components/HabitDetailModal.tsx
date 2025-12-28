import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X, Sparkles, Target, Zap, Clock, CheckCircle2 } from "lucide-react";

interface HabitDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  habit: {
    title: string;
    description: string;
    icon: string;
    color: string;
    videoQuery: string;
    detailedDescription: string;
    atomicTips: string[];
    twoMinuteRule: string;
    habitStack: string;
    cueRoutineReward: {
      cue: string;
      routine: string;
      reward: string;
    };
  } | null;
}

// Map search queries to specific video IDs
const videoIdMap: Record<string, string> = {
  "morning+routine+for+kids": "d_wNB9NpSCA",
  "importance+of+sleep+for+kids": "vwQrN5n2HrY",
  "learn+time+for+kids": "lJ_rrwMfC0k",
  "screen+time+for+kids": "hCv1NURv1Y8",
  "homework+routine+for+kids": "WU9SnvutzlE",
  "clean+up+song+for+kids": "SFE0mMWbA-Y",
  "listening+skills+for+kids": "C3A-0n0rAJ8",
  "patience+for+kids": "oTXXNqV1xDU",
  "goal+setting+for+students": "L4N1q4RNi9I",
  "how+to+focus+for+students": "bnQ6pyxh8RA",
  "time+management+for+students": "iONDebHX9qk",
  "how+to+stop+procrastinating+for+students": "arj7oStGLkU",
  "digital+discipline+for+kids": "dLvO3g-mJF8",
  "social+media+discipline+for+teens": "e8Zb-PqFzAI",
  "emotion+control+for+kids": "wRq87GrHG5I",
  "self+discipline+for+teens": "R8P7w8mMtRA",
  "gratitude+for+kids": "GnM7c7p6qFE",
  "healthy+eating+for+kids": "mMHVEFWNLMc",
  "exercise+for+kids": "L_A_HjHZxfI",
  "reading+habits+for+kids": "InYqYO7tDFw",
  "kindness+for+kids": "kAo4-2UzgPo",
  "saving+money+for+kids": "MoVN42yVPu4",
  "personal+hygiene+for+kids": "ntoVyIb4tao",
  "public+speaking+for+kids": "M3L2s6vXdLM",
  "problem+solving+for+kids": "vNOr9gxDVks",
  "mindfulness+for+kids": "CvF9AEe-ozc",
  "organization+for+students": "VBd2XP6QP5Q",
  "note+taking+for+students": "E7CwqNHn_Ns",
  "stress+management+for+teens": "hnpQrMqDoqE",
  "sleep+hygiene+for+teens": "gedoSfZvBgE",
  "healthy+relationships+for+teens": "2bKh3aBbEaQ",
  "financial+literacy+for+teens": "4j2emMn7UaI",
  "critical+thinking+for+teens": "dItUGF8GdTw",
  "leadership+for+teens": "18UVXW-x2_8",
};

export function HabitDetailModal({ isOpen, onClose, habit }: HabitDetailModalProps) {
  const [showVideo, setShowVideo] = useState(false);

  if (!habit) return null;

  const videoId = videoIdMap[habit.videoQuery] || "dA8K6F0ynXE";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent variant="video" className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogTitle className="sr-only">{habit.title}</DialogTitle>
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-hero p-6 pb-8">
          <div className="flex items-start gap-4 pr-10">
            <div className="text-5xl p-3 bg-primary-foreground/20 rounded-2xl">
              {habit.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-black text-primary-foreground mb-2">
                {habit.title}
              </h2>
              <p className="text-primary-foreground/90 text-sm sm:text-base">
                {habit.description}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Video Section */}
          <div className="bg-muted rounded-2xl overflow-hidden">
            {showVideo ? (
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={habit.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              <button
                onClick={() => setShowVideo(true)}
                className="w-full aspect-video flex flex-col items-center justify-center gap-4 hover:bg-muted/80 transition-colors group"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow-coral group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-primary-foreground fill-current ml-1" />
                </div>
                <span className="font-bold text-foreground">Watch Learning Video</span>
              </button>
            )}
          </div>

          {/* Detailed Description */}
          <div className="bg-card rounded-2xl p-6 border-2 border-border">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sunshine" />
              Why This Habit Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {habit.detailedDescription}
            </p>
          </div>

          {/* Atomic Habits Method: Cue-Routine-Reward */}
          <div className="bg-gradient-to-br from-lavender-light/30 to-lavender/20 rounded-2xl p-6 border-2 border-lavender/30">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-lavender" />
              The Habit Loop (Atomic Habits Method)
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card/80 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🔔</div>
                <Badge variant="lavender" className="mb-2">CUE</Badge>
                <p className="text-sm text-muted-foreground">{habit.cueRoutineReward.cue}</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <Badge variant="teal" className="mb-2">ROUTINE</Badge>
                <p className="text-sm text-muted-foreground">{habit.cueRoutineReward.routine}</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎁</div>
                <Badge variant="sunshine" className="mb-2">REWARD</Badge>
                <p className="text-sm text-muted-foreground">{habit.cueRoutineReward.reward}</p>
              </div>
            </div>
          </div>

          {/* 2-Minute Rule */}
          <div className="bg-gradient-to-br from-teal-light/30 to-teal/20 rounded-2xl p-6 border-2 border-teal/30">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal" />
              The 2-Minute Rule
            </h3>
            <p className="text-muted-foreground mb-3">
              Start so small you can not say no. Make it easy to begin!
            </p>
            <div className="bg-card/80 backdrop-blur rounded-xl p-4">
              <p className="font-semibold text-teal">{habit.twoMinuteRule}</p>
            </div>
          </div>

          {/* Habit Stacking */}
          <div className="bg-gradient-to-br from-coral-light/30 to-coral/20 rounded-2xl p-6 border-2 border-coral/30">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-coral" />
              Habit Stacking
            </h3>
            <p className="text-muted-foreground mb-3">
              Link this new habit to one you already do!
            </p>
            <div className="bg-card/80 backdrop-blur rounded-xl p-4">
              <p className="font-semibold text-coral">{habit.habitStack}</p>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-sunshine/20 rounded-2xl p-6 border-2 border-sunshine/30">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-sunshine" />
              Pro Tips to Make It Stick
            </h3>
            <ul className="space-y-3">
              {habit.atomicTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl">{["💡", "🌟", "🎯", "✨"][index % 4]}</span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <div className="text-center pt-4">
            <Button variant="hero" size="lg" onClick={onClose}>
              <Sparkles className="w-5 h-5" />
              Start This Habit Today!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default HabitDetailModal;
