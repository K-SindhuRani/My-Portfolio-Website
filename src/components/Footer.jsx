import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070913] pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div>
            <a href="#hero" className="text-xl font-bold tracking-tight text-white block">
              Kotti Sindhu <span className="text-sky-400">Rani</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-sm">
              Java Full Stack Developer · B.Tech CSE (AI & ML) Gold Medalist
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/K-SindhuRani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/k-sindhu-rani/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:sindhurani334@gmail.com"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors ml-2 cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Kotti Sindhu Rani. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
