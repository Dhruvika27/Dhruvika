import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Heart } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
        {/* Footer */}
        <div className="mt-8 pt-12 border-t border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Portfolio Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Dhruvika's Portfolio</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Thank you for visiting my personal portfolio website. Connect with me over socials.
              </p>
              <p className="text-gray-300">
                Keep Rising 🚀 Connect with me over live chat!
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  +91 9377408408
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  rajdhruvi27@gmail.com
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Ahmedabad, India-380058
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/dhruvika-rajpara-7a0125224/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
                <a href="https://github.com/Dhruvika27" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Github className="w-5 h-5 text-gray-800" />
                </a>
                <a href="mailto:rajdhruvi27@gmail.com" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">
                  <Mail className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <span>Designed With</span>
                <Heart className="w-5 h-5 text-red-400" />
                <span>By Dhruvika Rajpara</span>
              </div>
              
              <div className="text-gray-400 text-sm">
                © 2024 Dhruvika Rajpara. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;