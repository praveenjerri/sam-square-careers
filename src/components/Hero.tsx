import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import samSquareLogo from "@/assets/sam-square-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={samSquareLogo} 
          alt="Sam Square Staffing Logo" 
          className="w-full h-full object-contain bg-gradient-to-r from-primary/20 to-primary-glow/30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Premier
            <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Staffing Partner
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Connecting exceptional talent with outstanding opportunities. 
            Sam Square Staffing delivers comprehensive recruitment solutions 
            tailored to your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-elegant"
            >
              Find Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Explore Opportunities
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-white/80">Successful Placements</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;