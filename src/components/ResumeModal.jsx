import React from 'react';
import { X, Download, FileText, CheckCircle2, Mail, ExternalLink, Info } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 relative border border-slate-700/80 shadow-2xl bg-[#0D1322] transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-950/70 border border-indigo-900/60 flex items-center justify-center text-sky-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
            <p className="text-xs text-slate-400">Kotti Sindhu Rani · Software Developer</p>
          </div>
        </div>

        {/* Notice Info Box */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6 space-y-2">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
            <span>Official Resume Available</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Download or preview the official resume of <strong className="text-white">Kotti Sindhu Rani</strong> (<code className="text-purple-300 font-mono">resume.pdf</code>) in your browser.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/resume.pdf"
            download="Kotti_Sindhu_Rani_Resume.pdf"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Preview in Tab</span>
          </a>
        </div>

        {/* Direct Email fallback */}
        <div className="mt-5 text-center">
          <a
            href="mailto:sindhurani334@gmail.com?subject=Requesting%20Updated%20Resume%20-%20Kotti%20Sindhu%20Rani"
            className="text-xs text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Or request latest copy via sindhurani334@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
