import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';

/* Lightbox for BCCL certificate image */
const CertLightbox = ({ src, alt, onClose }) => {
  const handleBackdrop = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out" onClick={handleBackdrop}>
      <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#111]/80 border border-[#444] hover:border-cyber-magenta text-gray-300 hover:text-white transition-all"><X size={24} /></button>
      <motion.img initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3 }} src={src} alt={alt} className="max-w-[92vw] max-h-[90vh] object-contain rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.9)]" />
    </motion.div>
  );
};

const experiences = [
  {
    company: 'BCCL (Bharat Coking Coal Limited)',
    role: 'Telecommunication & VTS Intern',
    type: 'On-Site',
    location: 'Dhanbad, Jharkhand',
    period: 'Jun 2025 – Jul 2025',
    color: '#00f0ff',
    points: [
      'Monitored and analysed real-time location data for 50+ vehicles using the Vehicle Tracking System (VTS), reducing incident response tracking time by approximately 30%.',
      'Engineered a multithreaded Python Port Scanner using socket programming to scan all 65,535 TCP ports on a target IP, reducing manual audit time by over 90%.',
      'Studied 10+ IP security camera configurations and documented network topology for a 50-node facility, producing a reference guide adopted by the IT team within the first week.',
    ],
    certType: 'image',
    certImage: '/images/BCCL.png',
  },
  {
    company: 'Akiyam Solutions Pvt. Ltd.',
    role: 'Unity Game Developer Intern',
    type: 'Remote',
    location: 'Remote',
    period: 'Oct 2025 – Apr 2026',
    color: '#ff003c',
    points: [
      "Contributed to core gameplay scripting and mechanics implementation for Sanity's Echo Prison, a Unity-based psychological horror game, delivering 3+ major gameplay systems.",
      'Developed and iterated on 5+ interactive systems within the Unity environment, reducing reported gameplay bugs by over 40% through systematic testing.',
      'Collaborated with design, development, and art teams across a 6-month agile sprint cycle, maintaining 100% sprint completion rate throughout the internship.',
    ],
    certType: 'link',
    certLink: 'https://www.linkedin.com/posts/abhay-kumar-gamedev_internship-completion-certificate-akiyam-ugcPost-7453309083845296130-PYpe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjftYwBv8s99FXgm7C-bBW2inUI3tgRR3s',
  },
];

const Experience = () => {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  return (
    <div className="w-full py-24 px-6 relative z-10 mx-auto max-w-5xl">
      <div className="w-full flex flex-col gap-12 pb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold inline-block relative text-white drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
            Work <span className="text-cyber-magenta">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-transparent mt-4 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-10">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-magenta to-transparent"></div>

          {experiences.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="relative pl-16 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 z-10" style={{ borderColor: exp.color, background: '#050505', boxShadow: `0 0 12px ${exp.color}40` }}></div>

              <div className="bg-[#0d0d0d]/95 backdrop-blur-md rounded-xl border border-[#333] hover:border-[color:var(--hover)] transition-colors p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" style={{ '--hover': exp.color }}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white">{exp.company}</h3>
                    <p className="text-sm font-heading tracking-wide mt-1" style={{ color: exp.color }}>{exp.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-heading tracking-widest uppercase shrink-0">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#333] bg-[#111] text-gray-300"><Calendar size={12} />{exp.period}</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#333] bg-[#111] text-gray-300"><MapPin size={12} />{exp.type}</span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-200 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }}></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Certificate button */}
                {exp.certType === 'link' ? (
                  <a href={exp.certLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border rounded-lg text-sm font-heading font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_15px_var(--hover)]" style={{ borderColor: exp.color, color: exp.color }}>
                    View Certificate <ExternalLink size={14} />
                  </a>
                ) : (
                  <button onClick={() => setLightbox({ open: true, src: exp.certImage, alt: exp.company + ' Certificate' })} className="inline-flex items-center gap-2 px-5 py-2.5 border rounded-lg text-sm font-heading font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_15px_var(--hover)]" style={{ borderColor: exp.color, color: exp.color }}>
                    View Certificate <ZoomIn size={14} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox.open && <CertLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox({ open: false, src: '', alt: '' })} />}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
