import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/divyam10kumar", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                Get In Touch
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's connect
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Looking for internship opportunities or collaboration? I'm always open to discussing new projects and ideas.
              </p>
            </AnimatedSection>
          </div>

          {/* Contact Info - Centered */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:kumardivyam2020@gmail.com" className="text-foreground hover:text-primary transition-colors">
                          kumardivyam2020@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+919031874255" className="text-foreground hover:text-primary transition-colors">
                          +91-9031874255
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">Ghaziabad, Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links & CTA */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                    <div className="flex gap-4">
                      {socialLinks.map(({ icon: Icon, href, label }) => (
                        <motion.a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] transition-all"
                          aria-label={label}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* CTA Card */}
                  <motion.a
                    href="mailto:kumardivyam2020@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 group cursor-pointer block hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">Open to Opportunities</h4>
                        <p className="text-sm text-muted-foreground">Looking for Data Analyst internships</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
