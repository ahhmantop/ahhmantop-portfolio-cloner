import { Home, Code, Wrench, Briefcase, Mail } from "lucide-react";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-bg/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="nav-icon text-blue-flow text-2xl hover:scale-110 transition-all duration-300"
            title="Home"
          >
            <Home size={24} />
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="nav-icon text-blue-flow text-2xl hover:scale-110 transition-all duration-300"
            title="Projects"
          >
            <Code size={24} />
          </button>
          <button
            onClick={() => scrollToSection('tools')}
            className="nav-icon text-blue-flow text-2xl hover:scale-110 transition-all duration-300"
            title="Tools"
          >
            <Wrench size={24} />
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="nav-icon text-blue-flow text-2xl hover:scale-110 transition-all duration-300"
            title="Experience"
          >
            <Briefcase size={24} />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav-icon text-blue-flow text-2xl hover:scale-110 transition-all duration-300"
            title="Contact"
          >
            <Mail size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}