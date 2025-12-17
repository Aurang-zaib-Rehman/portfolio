import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textLines = [
    { line1: "I am,", line2: "Aurang Zaib Rehman" },
    { line1: "I Build", line2: "Responsive Websites" },
    { line1: "Experience", line2: "2+ Years" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textLines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Split text into characters for animation
  const currentText = textLines[currentTextIndex];
  const line1Chars = currentText.line1.split('');
  const line2Chars = currentText.line2.split('');

  // Animation variants for character-by-character animation
  const charVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    exit: (i) => ({
      opacity: 0,
      x: 20,
      transition: {
        delay: i * 0.03,
        duration: 0.2,
        ease: "easeIn"
      }
    })
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Picture with Glowing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative mb-8"
          >
            {/* Outer glow layers */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8] to-white blur-2xl opacity-40"></div>
            
            {/* Profile image container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#38bdf8] shadow-2xl shadow-[#38bdf8]/50"
            >
              <img 
                src="/profile.jpg" 
                alt="Aurang Zaib Rehman" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#38bdf8] to-purple-600 flex items-center justify-center text-white text-6xl font-bold">Z</div>';
                }}
              />
            </motion.div>
          </motion.div>

          {/* Animated Text Lines with Character-by-Character Animation */}
          <div className="min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                className="text-center"
              >
                {/* Line 1 - Character by Character */}
                <div className="text-2xl md:text-3xl text-[#38bdf8] font-semibold mb-2 flex justify-center">
                  {line1Chars.map((char, i) => (
                    <motion.span
                      key={`line1-${i}`}
                      custom={i}
                      variants={charVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="inline-block"
                      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </div>
                
                {/* Line 2 - Character by Character */}
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent flex justify-center">
                  {line2Chars.map((char, i) => (
                    <motion.span
                      key={`line2-${i}`}
                      custom={i + line1Chars.length}
                      variants={charVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="inline-block"
                      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 justify-center flex-wrap mt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#38bdf8] text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#38bdf8] text-[#38bdf8] font-bold rounded-lg hover:bg-[#38bdf8] hover:text-slate-900 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator with React Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#38bdf8] text-4xl"
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;