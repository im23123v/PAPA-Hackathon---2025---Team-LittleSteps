import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { mockUsers } from '@/data/mockData';
import { WalletCard } from '@/components/WalletCard';
import { AppUsageSimulator } from '@/components/AppUsageSimulator';
import { RewardTiers } from '@/components/RewardTiers';
import { TransactionList } from '@/components/TransactionList';
import { SpendingChart } from '@/components/SpendingChart';
import { ActivityProofSubmit } from '@/components/ActivityProofSubmit';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, CheckCircle, XCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

export default function ChildDashboard() {
  const navigate = useNavigate();
  const { getChildWallet, getChildTransactions, getAppSpending, getChildProofs, submitActivityProof } = useApp();
  
  const children = mockUsers.filter(u => u.role === 'child');
  const [selectedChildId, setSelectedChildId] = useState<string>(children[0]?.id || '');
  
  const selectedChild = children.find(c => c.id === selectedChildId);
  const wallet = selectedChildId ? getChildWallet(selectedChildId) : null;
  const transactions = selectedChildId ? getChildTransactions(selectedChildId) : [];
  const spending = selectedChildId ? getAppSpending(selectedChildId) : {};
  const proofs = selectedChildId ? getChildProofs(selectedChildId) : [];

  const pendingProofs = proofs.filter(p => p.status === 'pending');
  const recentProofs = proofs.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-xl">
                🎮
              </div>
              <div>
                <h1 className="text-lg font-bold font-display text-foreground">My Dashboard</h1>
                <p className="text-xs text-muted-foreground">Welcome back!</p>
              </div>
            </div>
          </div>
          
          {/* Child Avatar Selector */}
          <div className="flex gap-2">
            {children.map(child => (
              <button
                key={child.id}
                onClick={() => setSelectedChildId(child.id)}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full text-xl transition-all',
                  selectedChildId === child.id
                    ? 'ring-2 ring-primary ring-offset-2 scale-110'
                    : 'opacity-60 hover:opacity-100'
                )}
              >
                {child.avatar}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {selectedChild && wallet && (
          <>
            {/* Welcome Message */}
            <div className="mb-6 flex items-center gap-3 animate-slide-up">
              <span className="text-4xl">{selectedChild.avatar}</span>
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground">
                  Hey, {selectedChild.name}!
                </h2>
                <p className="text-muted-foreground flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Keep earning those coins!
                </p>
              </div>
            </div>

            {/* Wallet Card */}
            <section className="mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <WalletCard wallet={wallet} userName={selectedChild.name} />
            </section>

            {/* Activity Proof Submit */}
            <section className="mb-8 rounded-2xl bg-card p-6 shadow-card animate-slide-up" style={{ animationDelay: '150ms' }}>
              <ActivityProofSubmit
                childId={selectedChildId}
                pendingProofs={pendingProofs}
                onSubmitProof={submitActivityProof}
              />
            </section>

            {/* Recent Proof Status */}
            {recentProofs.length > 0 && (
              <section className="mb-8 rounded-2xl bg-card p-6 shadow-card animate-slide-up" style={{ animationDelay: '175ms' }}>
                <h3 className="text-lg font-semibold font-display text-foreground mb-4">
                  My Proof Submissions 📋
                </h3>
                <div className="space-y-3">
                  {recentProofs.map((proof) => (
                    <div
                      key={proof.id}
                      className={cn(
                        'flex items-center gap-3 rounded-lg p-3 border',
                        proof.status === 'pending' && 'border-warning/50 bg-warning/5',
                        proof.status === 'approved' && 'border-success/50 bg-success/5',
                        proof.status === 'rejected' && 'border-destructive/50 bg-destructive/5'
                      )}
                    >
                      <img
                        src={proof.proofImage}
                        alt="Proof"
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{proof.activityName}</p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(proof.submittedAt), 'MMM d, h:mm a')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-coin">+{proof.coins}</span>
                        {proof.status === 'pending' && (
                          <span className="flex items-center gap-1 text-xs text-warning">
                            <Clock className="h-3 w-3" />
                            Waiting
                          </span>
                        )}
                        {proof.status === 'approved' && (
                          <span className="flex items-center gap-1 text-xs text-success">
                            <CheckCircle className="h-3 w-3" />
                            Approved!
                          </span>
                        )}
                        {proof.status === 'rejected' && (
                          <span className="flex items-center gap-1 text-xs text-destructive">
                            <XCircle className="h-3 w-3" />
                            Try again
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* App Usage Simulator */}
            <section className="mb-8 rounded-2xl bg-card p-6 shadow-card animate-slide-up" style={{ animationDelay: '200ms' }}>
              <AppUsageSimulator childId={selectedChildId} />
            </section>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* My Spending */}
              <section className="rounded-2xl bg-card p-6 shadow-card animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-lg font-semibold font-display text-foreground mb-4">
                  Where My Coins Go 💸
                </h3>
                <SpendingChart spending={spending} />
              </section>

              {/* Recent Activity */}
              <section className="rounded-2xl bg-card p-6 shadow-card animate-slide-up" style={{ animationDelay: '400ms' }}>
                <h3 className="text-lg font-semibold font-display text-foreground mb-4">
                  My Activity 📊
                </h3>
                <TransactionList transactions={transactions} limit={5} />
              </section>
            </div>

            {/* Rewards Section */}
            <section className="mt-8 rounded-2xl bg-card p-6 shadow-card animate-slide-up" style={{ animationDelay: '500ms' }}>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <h3 className="text-lg font-semibold font-display text-foreground">
                  My Rewards Progress
                </h3>
              </div>
              <RewardTiers bonusPoints={wallet.bonusPoints} />
            </section>

            {/* Tips */}
            <section className="mt-8 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span>💡</span> Pro Tips
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Take clear photos of your completed activities! 📸</li>
                <li>• Complete homework to earn 100 coins! 📝</li>
                <li>• Reading and exercise give you 50 coins each! 📚💪</li>
                <li>• Save your bonus points for awesome rewards! 🎁</li>
              </ul>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
