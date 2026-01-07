import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a job seeker looking for your next opportunity or an employer seeking exceptional talent, we're here to help. Reach out today and let's start building your success story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Atlanta Office */}
              <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                <h3 className="font-bold text-foreground mb-3">Atlanta Office</h3>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>2000 Parkwood Circle SE, Suite 320<br />Atlanta, GA 30339</span>
                </div>
              </div>

              {/* Charlotte Office */}
              <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                <h3 className="font-bold text-foreground mb-3">Charlotte Office</h3>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>6230 Fairview Rd, Suite 220<br />Charlotte, NC 28210</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                <h3 className="font-bold text-foreground mb-3">Phone</h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+14705552048" className="hover:text-primary transition-colors">
                    +1 (470) 555-2048
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                <h3 className="font-bold text-foreground mb-3">Email</h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:info@hirepshereglobal.com" className="hover:text-primary transition-colors">
                    info@hirepshereglobal.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
              <h3 className="font-bold text-foreground mb-3">Office Hours</h3>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input placeholder="Your company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Country
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Area of Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="executive">Executive Search</SelectItem>
                      <SelectItem value="career">Career Opportunity</SelectItem>
                      <SelectItem value="general">General Enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
