import React from 'react';
import { Award, Trophy, Sparkles, Mic } from 'lucide-react';

const achievementsList = [
  {
    title: 'First Rank & Gold Medal in B.Tech',
    organization: 'Sri Venkateswara College of Engineering and Technology, Chittoor',
    description: 'Awarded Gold Medal in B.Tech CSE (AI & ML) for securing First Rank with an outstanding 9.46 CGPA.',
    badge: 'Gold Medalist',
    icon: Trophy,
    highlight: true,
  },
  {
    title: 'Academic Excellence Award 2025',
    organization: 'College Academic Honors',
    description: 'Honored with the Academic Excellence Award for exceptional scholastic performance throughout the academic year.',
    badge: 'Honor Award',
    icon: Award,
    highlight: false,
  },
  {
    title: 'District Level Speech Competition',
    organization: 'District Level Competition',
    description: 'Won District Level Speech Competition, demonstrating strong public speaking, leadership, and communication skills.',
    badge: 'Winner',
    icon: Mic,
    highlight: false,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">
            ACHIEVEMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Honors & Awards
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Recognitions of academic excellence, top scholastic rank, and extracurricular accomplishments.
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="max-w-4xl mx-auto space-y-4">
          
          {/* Featured Gold Medal Card */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-amber-500/40 via-purple-500/40 to-sky-500/40 shadow-xl shadow-amber-500/5">
            <div className="bg-[#0D1322] rounded-[22px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Gold Medalist · First Rank</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Awarded Gold Medal in B.Tech for Securing First Rank
                  </h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    Sri Venkateswara College of Engineering and Technology, Chittoor — awarded for securing top academic standing with a <span className="text-sky-400 font-semibold">9.46 CGPA</span>.
                  </p>
                </div>
              </div>
              <div className="self-end sm:self-center flex-shrink-0 text-right">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 block">
                  1st Rank
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Class of 2026
                </span>
              </div>
            </div>
          </div>

          {/* Academic Excellence & Speech Competition Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {achievementsList.slice(1).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-900/60 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-semibold text-indigo-300 bg-indigo-950/80 border border-indigo-800/80 px-2 py-0.5 rounded-full mb-1">
                      {item.badge}
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
