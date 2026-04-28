import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Gamepad2, Rocket, FolderKanban, Award } from 'lucide-react';

const stats = [
  { icon: Rocket, value: '6+', label: 'Months Exp.', color: 'cyber-blue' },
  { icon: Gamepad2, value: '2', label: 'Games Shipped', color: 'cyber-magenta' },
  { icon: FolderKanban, value: '5+', label: 'Projects', color: 'cyber-blue' },
  { icon: Award, value: '5', label: 'Certifications', color: 'cyber-magenta' },
];

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-14 lg:gap-24 w-full max-w-6xl">
        {/* LEFT: Profile Photo */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-cyber-blue/20 via-transparent to-cyber-magenta/20 blur-[50px] animate-pulse" />
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-2 border-[#333] shadow-[0_0_50px_rgba(0,240,255,0.15),0_0_100px_rgba(255,0,60,0.1)] group">
            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-cyber-blue via-cyber-magenta to-cyber-blue bg-[length:300%_100%] animate-[gradient-shift_4s_linear_infinite] opacity-60 z-0" />
            <div className="absolute inset-[2px] rounded-full overflow-hidden z-10 bg-cyber-dark">
              <img src="/images/Abhay.png" alt="Abhay Kumar" className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/40 via-transparent to-transparent" />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }} className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30">
            <div className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-md border border-emerald-500/50 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-xs font-heading font-bold tracking-widest uppercase whitespace-nowrap">Available for Hire</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-bold leading-[1.1]">
              <span className="text-white">Abhay</span>{' '}
              <span className="hero-name-outline">Kumar</span>
            </h1>
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-4 flex items-center gap-1 justify-center lg:justify-start flex-wrap">
              <span className="hero-role-text text-xl md:text-2xl font-heading font-bold tracking-wide">Game Dev & Software Engineer</span>
              <span className="hero-cursor" aria-hidden="true">|</span>
            </motion.h2>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-base md:text-lg text-gray-200 leading-relaxed max-w-md">
            CS Engineering student with <span className="text-cyber-blue font-semibold">6+ months of professional Unity game dev</span> experience. Building AI-powered apps, network security tools, and immersive digital experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="grid grid-cols-4 gap-3 w-full max-w-md">
            {stats.map((s, i) => (
              <div key={i} className={`flex flex-col items-center gap-1.5 py-4 px-2 rounded-xl bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#222] hover:border-${s.color} transition-colors group`}>
                <s.icon size={18} className={`text-${s.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                <span className={`text-2xl md:text-3xl font-heading font-bold text-${s.color}`}>{s.value}</span>
                <span className="text-[10px] text-gray-400 font-heading tracking-wider uppercase leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full max-w-md">
            <div className="flex gap-3">
              <a href="https://github.com/abhaykrdev" target="_blank" rel="noreferrer" className="bg-[#0d0d0d] p-2.5 border border-[#333] hover:border-cyber-blue text-gray-400 hover:text-cyber-blue hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all rounded-lg"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/abhay-kumar-0645532a1/" target="_blank" rel="noreferrer" className="bg-[#0d0d0d] p-2.5 border border-[#333] hover:border-cyber-blue text-gray-400 hover:text-cyber-blue hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all rounded-lg"><FaLinkedin size={20} /></a>
            </div>
            <div className="flex gap-3 flex-1 w-full sm:w-auto">
              <a href="https://drive.google.com/file/d/1PzqodylEGm9UfBp2nfhLANp75Ond_cxA/view?usp=drive_link" target="_blank" rel="noreferrer" className="flex-1 sm:flex-initial text-center border border-cyber-magenta text-cyber-magenta px-5 py-2.5 font-heading uppercase tracking-widest text-xs font-bold hover:bg-cyber-magenta hover:text-white hover:shadow-[0_0_20px_rgba(255,0,60,0.5)] transition-all duration-300 rounded-lg">Resume</a>
              <button onClick={() => scrollTo('contact')} className="flex-1 sm:flex-initial bg-cyber-blue text-cyber-dark px-5 py-2.5 font-heading uppercase tracking-widest text-xs font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 rounded-lg">Contact</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
