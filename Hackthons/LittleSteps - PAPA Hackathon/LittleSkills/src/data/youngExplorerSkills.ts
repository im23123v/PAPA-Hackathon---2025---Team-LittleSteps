import { Brain, Palette, Monitor, Sprout, MessageCircle } from "lucide-react";
import { SkillDetailData } from "@/components/SkillDetailModal";

export const youngExplorerSkillsData: SkillDetailData[] = [
  {
    title: "Cognitive & Thinking",
    description: "Build a strong foundation with logic, patterns, and problem-solving!",
    fullDescription: "Cognitive skills are the foundation of all learning! These skills help kids understand how things work, recognize patterns in the world around them, and solve problems step by step. By developing strong thinking skills early, children build the mental toolkit they'll use throughout their lives for everything from math to reading to everyday decisions.",
    icon: Brain,
    colorClass: "text-primary",
    lightColorClass: "bg-teal-light",
    skills: ["Logical thinking", "Pattern recognition", "Sequencing", "Problem solving", "Memory & focus"],
    steps: [
      {
        title: "Start with Patterns",
        description: "Look for patterns everywhere! Colors, shapes, numbers - try to guess what comes next in a sequence."
      },
      {
        title: "Play Puzzle Games",
        description: "Jigsaw puzzles, matching games, and simple riddles help train your brain to think logically."
      },
      {
        title: "Learn to Sequence",
        description: "Practice putting things in order - like the steps to make a sandwich or get ready for school."
      },
      {
        title: "Memory Challenges",
        description: "Play memory card games and try to remember details from stories you read or hear."
      },
      {
        title: "Solve Simple Problems",
        description: "When you face a problem, think of 2-3 different solutions before choosing the best one!"
      }
    ],
    videos: [
      {
        title: "Critical Thinking Skills for Kids",
        youtubeId: "6OLPL5p0fMg",
        duration: "5:30"
      },
      {
        title: "Pattern Recognition Games for Children",
        youtubeId: "oSAaRNaRsNk",
        duration: "8:15"
      },
      {
        title: "Memory Games and Brain Training",
        youtubeId: "9JdwG0Dv-8E",
        duration: "6:45"
      },
      {
        title: "Problem Solving for Young Minds",
        youtubeId: "TYuTE10gUyg",
        duration: "7:20"
      }
    ]
  },
  {
    title: "Creativity & Expression",
    description: "Unleash imagination through art, stories, and creative play!",
    fullDescription: "Creativity isn't just about art - it's about seeing the world in new ways and expressing your unique ideas! When kids develop creative skills, they learn to think differently, communicate their feelings, and solve problems in innovative ways. These skills are valued in every career and make life more colorful and fun!",
    icon: Palette,
    colorClass: "text-coral",
    lightColorClass: "bg-coral-light",
    skills: ["Drawing & coloring", "Storytelling", "Imagination building", "Visual thinking", "Voice expression"],
    steps: [
      {
        title: "Daily Drawing Time",
        description: "Set aside 15 minutes each day to draw anything you imagine - there's no wrong way to create!"
      },
      {
        title: "Tell Your Stories",
        description: "Make up stories about your toys, your day, or imaginary worlds. Share them with family!"
      },
      {
        title: "Explore Different Materials",
        description: "Try crayons, markers, paint, clay, and collage. Each material creates different possibilities!"
      },
      {
        title: "Express with Your Voice",
        description: "Practice reading stories aloud with different voices for characters. Be dramatic and have fun!"
      },
      {
        title: "Create Something New Every Week",
        description: "Challenge yourself to make something you've never made before - a new character, invention, or story!"
      }
    ],
    videos: [
      {
        title: "Easy Drawing Tutorial for Kids",
        youtubeId: "7TFpW-uZflc",
        duration: "12:30"
      },
      {
        title: "How to Tell Amazing Stories",
        youtubeId: "Nj-hdQMa3uA",
        duration: "8:45"
      },
      {
        title: "Creative Art Projects for Children",
        youtubeId: "4CJFXdvsrCM",
        duration: "15:20"
      },
      {
        title: "Imagination Games and Activities",
        youtubeId: "rYEDA3JcQqw",
        duration: "10:15"
      }
    ]
  },
  {
    title: "Digital Basics",
    description: "Learn to navigate the digital world safely and confidently!",
    fullDescription: "In today's world, knowing how to use technology safely and effectively is essential! Digital basics teach kids the fundamental skills they need to use computers, tablets, and apps responsibly. These skills include everything from using a mouse to understanding what's safe to click on online.",
    icon: Monitor,
    colorClass: "text-blue",
    lightColorClass: "bg-blue-light",
    skills: ["Mouse & keyboard", "Navigating apps", "File basics", "Safe clicking", "Screen discipline"],
    steps: [
      {
        title: "Master the Mouse & Keyboard",
        description: "Practice clicking, double-clicking, and dragging. Learn where letters are on the keyboard!"
      },
      {
        title: "Explore Kid-Friendly Apps",
        description: "With a parent's help, learn to open, use, and close different educational apps."
      },
      {
        title: "Understand Files & Folders",
        description: "Learn how to save your work and find it again later - like organizing your digital backpack!"
      },
      {
        title: "Learn Safe Online Habits",
        description: "Know what's safe to click and what to avoid. Always ask an adult if something seems strange!"
      },
      {
        title: "Practice Screen Balance",
        description: "Learn to take breaks, set timers, and balance screen time with other activities."
      }
    ],
    videos: [
      {
        title: "Computer Basics for Kids",
        youtubeId: "wvBqn7M9mEY",
        duration: "10:00"
      },
      {
        title: "Keyboard and Mouse Skills",
        youtubeId: "tJ3aibPYFr4",
        duration: "7:30"
      },
      {
        title: "Internet Safety for Children",
        youtubeId: "yiKeLOKc1tw",
        duration: "6:20"
      },
      {
        title: "How to Stay Safe Online",
        youtubeId: "HxySrSbSY7o",
        duration: "8:45"
      }
    ]
  },
  {
    title: "Life & Values",
    description: "Develop character, responsibility, and kindness!",
    fullDescription: "Life skills and values are the building blocks of becoming a great person! These skills help kids understand responsibility, care for others and the environment, and develop good habits that will serve them throughout life. Learning these early creates a foundation for success and happiness.",
    icon: Sprout,
    colorClass: "text-green",
    lightColorClass: "bg-green-light",
    skills: ["Time awareness", "Responsibility", "Sharing & teamwork", "Online kindness", "Environmental care"],
    steps: [
      {
        title: "Create Daily Routines",
        description: "Make a simple schedule for your day - wake up time, play time, learning time, and bedtime!"
      },
      {
        title: "Take Care of Your Things",
        description: "Keep your toys, books, and space organized. Put things back where they belong!"
      },
      {
        title: "Practice Sharing",
        description: "Share toys, take turns, and work together with friends and family on activities."
      },
      {
        title: "Be Kind Online & Offline",
        description: "Use nice words, be helpful, and treat others the way you want to be treated - everywhere!"
      },
      {
        title: "Care for Our Planet",
        description: "Turn off lights, don't waste water, and learn about recycling. Small actions make a big difference!"
      }
    ],
    videos: [
      {
        title: "Teaching Kids Responsibility",
        youtubeId: "HBvJv0d8AjE",
        duration: "8:30"
      },
      {
        title: "Kindness for Kids",
        youtubeId: "kAo4-2UzgPo",
        duration: "5:15"
      },
      {
        title: "Teamwork and Sharing",
        youtubeId: "5EqFmz8Y2J8",
        duration: "7:00"
      },
      {
        title: "Caring for the Environment",
        youtubeId: "OasbYWF4_S8",
        duration: "9:45"
      }
    ]
  },
  {
    title: "Communication",
    description: "Express ideas clearly and become a confident speaker!",
    fullDescription: "Communication is one of the most important skills anyone can have! Learning to speak clearly, listen carefully, and express ideas helps kids succeed in school, make friends, and share their thoughts with the world. Good communicators become great leaders, friends, and problem-solvers.",
    icon: MessageCircle,
    colorClass: "text-accent",
    lightColorClass: "bg-purple-light",
    skills: ["Speaking confidence", "Listening skills", "Asking questions", "Explaining ideas"],
    steps: [
      {
        title: "Practice Speaking Clearly",
        description: "Read aloud every day! Start with your favorite books and speak slowly and clearly."
      },
      {
        title: "Become a Great Listener",
        description: "When someone talks, look at them, stay quiet, and think about what they're saying."
      },
      {
        title: "Ask Curious Questions",
        description: "Practice asking 'why', 'how', and 'what if' questions about things you want to learn."
      },
      {
        title: "Explain Things Simply",
        description: "Try explaining your favorite game or story to someone else. Can they understand it?"
      },
      {
        title: "Share in Groups",
        description: "Practice speaking up in class or family discussions. Your ideas are important!"
      }
    ],
    videos: [
      {
        title: "Public Speaking for Kids",
        youtubeId: "C_K9W_SIJ6I",
        duration: "9:30"
      },
      {
        title: "How to Be a Good Listener",
        youtubeId: "VlC6N3pWfMU",
        duration: "6:15"
      },
      {
        title: "Asking Great Questions",
        youtubeId: "1-p4pseCPms",
        duration: "5:45"
      },
      {
        title: "Building Confidence for Kids",
        youtubeId: "3ap8-TpCMFw",
        duration: "8:00"
      }
    ]
  }
];
