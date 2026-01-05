import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Database, Brain } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}px`,
            top: `${100 + mousePosition.y * 0.02}px`,
            transform: 'translateZ(0)'
          }}
        />
        <div 
          className="absolute w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-float-delayed"
          style={{
            right: `${150 + mousePosition.x * -0.03}px`,
            top: `${200 + mousePosition.y * -0.02}px`,
            transform: 'translateZ(0)'
          }}
        />
        <div 
          className="absolute w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-float-slow"
          style={{
            left: `${300 + mousePosition.x * 0.01}px`,
            bottom: `${150 + mousePosition.y * 0.01}px`,
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* 3D Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute w-8 h-8 text-blue-400 opacity-60 animate-spin-slow"
          style={{
            left: '10%',
            top: '20%',
            transform: `rotateX(${mousePosition.x * 0.1}deg) rotateY(${mousePosition.y * 0.1}deg)`
          }}
        />
        <Database 
          className="absolute w-6 h-6 text-purple-400 opacity-60 animate-pulse"
          style={{
            right: '15%',
            top: '30%',
            transform: `rotateX(${mousePosition.x * -0.1}deg) rotateY(${mousePosition.y * -0.1}deg)`
          }}
        />
        <Brain 
          className="absolute w-10 h-10 text-indigo-400 opacity-60 animate-bounce"
          style={{
            left: '20%',
            bottom: '20%',
            transform: `rotateX(${mousePosition.x * 0.05}deg) rotateY(${mousePosition.y * 0.05}deg)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
            Dhruvika Rajpara
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up-delayed">
            Data Scientist & AI Enthusiast
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto animate-fade-in-up-delayed-2">
            Passionate about building intelligent systems and solving real-world problems through data-driven approaches
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up-delayed-3">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;