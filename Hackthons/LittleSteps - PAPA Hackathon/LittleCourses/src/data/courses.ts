export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  ageGroup: '5-10' | '10-15';
  videoUrl: string;
  thumbnailEmoji: string;
  duration: string;
  coinsReward: number;
  badge?: Badge;
  color: string;
}

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export const courses: Course[] = [
  // Age 5-10 Courses
  {
    id: 'alphabets-reading',
    title: 'Alphabets, Reading & Language',
    description: 'Learn ABCs and phonics with Busy Beavers! Master reading fundamentals through fun songs and activities.',
    category: 'Language',
    ageGroup: '5-10',
    videoUrl: 'https://www.youtube.com/embed/hq3yfQnllfQ',
    thumbnailEmoji: '🔤',
    duration: '15 min',
    coinsReward: 50,
    badge: { id: 'reading-star', name: 'Reading Star', emoji: '⭐', description: 'Master of the alphabet!' },
    color: 'bg-rose-500',
  },
  {
    id: 'basic-math',
    title: 'Basic Math Adventures',
    description: 'Counting, shapes, and addition made fun with SplashLearn! Build strong math foundations.',
    category: 'Math',
    ageGroup: '5-10',
    videoUrl: 'https://www.youtube.com/embed/85M1yxIcHpw',
    thumbnailEmoji: '🔢',
    duration: '20 min',
    coinsReward: 60,
    badge: { id: 'math-wizard', name: 'Math Wizard', emoji: '🧙', description: 'Numbers are your friends!' },
    color: 'bg-blue-500',
  },
  {
    id: 'science-kids',
    title: 'Science Explorers',
    description: 'Discover the wonders of science with SciShow Kids! Curious experiments and amazing facts await.',
    category: 'Science',
    ageGroup: '5-10',
    videoUrl: 'https://www.youtube.com/embed/RjOtlPgqab0',
    thumbnailEmoji: '🔬',
    duration: '18 min',
    coinsReward: 55,
    badge: { id: 'science-explorer', name: 'Science Explorer', emoji: '🔭', description: 'Curious mind activated!' },
    color: 'bg-green-500',
  },
  {
    id: 'world-knowledge',
    title: 'World Knowledge Quest',
    description: 'Explore animals, space, and Earth with Kids Learning Tube! Adventure across our amazing world.',
    category: 'General Knowledge',
    ageGroup: '5-10',
    videoUrl: 'https://www.youtube.com/embed/mRK5RBKpWXc',
    thumbnailEmoji: '🌍',
    duration: '22 min',
    coinsReward: 65,
    badge: { id: 'world-traveler', name: 'World Traveler', emoji: '🗺️', description: 'Knowledge of the world!' },
    color: 'bg-cyan-500',
  },
  {
    id: 'creativity-drawing',
    title: 'Creative Art Studio',
    description: 'Unleash your creativity with Art for Kids Hub! Learn to draw amazing pictures step by step.',
    category: 'Art',
    ageGroup: '5-10',
    videoUrl: 'https://www.youtube.com/embed/CjEHnTZNM1c',
    thumbnailEmoji: '🎨',
    duration: '25 min',
    coinsReward: 70,
    badge: { id: 'creative-artist', name: 'Creative Artist', emoji: '🖌️', description: 'Artist extraordinaire!' },
    color: 'bg-purple-500',
  },
  {
    id: 'logical-thinking',
    title: 'Logic & Pre-Coding Fun',
    description: 'Develop logical thinking with coding concepts and puzzle games for young minds.',
    category: 'Logic',
    ageGroup: '5-10',
    videoUrl: 'https://www.youtube.com/embed/FCMun7kTEPk',
    thumbnailEmoji: '🧩',
    duration: '15 min',
    coinsReward: 55,
    badge: { id: 'logic-master', name: 'Logic Master', emoji: '🧠', description: 'Problem-solving pro!' },
    color: 'bg-orange-500',
  },
  {
    id: 'digital-safety-kids',
    title: 'Internet Safety Heroes',
    description: 'Learn to stay safe online with Common Sense Media! Become an internet safety superhero.',
    category: 'Digital Safety',
    ageGroup: '5-10',
    videoUrl: 'https://www.youtube.com/embed/yiKeLOKc1tw',
    thumbnailEmoji: '🛡️',
    duration: '12 min',
    coinsReward: 45,
    badge: { id: 'safety-hero', name: 'Safety Hero', emoji: '🦸', description: 'Guardian of the internet!' },
    color: 'bg-teal-500',
  },

  // Age 10-15 Courses
  {
    id: 'computer-basics',
    title: 'Computer Fundamentals',
    description: 'Understand what a computer is and how it works. Build your CS foundation here!',
    category: 'Computer Science',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/9-oXItbiBEU',
    thumbnailEmoji: '💻',
    duration: '20 min',
    coinsReward: 70,
    badge: { id: 'tech-starter', name: 'Tech Starter', emoji: '🖥️', description: 'Computer basics mastered!' },
    color: 'bg-slate-600',
  },
  {
    id: 'programming-intro',
    title: 'Programming Concepts',
    description: 'Introduction to programming concepts. Learn how code makes things happen!',
    category: 'Programming',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/_j4Lj-BT00g',
    thumbnailEmoji: '⚡',
    duration: '25 min',
    coinsReward: 80,
    badge: { id: 'code-beginner', name: 'Code Beginner', emoji: '💡', description: 'First steps in coding!' },
    color: 'bg-yellow-500',
  },
  {
    id: 'python-beginners',
    title: 'Python for Beginners',
    description: 'Start your Python journey! Learn the most popular programming language step by step.',
    category: 'Programming',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/m8DXAsyaMK0',
    thumbnailEmoji: '🐍',
    duration: '30 min',
    coinsReward: 100,
    badge: { id: 'python-coder', name: 'Python Coder', emoji: '🐍', description: 'Python skills unlocked!' },
    color: 'bg-emerald-600',
  },
  {
    id: 'coding-projects',
    title: 'Fun Coding Projects',
    description: 'Build cool projects while learning to code! Practical skills with Coding With Kids.',
    category: 'Programming',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/0G3bST9p9xY',
    thumbnailEmoji: '🚀',
    duration: '35 min',
    coinsReward: 120,
    badge: { id: 'project-builder', name: 'Project Builder', emoji: '🏗️', description: 'You build amazing things!' },
    color: 'bg-indigo-500',
  },
  {
    id: 'math-middle-school',
    title: 'Math Mastery',
    description: 'Level up your math skills with Khan Academy! From fractions to algebra basics.',
    category: 'Math',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/Dj5h0H-IvLU',
    thumbnailEmoji: '📐',
    duration: '28 min',
    coinsReward: 90,
    badge: { id: 'math-champion', name: 'Math Champion', emoji: '🏆', description: 'Math champion crowned!' },
    color: 'bg-blue-600',
  },
  {
    id: 'science-concepts',
    title: 'Big Science Ideas',
    description: 'Explore big science concepts with Crash Course Kids! Physics, chemistry, and more.',
    category: 'Science',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/3QVxZ7CRXmI',
    thumbnailEmoji: '⚗️',
    duration: '22 min',
    coinsReward: 85,
    badge: { id: 'science-whiz', name: 'Science Whiz', emoji: '🧪', description: 'Science genius level!' },
    color: 'bg-green-600',
  },
  {
    id: 'history-logic',
    title: 'History & Critical Thinking',
    description: 'Learn from TED-Ed animated lessons! History, logic, and big ideas explained.',
    category: 'Critical Thinking',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/xuCn8ux2gbs',
    thumbnailEmoji: '📚',
    duration: '18 min',
    coinsReward: 75,
    badge: { id: 'thinker', name: 'Deep Thinker', emoji: '🎓', description: 'Wisdom beyond years!' },
    color: 'bg-amber-600',
  },
  {
    id: 'digital-citizenship',
    title: 'Digital Citizenship',
    description: 'Stay safe online and be a responsible digital citizen. Essential skills for teens.',
    category: 'Digital Safety',
    ageGroup: '10-15',
    videoUrl: 'https://www.youtube.com/embed/HxySrSbSY7o',
    thumbnailEmoji: '🔐',
    duration: '20 min',
    coinsReward: 70,
    badge: { id: 'digital-citizen', name: 'Digital Citizen', emoji: '🌐', description: 'Responsible netizen!' },
    color: 'bg-teal-600',
  },
];

export const getCoursesByAgeGroup = (ageGroup: '5-10' | '10-15') => {
  return courses.filter(course => course.ageGroup === ageGroup);
};

export const getCourseById = (id: string) => {
  return courses.find(course => course.id === id);
};
