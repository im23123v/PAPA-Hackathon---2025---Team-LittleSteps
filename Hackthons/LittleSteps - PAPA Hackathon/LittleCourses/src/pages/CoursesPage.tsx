import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { getCoursesByAgeGroup } from '@/data/courses';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const { ageGroup } = useParams<{ ageGroup: string }>();
  const validAgeGroup = ageGroup === '5-10' || ageGroup === '10-15' ? ageGroup : '5-10';
  const courses = getCoursesByAgeGroup(validAgeGroup);
  const isYoung = validAgeGroup === '5-10';

  return (
    <>
      <Helmet>
        <title>{`Courses for Ages ${validAgeGroup} | LittleCourses`}</title>
        <meta 
          name="description" 
          content={`Explore educational courses for kids aged ${validAgeGroup}. Learn through fun videos and earn CourseCoins and badges!`} 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <motion.div 
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 mb-6 ${
                  isYoung ? 'bg-age-young text-primary-foreground' : 'bg-age-teen text-primary-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {isYoung ? <Sparkles className="h-5 w-5" /> : <Rocket className="h-5 w-5" />}
                <span className="font-bold text-lg">Ages {validAgeGroup}</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                {isYoung ? 'Adventures for Young Explorers' : 'Level Up Your Skills'}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {isYoung 
                  ? 'Fun and colorful courses designed for our youngest learners!'
                  : 'Challenging courses for growing minds. Start coding and master new skills!'
                }
              </p>
            </motion.div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CoursesPage;
