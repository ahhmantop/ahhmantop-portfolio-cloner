import { Badge } from "@/components/ui/badge";

export default function Tools() {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "text-blue-flow",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Sass", "HTML5", "CSS3"]
    },
    {
      title: "Backend Development", 
      color: "text-teal-flow",
      skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel", "REST APIs", "GraphQL"]
    },
    {
      title: "Database & Cloud",
      color: "text-purple-alien", 
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "AWS", "Firebase", "Docker", "Kubernetes"]
    },
    {
      title: "Tools & Others",
      color: "text-green-alien",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Jest", "Webpack", "Vite"]
    }
  ];

  return (
    <section id="tools" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-flow mb-4 glow-text">
            Tech Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life across the digital universe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="flowing-bg rounded-lg p-6 border border-border slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-space-card text-foreground border border-border hover:border-blue-flow transition-colors duration-300 text-sm py-2 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}