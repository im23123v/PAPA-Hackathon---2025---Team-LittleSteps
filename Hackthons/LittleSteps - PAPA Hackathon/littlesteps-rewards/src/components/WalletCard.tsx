import { Wallet } from '@/types';
import { CoinDisplay } from './CoinDisplay';
import { TrendingUp, TrendingDown, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WalletCardProps {
  wallet: Wallet;
  userName: string;
  className?: string;
}

export function WalletCard({ wallet, userName, className }: WalletCardProps) {
  return (
    <div className={cn(
      'relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-primary',
      className
    )}>
      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-foreground/10" />
      <div className="absolute -right-4 top-12 h-20 w-20 rounded-full bg-primary-foreground/5" />
      
      <div className="relative z-10">
        <p className="text-sm font-medium opacity-80">{userName}'s Wallet</p>
        
        <div className="mt-4 flex items-baseline gap-2">
          <CoinDisplay amount={wallet.balance} size="xl" className="text-primary-foreground" />
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs opacity-70">
              <TrendingUp className="h-3 w-3" />
              <span>Earned</span>
            </div>
            <p className="font-bold">{wallet.totalEarned.toLocaleString()}</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs opacity-70">
              <TrendingDown className="h-3 w-3" />
              <span>Spent</span>
            </div>
            <p className="font-bold">{wallet.totalSpent.toLocaleString()}</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs opacity-70">
              <Gift className="h-3 w-3" />
              <span>Bonus</span>
            </div>
            <p className="font-bold text-yellow-200">{wallet.bonusPoints.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
