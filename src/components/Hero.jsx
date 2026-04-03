import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const Hero = ({ setActiveSection }) => {
  return (
    <div className="w-full h-full flex items-center justify-start container mx-auto px-6">
      <div className="flex flex-col justify-center space-y-6 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            Hi, <span className="text-glow-blue text-cyber-blue">I'm Abhay</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300 mt-2 font-heading font-medium">
            Aspiring <span className="text-glow-magenta text-cyber-magenta font-bold glitch-effect">Developer</span>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-lg mt-4 leading-relaxed bg-cyber-dark/40 p-4 rounded-lg backdrop-blur-sm border border-[#333]"
        >
          A passionate developer focused on game design, cybersecurity, and creating immersive digital experiences. Curiosity is my compass.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8"
        >
          <div className="flex gap-4">
            <a href="https://github.com/abhaykrdev" target="_blank" rel="noreferrer" className="bg-cyber-panel p-3 border border-cyber-panel hover:border-cyber-blue text-gray-400 hover:text-cyber-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all rounded-md">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abhay-kumar-0645532a1/" target="_blank" rel="noreferrer" className="bg-cyber-panel p-3 border border-cyber-panel hover:border-cyber-blue text-gray-400 hover:text-cyber-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all rounded-md">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/known_as_venus?igsh=ejV3dTM5eHM3cDk5" target="_blank" rel="noreferrer" className="bg-cyber-panel p-3 border border-cyber-panel hover:border-cyber-magenta text-gray-400 hover:text-cyber-magenta hover:shadow-[0_0_15px_rgba(255,0,60,0.4)] transition-all rounded-md">
              <FaInstagram size={24} />
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1PzqodylEGm9UfBp2nfhLANp75Ond_cxA/view?usp=drive_link" target="_blank" rel="noreferrer" className="inline-block border border-cyber-magenta text-cyber-magenta px-6 py-3 font-heading uppercase tracking-widest font-bold hover:bg-cyber-magenta hover:text-white hover:shadow-[0_0_20px_rgba(255,0,60,0.6)] transition-all duration-300">
              Resume
            </a>
            <button onClick={() => setActiveSection('contact')} className="hidden sm:inline-block bg-cyber-blue text-cyber-dark px-6 py-3 font-heading uppercase tracking-widest font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300">
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
