const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 italic">
          HireSphere Global
        </h2>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
          Your Global Partner in Talent Acquisition and Workforce Success
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Whether you're seeking your next career breakthrough or the perfect hire to drive your organization forward, HireSphere Global connects professionals and employers worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;
