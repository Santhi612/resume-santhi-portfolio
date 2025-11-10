import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Santhi Priya Medagam
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Results-driven Software Engineer with 4.5 years of experience in designing and
              deploying scalable cloud-native solutions using Java, Spring Boot, GCP, and .NET.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth"
                onClick={() => scrollToSection("#contact")}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#experience")}
              >
                View Work
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={profileImage}
                alt="Santhi Priya Medagam"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-elegant border-4 border-card"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => scrollToSection("#about")}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
