// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { HiArrowDown } from 'react-icons/hi';
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
// import { IoClose } from 'react-icons/io5';
// import { HiShare } from 'react-icons/hi2';
// import Profile_img from "../assets/images/profile.png";

// const Hero = () => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [showSocial, setShowSocial] = useState(false);
//   const [isInHeroSection, setIsInHeroSection] = useState(true);
  
//   const textLines = [
//     { line1: "I am,", line2: "Aurang Zaib Rehman" },
//     { line1: "I Build", line2: "Responsive Websites" },
//     { line1: "Experience", line2: "1+ Years" }
//   ];

//   // Social media links - UPDATE THESE WITH YOUR ACTUAL LINKS
//   const socialLinks = [
//     { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername', color: '#333' },
//     { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: '#0077B5' },
//     { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername', color: '#E4405F' },
//     { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com/yourusername', color: '#1877F2' },
//     { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com/@yourusername', color: '#000' }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prev) => (prev + 1) % textLines.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   // Track if user is in hero section
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.getElementById('hero');
//       if (heroSection) {
//         const rect = heroSection.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
//         setIsInHeroSection(isVisible);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Split text into characters for animation
//   const currentText = textLines[currentTextIndex];
//   const line1Chars = currentText.line1.split('');
//   const line2Chars = currentText.line2.split('');

//   // Animation variants for character-by-character animation
//   const charVariants = {
//     hidden: { 
//       opacity: 0, 
//       x: -20 
//     },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.05,
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }),
//     exit: (i) => ({
//       opacity: 0,
//       x: 20,
//       transition: {
//         delay: i * 0.03,
//         duration: 0.2,
//         ease: "easeIn"
//       }
//     })
//   };

//   // Social button animations
//   const socialButtonVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: (i) => ({
//       scale: 1,
//       opacity: 1,
//       transition: {
//         delay: i * 0.1,
//         type: "spring",
//         stiffness: 260,
//         damping: 20
//       }
//     }),
//     exit: {
//       scale: 0,
//       opacity: 0,
//       transition: { duration: 0.1 }
//     }
//   };

//   // Handle social link click - instant navigation
//   const handleSocialClick = (url) => {
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col items-center"
//         >
//           {/* Profile Picture with Glowing Effect */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="relative mb-8 mt-8"
//           >
//             {/* Outer glow layers */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-60 animate-pulse"></div>
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8] to-white blur-2xl opacity-40"></div>
            
//             {/* Profile image container */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#38bdf8] shadow-2xl shadow-[#38bdf8]/50"
//             >
//               <img 
//                 src= {Profile_img} 
//                 alt="Aurang Zaib Rehman" 
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#38bdf8] to-purple-600 flex items-center justify-center text-white text-6xl font-bold">Z</div>';
//                 }}
//               />
//             </motion.div>
//           </motion.div>

//           {/* Animated Text Lines with Character-by-Character Animation */}
//           <div className="min-h-[200px] flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentTextIndex}
//                 className="text-center"
//               >
//                 {/* Line 1 - Character by Character */}
//                 <div className="text-2xl md:text-3xl text-[#38bdf8] font-semibold mb-2 flex justify-center">
//                   {line1Chars.map((char, i) => (
//                     <motion.span
//                       key={`line1-${i}`}
//                       custom={i}
//                       variants={charVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className="inline-block"
//                       style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
//                     >
//                       {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                   ))}
//                 </div>
                
//                 {/* Line 2 - Character by Character */}
//                 <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent flex justify-center">
//                   {line2Chars.map((char, i) => (
//                     <motion.span
//                       key={`line2-${i}`}
//                       custom={i + line1Chars.length}
//                       variants={charVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className="inline-block"
//                       style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
//                     >
//                       {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex gap-6 justify-center flex-wrap mt-8"
//           >
//             <motion.a
//               href="#projects"
//               whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)" }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-[#38bdf8] text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300"
//             >
//               View My Work
//             </motion.a>
            
//             <motion.a
//               href="/assets/cv.pdf"
//               download="AurangZaibRehman_CV.pdf"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 border-2 border-[#38bdf8] text-[#38bdf8] font-bold rounded-lg hover:bg-[#38bdf8] hover:text-slate-900 transition-all duration-300"
//             >
//               Download CV
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Floating Social Media Button - Only visible in hero section */}
//       {isInHeroSection && (
//         <div className="fixed left-4 md:left-8 bottom-20 md:bottom-8 z-50">
//           {/* Social Icons */}
//           <AnimatePresence>
//             {showSocial && (
//               <motion.div 
//                 className="flex flex-col gap-2 mb-3"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 {socialLinks.map((social, index) => {
//                   const Icon = social.icon;
//                   return (
//                     <motion.button
//                       key={social.name}
//                       onClick={() => handleSocialClick(social.url)}
//                       custom={index}
//                       variants={socialButtonVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       whileHover={{ scale: 1.2, rotate: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-[#38bdf8]/30 flex items-center justify-center text-white shadow-lg hover:shadow-[#38bdf8]/50 transition-all duration-300 group cursor-pointer"
//                       style={{
//                         boxShadow: `0 0 15px ${social.color}40`
//                       }}
//                       aria-label={`Visit ${social.name}`}
//                     >
//                       <Icon className="text-lg md:text-xl group-hover:text-[#38bdf8] transition-colors duration-300" />
//                     </motion.button>
//                   );
//                 })}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Main Toggle Button */}
//           <motion.button
//             onClick={() => setShowSocial(!showSocial)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#38bdf8] to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-[#38bdf8]/50 hover:shadow-[#38bdf8]/70 transition-all duration-300"
//             aria-label="Toggle social media links"
//           >
//             <AnimatePresence mode="wait">
//               {showSocial ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <IoClose className="text-2xl md:text-3xl" />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="share"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <HiShare className="text-2xl md:text-3xl" />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.button>
//         </div>
//       )}

//       {/* Scroll Indicator with React Icon - Hidden on mobile */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
//         onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="text-[#38bdf8] text-4xl"
//         >
//           <HiArrowDown />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;












import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { HiShare } from 'react-icons/hi2';
import Profile_img from "../assets/images/profile.png";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showSocial, setShowSocial] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  
  const textLines = [
    { line1: "I am,", line2: "Aurang Zaib Rehman" },
    { line1: "I Build", line2: "Responsive Websites" },
    { line1: "Experience", line2: "1+ Years" }
  ];

  // Social media links - UPDATE THESE WITH YOUR ACTUAL LINKS
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername', color: '#333' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: '#0077B5' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername', color: '#E4405F' },
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com/yourusername', color: '#1877F2' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com/@yourusername', color: '#000' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textLines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Track if user is in hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInHeroSection(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Social button animations - FASTER with minimal delay
  const socialButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.03, // Changed from 0.1 to 0.03 for much faster appearance
        type: "spring",
        stiffness: 400, // Increased from 260 for snappier animation
        damping: 25
      }
    }),
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.1 }
    }
  };

  // Handle social link click - instant navigation
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
            className="relative mb-8 mt-16 md:mt-20"
          >
            {/* Outer glow layers */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8] to-white blur-2xl opacity-40"></div>
            
            {/* Profile image container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#38bdf8] shadow-2xl shadow-[#38bdf8]/50"
            >
              <img 
                src= {Profile_img} 
                alt="Aurang Zaib Rehman" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#38bdf8] to-purple-600 flex items-center justify-center text-white text-6xl font-bold">Z</div>';
                }}
              />
            </motion.div>
          </motion.div>

          {/* Animated Text Lines with Character-by-Character Animation - REDUCED SIZE */}
          <div className="min-h-[140px] md:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                className="text-center"
              >
                {/* Line 1 - Character by Character - SMALLER */}
                <div className="text-xl md:text-2xl text-[#38bdf8] font-semibold mb-1 md:mb-2 flex justify-center">
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
                
                {/* Line 2 - Character by Character - SMALLER */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent flex justify-center">
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
            className="flex gap-6 justify-center flex-wrap mt-8 mb-20 md:mb-24"
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
              href="/assets/cv.pdf"
              download="AurangZaibRehman_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#38bdf8] text-[#38bdf8] font-bold rounded-lg hover:bg-[#38bdf8] hover:text-slate-900 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Social Media Button - Only visible in hero section */}
      {isInHeroSection && (
        <div className="fixed left-4 md:left-8 bottom-20 md:bottom-8 z-50">
          {/* Social Icons */}
          <AnimatePresence>
            {showSocial && (
              <motion.div 
                className="flex flex-col gap-2 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.button
                      key={social.name}
                      onClick={() => handleSocialClick(social.url)}
                      custom={index}
                      variants={socialButtonVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-[#38bdf8]/30 flex items-center justify-center text-white shadow-lg hover:shadow-[#38bdf8]/50 transition-all duration-300 group cursor-pointer"
                      style={{
                        boxShadow: `0 0 15px ${social.color}40`
                      }}
                      aria-label={`Visit ${social.name}`}
                    >
                      <Icon className="text-lg md:text-xl group-hover:text-[#38bdf8] transition-colors duration-300" />
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            onClick={() => setShowSocial(!showSocial)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#38bdf8] to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-[#38bdf8]/50 hover:shadow-[#38bdf8]/70 transition-all duration-300"
            aria-label="Toggle social media links"
          >
            <AnimatePresence mode="wait">
              {showSocial ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoClose className="text-2xl md:text-3xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="share"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiShare className="text-2xl md:text-3xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}

      {/* Scroll Indicator with React Icon - Hidden on mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
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