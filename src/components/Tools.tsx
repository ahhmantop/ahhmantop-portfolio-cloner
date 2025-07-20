import { 
  Code2, 
  FileCode, 
  Zap, 
  Palette, 
  Layers, 
  Server, 
  Globe, 
  Database, 
  Cloud, 
  Container, 
  GitBranch, 
  Github, 
  Code, 
  Figma, 
  TestTube,
  Package,
  Cpu
} from "lucide-react";

export default function Tools() {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "text-blue-flow",
      skills: [
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: FileCode },
        { name: "Next.js", icon: Zap },
        { name: "Vue.js", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Sass", icon: Palette },
        { name: "HTML5", icon: Code },
        { name: "CSS3", icon: Layers }
      ]
    },
    {
      title: "Backend Development", 
      color: "text-teal-flow",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Server },
        { name: "Python", icon: Code2 },
        { name: "Django", icon: Server },
        { name: "PHP", icon: Code2 },
        { name: "Laravel", icon: Server },
        { name: "REST APIs", icon: Globe },
        { name: "GraphQL", icon: Globe }
      ]
    },
    {
      title: "Database & Cloud",
      color: "text-purple-alien", 
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "Redis", icon: Database },
        { name: "AWS", icon: Cloud },
        { name: "Firebase", icon: Cloud },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Container }
      ]
    },
    {
      title: "Tools & Others",
      color: "text-green-alien",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: Github },
        { name: "VS Code", icon: Code },
        { name: "Figma", icon: Figma },
        { name: "Postman", icon: Globe },
        { name: "Jest", icon: TestTube },
        { name: "Webpack", icon: Package },
        { name: "Vite", icon: Zap }
      ]
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
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skillIndex}
                      className="group flex flex-col items-center justify-center p-4 bg-space-card/50 rounded-lg border border-border hover:border-blue-flow transition-all duration-300 hover:scale-105"
                      title={skill.name}
                    >
                      <IconComponent 
                        size={32} 
                        className="text-muted-foreground group-hover:text-blue-flow transition-colors duration-300" 
                      />
                      <span className="text-xs text-muted-foreground mt-2 text-center group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}