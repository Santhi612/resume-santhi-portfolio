import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "santhipriya.medagam@example.com",
      href: "mailto:santhipriya.medagam@example.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vizag, India",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-1">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-8 gradient-card shadow-card text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out if you want to collaborate on a project, have a question, or
              just want to connect.
            </p>
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
