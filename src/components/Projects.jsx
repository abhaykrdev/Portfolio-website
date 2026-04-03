import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const TiltCard = ({ title, desc, img, link, repo }) => {
  return (
    <div className="flex flex-col h-full bg-[#0d0d0d]/95 backdrop-blur-md rounded-xl overflow-hidden glass-panel border border-[#333] hover:border-cyber-magenta transition-all duration-300 group shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      {/* Image Header with built-in dark gradient to make sure it looks cyber */}
      <div className="relative h-48 w-full overflow-hidden border-b border-[#222]">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-80 z-10"></div>
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-cyber-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-bold text-gray-100 group-hover:text-cyber-magenta transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-400 font-body text-sm leading-relaxed mb-6 flex-1">
          {desc}
        </p>

        {/* Both Action Buttons grouped at the bottom */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-[#222]">
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 bg-[#111] hover:bg-[#222] border border-[#444] hover:border-white transition-all rounded-md text-xs font-heading font-bold tracking-widest uppercase text-gray-300 hover:text-white"
          >
            <Github size={14} /> Repo
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 bg-cyber-dark hover:bg-cyber-blue/10 border border-cyber-blue text-cyber-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all rounded-md text-xs font-heading font-bold tracking-widest uppercase"
          >
            Preview <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Portfolio Website",
      desc: "A sleek, responsive portfolio leveraging modern web technologies and 3D glassmorphism.",
      img: "/images/project1.png",
      link: "https://github.com/abhaykrdev/Portfolio-website",
      repo: "https://github.com/abhaykrdev/Portfolio-website"
    },
    {
      title: "SARAH AI",
      desc: "A modern web-based chatbot powered by Dolphin3.0 Mistral 24B AI. Features markdown rendering and dynamic conversation support.",
      img: "/images/project2.png",
      link: "https://github.com/abhaykrdev/SARAH-AI",
      repo: "https://github.com/abhaykrdev/SARAH-AI"
    },
    {
      title: "Flappy Bird 2D",
      desc: "Clean recreation of the classic game built in Unity 2D using robust C# mechanics.",
      img: "/images/project3.png",
      link: "https://github.com/abhaykrdev/Flappy-Bird-2D",
      repo: "https://github.com/abhaykrdev/Flappy-Bird-2D"
    },
    {
      title: "Spacewar",
      desc: "Python arcade shooter built with Pygame. Adaptive difficulty, multiple mechanics, and space combat.",
      img: "/images/project4.png",
      link: "https://github.com/abhaykrdev/spacewar-game",
      repo: "https://github.com/abhaykrdev/spacewar-game"
    },
    {
      title: "Unity Deep RL",
      desc: "Deep Reinforcement Learning agents trained in Unity environments for intelligent decision-making.",
      img: "/images/project5.png",
      link: "https://github.com/abhaykrdev/Unity-Deep-RL",
      repo: "https://github.com/abhaykrdev/Unity-Deep-RL"
    }
  ];

  return (
    <div className="w-full flex-1 flex py-16 px-6 relative z-10 mx-auto max-w-7xl h-full items-start overflow-y-auto container-scroll">
      <div className="w-full flex flex-col gap-10 pb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-[#333] pb-6 gap-4 bg-[#0a0a0a]/80 p-6 rounded-2xl backdrop-blur-md"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white relative group drop-shadow-[0_0_8px_rgba(0,0,0,1)]">
              Featured <span className="text-cyber-magenta group-hover:text-glow-magenta transition-all">Projects</span>
            </h2>
          </div>
          <a href="https://github.com/abhaykrdev" target="_blank" rel="noreferrer" className="flex text-gray-300 hover:text-cyber-blue gap-2 items-center text-sm font-heading tracking-widest uppercase transition-colors shrink-0 bg-[#111] px-4 py-2 rounded-lg border border-[#444] hover:border-cyber-blue">
            View Github <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <TiltCard 
                title={project.title}
                desc={project.desc}
                img={project.img}
                link={project.link}
                repo={project.repo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
