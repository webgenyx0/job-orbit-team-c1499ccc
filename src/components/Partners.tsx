const partners = [
  { name: "Fortune 500", color: "bg-primary" },
  { name: "Forbes Global 2000", color: "bg-secondary" },
  { name: "FTSE 100", color: "bg-accent" },
  { name: "S&P 500", color: "bg-brand-blue" },
  { name: "DAX 40", color: "bg-primary" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-muted-foreground mb-10">
          Companies We Partner With:
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-6 py-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="text-lg font-bold text-foreground/70">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
