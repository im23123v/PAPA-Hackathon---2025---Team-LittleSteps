import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Badge } from '@/data/courses';

interface UserProgress {
  coins: number;
  completedCourses: string[];
  badges: Badge[];
  currentStreak: number;
}

interface UserProgressContextType {
  progress: UserProgress;
  addCoins: (amount: number) => void;
  completeCourse: (courseId: string, badge?: Badge) => void;
  isCourseCompleted: (courseId: string) => boolean;
  hasBadge: (badgeId: string) => boolean;
}

const defaultProgress: UserProgress = {
  coins: 0,
  completedCourses: [],
  badges: [],
  currentStreak: 0,
};

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export const UserProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('littlecourses-progress');
    return saved ? JSON.parse(saved) : defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem('littlecourses-progress', JSON.stringify(progress));
  }, [progress]);

  const addCoins = (amount: number) => {
    setProgress(prev => ({ ...prev, coins: prev.coins + amount }));
  };

  const completeCourse = (courseId: string, badge?: Badge) => {
    setProgress(prev => {
      if (prev.completedCourses.includes(courseId)) return prev;
      
      const newBadges = badge && !prev.badges.find(b => b.id === badge.id)
        ? [...prev.badges, badge]
        : prev.badges;

      return {
        ...prev,
        completedCourses: [...prev.completedCourses, courseId],
        badges: newBadges,
        currentStreak: prev.currentStreak + 1,
      };
    });
  };

  const isCourseCompleted = (courseId: string) => {
    return progress.completedCourses.includes(courseId);
  };

  const hasBadge = (badgeId: string) => {
    return progress.badges.some(b => b.id === badgeId);
  };

  return (
    <UserProgressContext.Provider value={{ progress, addCoins, completeCourse, isCourseCompleted, hasBadge }}>
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within UserProgressProvider');
  }
  return context;
};
