import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Lock, X, ZoomIn } from "lucide-react";

/* ─── Fullscreen Image Lightbox ─── */
const ImageLightbox = ({ src, alt, onClose }) => {
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  React.useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out" onClick={handleBackdropClick}>
      <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#111]/80 border border-[#444] hover:border-cyber-magenta text-gray-300 hover:text-white transition-all"><X size={24} /></button>
      <motion.img initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }} src={src} alt={alt} className="max-w-[92vw] max-h-[90vh] object-contain rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.9)]" />
    </motion.div>
  );
};

/* ─── Project Card ─── */
const TiltCard = ({ title, desc, img, link, repo, isNDA, onPreview }) => {
  return (
    <div className="flex flex-col h-full bg-[#0d0d0d]/95 backdrop-blur-md rounded-xl overflow-hidden glass-panel border border-[#333] hover:border-cyber-magenta transition-all duration-300 group shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="relative h-48 w-full overflow-hidden border-b border-[#222] cursor-pointer" onClick={() => onPreview(img, title)}>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-80 z-10"></div>
        <img src={img} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-cyber-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 border border-[#555]"><ZoomIn size={20} className="text-white" /></div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-bold text-gray-100 group-hover:text-cyber-magenta transition-colors mb-2">{title}</h3>
        <p className="text-gray-300 font-body text-sm leading-relaxed mb-6 flex-1">{desc}</p>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-[#222]">
          {isNDA ? (
            <div className="flex items-center justify-center gap-2 py-2 px-3 bg-[#111] border border-[#444] rounded-md text-xs font-heading font-bold tracking-widest uppercase text-amber-400/80 cursor-default" title="This project is under NDA"><Lock size={14} /> NDA</div>
          ) : (
            <a href={repo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 px-3 bg-[#111] hover:bg-[#222] border border-[#444] hover:border-white transition-all rounded-md text-xs font-heading font-bold tracking-widest uppercase text-gray-300 hover:text-white"><Globe size={14} /> Repo</a>
          )}
          <button onClick={() => onPreview(img, title)} className="flex items-center justify-center gap-2 py-2 px-3 bg-cyber-dark hover:bg-cyber-blue/10 border border-cyber-blue text-cyber-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all rounded-md text-xs font-heading font-bold tracking-widest uppercase">Preview <ZoomIn size={14} /></button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });
  const openPreview = useCallback((src, alt) => { setLightbox({ open: true, src, alt }); }, []);
  const closePreview = useCallback(() => { setLightbox({ open: false, src: '', alt: '' }); }, []);

  const projectsData = [
    { title: "Sanity's Echo Prison", desc: "A professional Unity-based psychological horror game. Developed 3+ core gameplay mechanic systems and interactive environmental elements in C#, working within a structured team pipeline.", img: "/images/project1.png", isNDA: true },
    { title: "SARAH AI Chatbot", desc: "AI chatbot powered by Dolphin3.0 Mistral 24B REST API with sub-2-second latency. Features Markdown, syntax-highlighted code, and LaTeX rendering.", img: "/images/project2.png", link: "https://github.com/abhaykrdev/SARAH-AI", repo: "https://github.com/abhaykrdev/SARAH-AI" },
    { title: "Flappy Bird 2D Clone", desc: "A complete 2D game in Unity using C#, implementing Rigidbody2D physics, procedural pipe obstacle generation, and object pooling — achieving stable 60 FPS.", img: "/images/project3.png", link: "https://github.com/abhaykrdev/Flappy-Bird-2D", repo: "https://github.com/abhaykrdev/Flappy-Bird-2D" },
    { title: "Spacewar Arcade Game", desc: "A 2D space shooter built with Pygame featuring 4+ enemy types, adaptive difficulty scaling, sprite-based collision detection, and progressive scoring.", img: "/images/project4.png", link: "https://github.com/abhaykrdev/spacewar-game", repo: "https://github.com/abhaykrdev/spacewar-game" },
    { title: "Python Port Scanner", desc: "Multithreaded Python port scanner using socket programming to scan all 65,535 TCP ports, reducing manual network audit time by over 90%.", img: "/images/project5.png", link: "https://github.com/abhaykrdev/Unity-Deep-RL", repo: "https://github.com/abhaykrdev/Unity-Deep-RL" },
    { title: "Portfolio Website", desc: "A sleek, responsive portfolio leveraging modern web technologies and 3D glassmorphism.", img: "/images/project6.png", link: "https://github.com/abhaykrdev/Portfolio-website", repo: "https://github.com/abhaykrdev/Portfolio-website" },
  ];

  return (
    <div className="w-full py-24 px-6 relative z-10 mx-auto max-w-7xl">
      <div className="w-full flex flex-col gap-10 pb-12">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-[#333] pb-6 gap-4 bg-[#0a0a0a]/80 p-6 rounded-2xl backdrop-blur-md">
          <div><h2 className="text-4xl md:text-5xl font-heading font-bold text-white relative group drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Featured <span className="text-cyber-magenta group-hover:text-glow-magenta transition-all">Projects</span></h2></div>
          <a href="https://github.com/abhaykrdev" target="_blank" rel="noreferrer" className="flex text-gray-300 hover:text-cyber-blue gap-2 items-center text-sm font-heading tracking-widest uppercase transition-colors shrink-0 bg-[#111] px-4 py-2 rounded-lg border border-[#444] hover:border-cyber-blue">View Github <ExternalLink size={16} /></a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
          {projectsData.map((project, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="h-full">
              <TiltCard title={project.title} desc={project.desc} img={project.img} link={project.link} repo={project.repo} isNDA={project.isNDA} onPreview={openPreview} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox.open && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={closePreview} />}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
