import { User } from '@/types';
import { cn } from '@/lib/utils';
import { useApp } from '@/context/AppContext';
import { CoinDisplay } from './CoinDisplay';

interface ChildSelectorProps {
  children: User[];
  selectedChildId: string | null;
  onSelect: (childId: string) => void;
}

export function ChildSelector({ children, selectedChildId, onSelect }: ChildSelectorProps) {
  const { getChildWallet } = useApp();

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {children.map(child => {
        const wallet = getChildWallet(child.id);
        const isSelected = selectedChildId === child.id;

        return (
          <button
            key={child.id}
            onClick={() => onSelect(child.id)}
            className={cn(
              'flex flex-col items-center gap-2 rounded-2xl border-2 p-4 transition-all min-w-[120px]',
              isSelected
                ? 'border-primary bg-primary/5 shadow-primary'
                : 'border-transparent bg-card hover:border-border shadow-card'
            )}
          >
            <div className={cn(
              'flex h-16 w-16 items-center justify-center rounded-full text-4xl transition-transform',
              isSelected && 'scale-110'
            )}>
              {child.avatar}
            </div>
            <p className="font-semibold text-foreground">{child.name}</p>
            {wallet && (
              <CoinDisplay amount={wallet.balance} size="sm" />
            )}
          </button>
        );
      })}
    </div>
  );
}
