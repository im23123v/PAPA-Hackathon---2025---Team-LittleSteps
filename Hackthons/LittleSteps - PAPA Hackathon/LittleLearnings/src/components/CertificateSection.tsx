import { Card } from "@/components/ui/card";
import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import certificateImage from "@/assets/certificate-sample.png";

const CertificateSection = () => {
  return (
    <section id="certificate" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-coral-light text-coral font-semibold text-sm mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Earn Certificates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrate progress with beautiful certificates that recognize your child's digital discipline achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card variant="certificate" className="relative group">
            {/* Decorative ribbon */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-sky px-6 py-2 rounded-full shadow-float">
                <Award className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-semibold text-sm">Sample Certificate</span>
              </div>
            </div>
            
            <div className="p-4 md:p-8">
              <img 
                src={certificateImage} 
                alt="LittleSteps Digital Discipline Certificate - Sample" 
                className="w-full rounded-2xl shadow-card group-hover:shadow-float transition-shadow duration-300"
              />
            </div>
            
            <div className="px-8 pb-8 text-center">
              <p className="text-muted-foreground mb-4">
                This sample certificate showcases the recognition children receive for maintaining healthy digital habits.
              </p>
              <Button variant="coral" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download Sample
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
