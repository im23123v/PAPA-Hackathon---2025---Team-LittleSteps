export interface Habit {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "coral" | "teal" | "lavender" | "mint" | "sky" | "sunshine";
  videoQuery: string;
  category: string;
  detailedDescription: string;
  atomicTips: string[];
  twoMinuteRule: string;
  habitStack: string;
  cueRoutineReward: {
    cue: string;
    routine: string;
    reward: string;
  };
}

export const habitsAge5to10: Habit[] = [
  // Daily Habits
  {
    id: "1",
    title: "Morning Routine Habit",
    description: "Make bed, brush teeth, get ready for the day!",
    icon: "🌅",
    color: "coral",
    videoQuery: "morning+routine+for+kids",
    category: "daily",
    detailedDescription: "A strong morning routine sets the tone for your entire day. When you start with small wins like making your bed and brushing your teeth, you build momentum that carries through everything you do. This habit teaches responsibility and self-care from an early age.",
    atomicTips: [
      "Put your clothes out the night before so you are ready when you wake up",
      "Use a fun morning playlist to make the routine enjoyable",
      "Create a visual checklist with pictures for each step",
      "Celebrate completing your routine with a small reward"
    ],
    twoMinuteRule: "Just make your bed - it takes less than 2 minutes and starts your day with an accomplishment!",
    habitStack: "After I wake up and turn off my alarm, I will immediately make my bed.",
    cueRoutineReward: {
      cue: "Alarm goes off in the morning",
      routine: "Make bed, brush teeth, get dressed",
      reward: "Feel proud and ready for a great day"
    }
  },
  {
    id: "2",
    title: "Sleep on Time Habit",
    description: "Learn why sleep matters for growing bodies and minds",
    icon: "😴",
    color: "lavender",
    videoQuery: "importance+of+sleep+for+kids",
    category: "daily",
    detailedDescription: "Sleep is when your brain and body do their most important growing and healing. During sleep, your brain organizes everything you learned during the day, like putting books on a shelf. Getting enough sleep helps you focus better, feel happier, and have more energy to play!",
    atomicTips: [
      "Set a bedtime alarm 30 minutes before sleep time",
      "Create a cozy bedtime routine with dim lights",
      "No screens 1 hour before bed - read a book instead",
      "Keep your room cool and dark for better sleep"
    ],
    twoMinuteRule: "Start by just putting on your pajamas at the same time every night.",
    habitStack: "After dinner is finished, I will start getting ready for bed.",
    cueRoutineReward: {
      cue: "Dinner time ends",
      routine: "Pajamas, brush teeth, read a story, lights out",
      reward: "Wake up feeling energized and happy"
    }
  },
  {
    id: "3",
    title: "Time Awareness",
    description: "Learn clock basics and understand time",
    icon: "⏰",
    color: "teal",
    videoQuery: "learn+time+for+kids",
    category: "time",
    detailedDescription: "Understanding time is like having a superpower! When you know how to read clocks and manage your time, you can do more of what you love and never miss important activities. Time awareness helps you become more independent and responsible.",
    atomicTips: [
      "Practice reading the clock during meals",
      "Use a timer for fun activities to understand duration",
      "Draw clocks showing your favorite times of day",
      "Ask what time it is throughout the day"
    ],
    twoMinuteRule: "Look at the clock right now and say what time it is out loud.",
    habitStack: "After I eat breakfast, I will look at the clock and say the time.",
    cueRoutineReward: {
      cue: "Finishing a meal",
      routine: "Look at clock and announce the time",
      reward: "Feeling smart and in control of your day"
    }
  },
  {
    id: "4",
    title: "Screen Time Limits",
    description: "Gentle guidance on healthy screen habits",
    icon: "📱",
    color: "sky",
    videoQuery: "screen+time+for+kids",
    category: "time",
    detailedDescription: "Screens can be fun and educational, but too much screen time can make your eyes tired and take away from other important activities like playing outside, reading, and spending time with family. Learning to balance screen time makes you smarter about technology!",
    atomicTips: [
      "Set a timer before starting screen time",
      "Take breaks every 20 minutes to look at something far away",
      "Have screen-free zones like the dinner table",
      "Replace some screen time with outdoor play"
    ],
    twoMinuteRule: "Before using any screen, set a timer for how long you will use it.",
    habitStack: "After I finish homework, I will set a 30-minute timer before using screens.",
    cueRoutineReward: {
      cue: "Wanting to use a screen",
      routine: "Set timer, use screen mindfully, stop when timer goes off",
      reward: "More time for fun activities and healthier eyes"
    }
  },
  {
    id: "5",
    title: "Homework First Habit",
    description: "Finish homework before playtime!",
    icon: "📚",
    color: "mint",
    videoQuery: "homework+routine+for+kids",
    category: "responsibility",
    detailedDescription: "Doing homework first might seem hard, but it is actually the secret to having more fun! When you finish your work first, you can play without worrying. This habit teaches you to handle responsibilities before rewards, which will help you succeed in everything you do.",
    atomicTips: [
      "Create a special homework spot that is quiet and organized",
      "Start with the easiest task to build momentum",
      "Take short breaks between subjects",
      "Reward yourself with playtime after finishing"
    ],
    twoMinuteRule: "Just open your homework and read the first question - that is all you need to start!",
    habitStack: "After I get home from school and have a snack, I will sit at my desk and start homework.",
    cueRoutineReward: {
      cue: "Arriving home from school",
      routine: "Snack, then homework at desk",
      reward: "Guilt-free playtime when finished"
    }
  },
  {
    id: "6",
    title: "Clean-Up After Play",
    description: "Put toys away after having fun",
    icon: "🧹",
    color: "sunshine",
    videoQuery: "clean+up+song+for+kids",
    category: "responsibility",
    detailedDescription: "Cleaning up after play shows respect for your toys and your space. It also makes it easier to find things next time you want to play! People who keep their spaces tidy tend to feel happier and more in control. Plus, it helps your whole family!",
    atomicTips: [
      "Make cleaning up into a game or race",
      "Sing a clean-up song to make it fun",
      "Have special spots for each type of toy",
      "Clean up before moving to a new activity"
    ],
    twoMinuteRule: "Put away just ONE toy. That is easy, right?",
    habitStack: "After I finish playing with toys, I will put them in their homes before doing anything else.",
    cueRoutineReward: {
      cue: "Finished playing or time to do something else",
      routine: "Put all toys in their designated spots",
      reward: "A tidy room and knowing where everything is"
    }
  },
  {
    id: "7",
    title: "Listening & Following Instructions",
    description: "Learn the power of listening well",
    icon: "👂",
    color: "coral",
    videoQuery: "listening+skills+for+kids",
    category: "behavior",
    detailedDescription: "Good listeners are good learners! When you really listen to what others say, you understand better, make fewer mistakes, and show respect. This skill will help you in school, friendships, and everything you do in life.",
    atomicTips: [
      "Look at the person who is speaking",
      "Wait until they finish before responding",
      "Repeat back what you heard to make sure you understand",
      "Ask questions if something is unclear"
    ],
    twoMinuteRule: "Practice looking at someone speaking for just 2 minutes without interrupting.",
    habitStack: "When someone starts talking to me, I will stop what I am doing and look at them.",
    cueRoutineReward: {
      cue: "Someone starts speaking to you",
      routine: "Stop, look, listen, then respond",
      reward: "Better understanding and stronger relationships"
    }
  },
  {
    id: "8",
    title: "Patience & Waiting Turn",
    description: "Good things come to those who wait",
    icon: "🧘",
    color: "lavender",
    videoQuery: "patience+for+kids",
    category: "behavior",
    detailedDescription: "Patience is a superpower that helps you stay calm when things do not happen right away. When you can wait your turn without getting upset, you show maturity and self-control. Patient people often get better results because they think before they act!",
    atomicTips: [
      "Take deep breaths when you feel impatient",
      "Count to 10 slowly while waiting",
      "Think about something happy while you wait",
      "Practice waiting in small situations first"
    ],
    twoMinuteRule: "When you have to wait, take 3 deep breaths before doing anything else.",
    habitStack: "When I want to interrupt someone, I will first take 3 deep breaths.",
    cueRoutineReward: {
      cue: "Feeling impatient or wanting to interrupt",
      routine: "Take deep breaths, wait calmly",
      reward: "Feeling proud of your self-control"
    }
  },
  {
    id: "9",
    title: "Gratitude Practice",
    description: "Say thank you for the good things in life",
    icon: "🙏",
    color: "mint",
    videoQuery: "gratitude+for+kids",
    category: "behavior",
    detailedDescription: "Gratitude means noticing and appreciating the good things in your life. When you practice being thankful, your brain actually becomes happier! People who practice gratitude sleep better, feel more positive, and have better friendships.",
    atomicTips: [
      "Say one thing you are grateful for at dinner",
      "Keep a gratitude journal by your bed",
      "Thank someone specific each day",
      "Notice small good things, like sunshine or a yummy snack"
    ],
    twoMinuteRule: "Before bed, name just ONE thing you are thankful for today.",
    habitStack: "After I get into bed, I will think of one good thing from today.",
    cueRoutineReward: {
      cue: "Getting into bed at night",
      routine: "Think of one thing you are grateful for",
      reward: "Falling asleep with happy thoughts"
    }
  },
  {
    id: "10",
    title: "Healthy Eating",
    description: "Fuel your body with good foods",
    icon: "🥗",
    color: "teal",
    videoQuery: "healthy+eating+for+kids",
    category: "health",
    detailedDescription: "Your body is like a car - it needs the right fuel to work its best! Eating fruits, vegetables, and healthy foods gives you energy to play, helps you think clearly, and keeps you strong. Healthy eating now builds habits that last a lifetime.",
    atomicTips: [
      "Try one new vegetable each week",
      "Eat the rainbow - different colored foods",
      "Drink water instead of sugary drinks",
      "Help prepare meals to learn about food"
    ],
    twoMinuteRule: "Add just ONE vegetable to your plate at each meal.",
    habitStack: "When I sit down for a meal, I will put vegetables on my plate first.",
    cueRoutineReward: {
      cue: "Sitting down for a meal",
      routine: "Put vegetables on plate, eat them first",
      reward: "Strong body and lots of energy"
    }
  },
  {
    id: "11",
    title: "Daily Exercise",
    description: "Move your body every day",
    icon: "🏃",
    color: "coral",
    videoQuery: "exercise+for+kids",
    category: "health",
    detailedDescription: "Exercise is not just for athletes - it is for everyone! Moving your body makes your heart strong, helps you sleep better, and actually makes you smarter by growing your brain. Plus, it is fun when you find activities you love!",
    atomicTips: [
      "Find a physical activity you enjoy",
      "Play outside for at least 30 minutes daily",
      "Do jumping jacks during TV commercials",
      "Walk or bike instead of getting a ride"
    ],
    twoMinuteRule: "Do just 10 jumping jacks - it only takes a minute!",
    habitStack: "After I wake up, I will stretch for 2 minutes.",
    cueRoutineReward: {
      cue: "Waking up in the morning",
      routine: "Stretch and do simple exercises",
      reward: "Feeling energized and ready for the day"
    }
  },
  {
    id: "12",
    title: "Reading Every Day",
    description: "Discover new worlds through books",
    icon: "📖",
    color: "sky",
    videoQuery: "reading+habits+for+kids",
    category: "learning",
    detailedDescription: "Reading is like a workout for your brain! Every time you read, you learn new words, discover new ideas, and strengthen your imagination. Kids who read regularly do better in all subjects at school and become more creative thinkers.",
    atomicTips: [
      "Keep books in places you sit often",
      "Read before bed instead of using screens",
      "Find books about topics you love",
      "Join a library and explore new genres"
    ],
    twoMinuteRule: "Read just ONE page. Once you start, you might want to keep going!",
    habitStack: "After I get in bed at night, I will read for 10 minutes.",
    cueRoutineReward: {
      cue: "Getting into bed",
      routine: "Read a book for at least 10 minutes",
      reward: "Adventures in your imagination and better sleep"
    }
  },
  {
    id: "13",
    title: "Being Kind to Others",
    description: "Spread kindness wherever you go",
    icon: "💝",
    color: "lavender",
    videoQuery: "kindness+for+kids",
    category: "social",
    detailedDescription: "Kindness is contagious - when you are kind to someone, they often pass it on to others! Being kind makes both you and others feel good. It builds friendships, creates trust, and makes the world a better place, one small act at a time.",
    atomicTips: [
      "Smile and say hello to people",
      "Share with friends and siblings",
      "Help someone without being asked",
      "Say nice things about others"
    ],
    twoMinuteRule: "Give ONE compliment to someone today.",
    habitStack: "When I see someone at school, I will smile and say hello.",
    cueRoutineReward: {
      cue: "Seeing a friend or family member",
      routine: "Smile, greet them, say something nice",
      reward: "Feeling happy and making others happy too"
    }
  },
  {
    id: "14",
    title: "Saving Money",
    description: "Learn to save for things you want",
    icon: "💰",
    color: "sunshine",
    videoQuery: "saving+money+for+kids",
    category: "responsibility",
    detailedDescription: "Saving money is a skill that will help you your whole life. When you save, you learn patience, planning, and the value of working toward goals. Plus, buying something you saved for yourself feels much better than getting it right away!",
    atomicTips: [
      "Use a clear jar so you can see your savings grow",
      "Save a portion of any money you receive",
      "Set a goal for something you want to buy",
      "Wait 24 hours before buying something"
    ],
    twoMinuteRule: "Put just ONE coin in your savings jar today.",
    habitStack: "Whenever I receive money, I will put half in my savings jar.",
    cueRoutineReward: {
      cue: "Receiving money as a gift or allowance",
      routine: "Put half in savings jar immediately",
      reward: "Watching your savings grow toward your goal"
    }
  },
  {
    id: "15",
    title: "Personal Hygiene",
    description: "Keep yourself clean and healthy",
    icon: "🧼",
    color: "teal",
    videoQuery: "personal+hygiene+for+kids",
    category: "health",
    detailedDescription: "Good hygiene keeps you healthy by washing away germs that can make you sick. When you take care of your body - washing hands, brushing teeth, and bathing - you feel fresh, confident, and ready to take on the world!",
    atomicTips: [
      "Wash hands before eating and after bathroom",
      "Brush teeth for 2 minutes, twice a day",
      "Take a bath or shower daily",
      "Keep nails trimmed and clean"
    ],
    twoMinuteRule: "Wash your hands right now with soap for 20 seconds.",
    habitStack: "After using the bathroom, I will wash my hands with soap before doing anything else.",
    cueRoutineReward: {
      cue: "Leaving the bathroom",
      routine: "Wash hands thoroughly with soap",
      reward: "Staying healthy and feeling clean"
    }
  },
  // NEW DISCIPLINE ACTIVITIES
  {
    id: "a1",
    title: "Saying Please & Thank You",
    description: "Use polite words every day",
    icon: "🙏",
    color: "lavender",
    videoQuery: "manners+for+kids",
    category: "behavior",
    detailedDescription: "Polite words are like magic - they make people feel respected and happy. Saying 'please' and 'thank you' shows you appreciate others and opens doors everywhere you go. Good manners are noticed and remembered!",
    atomicTips: [
      "Say thank you every time someone helps you",
      "Use please when asking for anything",
      "Practice at home with family first",
      "Notice how people react when you are polite"
    ],
    twoMinuteRule: "Say thank you to the next person who does something for you.",
    habitStack: "Whenever someone gives me something, I will immediately say thank you.",
    cueRoutineReward: {
      cue: "Receiving help or a gift",
      routine: "Say please when asking, thank you when receiving",
      reward: "People treat you kindly and with respect"
    }
  },
  {
    id: "a2",
    title: "Packing School Bag",
    description: "Prepare your bag the night before",
    icon: "🎒",
    color: "teal",
    videoQuery: "organize+school+bag+for+kids",
    category: "responsibility",
    detailedDescription: "Packing your bag the night before saves time in the morning and ensures you never forget important things. This simple habit reduces morning stress and helps you start each day feeling prepared and confident!",
    atomicTips: [
      "Check your schedule for the next day",
      "Put homework in first, then books",
      "Keep a checklist on your desk",
      "Always put bag in the same spot"
    ],
    twoMinuteRule: "Right after dinner, put your homework folder in your bag.",
    habitStack: "After I finish homework, I will pack my bag for tomorrow.",
    cueRoutineReward: {
      cue: "Finishing homework",
      routine: "Pack all needed items for tomorrow",
      reward: "Stress-free mornings and never forgetting things"
    }
  },
  {
    id: "a3",
    title: "Making Your Own Choices",
    description: "Practice making good decisions",
    icon: "🤔",
    color: "mint",
    videoQuery: "decision+making+for+kids",
    category: "behavior",
    detailedDescription: "Learning to make your own choices is how you become independent! When you practice deciding small things, you build the skills to handle bigger decisions later. Think about consequences before choosing.",
    atomicTips: [
      "Think of two options before deciding",
      "Ask yourself what would happen with each choice",
      "Start with simple choices like what to wear",
      "Accept responsibility for your choices"
    ],
    twoMinuteRule: "Make ONE decision on your own today without asking for help.",
    habitStack: "When given a choice, I will think for 10 seconds before answering.",
    cueRoutineReward: {
      cue: "Facing a decision",
      routine: "Think of options, consider consequences, choose",
      reward: "Feeling confident and independent"
    }
  },
  {
    id: "a4",
    title: "Helping With Chores",
    description: "Contribute to your family",
    icon: "🧽",
    color: "sunshine",
    videoQuery: "chores+for+kids",
    category: "responsibility",
    detailedDescription: "Doing chores teaches you responsibility and life skills you will need forever. When everyone helps at home, the family works as a team. Plus, completing chores gives you a sense of accomplishment!",
    atomicTips: [
      "Pick one chore to do every day",
      "Do it at the same time daily",
      "Do your best, not just okay work",
      "Notice how it helps your family"
    ],
    twoMinuteRule: "Put your dirty dishes in the sink right after eating.",
    habitStack: "After each meal, I will carry my plate to the sink.",
    cueRoutineReward: {
      cue: "Finishing a meal",
      routine: "Clear your plate and help clean up",
      reward: "Parents are proud and home stays clean"
    }
  },
  {
    id: "a5",
    title: "Respecting Elders",
    description: "Show respect to older family members",
    icon: "👴",
    color: "coral",
    videoQuery: "respect+elders+for+kids",
    category: "social",
    detailedDescription: "Older people have wisdom and experience to share. When you respect elders by listening, using polite words, and helping them, you learn valuable lessons and make them feel valued. This is an important value in every culture.",
    atomicTips: [
      "Listen when older people speak",
      "Offer to help grandparents with tasks",
      "Use respectful titles when addressing elders",
      "Ask them to share stories from their life"
    ],
    twoMinuteRule: "Ask an elder one question about their life today.",
    habitStack: "When I see my grandparents, I will greet them first.",
    cueRoutineReward: {
      cue: "Being around older family members",
      routine: "Greet respectfully, listen, offer help",
      reward: "Learning wisdom and stronger family bonds"
    }
  },
  {
    id: "a6",
    title: "Handling Disappointment",
    description: "Stay calm when things do not go your way",
    icon: "😔",
    color: "lavender",
    videoQuery: "handling+disappointment+for+kids",
    category: "behavior",
    detailedDescription: "Life will not always go the way you want, and that is okay! Learning to handle disappointment calmly is a superpower. It helps you bounce back faster and try again instead of giving up.",
    atomicTips: [
      "Take deep breaths when disappointed",
      "Talk about your feelings with someone",
      "Remember that setbacks are temporary",
      "Think of what you can learn from it"
    ],
    twoMinuteRule: "When disappointed, take 3 deep breaths before reacting.",
    habitStack: "When I do not get what I want, I will first say it is okay out loud.",
    cueRoutineReward: {
      cue: "Not getting what you wanted",
      routine: "Breathe, accept, look for the positive",
      reward: "Staying calm and finding new opportunities"
    }
  },
  {
    id: "a7",
    title: "Sitting Properly",
    description: "Good posture for a healthy body",
    icon: "🪑",
    color: "sky",
    videoQuery: "good+posture+for+kids",
    category: "health",
    detailedDescription: "How you sit affects your back, neck, and even how much energy you have! Good posture helps you breathe better, focus longer, and look confident. It might feel strange at first, but soon it becomes natural.",
    atomicTips: [
      "Feet flat on the floor",
      "Back straight against the chair",
      "Shoulders relaxed, not hunched",
      "Check your posture every hour"
    ],
    twoMinuteRule: "Right now, sit up straight and roll your shoulders back.",
    habitStack: "When I sit down at my desk, I will adjust my posture first.",
    cueRoutineReward: {
      cue: "Sitting down anywhere",
      routine: "Adjust posture: feet flat, back straight",
      reward: "Less back pain and more energy"
    }
  },
  {
    id: "a8",
    title: "Sharing With Others",
    description: "Learn the joy of sharing",
    icon: "🤲",
    color: "mint",
    videoQuery: "sharing+for+kids",
    category: "social",
    detailedDescription: "Sharing might seem like giving something up, but it actually makes you happier! When you share, you make friends, show kindness, and often get to enjoy things together. Generous people are loved by everyone.",
    atomicTips: [
      "Share toys with siblings and friends",
      "Offer part of your snack to someone",
      "Take turns with games and equipment",
      "Notice how sharing makes others happy"
    ],
    twoMinuteRule: "Share ONE thing with someone today.",
    habitStack: "When I have a treat, I will offer some to someone nearby.",
    cueRoutineReward: {
      cue: "Having something others might enjoy",
      routine: "Offer to share with others",
      reward: "Making friends happy and feeling generous"
    }
  },
  {
    id: "a9",
    title: "Telling The Truth",
    description: "Be honest even when it is hard",
    icon: "✨",
    color: "sunshine",
    videoQuery: "honesty+for+kids",
    category: "behavior",
    detailedDescription: "Honesty is the foundation of trust. When you tell the truth, people believe you and respect you. Lying might seem easier, but it creates bigger problems. Honest people sleep better and have stronger friendships!",
    atomicTips: [
      "Tell the truth even when scared",
      "Admit mistakes right away",
      "Do not exaggerate stories",
      "Be honest with yourself too"
    ],
    twoMinuteRule: "If you made a mistake, admit it within 2 minutes.",
    habitStack: "When I make a mistake, I will tell the truth immediately.",
    cueRoutineReward: {
      cue: "Making a mistake or being asked about something",
      routine: "Tell the truth calmly and clearly",
      reward: "Being trusted and feeling relief"
    }
  },
  {
    id: "a10",
    title: "Table Manners",
    description: "Eat politely at the table",
    icon: "🍽️",
    color: "teal",
    videoQuery: "table+manners+for+kids",
    category: "behavior",
    detailedDescription: "Good table manners show respect for the food and the people you are eating with. They make meals more enjoyable for everyone. These skills will help you at family dinners, restaurants, and even job interviews someday!",
    atomicTips: [
      "Chew with your mouth closed",
      "Wait for everyone before eating",
      "Say excuse me if you need to leave",
      "No phones at the table"
    ],
    twoMinuteRule: "At your next meal, focus on chewing with your mouth closed.",
    habitStack: "When I sit down to eat, I will put my napkin on my lap.",
    cueRoutineReward: {
      cue: "Sitting down for a meal",
      routine: "Use proper manners throughout the meal",
      reward: "Compliments and pleasant mealtimes"
    }
  },
  {
    id: "a11",
    title: "Being Brave",
    description: "Face your fears with courage",
    icon: "🦁",
    color: "coral",
    videoQuery: "courage+for+kids",
    category: "behavior",
    detailedDescription: "Being brave does not mean having no fear - it means doing things even when you are scared! Every time you face a fear, it gets smaller. Brave kids try new things, stand up for others, and grow stronger every day.",
    atomicTips: [
      "Start with small fears first",
      "Take a deep breath before facing fears",
      "Celebrate every brave moment",
      "Remember times you were brave before"
    ],
    twoMinuteRule: "Do ONE small thing that scares you a little.",
    habitStack: "When I feel scared, I will take 3 breaths and try anyway.",
    cueRoutineReward: {
      cue: "Feeling afraid to try something",
      routine: "Breathe, count to 3, do it anyway",
      reward: "Pride in yourself and growing confidence"
    }
  },
  {
    id: "a12",
    title: "Dressing Yourself",
    description: "Get dressed independently",
    icon: "👕",
    color: "sky",
    videoQuery: "getting+dressed+independently+kids",
    category: "responsibility",
    detailedDescription: "Dressing yourself is a big step toward independence! When you can choose appropriate clothes and put them on properly, you show maturity. It also saves time and lets you express your personality!",
    atomicTips: [
      "Lay out clothes the night before",
      "Check the weather before choosing",
      "Learn to tie your shoes properly",
      "Match colors that go well together"
    ],
    twoMinuteRule: "Tomorrow, put on your shirt by yourself without asking for help.",
    habitStack: "After waking up, I will get dressed before breakfast.",
    cueRoutineReward: {
      cue: "Waking up in the morning",
      routine: "Choose weather-appropriate clothes and dress yourself",
      reward: "Feeling independent and proud"
    }
  }
];

export const habitsAge10to15: Habit[] = [
  {
    id: "16",
    title: "Daily Goal Setting",
    description: "Set and achieve your daily goals like a pro",
    icon: "🎯",
    color: "teal",
    videoQuery: "goal+setting+for+students",
    category: "goal",
    detailedDescription: "Goal setting is the first step to turning the invisible into visible. When you write down your goals, you are 42% more likely to achieve them! Daily goals give you direction, motivation, and a sense of accomplishment when you complete them.",
    atomicTips: [
      "Write your goals down - do not just think them",
      "Make goals specific and measurable",
      "Start with just 3 goals per day",
      "Review your goals at night to see what you accomplished"
    ],
    twoMinuteRule: "Write down just ONE thing you want to accomplish today.",
    habitStack: "After I eat breakfast, I will write down my 3 goals for the day.",
    cueRoutineReward: {
      cue: "Finishing breakfast",
      routine: "Write 3 clear goals for the day",
      reward: "Feeling focused and accomplished when you complete them"
    }
  },
  {
    id: "17",
    title: "Focus Without Distractions",
    description: "Master the art of concentration",
    icon: "🔍",
    color: "coral",
    videoQuery: "how+to+focus+for+students",
    category: "goal",
    detailedDescription: "In a world full of distractions, the ability to focus is a superpower. Deep focus allows you to learn faster, work better, and achieve more in less time. The good news is that focus is like a muscle - the more you practice, the stronger it gets!",
    atomicTips: [
      "Put your phone in another room while studying",
      "Use the Pomodoro technique: 25 minutes focus, 5 minutes break",
      "Clear your desk of everything except what you need",
      "Tell others when you need uninterrupted time"
    ],
    twoMinuteRule: "Before starting work, put away ONE distraction.",
    habitStack: "When I sit down to study, I will first put my phone on silent in another room.",
    cueRoutineReward: {
      cue: "Sitting down to study or work",
      routine: "Remove distractions, set timer, focus completely",
      reward: "Finishing faster and feeling accomplished"
    }
  },
  {
    id: "18",
    title: "Time Blocking",
    description: "Balance study and play like a champion",
    icon: "📅",
    color: "mint",
    videoQuery: "time+management+for+students",
    category: "timeManagement",
    detailedDescription: "Time blocking is the secret weapon of successful people. Instead of a vague to-do list, you assign specific times to specific tasks. This ensures you have time for both work and play, and helps you see exactly how to spend your day productively.",
    atomicTips: [
      "Use a planner or calendar app",
      "Schedule your most important tasks when you have the most energy",
      "Include breaks and fun activities in your schedule",
      "Be realistic about how long tasks take"
    ],
    twoMinuteRule: "Block out just ONE hour for your most important task tomorrow.",
    habitStack: "Every Sunday evening, I will plan my time blocks for the week.",
    cueRoutineReward: {
      cue: "Sunday evening",
      routine: "Review upcoming week and create time blocks",
      reward: "Feeling organized and in control of your week"
    }
  },
  {
    id: "19",
    title: "Avoid Procrastination",
    description: "Stop putting things off, start now!",
    icon: "⚡",
    color: "sunshine",
    videoQuery: "how+to+stop+procrastinating+for+students",
    category: "timeManagement",
    detailedDescription: "Procrastination is the thief of time and the enemy of success. We procrastinate because tasks seem overwhelming or unpleasant. The trick is to make starting easy and remember that action creates motivation - not the other way around!",
    atomicTips: [
      "Break big tasks into tiny steps",
      "Start with the hardest task first (Eat the Frog)",
      "Remove temptations before you start",
      "Reward yourself after completing difficult tasks"
    ],
    twoMinuteRule: "If something takes less than 2 minutes, do it NOW.",
    habitStack: "When I catch myself procrastinating, I will immediately do just 5 minutes of the task.",
    cueRoutineReward: {
      cue: "Noticing you are avoiding a task",
      routine: "Commit to just 5 minutes of work on it",
      reward: "Relief from stress and momentum to continue"
    }
  },
  {
    id: "20",
    title: "Healthy Screen Habits",
    description: "Use technology wisely and healthily",
    icon: "💻",
    color: "sky",
    videoQuery: "digital+discipline+for+kids",
    category: "digital",
    detailedDescription: "Technology is a powerful tool, but like any tool, it must be used wisely. Healthy screen habits protect your eyes, improve your sleep, and ensure technology serves you rather than controls you. Being mindful of screen use is a crucial modern skill.",
    atomicTips: [
      "Use apps to track and limit screen time",
      "Take a 20-second break every 20 minutes to look at something 20 feet away",
      "No screens 1 hour before bed",
      "Use grayscale mode to make phones less addictive"
    ],
    twoMinuteRule: "Before picking up your phone, ask yourself: Do I really need this right now?",
    habitStack: "After using screens for 20 minutes, I will look at something far away for 20 seconds.",
    cueRoutineReward: {
      cue: "Using screens for extended periods",
      routine: "Take regular breaks, limit daily usage",
      reward: "Healthier eyes, better sleep, more real-world experiences"
    }
  },
  {
    id: "21",
    title: "Social Media Control",
    description: "Be the master of your social media, not its slave",
    icon: "📲",
    color: "lavender",
    videoQuery: "social+media+discipline+for+teens",
    category: "digital",
    detailedDescription: "Social media is designed to be addictive. Algorithms are built to keep you scrolling. Taking control of your social media use protects your mental health, gives you more time for real relationships, and helps you focus on what truly matters to you.",
    atomicTips: [
      "Turn off notifications for social apps",
      "Set specific times for checking social media",
      "Unfollow accounts that make you feel bad",
      "Use social media intentionally, not mindlessly"
    ],
    twoMinuteRule: "Before opening social media, write down WHY you are opening it.",
    habitStack: "When I want to check social media, I will first complete my current task.",
    cueRoutineReward: {
      cue: "Urge to check social media",
      routine: "Wait until designated time, use with intention",
      reward: "More time, less comparison, better mental health"
    }
  },
  {
    id: "22",
    title: "Anger & Emotion Management",
    description: "Control your feelings, do not let them control you",
    icon: "😤",
    color: "coral",
    videoQuery: "emotion+control+for+kids",
    category: "emotion",
    detailedDescription: "Emotions are natural and important, but learning to manage them is crucial for success. When you can stay calm under pressure, you make better decisions, maintain better relationships, and feel more in control of your life. Emotional intelligence is a key life skill.",
    atomicTips: [
      "Recognize your triggers - what makes you upset?",
      "Practice deep breathing when emotions rise",
      "Take a timeout before reacting when angry",
      "Write in a journal to process difficult feelings"
    ],
    twoMinuteRule: "When you feel angry, take 3 deep breaths before saying anything.",
    habitStack: "When I notice my heart racing from emotion, I will pause and take 5 deep breaths.",
    cueRoutineReward: {
      cue: "Feeling strong negative emotions",
      routine: "Pause, breathe deeply, respond thoughtfully",
      reward: "Better relationships and feeling proud of your self-control"
    }
  },
  {
    id: "23",
    title: "Building Self-Control",
    description: "Develop the superpower of self-discipline",
    icon: "💪",
    color: "teal",
    videoQuery: "self+discipline+for+teens",
    category: "emotion",
    detailedDescription: "Self-control is the ability to do what you should do, even when you do not feel like it. It is the foundation of all success. Research shows that kids with better self-control grow up to be healthier, wealthier, and happier adults. It is a skill you can develop!",
    atomicTips: [
      "Start with small acts of discipline and build up",
      "Remove temptations from your environment",
      "Get enough sleep - willpower is weaker when tired",
      "Celebrate wins to reinforce disciplined behavior"
    ],
    twoMinuteRule: "Do ONE thing you have been avoiding right now.",
    habitStack: "Before I do something fun, I will complete one important task first.",
    cueRoutineReward: {
      cue: "Wanting to do something fun before responsibilities",
      routine: "Complete one important task first",
      reward: "Guilt-free enjoyment and growing self-discipline"
    }
  },
  {
    id: "24",
    title: "Organization Skills",
    description: "Keep your space and mind organized",
    icon: "🗂️",
    color: "mint",
    videoQuery: "organization+for+students",
    category: "responsibility",
    detailedDescription: "An organized space leads to an organized mind. When everything has its place, you waste less time searching for things, feel less stressed, and can focus better on what matters. Organization is a skill that will benefit you in school, work, and life.",
    atomicTips: [
      "Give everything a specific home",
      "Clean your desk before starting work",
      "Use folders and labels for papers",
      "Spend 5 minutes tidying up at the end of each day"
    ],
    twoMinuteRule: "Clear just ONE surface in your room right now.",
    habitStack: "After finishing homework, I will organize my desk for tomorrow.",
    cueRoutineReward: {
      cue: "Finishing homework or ending the day",
      routine: "Tidy desk and organize materials",
      reward: "A calm environment and easy start tomorrow"
    }
  },
  {
    id: "25",
    title: "Effective Note-Taking",
    description: "Capture and remember important information",
    icon: "📝",
    color: "sky",
    videoQuery: "note+taking+for+students",
    category: "learning",
    detailedDescription: "Good notes are like having a second brain. They help you pay attention in class, understand concepts better, and remember information for tests. Effective note-taking is a skill that will serve you through school, college, and your career.",
    atomicTips: [
      "Use the Cornell method: divide pages into sections",
      "Write in your own words, not word-for-word",
      "Review notes within 24 hours of taking them",
      "Use colors and diagrams to make notes visual"
    ],
    twoMinuteRule: "At the start of each class, write the date and topic at the top of a fresh page.",
    habitStack: "When the teacher starts talking, I will immediately write the main topic.",
    cueRoutineReward: {
      cue: "Teacher begins a lesson",
      routine: "Open notebook, write topic, take organized notes",
      reward: "Better understanding and easier studying later"
    }
  },
  {
    id: "26",
    title: "Stress Management",
    description: "Stay calm and handle pressure well",
    icon: "🧘",
    color: "lavender",
    videoQuery: "stress+management+for+teens",
    category: "emotion",
    detailedDescription: "Some stress is normal, but learning to manage it is essential for your wellbeing. Chronic stress can hurt your health, focus, and happiness. With the right techniques, you can stay calm under pressure and turn stress into motivation rather than anxiety.",
    atomicTips: [
      "Practice daily meditation or deep breathing",
      "Exercise regularly to release tension",
      "Talk to someone you trust about your worries",
      "Break overwhelming tasks into smaller steps"
    ],
    twoMinuteRule: "Take 5 slow, deep breaths right now.",
    habitStack: "When I feel stressed, I will immediately take 5 deep breaths.",
    cueRoutineReward: {
      cue: "Feeling stressed or overwhelmed",
      routine: "Stop, breathe deeply, identify one small action",
      reward: "Feeling calmer and more in control"
    }
  },
  {
    id: "27",
    title: "Better Sleep Hygiene",
    description: "Optimize your sleep for peak performance",
    icon: "🌙",
    color: "coral",
    videoQuery: "sleep+hygiene+for+teens",
    category: "health",
    detailedDescription: "Teenagers need 8-10 hours of sleep, but many get far less. Good sleep improves memory, creativity, athletic performance, and mood. Poor sleep is linked to obesity, depression, and poor grades. Investing in sleep is investing in your success!",
    atomicTips: [
      "Keep a consistent sleep schedule, even on weekends",
      "Make your room dark, quiet, and cool",
      "No caffeine after 2 PM",
      "Create a relaxing pre-bed routine"
    ],
    twoMinuteRule: "Set a bedtime alarm to remind you to start winding down.",
    habitStack: "At 9 PM, I will put away all screens and start my bedtime routine.",
    cueRoutineReward: {
      cue: "9 PM alarm or reminder",
      routine: "Put away screens, do calming activities, go to bed",
      reward: "Waking up refreshed and performing better"
    }
  },
  {
    id: "28",
    title: "Building Healthy Relationships",
    description: "Create meaningful connections with others",
    icon: "🤝",
    color: "sunshine",
    videoQuery: "healthy+relationships+for+teens",
    category: "social",
    detailedDescription: "Healthy relationships are one of the biggest predictors of happiness and success. Learning to communicate well, set boundaries, and be a good friend now will help you throughout your life. Quality relationships make everything better.",
    atomicTips: [
      "Listen more than you talk",
      "Be honest and keep your promises",
      "Respect boundaries - yours and others",
      "Apologize when you are wrong"
    ],
    twoMinuteRule: "Send ONE message to a friend you have not talked to recently.",
    habitStack: "When I see a friend, I will ask them how they are doing and really listen.",
    cueRoutineReward: {
      cue: "Meeting or talking with friends",
      routine: "Listen actively, show genuine interest",
      reward: "Deeper friendships and feeling connected"
    }
  },
  {
    id: "29",
    title: "Financial Literacy",
    description: "Understand money and how it works",
    icon: "💵",
    color: "mint",
    videoQuery: "financial+literacy+for+teens",
    category: "responsibility",
    detailedDescription: "Understanding money is one of the most important skills schools do not teach enough. Learning about saving, spending wisely, and eventually investing will set you up for financial freedom. The habits you build now with money will shape your entire future.",
    atomicTips: [
      "Track every dollar you spend for a month",
      "Save at least 20% of any money you receive",
      "Learn the difference between needs and wants",
      "Start learning about investing early"
    ],
    twoMinuteRule: "Write down ONE thing you spent money on today.",
    habitStack: "Whenever I receive money, I will immediately put 20% in savings.",
    cueRoutineReward: {
      cue: "Receiving money",
      routine: "Save 20%, budget the rest thoughtfully",
      reward: "Growing savings and financial confidence"
    }
  },
  {
    id: "30",
    title: "Critical Thinking",
    description: "Question, analyze, and think deeply",
    icon: "🧠",
    color: "teal",
    videoQuery: "critical+thinking+for+teens",
    category: "learning",
    detailedDescription: "In an age of fake news and overwhelming information, critical thinking is essential. It means not accepting everything at face value, asking good questions, and thinking through problems logically. This skill will make you a better student, worker, and citizen.",
    atomicTips: [
      "Ask why and how instead of just what",
      "Consider different perspectives on issues",
      "Check sources before believing information",
      "Practice debating both sides of arguments"
    ],
    twoMinuteRule: "Before sharing news, ask yourself: Is this true? How do I know?",
    habitStack: "When I read or hear something new, I will ask where this information came from.",
    cueRoutineReward: {
      cue: "Encountering new information",
      routine: "Question the source, consider alternatives",
      reward: "Being well-informed and making better decisions"
    }
  },
  {
    id: "31",
    title: "Public Speaking Skills",
    description: "Communicate confidently with groups",
    icon: "🎤",
    color: "coral",
    videoQuery: "public+speaking+for+kids",
    category: "social",
    detailedDescription: "Fear of public speaking is incredibly common, but it is also a skill you can develop. Being able to speak confidently in front of others opens doors in school, career, and life. The more you practice, the more natural it becomes!",
    atomicTips: [
      "Practice in front of a mirror first",
      "Start with small groups before larger ones",
      "Prepare and know your material well",
      "Focus on your message, not your nervousness"
    ],
    twoMinuteRule: "Practice saying ONE sentence out loud as if presenting.",
    habitStack: "Before class presentations, I will practice in front of a mirror once.",
    cueRoutineReward: {
      cue: "Having an upcoming presentation",
      routine: "Practice out loud, prepare thoroughly",
      reward: "Feeling confident and delivering well"
    }
  },
  {
    id: "32",
    title: "Leadership Skills",
    description: "Lead by example and inspire others",
    icon: "👑",
    color: "lavender",
    videoQuery: "leadership+for+teens",
    category: "social",
    detailedDescription: "Leadership is not about being in charge - it is about taking care of those in your charge. Good leaders inspire others, take responsibility, and bring out the best in people. You can practice leadership in small ways every day, and it grows with practice.",
    atomicTips: [
      "Lead by example - do what you say",
      "Listen to others and value their input",
      "Take responsibility for mistakes",
      "Help others succeed"
    ],
    twoMinuteRule: "Volunteer to help with ONE task or decision today.",
    habitStack: "When no one is taking charge, I will step up and suggest a plan.",
    cueRoutineReward: {
      cue: "A situation needs someone to take initiative",
      routine: "Step up, suggest solutions, help coordinate",
      reward: "Respect from others and growing confidence"
    }
  },
  {
    id: "33",
    title: "Mindfulness Practice",
    description: "Be present in the moment",
    icon: "🧘‍♂️",
    color: "sky",
    videoQuery: "mindfulness+for+kids",
    category: "emotion",
    detailedDescription: "Mindfulness means paying attention to the present moment without judgment. Regular practice reduces stress, improves focus, and helps you respond thoughtfully instead of reacting impulsively. Just a few minutes daily can make a big difference!",
    atomicTips: [
      "Start with just 2 minutes of sitting quietly",
      "Focus on your breath going in and out",
      "When your mind wanders, gently bring it back",
      "Use guided meditation apps to help"
    ],
    twoMinuteRule: "Close your eyes and take 10 slow breaths right now.",
    habitStack: "After I wake up, I will sit quietly for 2 minutes and breathe.",
    cueRoutineReward: {
      cue: "Waking up in the morning",
      routine: "Sit quietly, breathe mindfully for 2 minutes",
      reward: "Starting the day calm and focused"
    }
  },
  {
    id: "34",
    title: "Problem-Solving Skills",
    description: "Find creative solutions to challenges",
    icon: "💡",
    color: "sunshine",
    videoQuery: "problem+solving+for+kids",
    category: "learning",
    detailedDescription: "Life is full of problems to solve, and those who can solve them thrive. Good problem-solving means breaking challenges into parts, thinking creatively, and persisting until you find a solution. This skill is valued in every career and area of life.",
    atomicTips: [
      "Define the problem clearly before trying to solve it",
      "Brainstorm multiple solutions before choosing",
      "Break big problems into smaller steps",
      "Learn from failed attempts"
    ],
    twoMinuteRule: "Write down ONE problem you are facing and ONE possible solution.",
    habitStack: "When I face a problem, I will first write it down clearly.",
    cueRoutineReward: {
      cue: "Encountering a challenge or obstacle",
      routine: "Define it, brainstorm solutions, try the best one",
      reward: "Feeling capable and finding solutions"
    }
  },
  // NEW DISCIPLINE ACTIVITIES FOR TEENS
  {
    id: "b1",
    title: "Morning Exercise Routine",
    description: "Start your day with movement",
    icon: "🏋️",
    color: "coral",
    videoQuery: "morning+workout+for+teens",
    category: "health",
    detailedDescription: "Morning exercise wakes up your body and brain, boosts your mood, and gives you energy that lasts all day. Just 10-15 minutes of movement can transform your entire day and build a healthy habit for life.",
    atomicTips: [
      "Start with just 5 minutes and build up",
      "Keep workout clothes by your bed",
      "Choose exercises you actually enjoy",
      "Do it before looking at your phone"
    ],
    twoMinuteRule: "Do 10 jumping jacks right after getting out of bed.",
    habitStack: "After I turn off my alarm, I will do 10 jumping jacks immediately.",
    cueRoutineReward: {
      cue: "Alarm going off",
      routine: "Get up and do quick exercises",
      reward: "Feeling energized and accomplished before the day starts"
    }
  },
  {
    id: "b2",
    title: "Journaling Daily",
    description: "Write down thoughts and reflections",
    icon: "📓",
    color: "lavender",
    videoQuery: "journaling+for+teens",
    category: "emotion",
    detailedDescription: "Journaling is like having a conversation with yourself. Writing down your thoughts helps you process emotions, remember important events, track your growth, and solve problems. Many successful people journal daily!",
    atomicTips: [
      "Write at the same time each day",
      "Start with just 3 sentences",
      "Write about feelings, not just events",
      "Keep your journal private so you can be honest"
    ],
    twoMinuteRule: "Write just ONE sentence about how you feel right now.",
    habitStack: "After I get into bed, I will write 3 sentences in my journal.",
    cueRoutineReward: {
      cue: "Getting into bed at night",
      routine: "Write about your day, thoughts, and feelings",
      reward: "Clarity, emotional processing, and a record of your life"
    }
  },
  {
    id: "b3",
    title: "Learning A New Skill",
    description: "Dedicate time to learn something new",
    icon: "🎸",
    color: "teal",
    videoQuery: "learning+new+skills+teens",
    category: "learning",
    detailedDescription: "The ability to learn new skills is your greatest superpower. Whether it is coding, music, a language, or art, dedicating regular time to learning makes you more capable and confident. Start with 15 minutes daily!",
    atomicTips: [
      "Choose something you are genuinely curious about",
      "Practice at the same time each day",
      "Focus on progress, not perfection",
      "Find online tutorials or classes"
    ],
    twoMinuteRule: "Spend just 2 minutes on your new skill today.",
    habitStack: "After homework, I will practice my new skill for 15 minutes.",
    cueRoutineReward: {
      cue: "Finishing homework",
      routine: "Practice your chosen skill",
      reward: "Growing abilities and new opportunities"
    }
  },
  {
    id: "b4",
    title: "Digital Detox Days",
    description: "Take regular breaks from technology",
    icon: "🌿",
    color: "mint",
    videoQuery: "digital+detox+for+teens",
    category: "digital",
    detailedDescription: "Our brains need breaks from screens. Regular digital detox times help you reconnect with the real world, improve creativity, and give your eyes and mind a rest. Start with just a few hours and work up to full days!",
    atomicTips: [
      "Start with screen-free mornings",
      "Have one device-free meal daily",
      "Find offline activities you enjoy",
      "Use airplane mode during family time"
    ],
    twoMinuteRule: "Turn off notifications for the next hour.",
    habitStack: "Every Sunday morning, I will keep my phone off until noon.",
    cueRoutineReward: {
      cue: "Sunday morning",
      routine: "Stay offline, enjoy offline activities",
      reward: "Mental clarity and appreciation for real life"
    }
  },
  {
    id: "b5",
    title: "Planning Tomorrow Today",
    description: "Prepare for the next day each evening",
    icon: "📋",
    color: "sunshine",
    videoQuery: "planning+for+students",
    category: "timeManagement",
    detailedDescription: "Successful people do not leave tomorrow to chance. Spending 5 minutes each evening planning the next day reduces morning stress, helps you sleep better, and ensures you start each day with direction and purpose.",
    atomicTips: [
      "Write tomorrow's 3 most important tasks",
      "Check your calendar for appointments",
      "Prepare clothes and bags the night before",
      "Visualize your ideal tomorrow"
    ],
    twoMinuteRule: "Write down ONE thing you need to do tomorrow.",
    habitStack: "Before getting in bed, I will write tomorrow's top 3 priorities.",
    cueRoutineReward: {
      cue: "Getting ready for bed",
      routine: "Plan tomorrow's tasks and prepare materials",
      reward: "Peaceful sleep and productive mornings"
    }
  },
  {
    id: "b6",
    title: "Active Listening",
    description: "Truly hear what others are saying",
    icon: "👂",
    color: "sky",
    videoQuery: "active+listening+for+teens",
    category: "social",
    detailedDescription: "Most people listen to respond, not to understand. Active listening means giving your full attention, asking questions, and truly understanding others. This skill improves all your relationships and makes you a better friend and leader.",
    atomicTips: [
      "Put away your phone during conversations",
      "Make eye contact with the speaker",
      "Ask follow-up questions",
      "Summarize what you heard to confirm understanding"
    ],
    twoMinuteRule: "In your next conversation, do not interrupt at all.",
    habitStack: "When someone starts talking to me, I will put my phone away immediately.",
    cueRoutineReward: {
      cue: "Someone speaking to you",
      routine: "Give full attention, ask questions, confirm understanding",
      reward: "Deeper relationships and being truly heard in return"
    }
  },
  {
    id: "b7",
    title: "Weekly Review",
    description: "Reflect on your week every Sunday",
    icon: "📊",
    color: "coral",
    videoQuery: "weekly+review+productivity",
    category: "goal",
    detailedDescription: "A weekly review helps you learn from the past week and plan for the next. Take 15 minutes to celebrate wins, identify what did not work, and set intentions for the coming week. This is how you continuously improve!",
    atomicTips: [
      "Review your goals and progress",
      "Write down wins and lessons",
      "Plan next week's priorities",
      "Make it a relaxing ritual"
    ],
    twoMinuteRule: "Write down ONE thing that went well this week.",
    habitStack: "Every Sunday evening, I will spend 15 minutes reviewing my week.",
    cueRoutineReward: {
      cue: "Sunday evening",
      routine: "Review past week, celebrate wins, plan ahead",
      reward: "Continuous improvement and feeling in control"
    }
  },
  {
    id: "b8",
    title: "Positive Self-Talk",
    description: "Be your own best encourager",
    icon: "💬",
    color: "lavender",
    videoQuery: "positive+self+talk+teens",
    category: "emotion",
    detailedDescription: "The way you talk to yourself shapes who you become. Negative self-talk limits you, while positive self-talk builds confidence and resilience. You can train yourself to be your own best friend and biggest supporter!",
    atomicTips: [
      "Notice when you criticize yourself",
      "Replace negative thoughts with encouraging ones",
      "Speak to yourself like you would to a friend",
      "Celebrate your efforts, not just results"
    ],
    twoMinuteRule: "Say ONE encouraging thing to yourself right now.",
    habitStack: "When I notice negative thoughts, I will immediately say something positive.",
    cueRoutineReward: {
      cue: "Catching yourself being self-critical",
      routine: "Stop, replace with encouraging thought",
      reward: "Greater confidence and emotional resilience"
    }
  },
  {
    id: "b9",
    title: "Helping Around The House",
    description: "Take responsibility at home",
    icon: "🏠",
    color: "teal",
    videoQuery: "chores+for+teenagers",
    category: "responsibility",
    detailedDescription: "Contributing to household tasks shows maturity and prepares you for adult life. Learning to cook, clean, and maintain a home are essential life skills. Plus, helping your family strengthens relationships and builds character.",
    atomicTips: [
      "Take ownership of specific chores",
      "Learn to cook basic meals",
      "Keep your room clean without being asked",
      "Notice what needs to be done and do it"
    ],
    twoMinuteRule: "Do ONE small chore without being asked.",
    habitStack: "Every Saturday morning, I will clean my room completely.",
    cueRoutineReward: {
      cue: "Saturday morning",
      routine: "Complete your household responsibilities",
      reward: "Proud parents and life skills for the future"
    }
  },
  {
    id: "b10",
    title: "Gratitude Journaling",
    description: "Write down things you are thankful for",
    icon: "🙏",
    color: "mint",
    videoQuery: "gratitude+journal+for+teens",
    category: "emotion",
    detailedDescription: "Writing down gratitude is more powerful than just thinking it. Studies show gratitude journaling improves sleep, reduces stress, and increases happiness. Just 3 things each day can literally rewire your brain for positivity!",
    atomicTips: [
      "Write 3 specific things each day",
      "Include why you are grateful for each",
      "Notice small things, not just big ones",
      "Do it at the same time daily"
    ],
    twoMinuteRule: "Write ONE thing you are grateful for right now.",
    habitStack: "After getting in bed, I will write 3 gratitudes before sleeping.",
    cueRoutineReward: {
      cue: "Getting in bed at night",
      routine: "Write 3 specific things you are thankful for",
      reward: "Better sleep and increased happiness"
    }
  },
  {
    id: "b11",
    title: "Resisting Peer Pressure",
    description: "Stay true to yourself",
    icon: "🛡️",
    color: "sunshine",
    videoQuery: "peer+pressure+for+teens",
    category: "social",
    detailedDescription: "Friends are important, but so is staying true to your values. Learning to say no when something feels wrong protects your future and builds self-respect. Real friends respect your boundaries and do not pressure you.",
    atomicTips: [
      "Know your values before situations arise",
      "Practice saying no in low-pressure situations",
      "Have exit strategies ready",
      "Surround yourself with friends who respect you"
    ],
    twoMinuteRule: "Think of ONE boundary that is important to you.",
    habitStack: "When pressured to do something wrong, I will say no thank you and walk away.",
    cueRoutineReward: {
      cue: "Being pressured to do something against your values",
      routine: "Firmly but kindly say no, remove yourself",
      reward: "Self-respect and avoiding regrets"
    }
  },
  {
    id: "b12",
    title: "Reading Before Bed",
    description: "End your day with a book",
    icon: "📚",
    color: "sky",
    videoQuery: "reading+before+bed+benefits",
    category: "learning",
    detailedDescription: "Reading before bed is better for your brain than screens. It reduces stress, improves sleep, and makes you smarter. Even 15 minutes of reading daily adds up to 20+ books a year! Choose books that inspire or educate you.",
    atomicTips: [
      "Keep a book on your nightstand",
      "Set a reminder to stop screens and start reading",
      "Choose books you genuinely enjoy",
      "Track what you read to stay motivated"
    ],
    twoMinuteRule: "Read just ONE page tonight before sleeping.",
    habitStack: "After putting away my phone at night, I will read for 15 minutes.",
    cueRoutineReward: {
      cue: "Putting phone away for the night",
      routine: "Read a physical book for at least 15 minutes",
      reward: "Better sleep, more knowledge, reduced stress"
    }
  },
  {
    id: "b13",
    title: "Asking For Help",
    description: "Know when and how to seek help",
    icon: "🆘",
    color: "coral",
    videoQuery: "asking+for+help+teens",
    category: "social",
    detailedDescription: "Asking for help is not weakness - it is wisdom. Everyone struggles sometimes, and knowing when to reach out is a strength. Whether it is schoolwork, emotions, or problems, there are people who want to help you succeed.",
    atomicTips: [
      "Identify trusted adults you can talk to",
      "Ask questions in class when confused",
      "Do not wait until problems are overwhelming",
      "Be specific about what help you need"
    ],
    twoMinuteRule: "Ask ONE question about something you are struggling with.",
    habitStack: "When I do not understand something, I will ask within 24 hours.",
    cueRoutineReward: {
      cue: "Feeling stuck or confused",
      routine: "Reach out to someone who can help",
      reward: "Getting unstuck and learning faster"
    }
  },
  {
    id: "b14",
    title: "Practicing Empathy",
    description: "Understand others feelings",
    icon: "💖",
    color: "lavender",
    videoQuery: "empathy+for+teens",
    category: "emotion",
    detailedDescription: "Empathy means understanding how others feel by imagining yourself in their situation. It is the foundation of kindness, strong relationships, and good leadership. Practicing empathy makes you a better friend and person.",
    atomicTips: [
      "Ask how are you really and listen",
      "Imagine walking in their shoes",
      "Do not judge others too quickly",
      "Respond with understanding, not advice"
    ],
    twoMinuteRule: "Ask someone how they are feeling and truly listen.",
    habitStack: "When someone shares a problem, I will first try to understand before responding.",
    cueRoutineReward: {
      cue: "Someone sharing their feelings",
      routine: "Listen, understand, acknowledge",
      reward: "Deeper connections and being a better friend"
    }
  },
  {
    id: "b15",
    title: "Setting Boundaries",
    description: "Know your limits and communicate them",
    icon: "🚧",
    color: "teal",
    videoQuery: "setting+boundaries+teens",
    category: "social",
    detailedDescription: "Healthy boundaries protect your time, energy, and wellbeing. They are not about being mean - they are about respecting yourself. Learning to set boundaries is essential for healthy relationships and mental health.",
    atomicTips: [
      "Know what you are and are not okay with",
      "Communicate boundaries calmly and clearly",
      "It is okay to say no without long explanations",
      "Respect others boundaries too"
    ],
    twoMinuteRule: "Think of ONE boundary you need to set.",
    habitStack: "When something makes me uncomfortable, I will speak up within 24 hours.",
    cueRoutineReward: {
      cue: "Feeling uncomfortable or overwhelmed",
      routine: "Identify the issue, communicate your boundary",
      reward: "Protected energy and self-respect"
    }
  }
];

export const categoriesAge5to10 = [
  { key: "daily", title: "Daily Habits", icon: "🌅" },
  { key: "time", title: "Time Sense", icon: "⏰" },
  { key: "responsibility", title: "Responsibility", icon: "📚" },
  { key: "behavior", title: "Behavior & Values", icon: "🧠" },
  { key: "health", title: "Health & Wellness", icon: "❤️" },
  { key: "learning", title: "Learning", icon: "📖" },
  { key: "social", title: "Social Skills", icon: "🤝" },
];

export const categoriesAge10to15 = [
  { key: "goal", title: "Goal & Focus", icon: "🎯" },
  { key: "timeManagement", title: "Time Management", icon: "⏳" },
  { key: "digital", title: "Digital Discipline", icon: "📱" },
  { key: "emotion", title: "Mind & Emotions", icon: "🧠" },
  { key: "health", title: "Health", icon: "❤️" },
  { key: "learning", title: "Learning", icon: "📖" },
  { key: "responsibility", title: "Responsibility", icon: "📋" },
  { key: "social", title: "Social Skills", icon: "🤝" },
];
