import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone, Mail, User, ShieldCheck, Code, Film, BarChart, FileSpreadsheet, ExternalLink, Database, Cpu, FlaskConical, LineChart, Wifi } from 'lucide-react';
import { 
  SiPython, SiCplusplus, SiNumpy, SiPandas,
  SiJupyter, SiFigma, SiCanva, SiBlender, SiUnity, SiUnrealengine 
} from 'react-icons/si';
import { FaGamepad } from 'react-icons/fa6';

const SkillIcon = ({ icon: Icon, name, isMagenta }) => (
  <div className={`flex flex-col items-center gap-2 group p-4 glass-panel rounded-lg border border-[#333] hover:border-${isMagenta ? 'cyber-magenta' : 'cyber-blue'} transition-colors justify-center bg-[#0d0d0d]/90 backdrop-blur-md`}>
    <Icon className={`text-3xl text-gray-300 group-hover:text-[var(--tw-colors-${isMagenta ? 'cyber-magenta' : 'cyber-blue'})] group-hover:drop-shadow-[0_0_10px_var(--tw-colors-${isMagenta ? 'cyber-magenta' : 'cyber-blue'})] transition-all`} />
    <span className={`text-xs font-heading tracking-wider text-gray-200 group-hover:text-${isMagenta ? 'cyber-magenta' : 'cyber-blue'} text-center mt-2`}>{name}</span>
  </div>
);

const About = () => {
  const programmingSkills = [
    { name: "Python", icon: SiPython },
    { name: "C/C++", icon: SiCplusplus },
    { name: "C#", icon: Code },
    { name: "PyGame", icon: FaGamepad },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
    { name: "Matplotlib", icon: LineChart },
    { name: "Requests", icon: Wifi },
    { name: "Flask", icon: FlaskConical },
  ];

  const platformSkills = [
    { name: "Jupyter", icon: SiJupyter },
    { name: "After Effects", icon: Film },
    { name: "Figma", icon: SiFigma },
    { name: "Canva", icon: SiCanva },
    { name: "PowerBI", icon: BarChart },
    { name: "Excel", icon: FileSpreadsheet },
    { name: "Blender", icon: SiBlender },
    { name: "Unity", icon: SiUnity },
    { name: "Unreal 5", icon: SiUnrealengine },
  ];

  return (
    <div className="w-full py-24 px-6 relative z-10 mx-auto max-w-7xl">
      <div className="w-full flex flex-col gap-16 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center shrink-0"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold inline-block relative text-white drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
            About <span className="text-cyber-magenta">Me.<span className="animate-ping absolute -right-4 bottom-2 text-3xl">_</span></span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-transparent mt-4 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-16 w-full relative z-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-xl relative overflow-hidden xl:w-2/5 shrink-0 bg-[#0d0d0d]/95 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-lg border border-[#333]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/10 blur-[50px] rounded-full fade-in-out"></div>
            
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-white">
              <User className="text-cyber-blue" />
              Who am I?
            </h3>
            
            <p className="text-gray-200 mb-6 leading-relaxed font-body">
              Results-oriented Computer Science Engineering student with <span className="text-cyber-blue font-semibold">6+ months of professional Unity game development</span> experience at Akiyam Solutions Pvt. Ltd., where I contributed to a commercial psychological horror game. Proficient in <span className="text-cyber-magenta font-semibold">C/C++, C#, Python, JavaScript, SQL</span>, and OOP principles.
            </p>
            
            <p className="text-gray-100 mb-8 leading-relaxed font-body">
              Built <span className="text-cyber-blue font-semibold">AI-powered applications</span>, network security tools, and shipped <span className="text-cyber-magenta font-semibold">2D games using Unity and Pygame</span>. Seeking a Software Developer or Game Developer role where I can apply strong problem-solving skills with agile workflows and REST APIs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8 border-t border-[#333] pt-8">
              <div className="flex items-center gap-3 text-gray-200">
                <Calendar size={18} className="text-cyber-magenta shrink-0" />
                <span>13th Feb 2005</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <MapPin size={18} className="text-cyber-magenta shrink-0" />
                <span>Dhanbad, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Phone size={18} className="text-cyber-magenta shrink-0" />
                <span>+91 8210311720</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Mail size={18} className="text-cyber-magenta shrink-0" />
                <a href="mailto:krabhaybhai@gmail.com" className="hover:text-cyber-blue transition-colors text-sm truncate">krabhaybhai@gmail.com</a>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-10"
          >
            <div className="bg-[#000000]/70 p-6 rounded-2xl border border-[#222] backdrop-blur-md">
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 border-b border-[#333] pb-4 text-white">
                <ShieldCheck className="text-cyber-blue" />
                Programming Languages & Libraries
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {programmingSkills.map((skill, idx) => (
                  <SkillIcon key={idx} icon={skill.icon} name={skill.name} isMagenta={false} />
                ))}
              </div>
            </div>

            <div className="bg-[#000000]/70 p-6 rounded-2xl border border-[#222] backdrop-blur-md">
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 border-b border-[#333] pb-4 text-white">
                <ShieldCheck className="text-cyber-magenta" />
                Platforms & Softwares
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {platformSkills.map((skill, idx) => (
                  <SkillIcon key={idx} icon={skill.icon} name={skill.name} isMagenta={true} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mt-4"
        >
          <div className="bg-[#0d0d0d]/95 p-8 rounded-2xl border border-[#333] backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            <h3 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3 text-white border-b border-[#333] pb-4">
              <span className="text-cyber-blue">&lt;</span>
              Licenses & Certifications
              <span className="text-cyber-blue">/&gt;</span>
            </h3>

            <div className="flex flex-col gap-4">
              {/* CDAC */}
              <div className="glass-panel w-full p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#333] hover:border-cyber-blue transition-colors rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg bg-[#000] flex items-center justify-center shrink-0 border border-[#444]">
                    <ShieldCheck size={32} className="text-cyber-magenta" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-gray-100">Machine Learning for Cyber Security</h4>
                    <p className="text-sm font-heading tracking-widest text-[#999] uppercase mt-1">ACTS CDAC Hyderabad &bull; Oct 2025</p>
                  </div>
                </div>
                <a href="https://www.linkedin.com/in/abhay-kumar-gamedev/overlay/Certifications/1040235147/treasury/?profileId=ACoAAEjftYwBv8s99FXgm7C-bBW2inUI3tgRR3s&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BIEs4O4EpSHevakWV9Qm6Dw%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-cyber-dark border border-gray-600 hover:border-cyber-blue hover:text-cyber-blue text-sm font-heading font-bold tracking-widest uppercase transition-all whitespace-nowrap w-fit">
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>

              {/* NVIDIA */}
              <div className="glass-panel w-full p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#333] hover:border-[#76B900] transition-colors rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg bg-[#000] flex items-center justify-center shrink-0 border border-[#444]">
                    <span className="text-2xl font-bold font-heading text-[#76B900]">NV</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-gray-100">Building Real-Time Video AI Applications</h4>
                    <p className="text-sm font-heading tracking-widest text-[#999] uppercase mt-1">NVIDIA &bull; Jan 2025</p>
                  </div>
                </div>
                <a href="https://www.linkedin.com/in/abhay-kumar-gamedev/overlay/Certifications/147941531/treasury/?profileId=ACoAAEjftYwBv8s99FXgm7C-bBW2inUI3tgRR3s&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BIEs4O4EpSHevakWV9Qm6Dw%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-cyber-dark border border-gray-600 hover:border-[#76B900] hover:text-[#76B900] text-sm font-heading font-bold tracking-widest uppercase transition-all whitespace-nowrap w-fit">
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>

              {/* MICROSOFT */}
              <div className="glass-panel w-full p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#333] hover:border-[#00a4ef] transition-colors rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg bg-[#000] flex items-center justify-center shrink-0 border border-[#444]">
                    <div className="grid grid-cols-2 gap-1 w-8 h-8">
                      <div className="bg-[#f35325]"></div><div className="bg-[#81bc06]"></div>
                      <div className="bg-[#05a6f0]"></div><div className="bg-[#ffba08]"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-gray-100">Microsoft Cybersecurity Reference Architecture (MCRA)</h4>
                    <p className="text-sm font-heading tracking-widest text-[#999] uppercase mt-1">Microsoft Learning</p>
                  </div>
                </div>
                <a href="https://learn.microsoft.com/en-in/users/abhaykumar-6565/achievements/yec2dxtr?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-cyber-dark border border-gray-600 hover:border-[#00a4ef] hover:text-[#00a4ef] text-sm font-heading font-bold tracking-widest uppercase transition-all whitespace-nowrap w-fit">
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>

              {/* NEO4J */}
              <div className="glass-panel w-full p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#333] hover:border-[#018bff] transition-colors rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg bg-[#000] flex items-center justify-center shrink-0 border border-[#444]">
                    <Database size={32} className="text-[#018bff]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-gray-100">Neo4j Certified Professional</h4>
                    <p className="text-sm font-heading tracking-widest text-[#999] uppercase mt-1">Neo4j &bull; Jul 2025</p>
                  </div>
                </div>
                <a href="https://graphacademy.neo4j.com/c/0d716ff7-fdf0-43cb-83e2-06470f622253/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-cyber-dark border border-gray-600 hover:border-[#018bff] hover:text-[#018bff] text-sm font-heading font-bold tracking-widest uppercase transition-all whitespace-nowrap w-fit">
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>

              {/* CISCO */}
              <div className="glass-panel w-full p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#333] hover:border-[#049fd9] transition-colors rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg bg-[#000] flex items-center justify-center shrink-0 border border-[#444]">
                    <Cpu size={32} className="text-[#049fd9]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-gray-100">Introduction to Cybersecurity</h4>
                    <p className="text-sm font-heading tracking-widest text-[#999] uppercase mt-1">Cisco &bull; Jun 2025</p>
                  </div>
                </div>
                <a href="https://www.linkedin.com/in/abhay-kumar-gamedev/overlay/Certifications/796799298/treasury/?profileId=ACoAAEjftYwBv8s99FXgm7C-bBW2inUI3tgRR3s&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLCWrIuvXSaSAD50WMCbqHQ%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-cyber-dark border border-gray-600 hover:border-[#049fd9] hover:text-[#049fd9] text-sm font-heading font-bold tracking-widest uppercase transition-all whitespace-nowrap w-fit">
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
