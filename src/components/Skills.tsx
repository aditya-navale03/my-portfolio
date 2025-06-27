
const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 90, color: "from-orange-500 to-red-500" },
        { name: "C++", level: 85, color: "from-blue-500 to-purple-500" },
        { name: "C", level: 80, color: "from-gray-500 to-gray-600" },
        { name: "Python", level: 75, color: "from-green-500 to-blue-500" },
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "Spring Boot", level: 85, color: "from-green-500 to-teal-500" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-pink-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "React", level: 70, color: "from-blue-500 to-cyan-500" },
      ]
    },
    {
      category: "Tools & Databases",
      items: [
        { name: "MySQL", level: 85, color: "from-blue-500 to-teal-500" },
        { name: "Git", level: 80, color: "from-orange-500 to-red-500" },
        { name: "IntelliJ IDEA", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "VS Code", level: 85, color: "from-blue-500 to-purple-500" },
      ]
    }
  ];

  return (
<section id="Skills" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Currently focused on mastering Java Full Stack Development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.category}</h3>
              
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-full px-6 py-3 border border-teal-500/30">
            <span className="text-teal-400 font-medium">🎯 Currently Learning:</span>
            <span className="text-white">Advanced Spring Boot & Microservices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
