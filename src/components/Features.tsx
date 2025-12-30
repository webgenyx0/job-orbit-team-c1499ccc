import { FileSearch, Zap, Bell, DollarSign, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Smart Job Matching",
    description: "Our AI-powered system matches you with jobs that fit your skills, experience, and career goals perfectly.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Zap,
    title: "Quick Apply",
    description: "Apply to multiple positions with a single click. Your profile does the work, so you save time.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified immediately when new jobs matching your criteria are posted. Never miss an opportunity.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: DollarSign,
    title: "Salary Insights",
    description: "Access comprehensive salary data to negotiate confidently and understand your market value.",
    color: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Shield,
    title: "Verified Employers",
    description: "Every company on our platform is verified to ensure safe and legitimate job opportunities.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HeartHandshake,
    title: "Career Support",
    description: "Get personalized guidance from our expert recruiting team to accelerate your career growth.",
    color: "bg-secondary/10 text-secondary",
  },
];

const Features = () => {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're searching for your dream job or building your dream team, we provide the tools and support to make it happen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
