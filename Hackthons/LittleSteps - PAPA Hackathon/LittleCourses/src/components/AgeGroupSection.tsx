import { motion } from 'framer-motion';
import { getCoursesByAgeGroup } from '@/data/courses';
import CourseCard from './CourseCard';
import { Sparkles, Rocket } from 'lucide-react';

interface AgeGroupSectionProps {
  ageGroup: '5-10' | '10-15';
  title: string;
  description: string;
}

const AgeGroupSection = ({ ageGroup, title, description }: AgeGroupSectionProps) => {
  const courses = getCoursesByAgeGroup(ageGroup);
  const isYoung = ageGroup === '5-10';

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <motion.div 
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 ${
              isYoung ? 'bg-age-young-light text-age-young' : 'bg-age-teen-light text-age-teen'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {isYoung ? <Sparkles className="h-4 w-4" /> : <Rocket className="h-4 w-4" />}
            <span className="font-bold text-sm">Ages {ageGroup}</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroupSection;
