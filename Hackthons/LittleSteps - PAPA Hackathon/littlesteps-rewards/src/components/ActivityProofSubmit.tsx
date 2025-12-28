import { useState, useRef } from 'react';
import { Activity, ActivityProof } from '@/types';
import { activities } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Camera, Upload, X, Check, Clock, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ActivityProofSubmitProps {
  childId: string;
  pendingProofs: ActivityProof[];
  onSubmitProof: (childId: string, activityId: string, activityName: string, coins: number, proofImage: string) => void;
}

export function ActivityProofSubmit({ childId, pendingProofs, onSubmitProof }: ActivityProofSubmitProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [proofImage, setProofImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProofImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedActivity || !proofImage) return;
    
    setIsSubmitting(true);
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onSubmitProof(
      childId,
      selectedActivity.id,
      selectedActivity.name,
      selectedActivity.coins,
      proofImage
    );
    
    toast({
      title: "Proof Submitted! 📸",
      description: `Your ${selectedActivity.name} proof is waiting for approval`,
    });
    
    setIsSubmitting(false);
    setSelectedActivity(null);
    setProofImage(null);
  };

  const hasPendingProof = (activityId: string) => {
    return pendingProofs.some(p => p.activityId === activityId && p.status === 'pending');
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold font-display text-foreground">
            Complete Activities 🎯
          </h3>
          {pendingProofs.filter(p => p.status === 'pending').length > 0 && (
            <span className="flex items-center gap-1 text-xs text-warning bg-warning/10 px-2 py-1 rounded-full">
              <Clock className="h-3 w-3" />
              {pendingProofs.filter(p => p.status === 'pending').length} pending
            </span>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {activities.map((activity) => {
            const isPending = hasPendingProof(activity.id);
            
            return (
              <button
                key={activity.id}
                onClick={() => !isPending && setSelectedActivity(activity)}
                disabled={isPending}
                className={cn(
                  'relative flex flex-col items-center gap-2 rounded-xl p-4 transition-all',
                  'border-2 border-border hover:border-primary hover:shadow-card',
                  isPending && 'opacity-60 cursor-not-allowed border-warning/50 bg-warning/5'
                )}
              >
                <span className="text-3xl">{activity.icon}</span>
                <span className="text-sm font-medium text-foreground">{activity.name}</span>
                <span className="text-xs text-muted-foreground">+{activity.coins} coins</span>
                
                {isPending && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-xl">
                    <span className="flex items-center gap-1 text-xs text-warning font-medium">
                      <Clock className="h-3 w-3" />
                      Pending
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Proof Upload Modal */}
      <Dialog open={!!selectedActivity} onOpenChange={() => { setSelectedActivity(null); setProofImage(null); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <span className="text-2xl">{selectedActivity?.icon}</span>
              Submit Proof: {selectedActivity?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Upload a photo showing you completed this activity. Your parent will verify it!
            </p>
            
            <div className="text-center">
              <span className="inline-flex items-center gap-1 text-lg font-bold text-coin">
                +{selectedActivity?.coins} coins
              </span>
            </div>

            {/* Image Preview / Upload Area */}
            <div className="relative">
              {proofImage ? (
                <div className="relative rounded-xl overflow-hidden border-2 border-success">
                  <img
                    src={proofImage}
                    alt="Proof"
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => setProofImage(null)}
                    className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                    <Check className="h-3 w-3" />
                    Photo ready
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center justify-center h-48 rounded-xl border-2 border-dashed border-border hover:border-primary cursor-pointer transition-colors bg-muted/30"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="h-8 w-8 text-primary" />
                    <Upload className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">Click to upload your proof</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                </div>
              )}
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => { setSelectedActivity(null); setProofImage(null); }}
            >
              Cancel
            </Button>
            <Button
              variant="coin"
              onClick={handleSubmit}
              disabled={!proofImage || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Proof
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}