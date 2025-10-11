import { MessageCircle, Code, Users, DollarSign, Calendar, Shield, BarChart3, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import featuresImage from "@/assets/features-illustration.jpg";

const features = [
  {
    icon: MessageCircle,
    title: "NextChat",
    description: "Enterprise communication platform with real-time messaging, video conferencing, and collaborative workspaces for seamless faculty-student interaction."
  },
  {
    icon: Code,
    title: "NextCode",
    description: "Advanced coding platform featuring integrated IDE, automated assessment, plagiarism detection, and collaborative programming environments."
  },
  {
    icon: Users,
    title: "NextAttendance",
    description: "Intelligent attendance management with biometric integration, geolocation verification, and comprehensive analytics for institutional insights."
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    description: "Complete HR and payroll solution with automated calculations, compliance management, benefits tracking, and seamless financial integration."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered timetable optimization with resource allocation, conflict resolution, and dynamic scheduling for maximum operational efficiency."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security framework with multi-factor authentication, data encryption, audit trails, and regulatory compliance monitoring."
  }
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Increase student engagement by 60%",
  "Streamline administrative processes",
  "Ensure data security and compliance",
  "Scale efficiently with growing enrollment",
  "Access real-time analytics and insights"
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete University <span className="text-gradient">Digital Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Transform your institution with our comprehensive platform that digitizes every aspect 
            of university operations, from academic management to administrative efficiency.
          </p>
        </div>

        {/* Main content split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in">
            <div className="relative">
              <img 
                src={featuresImage} 
                alt="TechMecha Torque Platform Overview" 
                className="w-full rounded-2xl shadow-professional-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Why Leading Universities Choose TechMecha Torque</h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 text-lg shadow-professional">
              Explore All Benefits
            </Button>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 card-professional hover:shadow-professional-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10 animate-fade-up">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Transform Your University?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of institutions worldwide that have revolutionized their operations with TechMecha Torque.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;