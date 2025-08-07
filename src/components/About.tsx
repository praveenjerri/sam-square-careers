import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const achievements = [
    "Industry-leading expertise in recruitment",
    "Proven track record of successful placements",
    "Deep understanding of market dynamics",
    "Comprehensive screening and assessment processes",
    "Long-term partnerships with clients",
    "Commitment to quality and excellence"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Sam Square Staffing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Located in the heart of Secunderabad, Sam Square Staffing Pvt Limited has been 
              a trusted partner in connecting exceptional talent with outstanding opportunities. 
              Our commitment to excellence and deep industry knowledge sets us apart.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that every organization has unique needs, and we tailor our approach 
              to deliver personalized solutions that drive success for both employers and job seekers.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Our Process
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Professional business handshake" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-elegant border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-elegant border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;