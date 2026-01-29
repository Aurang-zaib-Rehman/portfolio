// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AnimatedBackground from './components/AnimateBackground';
// import ScrollToTop from './components/ScrollToTop';

// function App() {
//   return (
//     <div className="bg-[#0f172a] relative">
//       {/* Animated Background for entire website */}
//       <AnimatedBackground />
      
//       {/* All content with relative positioning */}
//       <div className="relative z-10">
//         <Navbar />
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//         <Footer />
//       </div>

//       {/* Scroll to Top Button */}
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;







import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimateBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Add smooth scroll behavior to the entire app
  useEffect(() => {
    // Add smooth scroll to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Add custom smooth scroll with easing (more control)
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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
        <Certificates />  {/* NEW: Certificates section added here */}
        <Contact />
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;