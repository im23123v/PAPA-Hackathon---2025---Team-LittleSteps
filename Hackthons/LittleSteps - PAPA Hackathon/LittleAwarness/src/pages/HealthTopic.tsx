import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, ExternalLink, BookOpen, Gamepad2, FileText, Lightbulb, Star, Heart, Eye, Salad, Droplets, Egg, Moon, Activity, LucideIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTopicBySlug, healthTopics } from "@/data/healthTopics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const iconMap: Record<string, LucideIcon> = {
  Eye,
  Salad,
  Droplets,
  Egg,
  Moon,
  Activity,
  Heart,
};

const HealthTopic = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopicBySlug(slug) : undefined;
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; videoId: string } | null>(null);

  if (!topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Topic Not Found</h1>
          <Link to="/">
            <Button variant="hero">Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[topic.icon] || Heart;

  const resourceTypeIcons = {
    article: BookOpen,
    game: Gamepad2,
    worksheet: FileText,
  };

  // Get related topics (other health topics)
  const relatedTopics = healthTopics.filter(t => t.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-health/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-health/20 animate-float" />
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/#health" className="inline-flex items-center gap-2 text-muted-foreground hover:text-health transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Health & Body
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-3xl bg-health flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-health/20 text-health text-sm font-medium mb-3">
                <Heart className="w-3 h-3" />
                Health & Body
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-black mb-4">{topic.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{topic.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-health" />
                  What You'll Learn
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {topic.content.intro}
                </p>
              </div>

              {/* Fun Facts */}
              <div className="bg-gradient-to-br from-health/10 to-primary/5 rounded-3xl p-6 md:p-8 border border-health/20">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-health fill-health" />
                  Amazing Facts!
                </h2>
                <ul className="space-y-4">
                  {topic.content.facts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-health text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-foreground pt-1">{fact}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  Helpful Tips
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {topic.content.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-health text-xl">✓</span>
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Activity */}
              <div className="bg-gradient-to-r from-accent/20 to-primary/10 rounded-3xl p-6 md:p-8 border border-accent/30">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Fun Activity
                </h2>
                <p className="text-foreground leading-relaxed">{topic.content.funActivity}</p>
              </div>

              {/* YouTube Videos */}
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold flex items-center gap-3">
                  <Play className="w-6 h-6 text-health" />
                  Watch & Learn
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topic.youtubeVideos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVideo(video)}
                      className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-health hover:shadow-lg transition-all duration-300 text-left"
                    >
                      <div className="aspect-video relative bg-muted">
                        <img
                          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-health text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="w-6 h-6 fill-current ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-health transition-colors line-clamp-2">{video.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">Click to watch</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Resources */}
              <div className="bg-card rounded-3xl p-6 border border-border sticky top-24">
                <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-health" />
                  Useful Resources
                </h3>
                <div className="space-y-3">
                  {topic.resources.map((resource, index) => {
                    const ResourceIcon = resourceTypeIcons[resource.type];
                    return (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-health/10 transition-colors group"
                      >
                        <ResourceIcon className="w-5 h-5 text-health" />
                        <span className="text-sm font-medium group-hover:text-health transition-colors">{resource.title}</span>
                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-health" />
                      </a>
                    );
                  })}
                </div>

                {/* Related Topics */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-lg font-display font-bold mb-4">Explore More</h3>
                  <div className="space-y-2">
                    {relatedTopics.map((relatedTopic) => {
                      const RelatedIcon = iconMap[relatedTopic.icon] || Heart;
                      return (
                        <Link
                          key={relatedTopic.slug}
                          to={`/health/${relatedTopic.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-health/10 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-health/10 flex items-center justify-center">
                            <RelatedIcon className="w-5 h-5 text-health" />
                          </div>
                          <span className="text-sm font-medium group-hover:text-health transition-colors">{relatedTopic.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="font-display text-xl">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            {selectedVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default HealthTopic;
