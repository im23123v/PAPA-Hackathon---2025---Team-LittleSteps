import { Activity, AppUsage, RewardTier, User, Transaction, Wallet } from '@/types';

export const activities: Activity[] = [
  { id: '1', name: 'Reading', coins: 50, icon: '📚', color: 'bg-primary' },
  { id: '2', name: 'Walking', coins: 50, icon: '🚶', color: 'bg-success' },
  { id: '3', name: 'Exercise', coins: 50, icon: '💪', color: 'bg-accent' },
  { id: '4', name: 'Homework', coins: 100, icon: '📝', color: 'bg-warning' },
  { id: '5', name: 'Family Time', coins: 50, icon: '👨‍👩‍👧‍👦', color: 'bg-pink-500' },
  { id: '6', name: 'Playing Offline', coins: 50, icon: '🎮', color: 'bg-purple-500' },
  { id: '7', name: 'Creative Time', coins: 100, icon: '🎨', color: 'bg-cyan-500' },
];

export const apps: AppUsage[] = [
  { id: 'youtube', name: 'YouTube', coinsPerMinute: 5, icon: '▶️', color: 'text-youtube', bgColor: 'bg-youtube/10' },
  { id: 'instagram', name: 'Instagram', coinsPerMinute: 4, icon: '📷', color: 'text-instagram', bgColor: 'bg-instagram/10' },
  { id: 'games', name: 'Games', coinsPerMinute: 3, icon: '🎮', color: 'text-games', bgColor: 'bg-games/10' },
  { id: 'learning', name: 'Learning Apps', coinsPerMinute: 1, icon: '📖', color: 'text-learning', bgColor: 'bg-learning/10' },
];

export const rewardTiers: RewardTier[] = [
  { id: '1', name: 'Starter Kit', description: 'Basic stationery set', pointsRequired: 100, icon: '✏️', unlocked: false },
  { id: '2', name: 'Book Worm', description: 'Story book collection', pointsRequired: 250, icon: '📚', unlocked: false },
  { id: '3', name: 'Art Master', description: 'Art supplies kit', pointsRequired: 500, icon: '🎨', unlocked: false },
  { id: '4', name: 'Science Explorer', description: 'Science experiment kit', pointsRequired: 750, icon: '🔬', unlocked: false },
  { id: '5', name: 'Super Scholar', description: 'Complete study kit', pointsRequired: 1000, icon: '🏆', unlocked: false },
];

export const mockUsers: User[] = [
  { id: 'parent-1', name: 'Mom', role: 'parent', avatar: '👩' },
  { id: 'child-1', name: 'Alex', role: 'child', parentId: 'parent-1', avatar: '👦' },
  { id: 'child-2', name: 'Emma', role: 'child', parentId: 'parent-1', avatar: '👧' },
];

export const mockWallets: Record<string, Wallet> = {
  'child-1': {
    userId: 'child-1',
    balance: 450,
    totalEarned: 1200,
    totalSpent: 750,
    bonusPoints: 320,
  },
  'child-2': {
    userId: 'child-2',
    balance: 280,
    totalEarned: 800,
    totalSpent: 520,
    bonusPoints: 180,
  },
};

export const mockTransactions: Transaction[] = [
  { id: '1', userId: 'child-1', type: 'earned', amount: 100, source: 'Homework', timestamp: new Date(), category: 'activity' },
  { id: '2', userId: 'child-1', type: 'spent', amount: 50, source: 'YouTube', timestamp: new Date(), category: 'youtube' },
  { id: '3', userId: 'child-1', type: 'earned', amount: 50, source: 'Reading', timestamp: new Date(), category: 'activity' },
  { id: '4', userId: 'child-1', type: 'spent', amount: 24, source: 'Instagram', timestamp: new Date(), category: 'instagram' },
  { id: '5', userId: 'child-1', type: 'spent', amount: 30, source: 'Games', timestamp: new Date(), category: 'games' },
  { id: '6', userId: 'child-2', type: 'earned', amount: 50, source: 'Walking', timestamp: new Date(), category: 'activity' },
  { id: '7', userId: 'child-2', type: 'spent', amount: 15, source: 'Learning Apps', timestamp: new Date(), category: 'learning' },
];
