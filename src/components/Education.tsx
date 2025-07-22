import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Calendar, MapPin, Star } from "lucide-react";

export default function Education() {
  const [activeTab, setActiveTab] = useState("formal");

  const formalEducation = [
    {
      degree: "Bachelor of Computer Science",
      specialty: "Software Engineering",
      institution: "University of North Sumatra",
      location: "Medan, Indonesia",
      period: "2016 - 2020",
      gpa: "3.85/4.00",
      status: "Graduated",
      description: "Focused on software development, data structures, algorithms, and modern programming paradigms. Completed capstone project on full-stack web application development.",
      keySubjects: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering", "Mobile Programming"],
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "Best Capstone Project Award 2020",
        "Programming Competition 2nd Place"
      ]
    }
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      subtitle: "Intensive Bootcamp",
      institution: "Hacktiv8 Indonesia",
      location: "Jakarta, Indonesia",
      period: "2020",
      status: "Outstanding",
      grade: "Certified",
      description: "Intensive 12-week bootcamp covering modern web development technologies including React, Node.js, and cloud deployment. Built multiple real-world projects.",
      keySubjects: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "AWS Deployment"],
      achievements: [
        "Top 10% of cohort",
        "Successfully deployed 5 full-stack applications",
        "Mentored junior bootcamp students"
      ]
    },
    {
      title: "CCNA - Cisco Certified Network Associate",
      subtitle: "Networking Certification",
      institution: "Cisco Systems",
      location: "Online",
      period: "2023",
      status: "Certified",
      grade: "Pass",
      description: "Comprehensive certification covering network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
      keySubjects: ["Network Fundamentals", "Routing & Switching", "Network Security", "IP Services", "Network Automation", "Troubleshooting"],
      achievements: [
        "Validated networking skills and knowledge",
        "Demonstrated ability to install, configure, and troubleshoot networks",
        "Certified in industry-standard networking protocols"
      ]
    }
  ];

  const currentData = activeTab === "formal" ? formalEducation : certifications;

  return (
    <section id="education" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-flow mb-4 glow-text">
            Educational <span className="text-blue-flow">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path in computer science and web development
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12 slide-up">
          <div className="flex bg-space-card/50 rounded-lg p-2 border border-border">
            <Button
              variant={activeTab === "formal" ? "default" : "ghost"}
              onClick={() => setActiveTab("formal")}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "formal" 
                  ? "bg-blue-flow text-white shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Formal Education
            </Button>
            <Button
              variant={activeTab === "certifications" ? "default" : "ghost"}
              onClick={() => setActiveTab("certifications")}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "certifications" 
                  ? "bg-blue-flow text-white shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Award className="w-5 h-5 mr-2" />
              Certifications
            </Button>
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentData.map((item, index) => (
            <div 
              key={index}
              className="flowing-bg rounded-xl p-8 border border-border slide-up group hover:border-blue-flow transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    activeTab === "formal" ? "bg-blue-flow/20" : "bg-green-alien/20"
                  }`}>
                    {activeTab === "formal" ? (
                      <GraduationCap className="w-6 h-6 text-blue-flow" />
                    ) : (
                      <Award className="w-6 h-6 text-green-alien" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {item.degree || item.title}
                    </h3>
                    <p className="text-blue-flow font-medium">
                      {item.specialty || item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === "Graduated" || item.status === "Outstanding"
                      ? "bg-green-alien/20 text-green-alien" 
                      : "bg-blue-flow/20 text-blue-flow"
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-green-alien font-bold mt-1">
                    {item.gpa || item.grade}
                  </span>
                </div>
              </div>

              {/* Institution Info */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.institution}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Key Courses */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-foreground mb-3">Key Courses:</h5>
                <div className="flex flex-wrap gap-2">
                  {item.keySubjects.map((subject, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-space-card/50 border border-border rounded-lg text-xs text-muted-foreground"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h5 className="text-sm font-semibold text-foreground mb-3">Notable Achievements:</h5>
                <div className="space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 mr-2 text-yellow-400 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}