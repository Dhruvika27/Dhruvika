import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <CertificationsSection />
      <AchievementsSection />
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;