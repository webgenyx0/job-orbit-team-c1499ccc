import oliviaBennett from "@/assets/team/olivia-bennett.png";
import mariaGonzalez from "@/assets/team/maria-gonzalez.png";
import elizabethWilson from "@/assets/team/elizabeth-wilson.png";
import nicoleAnderson from "@/assets/team/nicole-anderson.png";
import briannaCollins from "@/assets/team/brianna-collins.png";
import lindaPeterson from "@/assets/team/linda-peterson.png";

const teamMembers = [
  {
    name: "Olivia Bennett",
    role: "Managing Partner",
    image: oliviaBennett,
    bio: "Over 15 years in global talent acquisition, Olivia leads our strategic partnerships and executive recruitment across multiple industries.",
  },
  {
    name: "Maria Gonzalez",
    role: "Senior Executive Recruiter",
    image: mariaGonzalez,
    bio: "Maria bridges the gap between top employers and exceptional talent, specializing in workforce planning and client relationship management.",
  },
  {
    name: "Elizabeth Wilson",
    role: "Global Talent Consultant",
    image: elizabethWilson,
    bio: "Elizabeth specializes in leadership recruitment across technology, finance, and energy sectors with a consultative, value-driven approach.",
  },
  {
    name: "Nicole Anderson",
    role: "Director of Operations",
    image: nicoleAnderson,
    bio: "Nicole ensures operational excellence across all recruitment initiatives, managing process optimization and team coordination.",
  },
  {
    name: "Brianna Collins",
    role: "Head of Talent Strategy",
    image: briannaCollins,
    bio: "Brianna drives recruitment excellence across all sectors, managing candidate pipelines, analytics, and workforce planning initiatives.",
  },
  {
    name: "Linda Peterson",
    role: "Client Success Manager",
    image: lindaPeterson,
    bio: "Linda oversees enterprise client relationships, ensuring seamless talent solutions from initial consultation to successful placement.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet the Team Behind HireSphere Global
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our strength lies in our people. Our recruitment specialists, career strategists, and industry consultants work together to connect exceptional talent with world-class organizations globally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-border/30 shadow-lg mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
