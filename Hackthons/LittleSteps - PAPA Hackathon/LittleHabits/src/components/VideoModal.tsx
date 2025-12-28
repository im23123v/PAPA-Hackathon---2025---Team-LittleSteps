import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoQuery: string;
  title: string;
}

// Map search queries to specific video IDs for better UX
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
};

export function VideoModal({ isOpen, onClose, videoQuery, title }: VideoModalProps) {
  // Get video ID from map or use a default educational video
  const videoId = videoIdMap[videoQuery] || "dA8K6F0ynXE";
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent variant="video" className="p-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative w-full">
          <div className="p-4 pb-2">
            <h3 className="text-lg sm:text-xl font-bold text-foreground pr-10">{title}</h3>
          </div>
          <div className="relative w-full aspect-video bg-foreground/5 rounded-xl sm:rounded-2xl overflow-hidden mx-auto">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default VideoModal;
