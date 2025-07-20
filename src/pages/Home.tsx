import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="space-background text-white min-h-screen">
      <div className="stars"></div>
      <Navigation />
      <Hero />
      <Projects />
      <Tools />
      <Experience />
      <Contact />
      <footer className="py-8 px-6 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Alex Chen. Built with passion for code and design.</p>
        </div>
      </footer>
    </div>
  );
}