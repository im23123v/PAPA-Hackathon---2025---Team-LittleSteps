import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, CheckCircle2, Package, Play } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { activities, categories } from '@/data/activities';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const difficultyColors = {
  easy: 'bg-mint text-foreground',
  medium: 'bg-sunshine text-foreground',
  hard: 'bg-coral text-foreground',
};

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="font-display text-2xl font-bold mb-4">Activity Not Found</h1>
            <Link to="/activities">
              <Button>Back to Activities</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.id === activity.category);

  return (
    <>
      <Helmet>
        <title>{activity.title} - LittleWeekends</title>
        <meta name="description" content={activity.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className={`py-8 md:py-12 ${category?.color}/20`}>
            <div className="container mx-auto px-4">
              <Link to="/activities">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Activities
                </Button>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="outline" className={`${category?.color} border-0 text-foreground`}>
                    {category?.emoji} {category?.name}
                  </Badge>
                  <Badge className={`${difficultyColors[activity.difficulty]} border-0`}>
                    {activity.difficulty}
                  </Badge>
                  {activity.youtubeId && (
                    <Badge variant="secondary" className="bg-card">
                      <Play className="w-3 h-3 mr-1" /> Video Tutorial
                    </Badge>
                  )}
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {activity.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {activity.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Ages {activity.ageRange}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Content */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Video */}
                  {activity.youtubeId && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Video Tutorial
                      </h2>
                      <YouTubeEmbed videoId={activity.youtubeId} title={activity.title} />
                    </motion.div>
                  )}

                  {/* Steps */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      Step-by-Step Instructions
                    </h2>
                    <div className="space-y-4">
                      {activity.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          className="flex gap-4 bg-card rounded-xl p-4 shadow-soft border border-border"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1 flex items-center">
                            <p className="text-foreground">{step}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="sticky top-24"
                  >
                    {/* Materials */}
                    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                      <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Package className="w-5 h-5 text-primary" />
                        Materials Needed
                      </h3>
                      <ul className="space-y-3">
                        {activity.materials.map((material, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                            <span className="text-muted-foreground">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips */}
                    <div className="bg-gradient-to-br from-sunshine/30 to-peach/30 rounded-2xl p-6 mt-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        💡 Pro Tip
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Take your time with each step. It's not about perfection – it's about having fun and learning together!
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ActivityDetail;
