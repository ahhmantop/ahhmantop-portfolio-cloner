import { SiReact, SiTypescript, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiAmazonwebservices, SiDocker, SiGit, SiGithub, SiFigma, SiExpress, SiDjango, SiLaravel, SiMysql, SiFirebase, SiKubernetes, SiJest, SiWebpack, SiVite, SiSass, SiHtml5, SiCss3, SiPhp, SiRedis } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Tools() {
  // All tech skills in one array for the scrolling animation
  const allSkills = [{
    name: "VS Code",
    icon: VscCode,
    color: "#007ACC"
  }, {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717"
  }, {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED"
  }, {
    name: "Python",
    icon: SiPython,
    color: "#3776AB"
  }, {
    name: "React",
    icon: SiReact,
    color: "#61DAFB"
  }, {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6"
  }, {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000"
  }, {
    name: "Vue.js",
    icon: SiVuedotjs,
    color: "#4FC08D"
  }, {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4"
  }, {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933"
  }, {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248"
  }, {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791"
  }, {
    name: "AWS",
    icon: SiAmazonwebservices,
    color: "#FF9900"
  }, {
    name: "Git",
    icon: SiGit,
    color: "#F05032"
  }, {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E"
  }, {
    name: "Express",
    icon: SiExpress,
    color: "#000000"
  }, {
    name: "Django",
    icon: SiDjango,
    color: "#092E20"
  }, {
    name: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20"
  }, {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1"
  }, {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28"
  }, {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5"
  }, {
    name: "Sass",
    icon: SiSass,
    color: "#CC6699"
  }, {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26"
  }, {
    name: "CSS3",
    icon: SiCss3,
    color: "#1572B6"
  }, {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4"
  }, {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D"
  }, {
    name: "Jest",
    icon: SiJest,
    color: "#C21325"
  }, {
    name: "Webpack",
    icon: SiWebpack,
    color: "#8DD6F9"
  }, {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF"
  }];

  // Duplicate the array for seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  // Programming skills with code examples
  const programmingSkills = {
    javascript: {
      name: "JavaScript",
      code: `// JavaScript
const arr = ["Daffa", "Kunnia", "Fatah"];

function greeting() {
  const name = arr.find((item) => item === "Daffa");
  return \`Hello, \${name}!\`;
}

console.log(greeting()); // Hello, Daffa!`
    },
    typescript: {
      name: "TypeScript", 
      code: `// TypeScript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Daffa",
  age: 25
};

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}`
    },
    python: {
      name: "Python",
      code: `# Python
arr = ["Daffa", "Kunnia", "Fatah"]

def greeting():
    name = next((item for item in arr if item == "Daffa"), None)
    return f"Hello, {name}!"

print(greeting())  # Hello, Daffa!`
    },
    php: {
      name: "PHP",
      code: `<?php
// PHP
$arr = ["Daffa", "Kunnia", "Fatah"];

function greeting() {
    global $arr;
    $name = array_search("Daffa", $arr) !== false ? "Daffa" : null;
    return "Hello, " . $name . "!";
}

echo greeting(); // Hello, Daffa!
?>`
    }
  };

  return <section id="tools" className="py-20 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-flow mb-4 glow-text">
            Tools & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life across the digital universe
          </p>
        </div>

        {/* Programming Skills Showcase */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Just a few of my skills using some programming languages that I've learned and mastered
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-black/20 border border-white/10">
                {Object.entries(programmingSkills).map(([key, skill]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="data-[state=active]:bg-white/10 data-[state=active]:text-foreground text-muted-foreground"
                  >
                    {skill.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(programmingSkills).map(([key, skill]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{skill.code}</code>
                    </pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Scrolling Tech Icons */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-slow">
            {duplicatedSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return <div key={index} className="flex-shrink-0 mx-4 md:mx-6 flex flex-col items-center justify-center group min-w-[80px] md:min-w-[96px]">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                    <IconComponent size={24} className="md:w-8 md:h-8 transition-all duration-300 group-hover:scale-110" style={{
                  color: skill.color
                }} />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 md:mt-3 text-center group-hover:text-foreground transition-colors duration-300 font-medium">
                    {skill.name}
                  </span>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}