import { useState, useEffect, useRef } from 'react';
import { AppUsage } from '@/types';
import { apps } from '@/data/mockData';
import { Button } from './ui/button';
import { CoinDisplay } from './CoinDisplay';
import { cn } from '@/lib/utils';
import { Play, Pause, StopCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';

interface AppUsageSimulatorProps {
  childId: string;
}

export function AppUsageSimulator({ childId }: AppUsageSimulatorProps) {
  const { deductCoins, getChildWallet } = useApp();
  const [activeApp, setActiveApp] = useState<AppUsage | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [totalDeducted, setTotalDeducted] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const wallet = getChildWallet(childId);

  useEffect(() => {
    if (activeApp) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeApp]);

  useEffect(() => {
    if (activeApp && seconds > 0 && seconds % 60 === 0) {
      const cost = activeApp.coinsPerMinute;
      if (wallet && wallet.balance >= cost) {
        deductCoins(childId, cost, activeApp.name, activeApp.id);
        setTotalDeducted(prev => prev + cost);
        toast.info(`${cost} coins deducted for ${activeApp.name}`);
      } else {
        handleStop();
        toast.error('Not enough coins!');
      }
    }
  }, [seconds, activeApp, childId, deductCoins, wallet]);

  const handleStart = (app: AppUsage) => {
    if (!wallet || wallet.balance < app.coinsPerMinute) {
      toast.error('Not enough coins to use this app!');
      return;
    }
    setActiveApp(app);
    setSeconds(0);
    setTotalDeducted(0);
  };

  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleResume = () => {
    if (activeApp && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (activeApp && totalDeducted > 0) {
      toast.success(`Session ended. Total: ${totalDeducted} coins spent on ${activeApp.name}`);
    }
    setActiveApp(null);
    setSeconds(0);
    setTotalDeducted(0);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (activeApp) {
    return (
      <div className="rounded-2xl bg-card p-6 shadow-card">
        <div className="text-center">
          <div className={cn(
            'mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl text-4xl',
            activeApp.bgColor
          )}>
            {activeApp.icon}
          </div>
          
          <h3 className="text-xl font-bold text-foreground">{activeApp.name}</h3>
          <p className="mt-1 text-muted-foreground">Using app...</p>
          
          <div className="mt-6 text-5xl font-bold font-display text-foreground tabular-nums">
            {formatTime(seconds)}
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Cost:</span>
            <CoinDisplay amount={activeApp.coinsPerMinute} size="sm" showMinus />
            <span className="text-sm text-muted-foreground">/min</span>
          </div>
          
          {totalDeducted > 0 && (
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-sm text-destructive">Total spent:</span>
              <CoinDisplay amount={totalDeducted} size="sm" className="text-destructive" />
            </div>
          )}
          
          <div className="mt-6 flex justify-center gap-3">
            {intervalRef.current ? (
              <Button variant="outline" size="lg" onClick={handlePause}>
                <Pause className="mr-2 h-4 w-4" />
                Pause
              </Button>
            ) : (
              <Button variant="default" size="lg" onClick={handleResume}>
                <Play className="mr-2 h-4 w-4" />
                Resume
              </Button>
            )}
            <Button variant="destructive" size="lg" onClick={handleStop}>
              <StopCircle className="mr-2 h-4 w-4" />
              Stop
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Screen Time Simulator</h3>
      <p className="text-sm text-muted-foreground">Test how coins are deducted when using apps</p>
      
      <div className="grid gap-3 sm:grid-cols-2">
        {apps.map(app => (
          <button
            key={app.id}
            onClick={() => handleStart(app)}
            className={cn(
              'group flex items-center gap-4 rounded-xl p-4 text-left transition-all',
              app.bgColor,
              'hover:scale-[1.02] hover:shadow-md'
            )}
          >
            <div className="text-3xl">{app.icon}</div>
            <div className="flex-1">
              <h4 className={cn('font-semibold', app.color)}>{app.name}</h4>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CoinDisplay amount={app.coinsPerMinute} size="sm" showMinus />
                <span>/min</span>
              </div>
            </div>
            <Play className={cn('h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100', app.color)} />
          </button>
        ))}
      </div>
    </div>
  );
}
