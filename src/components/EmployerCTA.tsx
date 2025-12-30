import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, CheckCircle } from "lucide-react";

const EmployerCTA = () => {
  const benefits = [
    "Access 5M+ qualified candidates globally",
    "AI-powered matching for faster hiring",
    "Dedicated account management support",
    "Comprehensive analytics dashboard",
  ];

  return (
    <section id="employers" className="py-24 bg-gradient-to-br from-brand-deep-blue via-primary to-brand-blue text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              For Employers
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Find Top Talent for{" "}
              <span className="text-secondary">Your Team</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Connect with millions of qualified candidates worldwide. Our advanced matching technology and expert recruiting support help you build exceptional teams faster.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group">
                Post a Job
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Browse Talent
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">72%</div>
                  <div className="text-sm text-primary-foreground/70">Faster Hiring</div>
                </div>
                <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">3x</div>
                  <div className="text-sm text-primary-foreground/70">More Applicants</div>
                </div>
              </div>
              
              {/* Feature Highlight */}
              <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground mb-1">
                    Talent Pool Access
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    Search our database of 5M+ verified candidates
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerCTA;
