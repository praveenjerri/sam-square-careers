import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, UserCheck, Building, Clock, Shield, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Find top-tier executives and senior-level professionals for critical leadership positions.",
      features: ["C-Level Recruitment", "Board Positions", "Strategic Roles"]
    },
    {
      icon: UserCheck,
      title: "Permanent Placement",
      description: "Full-time hiring solutions across all industry sectors and experience levels.",
      features: ["Skill Assessment", "Cultural Fit", "Long-term Success"]
    },
    {
      icon: Building,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based and temporary workforce needs.",
      features: ["Short-term Projects", "Seasonal Staffing", "Skill-specific Roles"]
    },
    {
      icon: Clock,
      title: "Recruitment Process Outsourcing",
      description: "End-to-end recruitment solutions to streamline your hiring process.",
      features: ["Complete RPO", "Partial RPO", "Project RPO"]
    },
    {
      icon: Shield,
      title: "Background Verification",
      description: "Comprehensive background checks to ensure reliable and trustworthy hires.",
      features: ["Identity Verification", "Employment History", "Reference Checks"]
    },
    {
      icon: Star,
      title: "Talent Advisory",
      description: "Strategic guidance on talent acquisition, market insights, and hiring trends.",
      features: ["Market Analysis", "Compensation Benchmarking", "Hiring Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive staffing solutions designed to meet your unique business requirements 
            and help you build exceptional teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 border-border/50 hover:border-primary/20 hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;