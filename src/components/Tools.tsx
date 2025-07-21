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
  // All tech skills in one array for the scrolling animation
  const allSkills = [
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: FileCode },
    { name: "Next.js", icon: Zap },
    { name: "Vue.js", icon: Code2 },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Code2 },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Container },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "VS Code", icon: Code },
    { name: "Figma", icon: Figma },
    { name: "Express", icon: Server },
    { name: "Django", icon: Server },
    { name: "Laravel", icon: Server },
    { name: "MySQL", icon: Database },
    { name: "Firebase", icon: Cloud },
    { name: "Kubernetes", icon: Container }
  ];

  // Duplicate the array for seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section id="tools" className="py-20 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-flow mb-4 glow-text">
            Tools & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life across the digital universe
          </p>
        </div>

        {/* Scrolling Tech Icons */}
        <div className="relative">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex animate-scroll-right">
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-8 flex flex-col items-center justify-center group"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-space-card/50 rounded-lg border border-border group-hover:border-blue-flow transition-all duration-300 group-hover:scale-110">
                    <IconComponent 
                      size={32} 
                      className="text-muted-foreground group-hover:text-blue-flow transition-colors duration-300" 
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 text-center group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}