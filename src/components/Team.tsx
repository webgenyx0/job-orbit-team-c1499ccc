const teamMembers = [
  {
    name: "Emma Clarke",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "With over 15 years in global talent acquisition, Emma leads our strategic partnerships and executive recruitment across multiple industries.",
  },
  {
    name: "Jessica Miller",
    role: "Senior Executive Recruiter",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Jessica bridges the gap between top employers and exceptional talent, specializing in workforce planning and client relationship management.",
  },
  {
    name: "Ashley Turner",
    role: "Global Talent Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Ashley specializes in leadership recruitment across technology, finance, and energy sectors with a consultative, value-driven approach.",
  },
  {
    name: "Emily Carter",
    role: "Director of Client Services",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Emily oversees the candidate journey from initial consultation to placement, ensuring professionals are well-positioned for global opportunities.",
  },
  {
    name: "Isabella Duarte",
    role: "Talent Acquisition Specialist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "Isabella drives recruitment excellence across all project verticals, managing candidate pipelines and performance analytics.",
  },
  {
    name: "Brittany Parker",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bio: "Brittany ensures operational efficiency across all recruitment initiatives, managing internal systems and compliance standards.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
