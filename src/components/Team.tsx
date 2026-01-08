const teamMembers = [
  {
    name: "Victoria Hamilton",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop",
    bio: "Over 15 years in global talent acquisition, Victoria leads our strategic partnerships and executive recruitment across multiple industries.",
  },
  {
    name: "Catherine Reynolds",
    role: "Senior Executive Recruiter",
    image: "https://images.unsplash.com/photo-1560087637-bf797bc7a06a?w=400&h=400&fit=crop",
    bio: "Catherine bridges the gap between top employers and exceptional talent, specializing in workforce planning and client relationship management.",
  },
  {
    name: "Margaret Chen",
    role: "Global Talent Consultant",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    bio: "Margaret specializes in leadership recruitment across technology, finance, and energy sectors with a consultative, value-driven approach.",
  },
  {
    name: "Elizabeth Monroe",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=400&fit=crop",
    bio: "Elizabeth ensures operational excellence across all recruitment initiatives, managing process optimization and team coordination.",
  },
  {
    name: "Alexandra Brooks",
    role: "Head of Talent Strategy",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=400&fit=crop",
    bio: "Alexandra drives recruitment excellence across all sectors, managing candidate pipelines, analytics, and workforce planning initiatives.",
  },
  {
    name: "Stephanie Morrison",
    role: "Client Success Manager",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    bio: "Stephanie oversees enterprise client relationships, ensuring seamless talent solutions from initial consultation to successful placement.",
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
