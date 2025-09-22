import { Trophy, Award, Star, Medal, Target, Users } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "3rd Topper in CSE Department",
      organization: "Anjuman Polytechnic",
      description: "Achieved third position in the Computer Science Engineering department during diploma studies",
      year: "2025",
      color: "text-tech-orange"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      organization: "Ramdeobaba University",
      description: "Consistent academic performance in BTech CSE program with focus on innovation and practical learning",
      year: "2025",
      color: "text-accent"
    }
  ];

  return (
    <section id="achievements" className="section-padding tech-pattern">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground font-inter mt-6 max-w-2xl mx-auto">
            Milestones that reflect my dedication to excellence and continuous learning in technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="gradient-card p-6 rounded-2xl hover-lift group"
            >
              {/* Achievement Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-background/50 rounded-2xl mb-4 mx-auto group-hover:bg-background/70 transition-colors duration-300">
                <achievement.icon size={32} className={achievement.color} />
              </div>

              {/* Achievement Details */}
              <div className="text-center space-y-3">
                <h3 className="text-lg font-poppins font-bold text-foreground">
                  {achievement.title}
                </h3>
                
                <div className="flex items-center justify-center gap-2">
                  <span className="text-accent font-inter font-semibold">
                    {achievement.organization}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground font-inter">
                    {achievement.year}
                  </span>
                </div>

                <p className="text-muted-foreground font-inter leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years of Study", value: "4+" },
            { label: "Projects Completed", value: "2+" },
            { label: "Technical Skills", value: "15+" },
            { label: "Awards Won", value: "2+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-poppins font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};