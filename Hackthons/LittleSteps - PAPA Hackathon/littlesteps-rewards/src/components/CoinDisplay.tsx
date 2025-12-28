import { cn } from '@/lib/utils';

interface CoinDisplayProps {
  amount: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showPlus?: boolean;
  showMinus?: boolean;
  animate?: boolean;
  className?: string;
}

export function CoinDisplay({ 
  amount, 
  size = 'md', 
  showPlus = false,
  showMinus = false,
  animate = false,
  className 
}: CoinDisplayProps) {
  const sizeClasses = {
    sm: 'text-sm gap-1',
    md: 'text-lg gap-1.5',
    lg: 'text-2xl gap-2',
    xl: 'text-4xl gap-3',
  };

  const coinSizes = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-6 h-6 text-sm',
    lg: 'w-8 h-8 text-base',
    xl: 'w-12 h-12 text-xl',
  };

  return (
    <div className={cn(
      'inline-flex items-center font-bold text-coin-foreground',
      sizeClasses[size],
      animate && 'animate-bounce-in',
      className
    )}>
      <div className={cn(
        'flex items-center justify-center rounded-full bg-gradient-to-br from-coin to-yellow-400 shadow-coin',
        coinSizes[size],
        animate && 'coin-glow'
      )}>
        <span>🪙</span>
      </div>
      <span className="tabular-nums">
        {showPlus && amount > 0 && '+'}
        {showMinus && amount > 0 && '-'}
        {amount.toLocaleString()}
      </span>
    </div>
  );
}
