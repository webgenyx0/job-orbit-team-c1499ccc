import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    "For Job Seekers": [
      "Browse Jobs",
      "Career Advice",
      "Salary Tools",
      "Resume Builder",
      "Job Alerts",
    ],
    "For Employers": [
      "Post a Job",
      "Talent Search",
      "Pricing Plans",
      "Recruiting Solutions",
      "Employer Resources",
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Press",
      "Contact Us",
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Accessibility",
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-background/70">
                Get the latest job opportunities and career insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 w-full lg:w-80"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-background/20">
                <img src={logo} alt="HireSphere Global" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-lg font-bold text-primary">Hire</span>
                <span className="text-lg font-bold text-secondary">Sphere</span>
                <span className="block text-xs text-background/60 -mt-1">Global</span>
              </div>
            </a>
            <p className="text-background/70 mb-6 max-w-xs">
              Connecting exceptional talent with outstanding opportunities worldwide since 2020.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@hiresphere.global" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                hello@hiresphere.global
              </a>
              <a href="tel:+1-800-555-0123" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                +1-800-555-0123
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Global Center, San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-background mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/60 hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © 2024 HireSphere Global. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
