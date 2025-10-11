import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-background">TechMecha</div>
                <div className="text-sm text-primary-light font-semibold -mt-1">Torque</div>
              </div>
            </Link>
            <p className="text-background/80 mb-8 max-w-md leading-relaxed font-medium">
              Leading the digital transformation of higher education through innovative technology solutions. 
              Empowering universities worldwide with comprehensive, integrated platforms for modern learning.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-all duration-300 group">
                <Linkedin className="w-6 h-6 text-background group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-all duration-300 group">
                <Twitter className="w-6 h-6 text-background group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-all duration-300 group">
                <Github className="w-6 h-6 text-background group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-background">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors font-medium">NextChat Platform</a></li>
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors font-medium">NextCode IDE</a></li>
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors font-medium">NextAttendance</a></li>
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors font-medium">Payroll Management</a></li>
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors font-medium">Smart Scheduling</a></li>
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors font-medium">Security & Compliance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-background">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/founder" className="text-background/70 hover:text-background transition-colors font-medium">Leadership</Link></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-colors font-medium">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Case Studies</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary-light flex-shrink-0" />
              <div>
                <div className="text-sm text-background/70 mb-1">Email</div>
                <a href="mailto:combolt93@gmail.com" className="text-background hover:text-primary-light transition-colors font-semibold">
                  combolt93@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary-light flex-shrink-0" />
              <div>
                <div className="text-sm text-background/70 mb-1">Phone</div>
                <a href="tel:+911234567890" className="text-background hover:text-primary-light transition-colors font-semibold">
                  +91 (123) 456-7890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary-light flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-background/70 mb-1">Headquarters</div>
                <div className="text-background font-medium">
                  Hyderabad, Telangana<br />
                  India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm font-medium">
            © 2024 TechMecha Torque. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors font-medium">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors font-medium">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;