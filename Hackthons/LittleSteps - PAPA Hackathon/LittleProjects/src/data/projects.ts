export interface Project {
  id: string;
  title: string;
  description: string;
  ageGroup: "5-10" | "10-15";
  level?: "beginner" | "intermediate" | "advanced";
  category: string;
  icon: string;
  color: "teal" | "coral" | "sunny" | "purple" | "mint" | "sky";
  youtubeSearch: string;
  videoId?: string;
}

export const projects: Project[] = [
  // Age 5-10 Projects
  {
    id: "scratch-animation",
    title: "Scratch Animation Story",
    description: "Create your own animated story with colorful characters and fun movements using Scratch!",
    ageGroup: "5-10",
    category: "Coding",
    icon: "🎬",
    color: "coral",
    youtubeSearch: "scratch+animation+for+kids",
    videoId: "v-GUbj7DMEE"
  },
  {
    id: "scratch-game",
    title: "Scratch Simple Game",
    description: "Build a fun catch or maze game that you can play and share with friends!",
    ageGroup: "5-10",
    category: "Coding",
    icon: "🎮",
    color: "teal",
    youtubeSearch: "scratch+game+for+kids",
    videoId: "QXru0rSV2ZQ"
  },
  {
    id: "science-experiments",
    title: "Easy Science Experiments",
    description: "Make volcanoes erupt and eggs float with simple home experiments!",
    ageGroup: "5-10",
    category: "Science",
    icon: "🔬",
    color: "purple",
    youtubeSearch: "easy+science+projects+for+kids",
    videoId: "Fthni0wB1-c"
  },
  {
    id: "daily-planner",
    title: "Daily Routine Planner",
    description: "Design a colorful visual chart to organize your day like a pro!",
    ageGroup: "5-10",
    category: "Life Skills",
    icon: "📅",
    color: "sunny",
    youtubeSearch: "daily+routine+chart+for+kids",
    videoId: "dQDqx-pHpKs"
  },
  {
    id: "digital-drawing",
    title: "Digital Drawing & Coloring",
    description: "Learn to create amazing digital art with easy drawing tools!",
    ageGroup: "5-10",
    category: "Art",
    icon: "🎨",
    color: "mint",
    youtubeSearch: "digital+drawing+for+kids",
    videoId: "3wkmjqJRuCM"
  },
  {
    id: "storytelling",
    title: "Storytelling with Pictures",
    description: "Tell amazing stories using pictures and your voice!",
    ageGroup: "5-10",
    category: "Creative",
    icon: "📖",
    color: "coral",
    youtubeSearch: "storytelling+for+kids+activity",
    videoId: "q2C4LKS3P7g"
  },
  {
    id: "internet-safety",
    title: "Internet Safety Poster",
    description: "Create a poster to teach others how to stay safe online!",
    ageGroup: "5-10",
    category: "Digital Citizenship",
    icon: "🛡️",
    color: "sky",
    youtubeSearch: "internet+safety+for+kids",
    videoId: "yiKeLOKc1tw"
  },
  {
    id: "plant-growth",
    title: "Plant Growth Project",
    description: "Watch seeds grow into plants and record your discoveries!",
    ageGroup: "5-10",
    category: "Science",
    icon: "🌱",
    color: "mint",
    youtubeSearch: "plant+growth+project+for+kids",
    videoId: "w77zPAtVTuI"
  },
  {
    id: "save-water",
    title: "Save Water Craft Project",
    description: "Make creative crafts that help spread the message about saving water!",
    ageGroup: "5-10",
    category: "Environment",
    icon: "💧",
    color: "teal",
    youtubeSearch: "save+water+project+for+kids",
    videoId: "5J3cGNGkBLk"
  },

  // Age 10-15 Beginner Projects
  {
    id: "python-guessing",
    title: "Python Number Guessing Game",
    description: "Code your first Python game where players guess a secret number!",
    ageGroup: "10-15",
    level: "beginner",
    category: "Python",
    icon: "🐍",
    color: "teal",
    youtubeSearch: "python+number+guessing+game+for+kids",
    videoId: "Kp1PT_tpoqk"
  },
  {
    id: "python-quiz",
    title: "Python Quiz App",
    description: "Build a quiz app that tests knowledge on any topic you choose!",
    ageGroup: "10-15",
    level: "beginner",
    category: "Python",
    icon: "❓",
    color: "purple",
    youtubeSearch: "python+quiz+project+for+beginners",
    videoId: "yriw5Zh406s"
  },
  {
    id: "python-calculator",
    title: "Python Calculator App",
    description: "Create a calculator that can do math just like the one on your phone!",
    ageGroup: "10-15",
    level: "beginner",
    category: "Python",
    icon: "🧮",
    color: "sunny",
    youtubeSearch: "python+calculator+project+for+beginners",
    videoId: "TkL0FVmDZ9M"
  },
  {
    id: "flowchart",
    title: "Flowchart for Real-Life Problem",
    description: "Learn to solve problems step-by-step with visual flowcharts!",
    ageGroup: "10-15",
    level: "beginner",
    category: "Logic",
    icon: "📊",
    color: "sky",
    youtubeSearch: "flowchart+examples+for+kids",
    videoId: "iJmcgQRk448"
  },

  // Age 10-15 Intermediate Projects
  {
    id: "todo-tracker",
    title: "To-Do & Habit Tracker",
    description: "Build an app to track your tasks and build awesome habits!",
    ageGroup: "10-15",
    level: "intermediate",
    category: "Python",
    icon: "✅",
    color: "mint",
    youtubeSearch: "python+todo+list+project+for+beginners",
    videoId: "dVfCHOYCre8"
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors Game",
    description: "Code the classic game and play against the computer!",
    ageGroup: "10-15",
    level: "intermediate",
    category: "Python",
    icon: "✊",
    color: "coral",
    youtubeSearch: "python+rock+paper+scissors+game",
    videoId: "DLn3jOsNRVE"
  },
  {
    id: "contact-book",
    title: "Simple Contact Book App",
    description: "Create an app to store and manage contact information!",
    ageGroup: "10-15",
    level: "intermediate",
    category: "Python",
    icon: "📇",
    color: "teal",
    youtubeSearch: "python+contact+book+project",
    videoId: "2-yoQuvZcxY"
  },

  // Age 10-15 Advanced Projects
  {
    id: "mini-game",
    title: "Mini Game Project",
    description: "Create an exciting game with graphics and sound effects!",
    ageGroup: "10-15",
    level: "advanced",
    category: "Python",
    icon: "🕹️",
    color: "purple",
    youtubeSearch: "python+mini+game+project",
    videoId: "AY9MnQ4x3zk"
  },
  {
    id: "problem-solving-app",
    title: "Problem-Solving App",
    description: "Design an app that solves a real problem in your community!",
    ageGroup: "10-15",
    level: "advanced",
    category: "Innovation",
    icon: "💡",
    color: "sunny",
    youtubeSearch: "student+problem+solving+app+idea",
    videoId: "6eWSba3KGxc"
  },
  {
    id: "how-internet-works",
    title: "How Internet Works",
    description: "Create a project explaining how the internet actually works!",
    ageGroup: "10-15",
    level: "advanced",
    category: "Tech Education",
    icon: "🌐",
    color: "sky",
    youtubeSearch: "how+internet+works+for+kids",
    videoId: "7_LPdttKXPc"
  },

  // Tech for Good Projects
  {
    id: "screen-time",
    title: "Screen Time Awareness",
    description: "Build a project that helps people understand healthy screen habits!",
    ageGroup: "10-15",
    level: "intermediate",
    category: "Tech for Good",
    icon: "📱",
    color: "coral",
    youtubeSearch: "screen+time+awareness+project+for+students",
    videoId: "K8xc5AMsPJQ"
  },
  {
    id: "social-good-app",
    title: "App Idea for Social Good",
    description: "Design an app that makes the world a better place!",
    ageGroup: "10-15",
    level: "advanced",
    category: "Tech for Good",
    icon: "❤️",
    color: "mint",
    youtubeSearch: "app+idea+for+students+project",
    videoId: "xQSO_3fEj0M"
  },
  {
    id: "cyber-safety",
    title: "Cyber Safety Awareness",
    description: "Create content that teaches others about staying safe online!",
    ageGroup: "10-15",
    level: "intermediate",
    category: "Tech for Good",
    icon: "🔐",
    color: "teal",
    youtubeSearch: "cyber+safety+project+for+students",
    videoId: "aO858HyFbKI"
  },
];

export const categories = [
  { name: "All", icon: "✨" },
  { name: "Coding", icon: "💻" },
  { name: "Python", icon: "🐍" },
  { name: "Science", icon: "🔬" },
  { name: "Art", icon: "🎨" },
  { name: "Creative", icon: "✏️" },
  { name: "Life Skills", icon: "📋" },
  { name: "Tech for Good", icon: "❤️" },
  { name: "Environment", icon: "🌍" },
];
