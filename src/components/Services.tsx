import { Users, Search, GraduationCap, Settings } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Recruitment",
    description: "End-to-end talent acquisition services connecting top candidates with leading organizations.",
  },
  {
    icon: Search,
    title: "Executive Search",
    description: "Specialized headhunting for senior leadership and C-suite positions across industries.",
  },
  {
    icon: GraduationCap,
    title: "Career Coaching",
    description: "Personalized coaching to elevate your career trajectory and professional development.",
  },
  {
    icon: Settings,
    title: "Workforce Consulting",
    description: "Strategic workforce planning and organizational development solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive recruitment and workforce solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
