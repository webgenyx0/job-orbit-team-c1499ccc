const Marquee = () => {
  return (
    <section className="py-4 bg-primary overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-xl md:text-2xl font-bold text-primary-foreground mx-8">
            Get in touch with Us Today!
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
