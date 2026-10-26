import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';

const Navbar = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Kotti Sindhu Rani Homepage"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
              Kotti Sindhu <span className="text-sky-400 group-hover:text-cyan-300 transition-colors">Rani</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  activeSection === link.id ? 'text-sky-400 font-semibold' : 'text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800/90 text-slate-200 hover:text-white hover:border-slate-600 transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-800/80 text-sky-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-700/80 bg-slate-900/90 text-slate-200 hover:text-white hover:border-slate-600 transition-all"
              >
                <Download className="w-4 h-4 text-sky-400" />
                Download Resume
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
