import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "HireSphere Global made my job search seamless. Within weeks, I landed a position that matched my skills perfectly. Their team is professional, supportive, and truly cares about candidates.",
    name: "Amina K.",
    role: "Marketing Coordinator",
  },
  {
    quote: "Exceptional experience from start to finish. The HR consultants guided me through every step of the hiring process with clarity and professionalism.",
    name: "Alex P.",
    role: "Software Developer",
  },
  {
    quote: "As an international job seeker, I was impressed by how smoothly everything went. The team helped me prepare for interviews and connected me with a great company abroad.",
    name: "Leila M.",
    role: "Project Manager",
  },
  {
    quote: "Our partnership with HireSphere Global helped us fill key roles faster than ever. Their understanding of our business needs was impressive.",
    name: "Priya S.",
    role: "HR Director",
  },
  {
    quote: "HireSphere Global delivered qualified, pre-screened candidates who perfectly fit our company culture. We'll definitely continue working with them.",
    name: "Carlos J.",
    role: "Operations Manager",
  },
  {
    quote: "Professional, reliable, and truly global. They helped me secure a remote role that matches my goals and skill set.",
    name: "Omar S.",
    role: "Data Analyst",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            🏆 What Our Clients and Candidates Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're proud to have earned the trust of professionals and businesses around the world. From nurses securing international placements to engineers and executives finding their perfect roles, HireSphere Global continues to connect talent with opportunity.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-card p-8 rounded-2xl shadow-card border border-border/50 animate-fade-in"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
