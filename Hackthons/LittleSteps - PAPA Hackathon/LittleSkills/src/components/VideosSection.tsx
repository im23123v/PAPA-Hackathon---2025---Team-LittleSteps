import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Learn Python Programming for Kids - Fun Introduction",
    youtubeId: "eWRfhZUzrAc",
    duration: "12:30",
    category: "Programming",
    ageGroup: "10-15"
  },
  {
    title: "Creative Drawing Techniques for Young Artists",
    youtubeId: "7TFpW-uZflc",
    duration: "8:45",
    category: "Creativity",
    ageGroup: "5-9"
  },
  {
    title: "Internet Safety for Kids - Stay Safe Online",
    youtubeId: "yiKeLOKc1tw",
    duration: "6:20",
    category: "Digital Safety",
    ageGroup: "5-15"
  },
  {
    title: "Problem Solving Skills - Think Like a Programmer",
    youtubeId: "YgzpqlF54lo",
    duration: "15:00",
    category: "Logic",
    ageGroup: "10-15"
  },
  {
    title: "Money Management for Kids - Saving & Spending",
    youtubeId: "Ydw9Fs5xp2Y",
    duration: "10:15",
    category: "Life Skills",
    ageGroup: "8-15"
  },
  {
    title: "Public Speaking for Kids - Be a Confident Speaker",
    youtubeId: "C_K9W_SIJ6I",
    duration: "9:30",
    category: "Communication",
    ageGroup: "8-15"
  }
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Play className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Video Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-fredoka mb-4">
            Learn with Videos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch engaging video lessons curated for different skills and age groups. 
            Learn at your own pace with fun, interactive content!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((video) => (
            <VideoCard key={video.youtubeId} {...video} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
