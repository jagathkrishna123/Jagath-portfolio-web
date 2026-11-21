import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechLogos from './components/TechLogos';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#191B1A] text-[#EEECE5] selection:bg-[#A65B3D] selection:text-[#EEECE5] relative font-sans antialiased">
      <SmoothScroll />
      {/* Navigation bar with direct PDF download */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero onCopyToast={triggerToast} />
        {/* Dedicated Skill Logos Showcase (Separate from category containers) */}
        <TechLogos />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Contact onCopyToast={triggerToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#EEECE5] text-[#191B1A] border-2 border-[#191B1A] rounded-sm text-xs font-bold shadow-2xl animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#A65B3D]"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
