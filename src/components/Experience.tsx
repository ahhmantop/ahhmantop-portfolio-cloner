import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance resulting in 30% faster load times",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"]
    },
    {
      title: "Computer Science Student",
      company: "University of California",
      location: "Berkeley, CA", 
      period: "Sep 2020 - May 2024",
      description: [
        "Bachelor of Science in Computer Science with 3.8 GPA",
        "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
        "Led development team for capstone project - a collaborative learning platform",
        "Active member of CS student association and coding bootcamp mentor"
      ],
      technologies: ["Java", "Python", "C++", "JavaScript", "SQL"]
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      location: "Remote",
      period: "Jan 2023 - Present",
      description: [
        "Built custom websites for local businesses and startups",
        "Delivered 8+ projects with 100% client satisfaction rate",
        "Specialized in responsive design and modern web technologies",
        "Managed full project lifecycle from planning to deployment"
      ],
      technologies: ["React", "Next.js", "WordPress", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-flow mb-4 glow-text">
            Mission Log
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through the tech galaxy, from student explorer to professional developer
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-space-card border-border hover:border-blue-flow transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-blue-flow font-semibold text-lg mb-2">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <span className="text-blue-flow text-lg leading-none">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-muted text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}