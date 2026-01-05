import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Intern",
      company: "Ubrain Studio Pvt. Ltd.",
      location: "Remote",
      period: "2 months",
      type: "Internship",
      description: "Worked on and delivered three impactful projects using Python and MySQL. This experience sharpened my programming and database management skills.",
      skills: ["Python", "MySQL", "Database Management", "Project Development"]
    },
    {
      title: "Virtual Programs Participant",
      company: "Multiple Organizations",
      location: "Remote",
      period: "Various",
      type: "Virtual Experience",
      description: "Gained hands-on experience through virtual programs in AWS Solutions Architecture, Power BI (PwC Case Study), and Software Engineering.",
      skills: ["AWS", "Power BI", "Software Engineering", "Cloud Architecture"]
    },
    {
      title: "Data Science Intern",
      company: "MeriSkills & Cognifyz",
      location: "Remote",
      period: "Multiple",
      type: "Online Internship",
      description: "Completed two online internships that provided real-world exposure to industry workflows and allowed me to apply technical knowledge in practical scenarios.",
      skills: ["Data Science", "Industry Workflows", "Practical Application"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;