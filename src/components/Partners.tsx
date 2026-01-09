const partners = [
  { name: "Fortune 500" },
  { name: "Forbes Global 2000" },
  { name: "FTSE 100" },
  { name: "S&P 500" },
  { name: "DAX 40" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-muted-foreground mb-10">
          Companies We Partner With:
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-8 py-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
            >
              <span className="text-lg font-bold text-foreground/80">
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
