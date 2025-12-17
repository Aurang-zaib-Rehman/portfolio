import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimateBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-[#0f172a] relative">
      {/* Animated Background for entire website */}
      <AnimatedBackground />
      
      {/* All content with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;