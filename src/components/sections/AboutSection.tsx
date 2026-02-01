import { AnimatedSection } from "@/components/AnimatedSection";
import { BarChart3, Database, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Building dashboards and extracting insights from complex datasets.",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Expertise in SQL, MySQL, and efficient data preprocessing.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Transforming raw data into actionable business insights.",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text */}
            <div>
              <AnimatedSection>
                <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                  About Me
                </span>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Aspiring Data Analyst with{" "}
                  <span className="gradient-text">passion</span>
                </h2>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm a B.Tech student at ABES Engineering College, Ghaziabad (2022-2026) 
                  with a strong foundation in data analysis and programming. My journey 
                  in tech started with curiosity about how data can drive decisions.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With hands-on experience in Python, SQL, Power BI, and Excel, I specialize 
                  in data cleaning, visualization, and dashboard development. Beyond 
                  academics, I lead as President of E-CELL ABESEC and serve as Executive 
                  at Salaah – The Mentor Community.
                </p>
              </AnimatedSection>
            </div>

            {/* Right column - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <AnimatedSection key={item.title} delay={0.2 + index * 0.1} direction="left">
                  <div className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
