export interface Building {
  id: string;
  name: string;
  icon: string;
  description: string;
  type: 'home' | 'art' | 'knowledge' | 'eco' | 'fame';
  unlocked: boolean;
  level: number;
}

export interface World {
  id: string;
  name: string;
  theme: 'learning' | 'nature' | 'creativity' | 'tech';
  description: string;
  members: number;
  level: number;
  progress: number;
  image: string;
  color: string;
  buildings: Building[];
  challenges: Challenge[];
  habits: Habit[];
  teamGoal?: TeamGoal;
}

export interface TeamGoal {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  reward: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'creative' | 'habit' | 'learning';
  coins: number;
  difficulty: 'easy' | 'medium' | 'hard';
  deadline?: string;
  completed?: boolean;
  worldId?: string;
}

export interface Habit {
  id: string;
  title: string;
  icon: string;
  streak: number;
  completedToday: boolean;
  category: 'health' | 'learning' | 'creativity' | 'kindness';
  worldId?: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  score: number;
  streak: number;
  badges: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  age: number;
  coins: number;
  badges: string[];
  worldIds: string[];
}

export interface WorldMember {
  id: string;
  name: string;
  avatar: string;
  role: 'leader' | 'member';
  contribution: number;
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  icon: string;
  reward: number;
  type: 'creative' | 'habit' | 'learning' | 'social';
  completed: boolean;
  expiresAt: string;
}

export interface ActivityItem {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  action: 'completed_challenge' | 'completed_habit' | 'earned_badge' | 'joined_world' | 'leveled_up' | 'completed_quest';
  targetName: string;
  worldId?: string;
  worldName?: string;
  coins?: number;
  timestamp: string;
}
