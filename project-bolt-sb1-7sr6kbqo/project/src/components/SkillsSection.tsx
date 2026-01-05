import React, { useState } from 'react';
import { Code, Database, BarChart3, Brain, Globe, Settings, Cpu, Cloud, Eye, Zap } from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "Machine Learning", icon: Brain, color: "from-purple-400 to-pink-500" },
    { name: "Deep Learning", icon: Brain, color: "from-blue-400 to-purple-500" },
    { name: "Python", icon: Code, color: "from-blue-400 to-cyan-500" },
    { name: "Power BI", icon: BarChart3, color: "from-yellow-400 to-orange-500" },
    { name: "Streamlit", icon: Globe, color: "from-green-400 to-teal-500" },
    { name: "YOLO", icon: Eye, color: "from-orange-400 to-red-500" },
    { name: "SQL", icon: Database, color: "from-blue-400 to-teal-500" },
    { name: "PyTorch", icon: Zap, color: "from-red-400 to-orange-500" },
    { name: "CV2", icon: Eye, color: "from-indigo-400 to-purple-500" },
    { name: "Numpy", icon: Code, color: "from-blue-400 to-indigo-500" },
    { name: "Pandas", icon: Database, color: "from-green-400 to-blue-500" },
    { name: "Matplotlib", icon: BarChart3, color: "from-purple-400 to-pink-500" },
    { name: "Seaborn", icon: BarChart3, color: "from-cyan-400 to-blue-500" },
    { name: "VLM", icon: Brain, color: "from-orange-400 to-yellow-500" },
    { name: "LLaVA", icon: Brain, color: "from-pink-400 to-purple-500" },
    { name: "NLTK", icon: Code, color: "from-green-400 to-cyan-500" }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Expertise in cutting-edge technologies for Data Science, AI, and Machine Learning
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(index.toString())}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    hoveredSkill === index.toString() ? 'scale-110 rotate-12' : ''
                  }`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;