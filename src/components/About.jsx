import React from 'react';
import { GraduationCap, Layers, Code, Bot, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">
            ABOUT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A builder at heart
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Computer Science graduate with an AI & ML specialization, focused on shipping practical software.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I'm a recent B.Tech graduate in Computer Science with an AI & ML specialization from{' '}
              <span className="text-white font-medium">Sri Venkateswara College of Engineering and Technology, Chittoor</span>{' '}
              — graduating in 2026 with a{' '}
              <span className="text-sky-400 font-semibold">9.46 CGPA</span> and the{' '}
              <span className="text-purple-300 font-semibold">Gold Medal for First Rank</span>.
            </p>
            <p>
              My core strengths are Java programming and problem solving. I've built full-stack applications end to end — a recruitment platform with React and Spring Boot, a secure banking system, and a student management system — handling everything from REST APIs and databases to responsive user interfaces.
            </p>
            <p>
              Right now I'm going deeper into{' '}
              <span className="text-indigo-300 font-medium">Agentic AI — LLMs, RAG and LangChain</span>{' '}
              — exploring how AI agents can be applied to real products.
            </p>
          </div>

          {/* Right Column: 2x2 Glass Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Card 1: 9.46 CGPA */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400 mb-4 group-hover:border-sky-500/40 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-sky-400 tracking-tight">
                9.46 CGPA
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-normal">
                B.Tech · Gold Medal, First Rank
              </p>
            </div>

            {/* Card 2: 3 Projects */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400 mb-4 group-hover:border-sky-500/40 transition-colors">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">
                3 Projects
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-normal">
                Full-stack, built end to end
              </p>
            </div>

            {/* Card 3: Java */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400 mb-4 group-hover:border-sky-500/40 transition-colors">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">
                Java
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-normal">
                Advanced · Spring Boot, REST APIs
              </p>
            </div>

            {/* Card 4: Agentic AI */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400 mb-4 group-hover:border-sky-500/40 transition-colors">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">
                Agentic AI
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-normal">
                LLMs · RAG · LangChain
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
