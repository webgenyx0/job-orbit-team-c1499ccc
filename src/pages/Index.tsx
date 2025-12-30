import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import JobCategories from "@/components/JobCategories";
import EmployerCTA from "@/components/EmployerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <JobCategories />
        <Features />
        <EmployerCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
