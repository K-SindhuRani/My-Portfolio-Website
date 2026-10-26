import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech, CSE (AI & ML)',
    institution: 'Sri Venkateswara College of Engineering and Technology · Chittoor',
    period: '2022 — 2026',
    score: 'CGPA 9.46',
    highlight: true,
  },
  {
    degree: 'Intermediate, MPC',
    institution: 'Sri Sai Siddartha Junior College · Madanapalle',
    period: '2020 — 2022',
    score: '97%',
    highlight: false,
  },
  {
    degree: 'SSC',
    institution: 'AP Model School · Mulakalacheruvu',
    period: '2016 — 2020',
    score: '100%',
    highlight: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">
            EDUCATION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Academic journey
          </h2>
        </div>

        {/* List of Education Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {educationData.map((item) => (
            <div
              key={item.degree}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300"
            >
              {/* Left Side: Icon & Details */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-900/60 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Right Side: Timeline & Grade */}
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:pl-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800/80">
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  {item.period}
                </span>
                <span className="text-base sm:text-xl font-bold text-sky-400">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
