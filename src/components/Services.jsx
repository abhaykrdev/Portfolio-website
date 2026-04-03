import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Code, Video, Box as Cube, Gamepad2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, delay, activeColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel p-8 rounded-xl flex flex-col items-start gap-4 group cursor-crosshair hover:border-${activeColor} bg-cyber-dark/40`}
      style={{ '--hover-color': activeColor === 'cyber-magenta' ? '#ff003c' : '#00f0ff' }}
    >
      <div 
        className={`w-14 h-14 rounded-lg flex items-center justify-center bg-black/50 border border-[#333] group-hover:border-[var(--hover-color)] transition-colors`}
      >
        <Icon size={28} className={`text-gray-400 group-hover:text-[var(--hover-color)] group-hover:drop-shadow-[0_0_8px_var(--hover-color)] transition-all`} />
      </div>
      <h4 className="text-xl font-heading font-bold mt-4 tracking-wide group-hover:text-[var(--hover-color)] transition-colors text-gray-200">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: LayoutTemplate,
      title: "UI/UX Designing",
      desc: "Wireframing, user flow optimization, and intuitive interface creation for better psychological flow and user experiences.",
      color: "cyber-blue"
    },
    {
      icon: Code,
      title: "Web Development",
      desc: "Responsive and interactive websites utilizing modern Javascript frameworks and robust backend support.",
      color: "cyber-magenta"
    },
    {
      icon: Video,
      title: "Video Editing",
      desc: "Editing dramatic trailers, gameplay montages, and engaging shorts with tools like DaVinci Resolve & Premiere Pro.",
      color: "cyber-blue"
    },
    {
      icon: Cube,
      title: "3D Modeling",
      desc: "Creating game-ready assets, low-poly environments, and complex 3D concepts using Blender.",
      color: "cyber-magenta"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      desc: "Playable game demos using Unity or Godot — robust mechanics, basic UI, and fully functional gameplay loops.",
      color: "cyber-blue"
    }
  ];

  return (
    <div className="w-full flex-1 flex py-16 px-6 relative z-10 mx-auto max-w-7xl h-full items-start overflow-y-auto container-scroll">
      <div className="w-full flex flex-col gap-10 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold inline-block relative">
            <span className="text-cyber-blue">Services</span> Architecture
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-magenta to-transparent mt-4 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              icon={service.icon} 
              title={service.title} 
              desc={service.desc} 
              delay={0.1 * idx} 
              activeColor={service.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
