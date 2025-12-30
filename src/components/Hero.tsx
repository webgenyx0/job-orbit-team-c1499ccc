import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      
      {/* Subtle Overlay - Light and covering full area */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-blue/70 via-primary/50 to-brand-blue/60" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted by 10,000+ companies worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Connect Talent with{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                Opportunity
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </span>{" "}
            Worldwide
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join millions of job seekers and employers on the world's most trusted recruiting platform. Your next career move starts here.
          </p>

          {/* Search Box */}
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Job Title Input */}
              <div className="flex-1 relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="pl-12 h-14 text-base border-border/50 focus:border-primary"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="City, state, or remote"
                  className="pl-12 h-14 text-base border-border/50 focus:border-primary"
                />
              </div>

              {/* Search Button */}
              <Button className="h-14 px-8 btn-gradient text-base">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border/50">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Remote Jobs", "Software Engineer", "Marketing", "Healthcare", "Finance"].map((term) => (
                <button
                  key={term}
                  className="text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="outline" className="bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/30 hover:text-primary-foreground">
              I'm Looking for a Job
            </Button>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              I'm Hiring Talent
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
