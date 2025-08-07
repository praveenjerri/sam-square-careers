import medplusLogo from "@/assets/medplus-logo.png";
import elasticrunLogo from "@/assets/elasticrun-logo.png";
import nothingLogo from "@/assets/nothing-logo.png";

const Clients = () => {
  const clients = [
    {
      name: "Medplus",
      logo: medplusLogo,
      description: "Leading pharmacy and healthcare chain"
    },
    {
      name: "Elastic Run",
      logo: elasticrunLogo,
      description: "B2B commerce and logistics platform"
    },
    {
      name: "Nothing Phone",
      logo: nothingLogo,
      description: "Innovative consumer technology brand"
    }
  ];

  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to partner with some of the most innovative companies, 
            helping them build exceptional teams and achieve their business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-8 text-center hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-subtle rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {client.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {client.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Successful Placements</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Corporate Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;