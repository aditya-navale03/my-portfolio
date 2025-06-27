
import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('4cP8FRpZXfs8Chd_1');
      
      // Send email using EmailJS
      await emailjs.send(
        'service_lmhbjfk', // service ID
        'template_06obddd', // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aditya', // You can customize this
        }
      );
      
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss opportunities and build something amazing together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                {!isLoading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">aditya.navale@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Github className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <p className="text-gray-400">github.com/aditya-navale</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-gray-400">linkedin.com/in/aditya-navale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 rounded-xl p-8 border border-teal-500/20">
              <h3 className="text-xl font-semibold mb-4">Ready to collaborate?</h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Navale Aditya Sanjay. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
