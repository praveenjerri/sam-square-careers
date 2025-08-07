import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sam Square Staffing</h3>
                <p className="text-primary-foreground/80">Pvt Limited</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your premier staffing partner, connecting exceptional talent with outstanding 
              opportunities across various industry sectors.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>H NO - 602, 6th floor</p>
                  <p>Swapnalok Complex, S D Road</p>
                  <p>Near Parade Ground Metro</p>
                  <p>Secunderabad, Telangana 500003</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:7672025252" className="text-sm hover:text-accent transition-colors">
                  +91 7672025252
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@samsquarestaffing.com" className="text-sm hover:text-accent transition-colors">
                  info@samsquarestaffing.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Executive Search</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Permanent Placement</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contract Staffing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">RPO Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Background Verification</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Talent Advisory</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Sam Square Staffing Pvt Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;