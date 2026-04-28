import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home',       id: 'home' },
    { name: 'About',      id: 'about' },
    { name: 'Projects',   id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact',    id: 'contact' },
  ];

  /* Highlight active link on scroll using IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#222]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => scrollTo('home')} className="text-2xl font-heading font-bold tracking-wider flex items-center gap-2 group">
          <span className="text-white group-hover:text-cyber-blue transition-colors">Abhay</span>
          <span className="text-cyber-magenta group-hover:text-glow-magenta transition-all">Kumar</span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-heading text-sm uppercase tracking-widest transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-cyber-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]'
                  : 'text-[#ccc] hover:text-cyber-blue'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white hover:text-cyber-magenta transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur border-b border-[#333] py-6">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-heading text-lg uppercase tracking-widest transition-colors ${
                  activeSection === link.id ? 'text-cyber-blue' : 'text-white hover:text-cyber-magenta'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
