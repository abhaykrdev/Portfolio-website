import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-magenta/30 py-4 pointer-events-auto">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="text-2xl font-heading font-bold tracking-wider flex items-center gap-2 group">
          <span className="text-white group-hover:text-cyber-blue transition-colors">Abhay</span>
          <span className="text-cyber-magenta group-hover:text-glow-magenta transition-all">Kumar</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)}
              className={`font-heading text-sm uppercase tracking-widest transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-cyber-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' 
                  : 'text-[#ccc] hover:text-cyber-blue hover:text-glow-blue'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-white hover:text-cyber-magenta transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-cyber-panel/95 backdrop-blur border-b border-cyber-magenta/30 transition-all duration-300 ${mobileMenuOpen ? 'h-auto py-6 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)}
              className={`font-heading text-lg uppercase tracking-widest transition-colors ${
                activeSection === link.id ? 'text-cyber-blue' : 'text-white hover:text-cyber-magenta'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
