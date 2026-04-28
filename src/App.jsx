import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, TorusKnot, Float } from '@react-three/drei';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const GlowingShape = () => {
  const meshRef = useRef();
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[10, 2, 128, 64]} scale={0.15}>
        <meshStandardMaterial color="#aa0022" emissive="#ff003c" emissiveIntensity={0.6} wireframe />
      </TorusKnot>
    </Float>
  );
};

const Global3DBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#00f0ff" />
      <pointLight position={[5, 3, -2]} intensity={0.3} color="#ff003c" />
      <Stars radius={100} depth={60} count={4000} factor={5} saturation={0.2} fade speed={1.2} />
      <Stars radius={50} depth={30} count={1000} factor={2} saturation={0.5} fade speed={0.5} />
      <GlowingShape />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
    </Canvas>
  </div>
);

// Floating particles overlay (CSS-driven, no extra deps)
const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  delay: Math.random() * 20,
  duration: Math.random() * 15 + 15,
  opacity: Math.random() * 0.4 + 0.1,
  hue: Math.random() > 0.5 ? '0, 240, 255' : '255, 0, 60',
}));

const FloatingParticles = () => (
  <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
    {PARTICLES.map((p) => (
      <div
        key={p.id}
        className="particle"
        style={{
          width: p.size + 'px',
          height: p.size + 'px',
          left: p.left + '%',
          bottom: '-4%',
          opacity: p.opacity,
          animationDelay: p.delay + 's',
          animationDuration: p.duration + 's',
          background: `rgba(${p.hue}, ${p.opacity + 0.2})`,
          boxShadow: `0 0 ${p.size * 3}px rgba(${p.hue}, ${p.opacity})`,
        }}
      />
    ))}
  </div>
);

function App() {
  return (
    <div className="relative w-full bg-[#050505] text-white font-body selection:bg-cyber-magenta selection:text-white">
      {/* Fixed 3D star background */}
      <Global3DBackground />
      {/* Floating particle overlay */}
      <FloatingParticles />

      {/* Dark veil for text contrast */}
      <div className="fixed inset-0 z-[2] bg-black/40 pointer-events-none" />

      {/* Fixed Navbar */}
      <Navbar />

      {/* All sections stacked — fully scrollable */}
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
