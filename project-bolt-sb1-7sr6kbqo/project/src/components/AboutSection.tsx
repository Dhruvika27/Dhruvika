import React from 'react';
import { MapPin, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Ahmedabad, Gujarat</span>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi! I'm Dhruvika Rajpara, a passionate and detail-oriented tech enthusiast from Ahmedabad, Gujarat.
              I specialize in Data Science, Artificial Intelligence, and Software Development, with strong skills in
              technologies such as Machine Learning, Deep Learning, Data Science, Data Analyst, Power BI and Python.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I love building intelligent systems and solving real-world problems through data-driven approaches. 
              My curiosity and continuous learning mindset drive me to grow and contribute meaningfully in the tech field.
            </p>

            <div className="flex items-center gap-2 text-gray-300">
              <Heart className="w-5 h-5 text-red-400" />
              <span>Passionate about AI, Machine Learning, and Innovation</span>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">DR</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dhruvika</h3>
                </div>
              </div>
            </div>
            
            {/* Floating elements around the profile */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-float-delayed"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-indigo-500 rounded-full opacity-20 animate-float-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;