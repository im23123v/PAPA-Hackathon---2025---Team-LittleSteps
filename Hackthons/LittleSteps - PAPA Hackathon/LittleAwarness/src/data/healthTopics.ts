export interface HealthTopicData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  content: {
    intro: string;
    facts: string[];
    tips: string[];
    funActivity: string;
  };
  youtubeVideos: {
    title: string;
    videoId: string;
  }[];
  resources: {
    title: string;
    url: string;
    type: "article" | "game" | "worksheet";
  }[];
}

export const healthTopics: HealthTopicData[] = [
  {
    slug: "eye-care",
    title: "Eye Care",
    description: "Learn how to protect your precious eyes from screens, read in proper light, and do eye exercises to keep them healthy and strong.",
    icon: "Eye",
    content: {
      intro: "Your eyes are like cameras that help you see the beautiful world around you! Just like you take care of your toys and books, your eyes need special care too. With screens everywhere today, it's super important to learn how to keep your eyes happy and healthy!",
      facts: [
        "Your eyes can see about 10 million different colors!",
        "Blinking helps keep your eyes clean and moist - you blink about 15-20 times per minute!",
        "Carrots really do help your eyes! They contain Vitamin A which is great for vision.",
        "Your eyes are made up of over 2 million working parts!",
        "Reading in dim light doesn't damage your eyes, but it can make them tired faster."
      ],
      tips: [
        "Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds",
        "Keep screens at arm's length and slightly below eye level",
        "Blink often when using screens to keep eyes moist",
        "Eat colorful fruits and vegetables for eye health",
        "Get regular eye check-ups once a year",
        "Wear sunglasses on sunny days to protect from UV rays",
        "Never rub your eyes with dirty hands"
      ],
      funActivity: "Try the Eye Exercise Challenge! Roll your eyes in circles 5 times clockwise, then 5 times anti-clockwise. Now focus on your finger as you move it close to your nose and back out. Do this 3 times a day for super healthy eyes!"
    },
    youtubeVideos: [
      {
        title: "Eye Care Tips for Kids",
        videoId: "4ANNMKbthcY"
      },
      {
        title: "How Do Eyes Work?",
        videoId: "1xntK4Gfz7E"
      },
      {
        title: "Eye Exercises for Kids",
        videoId: "W10Zeh-U2ek"
      }
    ],
    resources: [
      {
        title: "Eye Care Coloring Pages",
        url: "https://www.aao.org/eye-health/tips-prevention/children-eye-screening",
        type: "worksheet"
      },
      {
        title: "Vision Game for Kids",
        url: "https://www.eyecarefun.com/games",
        type: "game"
      }
    ]
  },
  {
    slug: "eating-green-vegetables",
    title: "Eating Green Vegetables",
    description: "Discover why colorful veggies are superfoods! They make you stronger, smarter, and help your body fight germs like a superhero.",
    icon: "Salad",
    content: {
      intro: "Vegetables are nature's superheroes! Each color has special powers that help your body grow strong and stay healthy. Green veggies like spinach, broccoli, and peas are packed with vitamins that make you feel amazing. Let's discover why eating your greens is like having superpowers!",
      facts: [
        "Spinach has iron that makes your blood strong - just like Popeye!",
        "Broccoli has more vitamin C than oranges!",
        "Green vegetables help you see better in the dark",
        "Eating vegetables helps your brain work better for school",
        "Vegetables have fiber that keeps your tummy happy"
      ],
      tips: [
        "Try one new vegetable every week - make it an adventure!",
        "Mix vegetables into foods you already love (like adding spinach to smoothies)",
        "Help your parents cook - food tastes better when you make it!",
        "Dip veggies in hummus or yogurt for extra yummy taste",
        "Grow your own vegetables - even small pots on a windowsill work!",
        "Eat the rainbow - try vegetables of different colors each day"
      ],
      funActivity: "Create a 'Veggie Rainbow Plate'! Try to eat vegetables of every color this week: Green (spinach, broccoli), Red (tomatoes, peppers), Orange (carrots, sweet potato), Yellow (corn, squash), Purple (eggplant, cabbage). Make a chart and put a sticker for each color you eat!"
    },
    youtubeVideos: [
      {
        title: "Why Eat Vegetables - For Kids",
        videoId: "mEHY9Zk2kWI"
      },
      {
        title: "Vegetable Song for Children",
        videoId: "RE5tvaveVak"
      },
      {
        title: "Healthy Eating for Kids",
        videoId: "mMHVEFWNLMc"
      }
    ],
    resources: [
      {
        title: "Vegetable Coloring Book",
        url: "https://www.choosemyplate.gov/kids",
        type: "worksheet"
      },
      {
        title: "Nutrition Games",
        url: "https://www.nourishinteractive.com/kids",
        type: "game"
      }
    ]
  },
  {
    slug: "drinking-water",
    title: "Drinking Water",
    description: "Water is your body's best friend! Learn why staying hydrated helps you think better, play longer, and stay healthy every day.",
    icon: "Droplets",
    content: {
      intro: "Did you know that your body is made up of about 60% water? That's more than half of you! Water is like fuel for your body - it helps everything work properly. From helping your brain think clearly to giving you energy to play, water is truly magical!",
      facts: [
        "Your brain is about 75% water - staying hydrated helps you think better!",
        "Water helps carry nutrients to all parts of your body",
        "Drinking water helps you stay cool when you're playing outside",
        "Water has zero calories and is the healthiest drink ever!",
        "Your body loses about 8 cups of water every day through breathing, sweating, and going to the bathroom"
      ],
      tips: [
        "Carry a water bottle with you everywhere you go",
        "Drink a glass of water first thing in the morning",
        "Eat water-rich fruits like watermelon and oranges",
        "Set reminders to drink water throughout the day",
        "Drink extra water when playing sports or on hot days",
        "If plain water is boring, add lemon or cucumber slices",
        "Drink water before, during, and after exercise"
      ],
      funActivity: "Make a Water Tracker! Draw 8 glasses on paper. Color one glass every time you drink water. Try to color all 8 glasses every day for a week. Reward yourself with a fun sticker sheet when you complete the week!"
    },
    youtubeVideos: [
      {
        title: "Why Water is Important for Kids",
        videoId: "8FRjxJwFSQQ"
      },
      {
        title: "The Water Cycle Song",
        videoId: "ncORPosDrjI"
      },
      {
        title: "Stay Hydrated - Kids Health",
        videoId: "vL5s1VD3tLA"
      }
    ],
    resources: [
      {
        title: "Water Tracker Printable",
        url: "https://www.healthykids.nsw.gov.au/downloads/file/teacherschildcare/WaterTrackerA4.pdf",
        type: "worksheet"
      },
      {
        title: "Water Cycle Game",
        url: "https://www.epa.gov/watersense/watersense-kids",
        type: "game"
      }
    ]
  },
  {
    slug: "eating-eggs-daily",
    title: "Eating Eggs Daily",
    description: "Eggs are packed with protein and nutrients that help your brain grow and your muscles get stronger. One egg a day keeps weakness away!",
    icon: "Egg",
    content: {
      intro: "Eggs are like little packages of amazing nutrition! They're one of nature's most perfect foods, packed with everything your growing body needs. From making your muscles strong to helping your brain work better, eggs are true superfoods that have been eaten by people all around the world for thousands of years!",
      facts: [
        "One egg has 6 grams of protein - that's like a mini muscle builder!",
        "Egg yolks contain choline, which is super food for your brain",
        "Eggs contain almost every vitamin your body needs (except Vitamin C)",
        "The color of an egg shell doesn't change how nutritious it is",
        "Eggs can be cooked in so many ways - boiled, scrambled, fried, and more!"
      ],
      tips: [
        "Start your day with an egg for breakfast energy!",
        "Hard-boiled eggs make great snacks for school",
        "Try different ways of cooking eggs to find your favorite",
        "Eggs go well with vegetables for extra nutrition",
        "Help your parents make egg dishes - it's fun to crack eggs!",
        "If you don't like eggs alone, try them in pancakes or baked goods"
      ],
      funActivity: "Egg Experiment Time! Put a raw egg in a glass of vinegar and wait 24 hours. Watch as the shell dissolves and you can see the membrane underneath! This shows how amazing eggs really are. (Do this with a parent's help!)"
    },
    youtubeVideos: [
      {
        title: "Why Eggs are Good for You",
        videoId: "ueVPUsyrT0s"
      },
      {
        title: "How to Make Perfect Eggs",
        videoId: "s9r-CxnCXkg"
      },
      {
        title: "Nutrition in Eggs Explained",
        videoId: "NxCpBPH0d8I"
      }
    ],
    resources: [
      {
        title: "Egg Nutrition Facts",
        url: "https://www.incredibleegg.org/nutrition/",
        type: "article"
      },
      {
        title: "Egg Recipe Ideas for Kids",
        url: "https://www.incredibleegg.org/recipes/",
        type: "article"
      }
    ]
  },
  {
    slug: "good-sleep-habits",
    title: "Good Sleep Habits",
    description: "Sleep is when your body grows and your brain stores everything you learned! Discover how to get the best sleep every night.",
    icon: "Moon",
    content: {
      intro: "Sleep is like a supercharger for your body and brain! When you sleep, your body grows, repairs itself, and your brain stores all the cool things you learned during the day. Kids need about 9-12 hours of sleep every night to be at their best. Let's learn how to become a sleep champion!",
      facts: [
        "Your brain cleans itself during sleep, removing toxins!",
        "You actually grow taller while you sleep",
        "Good sleep helps you remember what you learned at school",
        "Dreams happen during a special part of sleep called REM",
        "Not getting enough sleep can make you grumpy and less able to focus",
        "Your body makes important hormones while you sleep"
      ],
      tips: [
        "Go to bed and wake up at the same time every day",
        "Stop using screens 1 hour before bedtime",
        "Keep your bedroom cool, dark, and quiet",
        "Read a book or listen to calm music before sleep",
        "Avoid sugary snacks and drinks before bed",
        "Take a warm bath to help you relax",
        "Use your bed only for sleeping, not for playing or watching TV"
      ],
      funActivity: "Create a Bedtime Routine Chart! Include: brush teeth, put on pajamas, read a story, say goodnight. Follow the same routine every night for a week. You'll find it becomes easier to fall asleep!"
    },
    youtubeVideos: [
      {
        title: "Why Sleep is Important for Kids",
        videoId: "oXRyHBdDt8M"
      },
      {
        title: "Bedtime Routine Song",
        videoId: "GQ7xJLfMDjs"
      },
      {
        title: "Sleep Meditation for Kids",
        videoId: "O29e4rRMrV4"
      }
    ],
    resources: [
      {
        title: "Sleep Chart Template",
        url: "https://kidshealth.org/en/parents/sleep.html",
        type: "worksheet"
      },
      {
        title: "Sleep Tips for Kids",
        url: "https://www.sleepfoundation.org/children-and-sleep",
        type: "article"
      }
    ]
  },
  {
    slug: "physical-activity",
    title: "Physical Activity",
    description: "Running, jumping, dancing - your body loves to move! Learn fun ways to stay active and keep your heart happy and healthy.",
    icon: "Activity",
    content: {
      intro: "Your body was made to move! Running, jumping, dancing, swimming - all these activities make your heart stronger, your muscles bigger, and your brain happier. When you exercise, your body releases special chemicals called endorphins that make you feel amazing. Let's discover the joy of being active!",
      facts: [
        "Kids should get at least 60 minutes of physical activity every day",
        "Exercise makes your heart stronger - it's a muscle too!",
        "Being active helps you sleep better at night",
        "Physical activity can make you smarter by helping your brain grow",
        "Playing outside in sunlight gives you Vitamin D",
        "Exercise helps you feel less stressed and more happy"
      ],
      tips: [
        "Find activities you enjoy - dancing, sports, or just playing!",
        "Play outside every day, even if just for 30 minutes",
        "Take the stairs instead of the elevator",
        "Join a sports team or dance class",
        "Have dance parties with your family",
        "Walk or bike instead of always riding in a car",
        "Play active video games if it's raining outside"
      ],
      funActivity: "Create an Indoor Obstacle Course! Use pillows to jump over, chairs to crawl under, and tape on the floor to hop along. Time yourself and try to beat your record. Challenge your family members too!"
    },
    youtubeVideos: [
      {
        title: "Fun Exercise for Kids",
        videoId: "L_A_HjHZxfI"
      },
      {
        title: "Kids Workout Video",
        videoId: "ymigWt5TOV8"
      },
      {
        title: "Dance Exercise for Kids",
        videoId: "FP0wgVhUC9w"
      }
    ],
    resources: [
      {
        title: "Activity Ideas for Kids",
        url: "https://www.cdc.gov/physicalactivity/basics/children/index.htm",
        type: "article"
      },
      {
        title: "Active Games Printable",
        url: "https://www.actionforhealthykids.org/activity/active-games/",
        type: "worksheet"
      }
    ]
  }
];

export const getTopicBySlug = (slug: string): HealthTopicData | undefined => {
  return healthTopics.find(topic => topic.slug === slug);
};
