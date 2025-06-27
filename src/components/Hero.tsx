import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import profileImg from '../assets/portfoliophoto.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,rgb(36,0,255,0.05)_0deg,rgb(0,135,255,0.05)_67.5deg,rgb(108,39,157,0.05)_198.75deg,rgb(24,121,78,0.05)_251.25deg,rgb(54,83,233,0.05)_301.88deg,rgb(105,117,142,0.05)_360deg)]"></div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-orange-500/10 border border-teal-500/20 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hey There,
                <br />
                I'm <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-orange-400 animate-pulse">
                    Navale Aditya
                  </span>
                  <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-400 animate-pulse" />
                </span>
              </h1>

              <div className="mb-4">
                <p className="text-xl sm:text-2xl text-gray-300 font-medium mb-2">
                  Aspiring Java Full Stack Developer
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                Creating unique apps that make life easier through innovative technology and thoughtful design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={scrollToProjects}
                  className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-teal-500/25 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>

                <button
                  onClick={scrollToContact}
                  className="group relative border-2 border-orange-500/50 text-orange-400 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm bg-orange-500/5 hover:bg-orange-500 shadow-lg hover:shadow-orange-500/25 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center space-x-2">
                    <span>Contact Me</span>
                  </span>
                </button>

                <button className="group text-gray-400 hover:text-teal-400 px-4 py-4 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm bg-gray-800/20 hover:bg-gray-800/40 border border-gray-700/50 hover:border-teal-500/50 flex items-center space-x-2">
                  <Download size={18} />
                  <span>Resume</span>
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="#" className="group p-3 rounded-xl bg-gray-800/30 border border-gray-700/50 text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/50 transform hover:-translate-y-1">
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="group p-3 rounded-xl bg-gray-800/30 border border-gray-700/50 text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/50 transform hover:-translate-y-1">
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="group p-3 rounded-xl bg-gray-800/30 border border-gray-700/50 text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/50 transform hover:-translate-y-1">
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Updated Profile Picture */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-orange-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-4 border-transparent bg-clip-padding backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  
                  {/* 👇 Improved Image Here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                   <img
                    src={profileImg}
                    alt="Aditya's Profile"
                    className="w-60 h-60 lg:w-72 lg:h-72 rounded-full object-cover object-top border-4 border-gray-700 shadow-xl group-hover:scale-105 transition-transform duration-300 z-10"
                  />

                  </div>

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-1 rounded-full bg-gray-800"></div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg backdrop-blur-sm border border-teal-400/30 animate-bounce">
                <span className="flex items-center gap-1">
                  <Sparkles size={14} />
                  10+ Projects
                </span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg backdrop-blur-sm border border-orange-400/30 animate-bounce delay-500">
                <span className="flex items-center gap-1">
                  🎓 Final Year BCS
                </span>
              </div>

              <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-lg backdrop-blur-sm border border-purple-400/30 animate-pulse">
                Java Expert
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
