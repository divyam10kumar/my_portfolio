import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Trophy } from "lucide-react";

const experiences = [
  {
    type: "leadership",
    title: "President",
    company: "E-CELL ABESEC",
    period: "Dec 2024 - Present",
    description: "Leading strategic planning, coordinating teams, and managing institutional-level entrepreneurship events while working closely with stakeholders.",
    icon: Users,
  },
  {
    type: "leadership",
    title: "Executive",
    company: "Salaah – The Mentor Community",
    period: "Oct 2024 - Present",
    description: "Managing cross-functional teams, optimizing resources, resolving conflicts, and supporting data-driven decision making.",
    icon: Users,
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    company: "ABES Engineering College, Ghaziabad",
    period: "2022 - 2026",
    description: "CGPA: 7.81 | Specializing in data analysis, programming, and database management.",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Intermediate (12th)",
    company: "Gurukul Kurukshetra, Haryana",
    period: "2021",
    description: "Percentage: 92.2% | Strong foundation in mathematics and computer science.",
    icon: GraduationCap,
  },
];

const achievements = [
  { label: "NEC Rank at IIT Bombay", value: "AIR 29" },
  { label: "12th Percentage", value: "92.2%" },
  { label: "10th Percentage", value: "95.2%" },
  { label: "Certifications", value: "4+" },
];

const certifications = [
  { name: "AWS Cloud Practitioner Essentials", link: "https://drive.google.com/file/d/1gLbvF7ADh4prz7tpJ1wfQU89nSTEFgU9/view?usp=sharing" },
  { name: "AI with Python – Coincent", link: "https://drive.google.com/file/d/1RZLV4Pm8YPgi3zhUOIGTyeFBWKNIUSK7/view?usp=sharing" },
  { name: "Data Analysis Job Simulation – Deloitte", link: "https://drive.google.com/file/d/1t8zHXDjNUFfJ3L8fzizNmvqMw2fBZisL/view?usp=sharing" },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                Experience & Education
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My journey so far
              </h2>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {achievements.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 text-center hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] transition-all"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <AnimatedSection
                key={exp.title + exp.company}
                delay={0.1 + index * 0.1}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-6" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} pl-8 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`glass-card p-6 inline-block ${
                        index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <exp.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-primary font-mono">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground/80">{exp.description}</p>
                    </motion.div>
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Certifications */}
          <AnimatedSection delay={0.4}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {certifications.map((cert) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 glass-card text-sm font-medium hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] transition-all cursor-pointer"
                  >
                    {cert.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Special Achievement */}
          <AnimatedSection delay={0.5}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 max-w-2xl mx-auto text-center"
            >
              <Trophy className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">National Achievement</h4>
              <p className="text-muted-foreground">
                Secured <span className="text-primary font-semibold">All India Rank 29</span> at 
                National Entrepreneurship Challenge (NEC) 2024, IIT Bombay
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
