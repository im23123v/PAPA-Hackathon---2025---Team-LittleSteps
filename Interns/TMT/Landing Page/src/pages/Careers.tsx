import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Users, TrendingUp, Heart, Code, Sparkles, Mail, ArrowLeft, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const internshipRoles = [
  {
    title: "Frontend Development Intern",
    department: "Engineering",
    type: "Internship",
    duration: "3-6 months",
    location: "Remote/Hybrid",
    description: "Join our frontend team to build beautiful, responsive user interfaces using React, TypeScript, and modern design systems.",
    requirements: [
      "Strong knowledge of React and JavaScript/TypeScript",
      "Understanding of responsive design and CSS",
      "Passion for clean, maintainable code",
      "Currently pursuing or recently completed CS degree"
    ]
  },
  {
    title: "Backend Development Intern",
    department: "Engineering",
    type: "Internship",
    duration: "3-6 months",
    location: "Remote/Hybrid",
    description: "Help build scalable backend systems, APIs, and database architectures that power university operations.",
    requirements: [
      "Knowledge of Node.js, Python, or similar",
      "Understanding of databases and APIs",
      "Interest in cloud platforms (AWS, Azure, GCP)",
      "Problem-solving mindset"
    ]
  },
  {
    title: "Product Design Intern",
    department: "Design",
    type: "Internship",
    duration: "3-6 months",
    location: "Remote/Hybrid",
    description: "Create intuitive user experiences and beautiful interfaces for educational technology products used by thousands.",
    requirements: [
      "Experience with Figma or similar design tools",
      "Understanding of UX/UI principles",
      "Portfolio showcasing design projects",
      "Collaborative mindset"
    ]
  },
  {
    title: "Marketing & Content Intern",
    department: "Marketing",
    type: "Internship",
    duration: "3-6 months",
    location: "Remote/Hybrid",
    description: "Help create compelling content, manage social media, and develop marketing strategies for our EdTech platform.",
    requirements: [
      "Excellent written and verbal communication",
      "Understanding of digital marketing",
      "Creative thinking and content creation skills",
      "Experience with social media platforms"
    ]
  },
  {
    title: "Business Development Intern",
    department: "Sales",
    type: "Internship",
    duration: "3-6 months",
    location: "Remote/Hybrid",
    description: "Support our growth by researching markets, generating leads, and helping universities adopt our solutions.",
    requirements: [
      "Strong communication and presentation skills",
      "Interest in EdTech and sales",
      "Research and analytical abilities",
      "Self-motivated and target-driven"
    ]
  }
];

const benefits = [
  {
    icon: Code,
    title: "Real-World Projects",
    description: "Work on actual features and products that impact thousands of users"
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Learn from experienced professionals and get personalized guidance"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "High performers are considered for full-time positions"
  },
  {
    icon: Heart,
    title: "Flexible Schedule",
    description: "Balance learning and work with flexible hours"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group mb-8 animate-fade-up"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="text-center mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/90 to-accent backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">We're Hiring Interns!</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Join the <span className="text-gradient">Future</span> of EdTech
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                Launch your career with TechMecha Torque. Gain hands-on experience building 
                products that transform education for millions of students worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Intern With Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We invest in your growth and provide real opportunities to make an impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 card-professional text-center group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Open Internship Positions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect role to start your journey with us
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {internshipRoles.map((role, index) => (
                <Card key={index} className="border-0 card-professional group animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-foreground">{role.title}</h3>
                          <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                            <Briefcase className="w-3 h-3" />
                            {role.type}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {role.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {role.location}
                          </span>
                          <span className="font-semibold text-foreground">{role.department}</span>
                        </div>
                        
                        <p className="text-foreground/80 mb-4 leading-relaxed">{role.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2">What we're looking for:</h4>
                          <ul className="space-y-2">
                            {role.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="lg:ml-6">
                        <Button 
                          className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 w-full lg:w-auto group-hover:scale-105 transition-transform"
                          onClick={() => window.location.href = 'mailto:team@techmechatorque.com?subject=Application for ' + role.title}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto border-0 card-professional shadow-professional-xl bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-up">
              <CardContent className="p-12 text-center">
                <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Send your resume and portfolio to our team. We review applications on a rolling 
                  basis and respond within 5 business days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 text-lg"
                    onClick={() => window.location.href = 'mailto:team@techmechatorque.com?subject=Internship Application'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    team@techmechatorque.com
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    or connect with us on social media
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
