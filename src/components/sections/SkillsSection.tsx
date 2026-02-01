import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 85, category: "Language" },
  { name: "SQL", level: 90, category: "Database" },
  { name: "Power BI", level: 88, category: "Analytics" },
  { name: "Excel", level: 92, category: "Analytics" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Data Cleaning", level: 88, category: "Concept" },
  { name: "EDA", level: 82, category: "Concept" },
  { name: "Data Visualization", level: 85, category: "Concept" },
];

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "📊" },
  { name: "Power BI", icon: "📈" },
  { name: "Excel", icon: "📗" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Jupyter", icon: "📓" },
  { name: "VS Code", icon: "💻" },
  { name: "GitHub", icon: "🐙" },
  { name: "DAX", icon: "📐" },
  { name: "Power Query", icon: "🔄" },
  { name: "AWS", icon: "☁️" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                Skills & Expertise
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technologies I work with
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A curated selection of tools and technologies I use for data analysis and development.
              </p>
            </AnimatedSection>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
            {techStack.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={0.1 + index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 text-center group hover:border-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] transition-all cursor-default"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={0.2 + index * 0.05}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
