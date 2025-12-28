import { useState } from 'react';
import { ActivityProof } from '@/types';
import { mockUsers } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Check, X, Clock, Eye, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface ProofVerificationPanelProps {
  proofs: ActivityProof[];
  onApprove: (proofId: string) => void;
  onReject: (proofId: string, reason: string) => void;
}

export function ProofVerificationPanel({ proofs, onApprove, onReject }: ProofVerificationPanelProps) {
  const [selectedProof, setSelectedProof] = useState<ActivityProof | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectDialog, setShowRejectDialog] = useState(false);

  const pendingProofs = proofs.filter(p => p.status === 'pending');
  const recentProofs = proofs.filter(p => p.status !== 'pending').slice(0, 5);

  const getChildName = (childId: string) => {
    return mockUsers.find(u => u.id === childId)?.name || 'Unknown';
  };

  const getChildAvatar = (childId: string) => {
    return mockUsers.find(u => u.id === childId)?.avatar || '👤';
  };

  const handleApprove = (proof: ActivityProof) => {
    onApprove(proof.id);
    setSelectedProof(null);
  };

  const handleReject = () => {
    if (selectedProof && rejectionReason.trim()) {
      onReject(selectedProof.id, rejectionReason);
      setShowRejectDialog(false);
      setSelectedProof(null);
      setRejectionReason('');
    }
  };

  if (pendingProofs.length === 0 && recentProofs.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
        <p>No activity proofs to review yet</p>
        <p className="text-sm mt-1">When your children complete activities, their proofs will appear here</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Pending Proofs */}
      {pendingProofs.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-warning text-warning-foreground text-xs font-bold">
              {pendingProofs.length}
            </span>
            <h4 className="font-semibold text-foreground">Pending Verification</h4>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {pendingProofs.map((proof) => (
              <div
                key={proof.id}
                className="group relative rounded-xl border-2 border-warning/50 bg-warning/5 p-4 transition-all hover:border-warning hover:shadow-card"
              >
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={proof.proofImage}
                      alt="Proof"
                      className="h-16 w-16 rounded-lg object-cover cursor-pointer"
                      onClick={() => setSelectedProof(proof)}
                    />
                    <button
                      onClick={() => setSelectedProof(proof)}
                      className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                    >
                      <Eye className="h-5 w-5 text-foreground" />
                    </button>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getChildAvatar(proof.childId)}</span>
                      <span className="font-medium text-foreground">{getChildName(proof.childId)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {proof.activityName} • <span className="text-coin font-medium">+{proof.coins}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {format(new Date(proof.submittedAt), 'MMM d, h:mm a')}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3">
                  <Button
                    size="sm"
                    variant="success"
                    className="flex-1"
                    onClick={() => handleApprove(proof)}
                  >
                    <Check className="mr-1 h-3 w-3" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="flex-1"
                    onClick={() => { setSelectedProof(proof); setShowRejectDialog(true); }}
                  >
                    <X className="mr-1 h-3 w-3" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent History */}
      {recentProofs.length > 0 && (
        <div>
          <h4 className="font-semibold text-foreground mb-3">Recent Verifications</h4>
          <div className="space-y-2">
            {recentProofs.map((proof) => (
              <div
                key={proof.id}
                className={cn(
                  'flex items-center gap-3 rounded-lg p-3 border',
                  proof.status === 'approved' && 'border-success/30 bg-success/5',
                  proof.status === 'rejected' && 'border-destructive/30 bg-destructive/5'
                )}
              >
                <img
                  src={proof.proofImage}
                  alt="Proof"
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {getChildName(proof.childId)} - {proof.activityName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {proof.status === 'approved' ? 'Approved' : 'Rejected'} • {format(new Date(proof.reviewedAt || proof.submittedAt), 'MMM d')}
                  </p>
                </div>
                <span className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full',
                  proof.status === 'approved' && 'bg-success text-success-foreground',
                  proof.status === 'rejected' && 'bg-destructive text-destructive-foreground'
                )}>
                  {proof.status === 'approved' ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View Proof Modal */}
      <Dialog open={!!selectedProof && !showRejectDialog} onOpenChange={() => setSelectedProof(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Verify Activity Proof
            </DialogTitle>
          </DialogHeader>
          
          {selectedProof && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <span className="text-2xl">{getChildAvatar(selectedProof.childId)}</span>
                <div>
                  <p className="font-medium text-foreground">{getChildName(selectedProof.childId)}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedProof.activityName} • <span className="text-coin font-medium">+{selectedProof.coins} coins</span>
                  </p>
                </div>
              </div>
              
              <img
                src={selectedProof.proofImage}
                alt="Activity Proof"
                className="w-full rounded-xl border border-border"
              />
              
              <p className="text-xs text-muted-foreground text-center">
                Submitted {format(new Date(selectedProof.submittedAt), 'MMMM d, yyyy at h:mm a')}
              </p>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button
              variant="destructive"
              onClick={() => setShowRejectDialog(true)}
            >
              <X className="mr-2 h-4 w-4" />
              Reject
            </Button>
            <Button
              variant="success"
              onClick={() => selectedProof && handleApprove(selectedProof)}
            >
              <Check className="mr-2 h-4 w-4" />
              Approve & Award Coins
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rejection Reason Modal */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Reject Proof
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Please provide a reason for rejection. This will help your child understand what to improve.
            </p>
            
            <Textarea
              placeholder="e.g., Photo is blurry, please retake..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => { setShowRejectDialog(false); setRejectionReason(''); }}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleReject}
              disabled={!rejectionReason.trim()}
            >
              <X className="mr-2 h-4 w-4" />
              Reject Proof
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}