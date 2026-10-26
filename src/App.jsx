import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 selection:bg-purple-500/30 selection:text-white relative overflow-hidden">
      {/* Global subtle radial ambient glow backdrop */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-950/20 via-purple-950/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onOpenResumeModal={openResumeModal} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={openResumeModal} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Download / Information Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </div>
  );
}

export default App;
