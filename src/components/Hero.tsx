import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Tech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 tech-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          {/* Greeting */}
          <p className="text-xl md:text-2xl font-inter text-accent font-medium">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold">
            <span className="gradient-text">Ayra Raza</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-foreground">
            Computer Science Engineering Student
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about designing, creating, and innovation. Currently pursuing BTech CSE at 
            <span className="text-accent font-semibold"> Ramdeobaba University</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-white font-poppins font-semibold px-8 py-3 text-lg rounded-xl glow-accent transition-all duration-300"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-white font-poppins font-semibold px-8 py-3 text-lg rounded-xl transition-all duration-300"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <Button variant="ghost" size="icon" className="hover:text-accent transition-colors duration-200">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent transition-colors duration-200">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent transition-colors duration-200">
              <Mail size={24} />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce hover:text-accent transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};