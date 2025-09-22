import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  GitBranch,
  Cpu,
  Layers,
  Zap,
  Brain
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "C"],
      color: "text-electric"
    },
    {
      title: "Database & Backend",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Firebase", "SQL"],
      color: "text-tech-orange"
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      skills: ["Git", "GitHub", "VS Code"],
      color: "text-electric"
    }
  ];

  const softSkills = [
    { name: "Communication", level: 95 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 88 },
    { name: "Creative Thinking", level: 92 },
    { name: "Leadership", level: 85 },
    { name: "Time Management", level: 87 }
  ];

  return (
    <section id="skills" className="section-padding tech-pattern">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground font-inter mt-6 max-w-2xl mx-auto">
            A comprehensive skill set spanning technical expertise and creative innovation
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-poppins font-bold text-center mb-12 text-foreground">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="gradient-card p-6 rounded-2xl hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-background/50 rounded-xl">
                    <category.icon size={24} className={category.color} />
                  </div>
                  <h4 className="font-poppins font-semibold text-foreground">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-background/30 text-muted-foreground rounded-full text-sm font-inter hover:bg-accent/20 hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-poppins font-bold text-center mb-12 text-foreground">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-inter font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-accent font-inter font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="h-3 bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};