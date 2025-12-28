import { Transaction } from '@/types';
import { CoinDisplay } from './CoinDisplay';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
  limit?: number;
}

export function TransactionList({ transactions, limit }: TransactionListProps) {
  const displayTxs = limit ? transactions.slice(0, limit) : transactions;

  if (displayTxs.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        No transactions yet
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {displayTxs.map((tx, index) => (
        <div
          key={tx.id}
          className="flex items-center justify-between rounded-lg bg-muted/50 p-3 animate-slide-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full',
              tx.type === 'earned' ? 'bg-success/20' : 'bg-destructive/20'
            )}>
              {tx.type === 'earned' ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
            </div>
            <div>
              <p className="font-medium text-foreground">{tx.source}</p>
              <p className="text-xs text-muted-foreground">
                {tx.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          
          <CoinDisplay
            amount={tx.amount}
            size="sm"
            showPlus={tx.type === 'earned'}
            showMinus={tx.type === 'spent'}
            className={tx.type === 'earned' ? 'text-success' : 'text-destructive'}
          />
        </div>
      ))}
    </div>
  );
}
