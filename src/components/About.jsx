// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-[#0f172a] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-5xl font-bold text-white mb-4 text-center">
//             About <span className="text-[#38bdf8]">Me</span>
//           </h2>
//           <div className="w-24 h-1 bg-[#38bdf8] mx-auto mb-12"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl font-bold text-white">
//               Hello! I'm Zaib, a Web Developer
//             </h3>
            
//             <p className="text-gray-400 text-lg leading-relaxed">
//               I'm a third-year Computer Science student at the University of Engineering and Technology (UET) Mardan, with a deep passion for software engineering. I love building innovative solutions and exploring the intersection of technology and human potential.
//             </p>
            
//             <p className="text-gray-400 text-lg leading-relaxed">
//               I'm currently focused on developing responsive and interactive websites using modern web technologies such as HTML, CSS, JavaScript, and React. I'm passionate about creating clean, intuitive, and user-friendly interfaces that deliver seamless and engaging experiences across all devices. With a strong eye for detail and a commitment to continuous learning, I strive to combine creativity with efficient, scalable code to build impactful digital solutions.
//             </p>

//             <div className="flex gap-4 pt-4">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-[#020617] p-6 rounded-lg border border-slate-800"
//               >
//                 <div className="text-4xl font-bold text-[#38bdf8] mb-2">1+</div>
//                 <div className="text-gray-400">Years Experience</div>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-[#020617] p-6 rounded-lg border border-slate-800"
//               >
//                 <div className="text-4xl font-bold text-[#38bdf8] mb-2">10+</div>
//                 <div className="text-gray-400">Projects Completed</div>
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="relative"
//           >
//             <div className="relative bg-gradient-to-br from-[#38bdf8]/20 to-cyan-500/20 p-1 rounded-2xl">
//               <div className="bg-[#020617] p-8 rounded-2xl">
//                 <div className="space-y-4">
//                   {[
//                     { label: 'Name', value: 'Zaib' },
//                     { label: 'Education', value: 'BS Computer Science' },
//                     { label: 'Specialization', value: 'Web Development' },
//                     { label: 'Location', value: 'Pakistan' },
//                     { label: 'Status', value: 'Available for Work' }
//                   ].map((item, index) => (
//                     <motion.div
//                       key={item.label}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.6 + index * 0.1 }}
//                       className="flex justify-between items-center py-3 border-b border-slate-800"
//                     >
//                       <span className="text-gray-400 font-medium">{item.label}:</span>
//                       <span className="text-white font-semibold">{item.value}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;








import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate years counter
          let yearsStart = 0;
          const yearsEnd = 1;
          const yearsDuration = 1000;
          const yearsIncrement = yearsEnd / (yearsDuration / 16);
          
          const yearsTimer = setInterval(() => {
            yearsStart += yearsIncrement;
            if (yearsStart >= yearsEnd) {
              setYearsCount(yearsEnd);
              clearInterval(yearsTimer);
            } else {
              setYearsCount(Math.floor(yearsStart));
            }
          }, 16);

          // Animate projects counter
          let projectsStart = 0;
          const projectsEnd = 10;
          const projectsDuration = 1500;
          const projectsIncrement = projectsEnd / (projectsDuration / 16);
          
          const projectsTimer = setInterval(() => {
            projectsStart += projectsIncrement;
            if (projectsStart >= projectsEnd) {
              setProjectsCount(projectsEnd);
              clearInterval(projectsTimer);
            } else {
              setProjectsCount(Math.floor(projectsStart));
            }
          }, 16);

          return () => {
            clearInterval(yearsTimer);
            clearInterval(projectsTimer);
          };
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Creating responsive, high-performance websites and web applications tailored to your specific needs."
    },
    {
      icon: FaPaintBrush,
      title: "Frontend Development",
      description: "Building interactive user interfaces with modern frameworks like React, optimized for speed and usability."
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description: "Ensuring your website looks and works great on all devices, from mobile phones to desktop computers."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            About <span className="text-[#38bdf8]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#38bdf8] mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Hello! I'm Zaib, a Web Developer
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a third-year Computer Science student at the University of Engineering and Technology (UET) Mardan, with a deep passion for software engineering. I love building innovative solutions and exploring the intersection of technology and human potential.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm currently focused on developing responsive and interactive websites using modern web technologies such as HTML, CSS, JavaScript, and React. I'm passionate about creating clean, intuitive, and user-friendly interfaces that deliver seamless and engaging experiences across all devices. With a strong eye for detail and a commitment to continuous learning, I strive to combine creativity with efficient, scalable code to build impactful digital solutions.
            </p>

            <div ref={statsRef} className="flex gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#020617] p-6 rounded-lg border border-slate-800"
              >
                <div className="text-4xl font-bold text-[#38bdf8] mb-2">
                  {yearsCount}+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#020617] p-6 rounded-lg border border-slate-800"
              >
                <div className="text-4xl font-bold text-[#38bdf8] mb-2">
                  {projectsCount}+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-[#1e293b] p-6 rounded-lg border border-slate-800 hover:border-[#38bdf8] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#38bdf8]/10 p-3 rounded-lg group-hover:bg-[#38bdf8]/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#38bdf8]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#38bdf8] mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;