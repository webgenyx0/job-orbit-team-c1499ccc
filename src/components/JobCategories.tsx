import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Technology", jobs: "125K+ jobs", icon: "💻" },
  { name: "Healthcare", jobs: "89K+ jobs", icon: "🏥" },
  { name: "Finance", jobs: "67K+ jobs", icon: "💰" },
  { name: "Marketing", jobs: "54K+ jobs", icon: "📈" },
  { name: "Engineering", jobs: "78K+ jobs", icon: "⚙️" },
  { name: "Education", jobs: "45K+ jobs", icon: "📚" },
  { name: "Sales", jobs: "92K+ jobs", icon: "🤝" },
  { name: "Design", jobs: "38K+ jobs", icon: "🎨" },
];

const JobCategories = () => {
  return (
    <section id="jobs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Explore Opportunities
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Browse Jobs by{" "}
              <span className="text-gradient-secondary">Category</span>
            </h2>
          </div>
          <Button variant="outline" className="group self-start lg:self-auto">
            View All Categories
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className="group p-6 rounded-2xl bg-card border border-border/50 text-left hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-4xl mb-4 block">{category.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">{category.jobs}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
