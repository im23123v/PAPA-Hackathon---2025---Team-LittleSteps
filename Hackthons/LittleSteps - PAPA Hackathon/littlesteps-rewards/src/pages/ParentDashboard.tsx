import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { mockUsers } from '@/data/mockData';
import { WalletCard } from '@/components/WalletCard';
import { ChildSelector } from '@/components/ChildSelector';
import { SpendingChart } from '@/components/SpendingChart';
import { RewardTiers } from '@/components/RewardTiers';
import { TransactionList } from '@/components/TransactionList';
import { AddCoinsModal } from '@/components/AddCoinsModal';
import { ProofVerificationPanel } from '@/components/ProofVerificationPanel';
import { StatsCard } from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Plus, TrendingUp, TrendingDown, Clock, ArrowLeft, Gift, ClipboardCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ParentDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getChildWallet, getChildTransactions, getAppSpending, addCoinsToChild, activityProofs, approveProof, rejectProof } = useApp();
  
  const children = mockUsers.filter(u => u.role === 'child');
  const [selectedChildId, setSelectedChildId] = useState<string>(children[0]?.id || '');
  const [showAddCoins, setShowAddCoins] = useState(false);
  
  const selectedChild = children.find(c => c.id === selectedChildId);
  const wallet = selectedChildId ? getChildWallet(selectedChildId) : null;
  const transactions = selectedChildId ? getChildTransactions(selectedChildId) : [];
  const spending = selectedChildId ? getAppSpending(selectedChildId) : {};
  
  const todayEarned = transactions
    .filter(t => t.type === 'earned')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const todaySpent = transactions
    .filter(t => t.type === 'spent')
    .reduce((sum, t) => sum + t.amount, 0);

  const topSpender = Object.entries(spending).sort((a, b) => b[1] - a[1])[0];
  
  const pendingProofsCount = activityProofs.filter(p => p.status === 'pending').length;

  const handleApproveProof = (proofId: string) => {
    approveProof(proofId);
    toast({
      title: "Proof Approved! ✅",
      description: "Coins have been added to the child's wallet",
    });
  };

  const handleRejectProof = (proofId: string, reason: string) => {
    rejectProof(proofId, reason);
    toast({
      title: "Proof Rejected",
      description: "The child has been notified to try again",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl">
                👣
              </div>
              <div>
                <h1 className="text-lg font-bold font-display text-foreground">LittleSteps</h1>
                <p className="text-xs text-muted-foreground">Parent Dashboard</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {pendingProofsCount > 0 && (
              <span className="flex items-center gap-1 text-sm font-medium text-warning bg-warning/10 px-3 py-1 rounded-full">
                <ClipboardCheck className="h-4 w-4" />
                {pendingProofsCount} pending
              </span>
            )}
            {selectedChild && (
              <Button variant="coin" onClick={() => setShowAddCoins(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Coins
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Child Selector */}
        <section className="mb-8">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">Select Child</h2>
          <ChildSelector
            children={children}
            selectedChildId={selectedChildId}
            onSelect={setSelectedChildId}
          />
        </section>

        {/* Proof Verification Panel */}
        <section className="mb-8 rounded-2xl bg-card p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardCheck className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold font-display text-foreground">
              Activity Proof Verification
            </h3>
          </div>
          <ProofVerificationPanel
            proofs={activityProofs}
            onApprove={handleApproveProof}
            onReject={handleRejectProof}
          />
        </section>

        {selectedChild && wallet && (
          <>
            {/* Wallet Card */}
            <section className="mb-8">
              <WalletCard wallet={wallet} userName={selectedChild.name} />
            </section>

            {/* Stats Grid */}
            <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Earned Today"
                value={todayEarned}
                subtitle="From activities"
                icon={TrendingUp}
                iconColor="text-success"
                trend="up"
                trendValue={`${todayEarned} coins`}
              />
              <StatsCard
                title="Spent Today"
                value={todaySpent}
                subtitle="On screen time"
                icon={TrendingDown}
                iconColor="text-destructive"
              />
              <StatsCard
                title="Biggest Drain"
                value={topSpender ? topSpender[0] : 'None'}
                subtitle={topSpender ? `${topSpender[1]} coins` : 'No spending yet'}
                icon={Clock}
                iconColor="text-warning"
              />
              <StatsCard
                title="Bonus Points"
                value={wallet.bonusPoints}
                subtitle="Unspent rewards"
                icon={Gift}
                iconColor="text-accent"
              />
            </section>

            {/* Charts & Lists */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Spending Breakdown */}
              <section className="rounded-2xl bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold font-display text-foreground mb-4">
                  Screen Time Spending
                </h3>
                <SpendingChart spending={spending} />
              </section>

              {/* Recent Transactions */}
              <section className="rounded-2xl bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold font-display text-foreground mb-4">
                  Recent Activity
                </h3>
                <TransactionList transactions={transactions} limit={6} />
              </section>
            </div>

            {/* Reward Tiers */}
            <section className="mt-8 rounded-2xl bg-card p-6 shadow-card">
              <RewardTiers bonusPoints={wallet.bonusPoints} />
            </section>
          </>
        )}

        {/* Add Coins Modal */}
        {selectedChild && (
          <AddCoinsModal
            open={showAddCoins}
            onClose={() => setShowAddCoins(false)}
            child={selectedChild}
            onAddCoins={addCoinsToChild}
          />
        )}
      </main>
    </div>
  );
}
