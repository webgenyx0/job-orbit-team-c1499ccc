import { Users, Building2, Globe2, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5M+",
    label: "Active Job Seekers",
    color: "text-primary",
  },
  {
    icon: Building2,
    value: "50K+",
    label: "Partner Companies",
    color: "text-secondary",
  },
  {
    icon: Globe2,
    value: "150+",
    label: "Countries Served",
    color: "text-brand-blue",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    color: "text-accent",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card shadow-soft mb-4 group-hover:shadow-glow transition-all duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl lg:text-5xl font-extrabold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm lg:text-base font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
