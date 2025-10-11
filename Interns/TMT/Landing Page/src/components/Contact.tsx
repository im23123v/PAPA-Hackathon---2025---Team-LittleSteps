import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (actual Supabase integration needed)
    setTimeout(() => {
      toast({
        title: "Request Submitted Successfully",
        description: "Our team will contact you within 24 hours to discuss your requirements.",
      });
      setIsSubmitting(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Discuss Your <span className="text-gradient">Digital Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Connect with our experts to explore how TechMecha Torque can revolutionize 
            your university's operations and enhance the educational experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 card-professional shadow-professional-xl animate-slide-in">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">Get Started Today</CardTitle>
                <p className="text-muted-foreground font-medium">
                  Fill out the form below and our team will reach out to schedule a personalized consultation.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        required 
                        className="border-2 focus:border-primary transition-colors h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        required 
                        className="border-2 focus:border-primary transition-colors h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">Business Email *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      required 
                      className="border-2 focus:border-primary transition-colors h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="university" className="text-sm font-semibold text-foreground">Institution Name *</Label>
                      <Input 
                        id="university" 
                        name="university"
                        required 
                        className="border-2 focus:border-primary transition-colors h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-semibold text-foreground">Your Role *</Label>
                      <Input 
                        id="role" 
                        name="role"
                        placeholder="e.g., CTO, Dean, Director" 
                        required
                        className="border-2 focus:border-primary transition-colors h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      className="border-2 focus:border-primary transition-colors h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">Project Requirements *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      required 
                      placeholder="Tell us about your current challenges and how we can help transform your institution..."
                      className="border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 font-bold py-4 text-lg group shadow-professional transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting Request..."
                    ) : (
                      <>
                        Submit Request
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 card-professional shadow-professional">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Email Communication</h3>
                    <p className="text-muted-foreground mb-3 font-medium">Direct contact with our team</p>
                    <a href="mailto:combolt93@gmail.com" className="text-primary hover:text-primary/80 font-semibold text-lg">
                      combolt93@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 card-professional shadow-professional">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Phone Consultation</h3>
                    <p className="text-muted-foreground mb-3 font-medium">Monday - Friday, 9 AM - 6 PM IST</p>
                    <a href="tel:+911234567890" className="text-primary hover:text-primary/80 font-semibold text-lg">
                      +91 (123) 456-7890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 card-professional shadow-professional">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Office Location</h3>
                    <p className="text-muted-foreground font-medium">
                      TechMecha Torque Headquarters<br />
                      Innovation District<br />
                      Hyderabad, Telangana 500081<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response time guarantee */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 text-center border-2 border-accent/20">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Response Guarantee</h3>
              <p className="text-muted-foreground font-medium mb-4">
                We respond to all inquiries within 4 business hours with a detailed consultation plan.
              </p>
              <div className="text-2xl font-bold text-accent">&lt; 4 Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;