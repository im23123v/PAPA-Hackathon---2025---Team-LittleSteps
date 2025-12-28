import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';
import { Activity, categories } from '@/data/activities';
import { Badge } from './ui/badge';

interface ActivityCardProps {
  activity: Activity;
  index?: number;
}

const difficultyColors = {
  easy: 'bg-mint text-foreground',
  medium: 'bg-sunshine text-foreground',
  hard: 'bg-coral text-foreground',
};

export const ActivityCard = ({ activity, index = 0 }: ActivityCardProps) => {
  const category = categories.find(c => c.id === activity.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/activity/${activity.id}`}>
        <article className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden bg-muted">
            <div className={`absolute inset-0 ${category?.color} opacity-20`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">{category?.emoji}</span>
            </div>
            {activity.featured && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-gradient-warm text-foreground border-0 shadow-soft">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Featured
                </Badge>
              </div>
            )}
            {activity.youtubeId && (
              <div className="absolute bottom-3 left-3">
                <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                  📹 Video Tutorial
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={`${category?.color} border-0 text-foreground text-xs`}>
                {category?.emoji} {category?.name}
              </Badge>
              <Badge className={`${difficultyColors[activity.difficulty]} border-0 text-xs`}>
                {activity.difficulty}
              </Badge>
            </div>

            <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {activity.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {activity.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{activity.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Ages {activity.ageRange}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
