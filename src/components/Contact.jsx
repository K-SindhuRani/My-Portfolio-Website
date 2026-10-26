import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'sindhurani334@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Generate mailto link with encoded parameters
    const subject = encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">
            CONTACT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's connect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Interested in working together or discussing opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="glass-card rounded-2xl p-6 group hover:border-indigo-500/40 transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email</span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-sky-400 transition-colors break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-400 mt-2 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/k-sindhu-rani/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-6 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:border-sky-500/40 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">LinkedIn</span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                    k-sindhu-rani
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/K-SindhuRani"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-6 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-purple-400 group-hover:border-purple-500/40 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">GitHub</span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                    K-SindhuRani
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
            </a>

            {/* Location Pill */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-3 text-slate-300">
              <div className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Location</span>
                <span className="text-sm font-medium text-slate-200">Andhra Pradesh, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate an email directly to my inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Developer Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-center font-medium">
                    Thank you! Your email client has been prepared.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
