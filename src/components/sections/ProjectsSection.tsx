import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, BarChart3, Database } from "lucide-react";

const projects = [
  {
    title: "Bike Sales Dashboard",
    description: "Built an interactive Excel dashboard to analyze bike sales data, customer demographics, and purchasing patterns using pivot tables.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Excel", "Pivot Tables", "Data Visualization", "Dashboard"],
    icon: BarChart3,
    details: "Created dynamic pivot tables and charts to visualize sales trends, regional performance, and customer segmentation for business insights.",
    year: "2025",
    featured: true,
    link: "https://github.com/divyam10kumar/Bike-Sales-DashBoard",
  },
  {
    title: "Layoffs Data Cleaning & Preprocessing",
    description: "Cleaned and standardized a real-world layoffs dataset using MySQL by handling duplicates, null values, and inconsistent formats.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["MySQL", "SQL", "Data Cleaning", "CTEs"],
    icon: Database,
    details: "Applied joins, CTEs, window functions, and row-number logic to prepare an analysis-ready dataset for reporting and trend analysis.",
    year: "2025",
    featured: true,
    link: "https://github.com/divyam10kumar/Data-Cleaning-Project",
  },
    {
    title: "Social Media Analytics Dashboard",
    description:  "Designed an interactive Power BI dashboard to analyze social media performance using DAX measures and calculated columns for actionable insights.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&h=600&fit=crop",
    tags: ["Power BI", "DAX", "Data Visualization", "Dashboarding"],
    icon: BarChart3,
    details: "Built dynamic KPIs, engagement metrics, and trend analysis using DAX functions, slicers, and visual interactions to support data-driven decision-making.",
    year: "2024",
    featured: true,
    link: "https://www.linkedin.com/posts/divyam-kumar-here_mentorship-gratitude-dataanalytics-activity-7224087481757974530-BBc7",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                Featured Work
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Projects I've built
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real-world data analysis projects showcasing my expertise in dashboard development and data preprocessing.
              </p>
            </AnimatedSection>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={0.1 + index * 0.1}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="glass-card overflow-hidden group h-full block hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-sm text-primary">
                      <project.icon className="w-6 h-6" />
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {project.year}
                    </div>

                    {/* GitHub icon overlay */}
                    <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 mb-4">
                      {project.details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
