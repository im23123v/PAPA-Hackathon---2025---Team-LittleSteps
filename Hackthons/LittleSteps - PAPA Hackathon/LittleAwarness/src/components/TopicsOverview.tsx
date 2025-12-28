import { 
  Heart, 
  Brain, 
  Leaf, 
  Coins, 
  Shield, 
  Users,
  Eye,
  Salad,
  Droplets,
  Egg,
  Moon,
  Activity,
  Sparkles,
  Trash2,
  Recycle,
  TreePine,
  Sprout,
  Home,
  PiggyBank,
  CreditCard,
  AlertTriangle,
  Wallet,
  Smartphone,
  MessageSquare,
  Clock,
  Focus,
  HeartHandshake,
  Wifi,
  Lock,
  Fingerprint,
  Globe
} from "lucide-react";
import CategorySection from "./CategorySection";

const TopicsOverview = () => {
  const categories = [
    {
      id: "health",
      icon: Heart,
      title: "Health & Body",
      subtitle: "Building strong bodies and healthy habits",
      color: "health" as const,
      topics: [
        {
          icon: Eye,
          title: "Eye Care",
          description: "Learn how to protect your precious eyes from screens, read in proper light, and do eye exercises to keep them healthy and strong.",
          slug: "eye-care"
        },
        {
          icon: Salad,
          title: "Eating Green Vegetables",
          description: "Discover why colorful veggies are superfoods! They make you stronger, smarter, and help your body fight germs like a superhero.",
          slug: "eating-green-vegetables"
        },
        {
          icon: Droplets,
          title: "Drinking Water",
          description: "Water is your body's best friend! Learn why staying hydrated helps you think better, play longer, and stay healthy every day.",
          slug: "drinking-water"
        },
        {
          icon: Egg,
          title: "Eating Eggs Daily",
          description: "Eggs are packed with protein and nutrients that help your brain grow and your muscles get stronger. One egg a day keeps weakness away!",
          slug: "eating-eggs-daily"
        },
        {
          icon: Moon,
          title: "Good Sleep Habits",
          description: "Sleep is when your body grows and your brain stores everything you learned! Discover how to get the best sleep every night.",
          slug: "good-sleep-habits"
        },
        {
          icon: Activity,
          title: "Physical Activity",
          description: "Running, jumping, dancing - your body loves to move! Learn fun ways to stay active and keep your heart happy and healthy.",
          slug: "physical-activity"
        }
      ]
    },
    {
      id: "mental",
      icon: Brain,
      title: "Mental Wellness",
      subtitle: "Taking care of your mind and emotions",
      color: "mental" as const,
      topics: [
        {
          icon: Sparkles,
          title: "Stress Control",
          description: "Learn simple breathing exercises and mindfulness techniques to calm your mind when things feel overwhelming or scary."
        },
        {
          icon: Brain,
          title: "Mental Hygiene",
          description: "Just like we brush our teeth, our minds need care too! Discover how positive thinking and good habits keep your mind healthy."
        },
        {
          icon: Clock,
          title: "Screen Time Control",
          description: "Screens are fun, but too much can hurt your eyes and sleep. Learn the 20-20-20 rule and how to balance screen time with play."
        },
        {
          icon: MessageSquare,
          title: "Social Media Awareness",
          description: "Understand how social media works, why likes aren't everything, and how to use it in a way that makes you feel good, not bad."
        },
        {
          icon: Focus,
          title: "Focus & Attention",
          description: "In a world full of distractions, learn powerful techniques to concentrate better on homework, reading, and important tasks."
        },
        {
          icon: HeartHandshake,
          title: "Managing Emotions",
          description: "Feeling angry, sad, or anxious is normal! Learn healthy ways to understand and express your emotions without hurting yourself or others."
        }
      ]
    },
    {
      id: "environment",
      icon: Leaf,
      title: "Environment Care",
      subtitle: "Protecting our beautiful planet",
      color: "environment" as const,
      topics: [
        {
          icon: Trash2,
          title: "Waste Management",
          description: "Learn to reduce, reuse, and recycle! Discover how small actions like using less plastic can make a big difference for Earth."
        },
        {
          icon: Recycle,
          title: "Waste Segregation",
          description: "Wet waste, dry waste, e-waste - learn which bin is for what! Proper sorting helps turn trash into treasure."
        },
        {
          icon: TreePine,
          title: "Plastic Reduction",
          description: "Plastic stays on Earth for 500 years! Discover fun alternatives and how saying 'no' to single-use plastic saves animals and oceans."
        },
        {
          icon: Sprout,
          title: "Sustainable Living",
          description: "Learn simple ways to live in harmony with nature - from growing plants to saving electricity and water at home."
        },
        {
          icon: Home,
          title: "Clean Surroundings",
          description: "A clean space means a healthy you! Learn why keeping your room, school, and neighborhood clean prevents diseases and feels great."
        },
        {
          icon: Leaf,
          title: "Nature Connection",
          description: "Spending time in nature makes you happier and calmer. Discover the joy of gardening, bird watching, and outdoor adventures."
        }
      ]
    },
    {
      id: "money",
      icon: Coins,
      title: "Money Smart",
      subtitle: "Learning to manage money wisely",
      color: "money" as const,
      topics: [
        {
          icon: PiggyBank,
          title: "Saving & Spending",
          description: "Learn the difference between needs and wants! Discover how saving a little now can help you buy something big later."
        },
        {
          icon: CreditCard,
          title: "Digital Payments",
          description: "UPI, cards, and wallets - understand how digital money works and why you should never share your passwords or OTPs."
        },
        {
          icon: AlertTriangle,
          title: "Scam Awareness",
          description: "Fraudsters try to trick people for money. Learn to spot fake calls, messages, and emails that ask for money or personal info."
        },
        {
          icon: Wallet,
          title: "Responsible Money Habits",
          description: "Money doesn't grow on trees! Learn to appreciate what you have, avoid wasteful spending, and be grateful for what you get."
        },
        {
          icon: Coins,
          title: "Understanding Value",
          description: "Everything has a price, but not everything has value. Learn to make smart choices about what's really worth your money."
        },
        {
          icon: Users,
          title: "Sharing & Giving",
          description: "The joy of giving! Learn why sharing with those in need and being generous makes the world a better place for everyone."
        }
      ]
    },
    {
      id: "digital",
      icon: Shield,
      title: "Digital Safety",
      subtitle: "Staying safe in the online world",
      color: "digital" as const,
      topics: [
        {
          icon: Shield,
          title: "Online Frauds & Phishing",
          description: "Learn to spot fake websites, suspicious links, and scam emails that try to steal your information or money."
        },
        {
          icon: Lock,
          title: "Data Privacy",
          description: "Your personal information is precious! Learn what to share, what to keep private, and how to protect your digital identity."
        },
        {
          icon: Fingerprint,
          title: "Digital Footprint",
          description: "Everything you post online stays forever! Understand how your online actions create a trail and why it matters for your future."
        },
        {
          icon: Globe,
          title: "Safe Internet Habits",
          description: "The internet is amazing but has dangers too. Learn safe browsing, strong passwords, and what to do if something feels wrong."
        },
        {
          icon: Wifi,
          title: "Cyberbullying Awareness",
          description: "Words can hurt online too. Learn to recognize cyberbullying, how to respond, and how to be kind in digital spaces."
        },
        {
          icon: Smartphone,
          title: "App Safety",
          description: "Not all apps are safe! Learn to check permissions, recognize harmful apps, and download only from trusted sources."
        }
      ]
    },
    {
      id: "family",
      icon: Users,
      title: "Family & Balance",
      subtitle: "Building stronger bonds and balanced life",
      color: "family" as const,
      topics: [
        {
          icon: HeartHandshake,
          title: "Family Bonding",
          description: "Put down devices and connect! Discover fun activities like board games, cooking together, and storytelling that bring families closer."
        },
        {
          icon: Clock,
          title: "Offline Time",
          description: "Life is happening around you! Learn why unplugging from devices helps you enjoy real experiences and make real memories."
        },
        {
          icon: Users,
          title: "Communication Skills",
          description: "Talking and listening are superpowers! Learn how to express yourself clearly and really hear what others are saying."
        },
        {
          icon: Heart,
          title: "Helping at Home",
          description: "Being part of a family means helping out! Discover age-appropriate chores that teach responsibility and make parents proud."
        },
        {
          icon: Brain,
          title: "Problem Solving Together",
          description: "When families face challenges, working together makes everything easier. Learn teamwork and support within your family."
        },
        {
          icon: Sparkles,
          title: "Creating Happy Moments",
          description: "Happiness is in the little things! Learn to appreciate family meals, hugs, celebrations, and everyday moments of joy."
        }
      ]
    }
  ];

  return (
    <div id="topics" className="scroll-mt-20">
      {/* Quick navigation */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
            Explore Our Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {cat.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((category, index) => (
        <CategorySection
          key={category.id}
          {...category}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
};

export default TopicsOverview;
