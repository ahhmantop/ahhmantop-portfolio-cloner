import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

export default function Hero() {
  const spaceshipSvg = (
    <svg
      className="pixel-spaceship floating"
      width="90"
      height="60"
      viewBox="0 0 90 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spaceship body */}
      <rect x="15" y="22" width="50" height="16" fill="#4A90E2"/>
      <rect x="20" y="18" width="40" height="6" fill="#5BA3F5"/>
      <rect x="20" y="36" width="40" height="6" fill="#5BA3F5"/>

      {/* Spaceship nose */}
      <rect x="65" y="26" width="12" height="8" fill="#6BB6FF"/>
      <rect x="77" y="28" width="6" height="4" fill="#7FC7FF"/>

      {/* Engine flames */}
      <rect x="9" y="25" width="6" height="4" fill="#FF6B6B"/>
      <rect x="3" y="27" width="6" height="6" fill="#FF8E8E"/>
      <rect x="0" y="29" width="3" height="2" fill="#FFAAAA"/>

      {/* Windows */}
      <rect x="35" y="24" width="4" height="4" fill="#87CEEB"/>
      <rect x="42" y="24" width="4" height="4" fill="#87CEEB"/>
      <rect x="49" y="24" width="4" height="4" fill="#87CEEB"/>
      <rect x="35" y="32" width="4" height="4" fill="#87CEEB"/>
      <rect x="42" y="32" width="4" height="4" fill="#87CEEB"/>
      <rect x="49" y="32" width="4" height="4" fill="#87CEEB"/>

      {/* Details */}
      <rect x="25" y="31" width="25" height="2" fill="#2E5BBA"/>
      <rect x="25" y="27" width="25" height="2" fill="#2E5BBA"/>
    </svg>
  );

  const alienShipSvg = (
    <svg
      className="pixel-spaceship floating-slow"
      width="70"
      height="50"
      viewBox="0 0 70 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* UFO dome */}
      <rect x="20" y="10" width="30" height="15" fill="#8B5CF6"/>
      <rect x="15" y="15" width="40" height="10" fill="#A855F7"/>

      {/* UFO base */}
      <rect x="10" y="25" width="50" height="8" fill="#7C3AED"/>
      <rect x="5" y="27" width="60" height="4" fill="#6D28D9"/>

      {/* UFO lights */}
      <rect x="15" y="33" width="3" height="3" fill="#00FF88"/>
      <rect x="25" y="33" width="3" height="3" fill="#00FF88"/>
      <rect x="35" y="33" width="3" height="3" fill="#00FF88"/>
      <rect x="45" y="33" width="3" height="3" fill="#00FF88"/>
      <rect x="55" y="33" width="3" height="3" fill="#00FF88"/>

      {/* UFO windows */}
      <rect x="30" y="12" width="10" height="8" fill="#DDA0DD"/>
    </svg>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Animated spaceships */}
        <div className="absolute -top-20 -left-20 opacity-70">
          {spaceshipSvg}
        </div>
        <div className="absolute -top-10 -right-16 opacity-60">
          {alienShipSvg}
        </div>

        <div className="space-y-8 fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-blue-flow glow-text">
              Alex Chen
            </h1>
            <div className="text-2xl md:text-3xl text-foreground typewriter">
              Software Engineer & Developer
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Recent Computer Science graduate passionate about creating innovative web applications 
              and exploring the vast universe of technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-blue-flow hover:bg-blue-flow/80 text-white border-blue-flow group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="border-blue-flow text-blue-flow hover:bg-blue-flow/10">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-blue-flow text-blue-flow hover:bg-blue-flow/10">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}