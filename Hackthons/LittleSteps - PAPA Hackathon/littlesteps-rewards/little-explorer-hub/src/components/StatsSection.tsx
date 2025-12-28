import { motion } from 'framer-motion';
import { BookOpen, Video, Award, Users } from 'lucide-react';

const stats = [
  {
    icon: BookOpen,
    value: '22+',
    label: 'Curiosity Topics',
    color: 'text-curious-purple',
    bgColor: 'bg-curious-purple/10',
  },
  {
    icon: Video,
    value: '22',
    label: 'Learning Videos',
    color: 'text-curious-blue',
    bgColor: 'bg-curious-blue/10',
  },
  {
    icon: Award,
    value: '16',
    label: 'Badges to Earn',
    color: 'text-curious-yellow',
    bgColor: 'bg-curious-yellow/10',
  },
  {
    icon: Users,
    value: '5-15',
    label: 'Age Range',
    color: 'text-curious-green',
    bgColor: 'bg-curious-green/10',
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-6 text-center shadow-card border border-border"
            >
              <div className={`inline-flex p-3 rounded-xl ${stat.bgColor} mb-3`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-black ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
