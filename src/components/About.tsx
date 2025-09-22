import { Code, Palette, Lightbulb, MessageCircle } from "lucide-react";
import profileGirl from "@/assets/profile-girl-hijab.jpg";

export const About = () => {
  const passions = [
    {
      icon: Code,
      title: "Coding",
      description: "Building efficient and innovative solutions"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring new technologies and creative approaches"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Collaborating effectively and sharing ideas clearly"
    }
  ];

  return (
    <section id="about" className="section-padding tech-pattern">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl gradient-card p-1">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <img 
                  src={profileGirl} 
                  alt="Ayra Raza - Computer Science Engineering Student" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-tech rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg font-inter text-foreground leading-relaxed">
              I'm Ayra Raza, a passionate Computer Science Engineering student currently in my second year at 
              <span className="text-accent font-semibold"> Ramdeobaba University</span>. Previously, I completed my 
              Diploma in CSE from <span className="text-accent font-semibold">Anjuman Polytechnic</span>, where I 
              achieved the position of <span className="text-accent font-semibold">third topper</span> in the CSE department.
            </p>

            <p className="text-lg font-inter text-muted-foreground leading-relaxed">
              My journey in technology is driven by a deep passion for design, creation, and innovation. I believe 
              in the power of combining technical expertise with creative thinking to build solutions that not only 
              work efficiently but also provide exceptional user experiences.
            </p>

            {/* Passion Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {passions.map((passion, index) => (
                <div key={index} className="p-4 rounded-xl gradient-card hover-lift">
                  <passion.icon size={32} className="text-accent mb-2" />
                  <h3 className="font-poppins font-semibold text-foreground mb-1">
                    {passion.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    {passion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};