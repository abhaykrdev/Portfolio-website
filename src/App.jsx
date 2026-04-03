import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, TorusKnot, Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

// Global 3D Object
const GlowingShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[10, 2, 128, 64]} scale={0.15}>
        <meshStandardMaterial 
          color="#aa0022" 
          emissive="#ff003c"
          emissiveIntensity={0.6} // Reduced heavily for text visibility
          wireframe
        />
      </TorusKnot>
    </Float>
  );
};

// Background Layout
const Global3DBackground = () => (
  <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-auto">
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <GlowingShape />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const contentRenderer = () => {
    switch(activeSection) {
      case 'home': return <Hero setActiveSection={setActiveSection} key="home" />;
      case 'about': return <About key="about" />;
      case 'services': return <Services key="services" />;
      case 'projects': return <Projects key="projects" />;
      case 'contact': return <Contact key="contact" />;
      default: return <Hero setActiveSection={setActiveSection} key="home" />;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#050505] overflow-hidden text-white font-body selection:bg-cyber-magenta selection:text-white">
      {/* Absolute Global 3D Background */}
      <Global3DBackground />

      {/* Main UI Overlay Area with a slight darkening veil for contrast */}
      <div className="absolute inset-0 z-10 flex flex-col h-screen pointer-events-none bg-black/30 backdrop-blur-[2px]">
        
        {/* Navbar */}
        <div className="pointer-events-auto shrink-0 relative z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#222]">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Dynamic Navigated Content Boxed */}
        <div className="flex-1 w-full overflow-hidden relative pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              {contentRenderer()}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default App;
