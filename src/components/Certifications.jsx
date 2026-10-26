import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const certificationsList = [
  {
    name: 'DSA JAVA',
    issuer: 'Infosys SpringBoard',
    category: 'Data Structures & Algorithms',
  },
  {
    name: 'JAVA (Basic)',
    issuer: 'HackerRank',
    category: 'Programming',
  },
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    category: 'Database Management',
  },
  {
    name: 'HTML & CSS Fundamentals',
    issuer: 'W3Cx',
    category: 'Web Development',
  },
  {
    name: 'CSS (Basic)',
    issuer: 'HackerRank',
    category: 'Frontend Styling',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-sky-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">
            CERTIFICATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Verified credentials in software engineering, core programming, web fundamentals, and databases.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificationsList.map((cert) => (
            <div
              key={cert.name}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-950/70 border border-indigo-900/60 flex items-center justify-center text-sky-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-emerald-500/10 border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  By <span className="text-slate-300 font-medium">{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-medium text-slate-400 bg-slate-900/80 border border-slate-800/90 px-2.5 py-1 rounded-md inline-block">
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
