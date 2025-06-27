
import { Github, ArrowRight, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Lost and Found Management System",
      description: "A comprehensive system for managing lost and found items with user authentication, item tracking, and notification features.",
      tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
      image: "🔍",
      status: "completed"
    },
    {
      title: "Voice Controlled Cooking Assistant",
      description: "An innovative voice-command-based cooking helper app that guides users through recipes with hands-free interaction.",
      tech: ["Java", "Speech Recognition", "SQLite", "Android"],
      image: "🍳",
      status: "completed"
    },
    {
      title: "Educational App for Classes",
      description: "A student-teacher interaction platform with assignment management, grade tracking, and communication features.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      image: "📚",
      status: "completed"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      image: "🛒",
      status: "coming-soon"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and see how I bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-teal-500/20 to-orange-500/20 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>
                
                {project.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.status === 'completed' ? (
                    <>
                      <button className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors">
                        <Github size={18} />
                        <span>View Code</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors">
                        <Code size={18} />
                        <span>Live Demo</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Code size={18} />
                      <span>In Development</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <span>More projects coming soon...</span>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
