import { CheckCircle } from "lucide-react";
import jobSeekersImage from "@/assets/job-seekers.png";
import teamworkImage from "@/assets/teamwork-2.png";

const WhatWeDo = () => {
  const jobSeekerBenefits = [
    "Get noticed by top international and regional recruiters",
    "Optimize your resume and LinkedIn profile for global standards",
    "Access exclusive job openings that aren't publicly advertised",
    "Receive personalized support from our career specialists",
  ];

  const employerBenefits = [
    "Permanent and contract staffing solutions",
    "Executive and senior-level search",
    "Employer branding support",
    "Recruitment process outsourcing (RPO)",
    "Workforce planning and consulting",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
          What We Do
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Job Seekers */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={jobSeekersImage}
                alt="Job seekers collaboration"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              For Job Seekers
            </h3>
            
            <p className="text-primary italic text-lg mb-6">
              "Step into global opportunities, where ambition meets possibility."
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At HireSphere Global, we connect passionate professionals with leading companies, including Fortune 500 and world-class organizations across multiple industries globally.
            </p>

            <ul className="space-y-3 mb-6">
              {jobSeekerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-foreground font-medium italic">
              "Your dream career isn't far — let's take the next step together."
            </p>
          </div>

          {/* For Employers */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={teamworkImage}
                alt="Employer partnerships"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              For Employers
            </h3>
            
            <p className="text-primary italic text-lg mb-6">
              "Partner with us to hire, build, and retain world-class talent."
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We understand that great companies are built by great people. That's why we partner with Fortune 500 leaders, high-growth startups, and multinational organizations to deliver top-tier recruitment and workforce solutions.
            </p>

            <ul className="space-y-3 mb-6">
              {employerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-foreground font-medium italic">
              "Let's help you find your next great hire."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
