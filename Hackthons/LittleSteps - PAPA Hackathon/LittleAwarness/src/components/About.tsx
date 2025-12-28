import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower every child with the knowledge and awareness they need to live a healthy, safe, and responsible life."
    },
    {
      icon: Heart,
      title: "Child-First Approach",
      description: "All our content is designed with children in mind - fun, engaging, and age-appropriate explanations."
    },
    {
      icon: Lightbulb,
      title: "Practical Learning",
      description: "We focus on actionable tips that kids can apply in their daily lives, not just theory."
    },
    {
      icon: Users,
      title: "For Families",
      description: "Parents and teachers can use our resources to guide meaningful conversations with children."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Why <span className="text-primary">LittleAwareness</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            In today's fast-paced world, children face challenges that didn't exist a generation ago. 
            From digital safety to environmental consciousness, we believe every child deserves 
            to be equipped with the awareness and skills to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group p-8 rounded-3xl bg-background border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
