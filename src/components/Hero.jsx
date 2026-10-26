import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Sparkles, User, Info } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';


const roles = [
  'Aspiring Software Developer',
  'Java Full Stack Developer',
  'Software Developer',
  'Agentic AI Enthusiast'
];

const Hero = ({ onOpenResumeModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgSrc, setImgSrc] = useState('/images/profile.png');
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isFallback, setIsFallback] = useState(false);

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, 85);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT COLUMN: Profile Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-1">
            <div className="relative group w-64 sm:w-72 md:w-80 aspect-square">
              {/* Gradient Aura Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600 via-indigo-500 to-sky-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 -z-10" />

              {/* Main Photo Container with Gradient Border */}
              <div className="relative w-full h-full p-[3px] rounded-3xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-sky-400 shadow-[0_0_35px_rgba(139,92,246,0.3)] transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[22px] overflow-hidden relative flex items-center justify-center">
                  <img
                    src={imgSrc}
                    alt="Kotti Sindhu Rani"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={() => {
                      if (imgSrc !== '/profile.png') {
                        setImgSrc('/profile.png');
                      } else {
                        setImgSrc('/profile-placeholder.svg');
                        setIsFallback(true);
                      }
                    }}
                    onLoad={() => {
                      setImgLoaded(true);
                      setIsFallback(false);
                    }}
                  />

                  {/* Fallback info chip if placeholder is active */}
                  {isFallback && (
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-2.5 text-center shadow-lg">
                      <div className="flex items-center justify-center gap-1.5 text-sky-400 text-xs font-semibold">
                        <Info className="w-3.5 h-3.5" />
                        <span>Profile Photo Slot</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Add your photo as <span className="text-purple-300 font-mono">public/profile.jpg</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Status Pill */}
              <div className="absolute -bottom-3 -right-2 bg-slate-900/95 border border-slate-700/80 px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-200">Open to Roles</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Introduction */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-medium mb-5 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] inline-block animate-pulse"></span>
              <span>B.Tech CSE (AI & ML) · Class of 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-sky-400 bg-clip-text text-transparent">
                Kotti Sindhu Rani
              </span>
            </h1>

            {/* Dynamic Typing Role */}
            <div className="mt-3 sm:mt-4 h-8 sm:h-10 flex items-center">
              <span className="text-lg sm:text-2xl font-semibold text-slate-300 tracking-wide">
                {text}
              </span>
              <span className="w-0.5 h-6 sm:h-7 ml-1 bg-purple-400 animate-blink" />
            </div>

            {/* Concise Bio */}
            <p className="mt-5 text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              I'm a recent B.Tech Computer Science graduate (AI & ML specialization) who enjoys building practical,
              full-stack software — from recruitment platforms to banking systems — and exploring how AI-powered solutions can solve real problems.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center px-4 py-3 font-medium text-sm sm:text-base text-slate-400 hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/K-SindhuRani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/k-sindhu-rani/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/u/kotti_sindhu_rani/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:sindhurani334@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
