import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master's in Artificial Intelligence and Machine Learning",
      institution: "Gujarat University",
      period: "2024 - 2026",
      description: "Currently pursuing advanced studies in AI/ML with focus on machine learning, deep learning, and statistics.",
      status: "In Progress"
    },
    {
      degree: "Bachelor's in Computer Application (Data Science)",
      institution: "Swarrnim Startup and Innovation University",
      period: "2021 - 2024",
      description: "Graduated with Gold Medal for Outstanding Academic Performance. Strong foundation in data science and software engineering.",
      status: "Completed",
      award: "Gold Medal"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-blue-400 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {edu.status}
                      </span>
                      
                      {edu.award && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                          <Award className="w-4 h-4" />
                          <span>{edu.award}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
              
              {/* Connecting line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;