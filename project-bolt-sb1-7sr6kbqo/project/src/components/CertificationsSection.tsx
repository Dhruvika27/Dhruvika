import React from 'react';
import { Award, ExternalLink, Shield, Cloud, BarChart3, Globe } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle Cloud Data Management",
      issuer: "Oracle",
      category: "Cloud",
      icon: Cloud,
      color: "from-red-400 to-orange-500"
    },
    {
      title: "IBM Maximo Visual Inspection",
      issuer: "IBM",
      category: "AI/ML",
      icon: Shield,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "IBM Data Science",
      issuer: "IBM",
      category: "Data Science",
      icon: BarChart3,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      category: "Cloud",
      icon: Cloud,
      color: "from-blue-400 to-teal-500"
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      category: "Deep Learning",
      icon: Shield,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Google Analytics",
      issuer: "Google",
      category: "Analytics",
      icon: BarChart3,
      color: "from-yellow-400 to-red-500"
    },
    {
      title: "Google Digital Marketing",
      issuer: "Google",
      category: "Marketing",
      icon: Globe,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "LinkedIn Marketing Strategy",
      issuer: "LinkedIn",
      category: "Marketing",
      icon: Globe,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Various Platforms",
      category: "Programming",
      icon: Shield,
      color: "from-yellow-400 to-blue-500"
    },
    {
      title: "Python for Problem Solving",
      issuer: "CodeChef",
      category: "Programming",
      icon: Shield,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Google Play Academy",
      issuer: "Google",
      category: "Development",
      icon: Globe,
      color: "from-red-400 to-orange-500"
    },
    {
      title: "Google Study Jam",
      issuer: "Google",
      category: "Learning",
      icon: Globe,
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Professional certifications from leading technology companies and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                    {cert.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  Issued by {cert.issuer}
                </p>
                
                <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.credly.com/users/dhruvika-rajpara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <span>View all certifications on Credly</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">12+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-300">Tech Giants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">6</div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-gray-300">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;