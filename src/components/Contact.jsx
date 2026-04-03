import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="w-full flex-1 flex py-16 px-6 relative z-10 mx-auto max-w-5xl h-full items-start overflow-y-auto container-scroll">
      <div className="w-full flex flex-col gap-10 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold inline-block relative text-white">
            <span className="text-cyber-magenta opacity-80">&lt;</span> Contact <span className="text-cyber-magenta opacity-80">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent mt-4 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-cyber-panel/40 border border-[#333] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
          {/* Left: Info */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-[#333] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-magenta/5 blur-[80px] group-hover:bg-cyber-magenta/10 transition-colors"></div>
            
            <h3 className="text-3xl font-heading font-bold text-gray-200 mb-6">Initialize Connection</h3>
            <p className="text-gray-400 mb-10 leading-relaxed font-body">Ready to build something unique? Drop a signal to connect for cybersecurity collaborations, game dev, or aesthetic UI systems.</p>

            <div className="space-y-6">
              <a href="https://github.com/abhaykrdev" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-cyber-blue transition-colors group/link w-fit">
                <div className="w-10 h-10 border border-[#444] rounded bg-cyber-dark/80 flex items-center justify-center group-hover/link:border-cyber-blue transition-colors">
                  <FaGithub size={20} />
                </div>
                <span className="font-heading tracking-wide">github.com/abhaykrdev</span>
              </a>
              
              <a href="https://www.linkedin.com/in/abhay-kumar-0645532a1/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-cyber-blue transition-colors group/link w-fit">
                <div className="w-10 h-10 border border-[#444] rounded bg-cyber-dark/80 flex items-center justify-center group-hover/link:border-cyber-blue transition-colors">
                  <FaLinkedin size={20} />
                </div>
                <span className="font-heading tracking-wide">linkedin.com/in/abhay-kumar</span>
              </a>

              <a href="https://www.instagram.com/known_as_venus" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-cyber-magenta transition-colors group/link w-fit">
                <div className="w-10 h-10 border border-[#444] rounded bg-cyber-dark/80 flex items-center justify-center group-hover/link:border-cyber-magenta transition-colors">
                  <FaInstagram size={20} />
                </div>
                <span className="font-heading tracking-wide">@known_as_venus</span>
              </a>

              <a href="mailto:krabhaybhai@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-cyber-blue transition-colors group/link w-fit">
                <div className="w-10 h-10 border border-[#444] rounded bg-cyber-dark/80 flex items-center justify-center group-hover/link:border-cyber-blue transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-heading tracking-wide">krabhaybhai@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/5 blur-[50px] transition-colors"></div>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6 relative z-10">
              <input type="hidden" name="access_key" value="0d24233d-6f05-4fd7-bec1-8fdf07ea74b4" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-heading font-medium tracking-widest text-[#888] uppercase">Name</label>
                  <input type="text" name="name" required className="bg-cyber-dark/60 border border-[#333] p-3 text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all font-body" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-heading font-medium tracking-widest text-[#888] uppercase">Email</label>
                  <input type="email" name="email" required className="bg-cyber-dark/60 border border-[#333] p-3 text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all font-body" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-heading font-medium tracking-widest text-[#888] uppercase">Subject</label>
                <input type="text" name="subject" required className="bg-cyber-dark/60 border border-[#333] p-3 text-white focus:outline-none focus:border-cyber-magenta focus:shadow-[0_0_10px_rgba(255,0,60,0.3)] transition-all font-body" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-heading font-medium tracking-widest text-[#888] uppercase">Message</label>
                <textarea name="message" rows="4" required className="bg-cyber-dark/60 border border-[#333] p-3 text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all font-body resize-y" />
              </div>

              <button type="submit" className="mt-4 flex items-center justify-center gap-3 w-full border border-cyber-blue text-cyber-blue py-4 font-heading font-bold uppercase tracking-widest hover:bg-cyber-blue hover:text-cyber-dark hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all duration-300">
                <Send size={18} /> Transmit Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 w-full border-t border-[#222] pt-8 text-center shrink-0">
          <p className="text-[#555] font-mono text-sm uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Abhay Kumar <span className="mx-2">|</span> Built with React & ThreeJS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
