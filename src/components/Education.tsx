import { GraduationCap, Award, Calendar } from "lucide-react";

export const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Ramdeobaba University",
      duration: "2025 - 2028",
      status: "Current (2nd Year)",
      description: "Pursuing BTech with focus on software development, algorithms, and emerging technologies.",
      highlight: "Active Student"
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Anjuman Polytechnic",
      duration: "2022 - 2025",
      status: "Completed",
      description: "Comprehensive foundation in computer science fundamentals, programming, and system design.",
      highlight: "3rd Topper in CSE Department"
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground font-inter mt-6 max-w-2xl mx-auto">
            My academic journey in Computer Science Engineering, building a strong foundation for innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-accent rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                <div className="w-full md:w-5/12 mb-6 md:mb-0">
                  <div className="gradient-card p-8 rounded-2xl hover-lift">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/20 rounded-xl">
                        <GraduationCap size={32} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-inter font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-muted-foreground" />
                        <span className="text-muted-foreground font-inter">{edu.duration}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-inter font-medium ${
                        edu.status === "Current (2nd Year)" 
                          ? "bg-electric/20 text-electric" 
                          : "bg-accent/20 text-accent"
                      }`}>
                        {edu.status}
                      </div>
                    </div>

                    <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-accent" />
                      <span className="text-accent font-inter font-semibold">
                        {edu.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-glow"></div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};