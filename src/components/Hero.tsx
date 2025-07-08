import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-75 animate-pulse"></div>
              <img 
                src="../assets/Photo.jpg"
                alt="Adhithya Ram"
                className="relative w-80 h-80 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-yellow-400">Adhithya Ram</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed text-blue-100 max-w-2xl">
              A passionate <strong>Product Designer</strong> with a focus on crafting intuitive and impactful digital experiences. 
              With a strong foundation in <strong>UI/UX</strong> design, I merge creativity and functionality to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="border-2 border-white bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                View My Work
              </a>
            </div>

            {/* Quick Contact Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              <a href="mailto:adhithyaram002@gmail.com" className="text-2xl hover:text-yellow-400 transition-colors">
                <Mail />
              </a>
              <a href="https://linkedin.com/in/adhithyaram-d" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400 transition-colors">
                <Linkedin />
              </a>
              <a href="https://github.com/Adhithyaram29D" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400 transition-colors">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;