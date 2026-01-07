const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            About Us
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At HireSphere Global, we believe the right people can transform organizations, and the right opportunities can transform lives.
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We are a global recruitment and workforce solutions firm helping employers attract, assess, and hire exceptional talent while guiding professionals toward meaningful career advancement.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Our partnerships extend to Fortune 500 companies and leading enterprises across energy, technology, finance, healthcare, and logistics sectors worldwide. We leverage trusted networks to help candidates access verified job openings, ensuring every opportunity we present is both credible and current.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower professionals and organizations by connecting talent to opportunity, with integrity, excellence, and global reach.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized recruitment partner known for shaping futures, inspiring growth, and driving workforce success across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
