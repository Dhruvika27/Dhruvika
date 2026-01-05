import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Brain, Database, Plane, Building, BookOpen, Crown } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Tomato Leaf Disease Detection",
      description: "Advanced deep learning model using CNN to detect diseases in tomato leaves with high accuracy. Implemented using TensorFlow and OpenCV for real-time image processing.",
      category: "Deep Learning",
      icon: Brain,
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
      github: "https://github.com/Dhruvika27",
      demo: "#",
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Apple Leaf Disease Detection",
      description: "Machine learning solution for identifying diseases in apple leaves using computer vision techniques. Features data preprocessing, model training, and real-time prediction.",
      category: "Deep Learning",
      icon: Brain,
      technologies: ["Python", "Keras", "PIL", "NumPy"],
      github: "https://github.com/Dhruvika27",
      demo: "#",
      image: "https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "N-Queen Game",
      description: "Interactive implementation of the classic N-Queen puzzle using backtracking algorithm. Features visualization of solutions and step-by-step solving process.",
      category: "Algorithm",
      icon: Crown,
      technologies: ["Python", "Pygame", "Backtracking"],
      github: "https://github.com/Dhruvika27",
      demo: "#",
      image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      title: "Hotel Management System",
      description: "Comprehensive hotel management application with booking system, room management, and customer database. Built with Python and integrated database management.",
      category: "Software Development",
      icon: Building,
      technologies: ["Python", "MySQL", "Tkinter", "Database"],
      github: "https://github.com/Dhruvika27",
      demo: "#",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-blue-400 to-teal-500"
    },
    {
      title: "Library Management System",
      description: "Digital library system for managing books, members, and transactions. Features search functionality, due date tracking, and reporting capabilities.",
      category: "Software Development",
      icon: BookOpen,
      technologies: ["Python", "MySQL", "GUI", "Database"],
      github: "https://github.com/Dhruvika27",
      demo: "#",
      image: "https://images.pexels.com/photos/481200/pexels-photo-481200.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Airline Data Analysis",
      description: "Comprehensive data analysis project examining airline performance metrics, passenger trends, and operational efficiency using statistical methods and visualization.",
      category: "Data Analytics",
      icon: Plane,
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/Dhruvika27",
      demo: "#",
      image: "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning machine learning, deep learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Dhruvika27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;