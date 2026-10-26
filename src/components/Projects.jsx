import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    tag: 'FEATURED · FULL STACK',
    title: 'RecruitSmart CRM Application',
    description:
      'AI-powered recruitment platform that simplifies job search, applications, candidate management and recruiter workflows — with intelligent job-profile matching and a career chatbot. Secured with JWT authentication and built on REST APIs.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT', 'AI Matching'],
    githubUrl: 'https://github.com/K-SindhuRani/RecruitSmart-CRM_Application',
    liveUrl: 'https://recruitsmart-crm.vercel.app',
    isLive: true,
  },
  {
    tag: 'FULL STACK',
    title: 'Secure Banking System',
    description:
      'Online banking application supporting secure account management, fund transfers and transaction history, with statement viewing and role-based access for customers and administrators.',
    technologies: ['Spring Boot', 'React', 'MySQL', 'JWT'],
    githubUrl: 'https://github.com/K-SindhuRani/Secure-Banking-System-',
    liveUrl: null,
    isLive: false,
  },
  {
    tag: 'JAVA · CRUD',
    title: 'Student Management System',
    description:
      'Student records management with full CRUD functionality — add, view, search and delete student data — backed by a relational database for persistent storage and retrieval.',
    technologies: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/K-SindhuRani/Student-Management-System-CRUD',
    liveUrl: null,
    isLive: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">
            PROJECTS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Applications I've designed, built and deployed — from AI-powered platforms to secure systems.
          </p>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group"
            >
              <div>
                {/* Category / Type Tag */}
                <div className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-3">
                  {project.tag}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                {/* GitHub link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white transition-all shadow-sm"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* Live Demo or Placeholder */}
                {project.isLive ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
                  >
                    <span>Live demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-medium text-slate-500 bg-slate-900/40 border border-slate-800/50 cursor-not-allowed select-none">
                    Live demo — coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
