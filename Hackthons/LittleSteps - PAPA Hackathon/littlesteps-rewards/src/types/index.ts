export type UserRole = 'parent' | 'child';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar?: string;
  parentId?: string; // For child accounts
}

export interface Activity {
  id: string;
  name: string;
  coins: number;
  icon: string;
  color: string;
}

export interface AppUsage {
  id: string;
  name: string;
  coinsPerMinute: number;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'earned' | 'spent';
  amount: number;
  source: string;
  timestamp: Date;
  category?: string;
}

export interface Wallet {
  userId: string;
  balance: number;
  totalEarned: number;
  totalSpent: number;
  bonusPoints: number;
}

export interface RewardTier {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  icon: string;
  unlocked: boolean;
}

export interface ChildStats {
  earnedToday: number;
  spentToday: number;
  topSpendingApp: string;
  screenTimeMinutes: number;
  activitiesCompleted: number;
}

export type ProofStatus = 'pending' | 'approved' | 'rejected';

export interface ActivityProof {
  id: string;
  childId: string;
  activityId: string;
  activityName: string;
  coins: number;
  proofImage: string; // Base64 or URL
  submittedAt: Date;
  status: ProofStatus;
  reviewedAt?: Date;
  rejectionReason?: string;
}
