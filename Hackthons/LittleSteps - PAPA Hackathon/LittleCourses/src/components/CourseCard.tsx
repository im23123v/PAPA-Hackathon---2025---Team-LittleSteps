import { motion } from 'framer-motion';
import { Course } from '@/data/courses';
import { useUserProgress } from '@/context/UserProgressContext';
import { Coins, Clock, CheckCircle2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const { isCourseCompleted } = useUserProgress();
  const completed = isCourseCompleted(course.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Link to={`/course/${course.id}`}>
        <div className={`relative overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-300 group-hover:shadow-lg ${completed ? 'ring-2 ring-success' : ''}`}>
          {/* Top color bar */}
          <div className={`h-2 ${course.color}`} />
          
          {/* Content */}
          <div className="p-5">
            {/* Header with emoji and badge */}
            <div className="mb-4 flex items-start justify-between">
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-4xl"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {course.thumbnailEmoji}
              </motion.div>
              
              {completed ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 rounded-full bg-success/20 px-2 py-1"
                >
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-xs font-bold text-success">Done!</span>
                </motion.div>
              ) : course.badge && (
                <div className="flex items-center gap-1 rounded-full bg-accent/20 px-2 py-1">
                  <span className="text-sm">{course.badge.emoji}</span>
                  <span className="text-xs font-semibold text-accent">Badge</span>
                </div>
              )}
            </div>

            {/* Title & Description */}
            <h3 className="mb-2 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
              {course.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs font-medium">{course.duration}</span>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  course.ageGroup === '5-10' 
                    ? 'bg-age-young-light text-age-young' 
                    : 'bg-age-teen-light text-age-teen'
                }`}>
                  {course.ageGroup}
                </span>
              </div>
              
              <motion.div 
                className="flex items-center gap-1 rounded-full gradient-coin px-2 py-1 shadow-sm"
                whileHover={{ scale: 1.1 }}
              >
                <Coins className="h-3 w-3" />
                <span className="text-xs font-bold">+{course.coinsReward}</span>
              </motion.div>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
