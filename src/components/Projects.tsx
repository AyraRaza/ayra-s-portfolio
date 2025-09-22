import { ExternalLink, Github, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring creative animations and a tech-inspired design system.",
      category: "Web Development",
      icon: Code,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      color: "text-electric"
    },
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration for seamless online shopping experience.",
      category: "Full Stack",
      icon: Code,
      technologies: ["Java", "Tailwind CSS", "MySQL", "Bootstrap"],
      status: "In Progress",
      color: "text-accent"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Projects & Work
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground font-inter mt-6 max-w-2xl mx-auto">
            A showcase of my creative and technical projects, demonstrating my passion for innovation and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="gradient-card p-8 rounded-2xl hover-lift group">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-background/50 rounded-xl">
                    <project.icon size={24} className={project.color} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                  project.status === "Completed" 
                    ? "bg-accent/20 text-accent" 
                    : "bg-electric/20 text-electric"
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-poppins font-semibold text-foreground mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-background/30 text-muted-foreground rounded-full text-sm font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground font-inter mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-accent hover:opacity-90 text-white font-poppins font-semibold px-8 py-3 text-lg rounded-xl glow-accent transition-all duration-300"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};