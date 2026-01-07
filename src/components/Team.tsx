const teamMembers = [
  {
    name: "Victoria Ashford",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "With over 20 years in global talent acquisition, Victoria leads our strategic vision and drives innovation across all business verticals.",
  },
  {
    name: "Marcus Chen",
    role: "Senior Executive Recruiter",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Marcus bridges the gap between Fortune 500 companies and exceptional C-suite talent, specializing in executive search and leadership placement.",
  },
  {
    name: "Sophia Reynolds",
    role: "Global Talent Director",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    bio: "Sophia specializes in international recruitment across technology, finance, and healthcare sectors with a consultative, results-driven approach.",
  },
  {
    name: "David Thompson",
    role: "Director of Client Partnerships",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "David oversees enterprise client relationships, ensuring seamless talent solutions from initial consultation to successful placement.",
  },
  {
    name: "Rachel Martinez",
    role: "Head of Talent Strategy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Rachel drives recruitment excellence across all sectors, managing candidate pipelines, analytics, and workforce planning initiatives.",
  },
  {
    name: "James Mitchell",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "James ensures operational excellence across all recruitment initiatives, overseeing process optimization and compliance standards.",
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
