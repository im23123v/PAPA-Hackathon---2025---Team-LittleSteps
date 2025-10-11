import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Quote, Award, Users, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import founderPhoto from "@/assets/founder-photo.png";

const Founder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="mb-8 animate-fade-up">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group mb-8"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Meet Our <span className="text-gradient">Founder</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                  Visionary leadership driving innovation in educational technology and 
                  transforming the future of higher education worldwide.
                </p>
              </div>
            </div>

            <Card className="max-w-6xl mx-auto border-0 card-professional shadow-professional-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="text-center lg:text-left">
                    <div className="mb-8">
                      <Quote className="w-16 h-16 text-primary mb-6" />
                      <blockquote className="text-2xl md:text-3xl font-semibold italic text-foreground/90 leading-relaxed">
                        "Technology should democratize education, not complicate it. Our mission is to make 
                        advanced learning tools accessible to every university, empowering institutions to 
                        focus on what matters most - educating the next generation."
                      </blockquote>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-3 text-foreground">Jaya Chandra Reddy</h2>
                    <p className="text-2xl text-primary mb-2 font-semibold">Founder & CEO</p>
                    <p className="text-lg text-muted-foreground mb-8 font-medium">M.Tech, Computer Science • Serial Entrepreneur</p>
                    
                    <div className="flex gap-6 justify-center lg:justify-start mb-8">
                      <a href="#" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                        <Linkedin className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="#" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                        <Twitter className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="mailto:combolt93@gmail.com" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                        <Mail className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                    
                    <Button size="lg" className="bg-primary hover:bg-primary-dark font-semibold px-8 py-4">
                      Schedule Meeting
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="w-96 h-96 mx-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                      <img 
                        src={founderPhoto} 
                        alt="Jaya Chandra Reddy - Founder & CEO" 
                        className="w-full h-full object-cover rounded-full shadow-professional-xl border-4 border-white/20 relative z-10"
                      />
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Background & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Background & Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                With over a decade of experience in educational technology and software engineering, 
                Jaya has dedicated his career to solving complex challenges in higher education. 
                His deep understanding of both technology and academia drives TechMecha Torque's 
                innovative approach to university digitalization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-0 card-professional shadow-professional animate-slide-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Educational Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                    "Education is the foundation of human progress. By leveraging technology thoughtfully, 
                    we can create learning environments that are more inclusive, efficient, and effective. 
                    Every feature we build is designed with the student experience at its core."
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">Student-centric design approach</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">Technology as an enabler, not a barrier</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">Continuous innovation and improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 card-professional shadow-professional animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Technical Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                    Jaya's technical background spans full-stack development, cloud architecture, 
                    and AI/ML integration. His hands-on approach ensures that TechMecha Torque 
                    delivers not just functional, but exceptional user experiences.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">15+ years in software development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">Expert in scalable cloud solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">AI/ML integration specialist</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Key Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                Jaya's leadership has driven remarkable growth and innovation in the EdTech space, 
                earning recognition from industry leaders and educational institutions worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 card-professional shadow-professional text-center group hover:shadow-professional-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up">
                <CardContent className="p-8">
                  <Award className="w-16 h-16 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-muted-foreground font-semibold mb-3">Products Launched</div>
                  <p className="text-sm text-muted-foreground">Innovative solutions across multiple domains</p>
                </CardContent>
              </Card>

              <Card className="border-0 card-professional shadow-professional text-center group hover:shadow-professional-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <Users className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-foreground mb-2">1M+</div>
                  <div className="text-muted-foreground font-semibold mb-3">Students Impacted</div>
                  <p className="text-sm text-muted-foreground">Across 500+ educational institutions</p>
                </CardContent>
              </Card>

              <Card className="border-0 card-professional shadow-professional text-center group hover:shadow-professional-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <TrendingUp className="w-16 h-16 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-foreground mb-2">300%</div>
                  <div className="text-muted-foreground font-semibold mb-3">Growth Rate</div>
                  <p className="text-sm text-muted-foreground">Year-over-year platform adoption</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10 animate-fade-up">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Connect with Jaya</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
                Interested in discussing your institution's digital transformation? 
                Schedule a personal consultation with our founder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4">
                  View Speaking Events
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Founder;