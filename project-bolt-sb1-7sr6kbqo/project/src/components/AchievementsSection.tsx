import React from 'react';
import { Trophy, Award, Users, Mic, Gift, Star } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Gold Medal for Academic Excellence",
      description: "Awarded Gold Medal for Outstanding Academic Performance at Swarrnim University",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      year: "2024"
    },
    {
      title: "Vocal for Local Initiative",
      description: "Participated in the Vocal for Local initiative to promote local businesses and culture",
      icon: Star,
      color: "from-green-400 to-blue-500",
      year: "2023"
    },
    {
      title: "Orientation Program Coordinator",
      description: "Successfully coordinated the Orientation Program in 2023 at Swarrnim University",
      icon: Users,
      color: "from-purple-400 to-pink-500",
      year: "2023"
    },
    {
      title: "Google DevFest Volunteer",
      description: "Volunteered at Google DevFest, contributing to the tech community",
      icon: Mic,
      color: "from-blue-400 to-indigo-500",
      year: "2024 & 2025"
    },
    {
      title: "Google Competition Participant",
      description: "Participated in various Google competitions and received official goodies",
      icon: Gift,
      color: "from-red-400 to-pink-500",
      year: ""
    },
    {
      title: "Academic Excellence",
      description: "Consistently maintained high academic performance throughout university",
      icon: Award,
      color: "from-indigo-400 to-purple-500",
      year: "2021-2024"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Recognition for academic excellence, community involvement, and professional contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  {achievement.year && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
            <div className="text-gray-300">Gold Medal</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
            <div className="text-gray-300">Major Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <div className="text-gray-300">Leadership Roles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-300">Years Active</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;