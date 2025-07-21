import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiAmazon, 
  SiDocker, 
  SiGit, 
  SiGithub, 
  SiFigma,
  SiExpress,
  SiDjango,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiKubernetes,
  SiJest,
  SiWebpack,
  SiVite,
  SiSass,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiRedis
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function Tools() {
  // All tech skills in one array for the scrolling animation
  const allSkills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Sass", icon: SiSass, color: "#CC6699" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
    { name: "Vite", icon: SiVite, color: "#646CFF" }
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
                  className="flex-shrink-0 mx-6 flex flex-col items-center justify-center group"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                    <IconComponent 
                      size={32} 
                      className="transition-all duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-3 text-center group-hover:text-foreground transition-colors duration-300 font-medium">
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