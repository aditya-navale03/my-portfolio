
import { Book, User, Code } from 'lucide-react';

const About = () => {
  return (
<section id="about" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey and background
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <User className="text-teal-400" size={24} />
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm Aditya, a final-year Bachelor of Computer Science student with a passion for full-stack development. 
                I love building practical apps that help simplify everyday life. I'm constantly learning and working on exciting new ideas.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">What I Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I specialize in full-stack Java development, creating end-to-end solutions that are both functional and user-friendly. 
                My focus is on building applications that solve real-world problems and make a positive impact.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Book className="text-teal-400" size={24} />
                <h3 className="text-xl font-semibold">Educational Background</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white">Bachelor of Computer Science</h4>
                    <p className="text-gray-400">Final Year | Expected Graduation 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white">12th Grade</h4>
                    <p className="text-gray-400">Shramik College</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white">10th Grade</h4>
                    <p className="text-gray-400">Amrutvahini Model School, Sangamner</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-xl p-6 text-center border border-teal-500/30">
                <div className="text-2xl font-bold text-teal-400 mb-2">3+</div>
                <div className="text-gray-300 text-sm">Years Learning</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-6 text-center border border-orange-500/30">
                <div className="text-2xl font-bold text-orange-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
