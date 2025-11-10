import { Code2, Cloud, Database, Zap } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in Java, Spring Boot, C#, ASP.NET, and modern web technologies",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Specialized in Google Cloud Platform (GCP) and AWS cloud solutions",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Proficient in Big Query, Spanner, Firestore, and data migration",
    },
    {
      icon: Zap,
      title: "Microservices",
      description: "Experienced in Kubernetes, Apache Beam, and scalable architectures",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 gradient-card shadow-card">
            <p className="text-lg text-card-foreground leading-relaxed">
              Highly motivated and results-driven Software Engineer with 4.5 years of experience in
              designing, developing, maintaining, and deploying scalable and robust cloud-native
              solutions. Proven expertise in Java (Spring Boot), GCP, and .NET (C#), with a strong
              focus on data migration, real-time data processing (Apache Dataflow/Beam), and
              microservices architecture (Kubernetes/GKE). Experienced in leveraging AI-powered
              development tools (GitHub Copilot, Gemini Code Assist) to enhance code quality and
              accelerate delivery. Goal-oriented team player with strong communication and
              collaboration skills.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth hover:scale-105"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
