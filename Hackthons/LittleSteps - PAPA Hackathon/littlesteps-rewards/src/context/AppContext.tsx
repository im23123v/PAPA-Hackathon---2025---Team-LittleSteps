import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { User, Wallet, Transaction, ActivityProof } from '@/types';
import { mockUsers, mockWallets, mockTransactions } from '@/data/mockData';

interface AppContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  wallets: Record<string, Wallet>;
  transactions: Transaction[];
  activityProofs: ActivityProof[];
  addCoinsToChild: (childId: string, amount: number, source: string) => void;
  deductCoins: (childId: string, amount: number, source: string, category: string) => void;
  getChildWallet: (childId: string) => Wallet | null;
  getChildTransactions: (childId: string) => Transaction[];
  getAppSpending: (childId: string) => Record<string, number>;
  submitActivityProof: (childId: string, activityId: string, activityName: string, coins: number, proofImage: string) => void;
  approveProof: (proofId: string) => void;
  rejectProof: (proofId: string, reason: string) => void;
  getChildProofs: (childId: string) => ActivityProof[];
  getPendingProofs: () => ActivityProof[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users] = useState<User[]>(mockUsers);
  const [wallets, setWallets] = useState<Record<string, Wallet>>(mockWallets);
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [activityProofs, setActivityProofs] = useState<ActivityProof[]>([]);

  const addCoinsToChild = useCallback((childId: string, amount: number, source: string) => {
    setWallets(prev => {
      const wallet = prev[childId] || {
        userId: childId,
        balance: 0,
        totalEarned: 0,
        totalSpent: 0,
        bonusPoints: 0,
      };
      
      return {
        ...prev,
        [childId]: {
          ...wallet,
          balance: wallet.balance + amount,
          totalEarned: wallet.totalEarned + amount,
          bonusPoints: wallet.bonusPoints + Math.floor(amount * 0.1),
        },
      };
    });

    const newTransaction: Transaction = {
      id: `tx-${Date.now()}`,
      userId: childId,
      type: 'earned',
      amount,
      source,
      timestamp: new Date(),
      category: 'activity',
    };

    setTransactions(prev => [newTransaction, ...prev]);
  }, []);

  const deductCoins = useCallback((childId: string, amount: number, source: string, category: string) => {
    setWallets(prev => {
      const wallet = prev[childId];
      if (!wallet || wallet.balance < amount) return prev;
      
      return {
        ...prev,
        [childId]: {
          ...wallet,
          balance: wallet.balance - amount,
          totalSpent: wallet.totalSpent + amount,
        },
      };
    });

    const newTransaction: Transaction = {
      id: `tx-${Date.now()}`,
      userId: childId,
      type: 'spent',
      amount,
      source,
      timestamp: new Date(),
      category,
    };

    setTransactions(prev => [newTransaction, ...prev]);
  }, []);

  const getChildWallet = useCallback((childId: string): Wallet | null => {
    return wallets[childId] || null;
  }, [wallets]);

  const getChildTransactions = useCallback((childId: string): Transaction[] => {
    return transactions.filter(t => t.userId === childId);
  }, [transactions]);

  const getAppSpending = useCallback((childId: string): Record<string, number> => {
    const childTxs = transactions.filter(t => t.userId === childId && t.type === 'spent');
    return childTxs.reduce((acc, tx) => {
      const cat = tx.category || 'other';
      acc[cat] = (acc[cat] || 0) + tx.amount;
      return acc;
    }, {} as Record<string, number>);
  }, [transactions]);

  const submitActivityProof = useCallback((
    childId: string,
    activityId: string,
    activityName: string,
    coins: number,
    proofImage: string
  ) => {
    const newProof: ActivityProof = {
      id: `proof-${Date.now()}`,
      childId,
      activityId,
      activityName,
      coins,
      proofImage,
      submittedAt: new Date(),
      status: 'pending',
    };

    setActivityProofs(prev => [newProof, ...prev]);
  }, []);

  const approveProof = useCallback((proofId: string) => {
    setActivityProofs(prev => {
      const proof = prev.find(p => p.id === proofId);
      if (!proof || proof.status !== 'pending') return prev;

      // Add coins when approved
      setWallets(walletsPrev => {
        const wallet = walletsPrev[proof.childId] || {
          userId: proof.childId,
          balance: 0,
          totalEarned: 0,
          totalSpent: 0,
          bonusPoints: 0,
        };
        
        return {
          ...walletsPrev,
          [proof.childId]: {
            ...wallet,
            balance: wallet.balance + proof.coins,
            totalEarned: wallet.totalEarned + proof.coins,
            bonusPoints: wallet.bonusPoints + Math.floor(proof.coins * 0.1),
          },
        };
      });

      const newTransaction: Transaction = {
        id: `tx-${Date.now()}`,
        userId: proof.childId,
        type: 'earned',
        amount: proof.coins,
        source: proof.activityName,
        timestamp: new Date(),
        category: 'activity',
      };

      setTransactions(txPrev => [newTransaction, ...txPrev]);

      return prev.map(p =>
        p.id === proofId
          ? { ...p, status: 'approved' as const, reviewedAt: new Date() }
          : p
      );
    });
  }, []);

  const rejectProof = useCallback((proofId: string, reason: string) => {
    setActivityProofs(prev =>
      prev.map(p =>
        p.id === proofId
          ? { ...p, status: 'rejected' as const, reviewedAt: new Date(), rejectionReason: reason }
          : p
      )
    );
  }, []);

  const getChildProofs = useCallback((childId: string): ActivityProof[] => {
    return activityProofs.filter(p => p.childId === childId);
  }, [activityProofs]);

  const getPendingProofs = useCallback((): ActivityProof[] => {
    return activityProofs.filter(p => p.status === 'pending');
  }, [activityProofs]);

  return (
    <AppContext.Provider value={{
      currentUser,
      setCurrentUser,
      users,
      wallets,
      transactions,
      activityProofs,
      addCoinsToChild,
      deductCoins,
      getChildWallet,
      getChildTransactions,
      getAppSpending,
      submitActivityProof,
      approveProof,
      rejectProof,
      getChildProofs,
      getPendingProofs,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
