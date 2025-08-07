import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import samSquareLogo from "@/assets/sam-square-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src={samSquareLogo} 
              alt="Sam Square Staffing Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Sam Square Staffing</h1>
            <p className="text-sm text-muted-foreground">Pvt Limited</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">7672025252</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground">info@samsquarestaffing.com</span>
            </div>
          </div>
          <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;