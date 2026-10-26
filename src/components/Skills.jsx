import React from 'react';
import { Code2, Server, Monitor, Database, Sparkles, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Java (Advanced)', 'Python'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Spring Boot', 'JDBC', 'REST APIs'],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'SQL'],
  },
  {
    title: 'AI & Agentic',
    icon: Sparkles,
    skills: ['Generative AI', 'LLM Applications', 'Agentic AI', 'RAG', 'LangChain'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-sky-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">
            SKILLS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            The languages, frameworks and tools I use to design, build and ship applications.
          </p>
        </div>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-900/60 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 hover:text-white transition-all shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
