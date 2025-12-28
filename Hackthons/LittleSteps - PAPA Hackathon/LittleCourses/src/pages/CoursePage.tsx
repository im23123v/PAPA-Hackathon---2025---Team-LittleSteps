import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoPlayer from '@/components/VideoPlayer';
import { getCourseById, getCoursesByAgeGroup } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Coins, BookOpen, ChevronRight } from 'lucide-react';
import CourseCard from '@/components/CourseCard';

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId || '');

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const relatedCourses = getCoursesByAgeGroup(course.ageGroup)
    .filter(c => c.id !== course.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${course.title} | LittleCourses`}</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to={`/courses/${course.ageGroup}`} className="hover:text-primary transition-colors">
                Ages {course.ageGroup}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{course.title}</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Course Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl ${course.color} text-5xl shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      {course.thumbnailEmoji}
                    </motion.div>
                    <div>
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold mb-2 ${
                        course.ageGroup === '5-10' 
                          ? 'bg-age-young-light text-age-young' 
                          : 'bg-age-teen-light text-age-teen'
                      }`}>
                        Ages {course.ageGroup} • {course.category}
                      </span>
                      <h1 className="text-3xl md:text-4xl font-black text-foreground">
                        {course.title}
                      </h1>
                    </div>
                  </div>

                  {/* Video Player */}
                  <VideoPlayer course={course} />

                  {/* Course Description */}
                  <div className="mt-8 p-6 rounded-2xl bg-card shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      About This Course
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="sticky top-24"
                >
                  {/* Course Info Card */}
                  <div className="rounded-2xl bg-card shadow-md p-6 mb-6">
                    <h3 className="font-bold text-lg mb-4">Course Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Duration
                        </span>
                        <span className="font-bold">{course.duration}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Coins className="h-4 w-4" />
                          Reward
                        </span>
                        <span className="font-bold text-secondary">+{course.coinsReward} Coins</span>
                      </div>

                      {course.badge && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground mb-2">Badge Reward:</p>
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/10">
                            <span className="text-3xl">{course.badge.emoji}</span>
                            <div>
                              <p className="font-bold text-accent">{course.badge.name}</p>
                              <p className="text-xs text-muted-foreground">{course.badge.description}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Related Courses */}
                  {relatedCourses.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg mb-4">More Courses</h3>
                      <div className="space-y-4">
                        {relatedCourses.map((relatedCourse, index) => (
                          <Link key={relatedCourse.id} to={`/course/${relatedCourse.id}`}>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 p-3 rounded-xl bg-card hover:bg-muted transition-colors"
                            >
                              <span className="text-2xl">{relatedCourse.thumbnailEmoji}</span>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm truncate">{relatedCourse.title}</p>
                                <p className="text-xs text-muted-foreground">{relatedCourse.duration}</p>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CoursePage;
