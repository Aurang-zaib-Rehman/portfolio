// import React from 'react';
// import { motion } from 'framer-motion';
// import { skillsData } from '../data/projects';

// const Skills = () => {
//   return (
//     <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-5xl font-bold text-white mb-4 text-center">
//             My <span className="text-[#38bdf8]">Skills</span>
//           </h2>
//           <div className="w-24 h-1 bg-[#38bdf8] mx-auto mb-12"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillsData.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)" }}
//               className="bg-[#020617] p-8 rounded-xl border border-slate-800 hover:border-[#38bdf8] transition-all duration-300"
//             >
//               <div className="text-5xl mb-4">{skill.icon}</div>
//               <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>
              
//               <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
//                   className="absolute h-full bg-gradient-to-r from-[#38bdf8] to-cyan-400 rounded-full"
//                 />
//               </div>
              
//               <div className="mt-2 text-right">
//                 <span className="text-[#38bdf8] font-semibold">{skill.level}%</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Additional Skills Tags */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <h3 className="text-2xl font-bold text-white mb-6">Also Familiar With</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {['Framer Motion', 'Responsive Design', 'RESTful APIs', 'npm', 'VS Code', 'Chrome DevTools'].map((tag, index) => (
//               <motion.span
//                 key={tag}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.9 + index * 0.05 }}
//                 whileHover={{ scale: 1.1 }}
//                 className="px-6 py-3 bg-[#020617] text-gray-300 rounded-full border border-slate-800 hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all duration-300"
//               >
//                 {tag}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/projects';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm tracking-wider uppercase">
              Technical Expertise
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Skills
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                animate={{
                  scale: hoveredSkill === index ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: hoveredSkill === index ? Infinity : 0,
                }}
              />

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  animate={{
                    rotateY: hoveredSkill === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Progress Bar Container */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Proficiency</span>
                    <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
                    >
                      <motion.div
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background Card */}
          <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/30">
            {/* Animated Border Glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20"
            />

            <div className="relative">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              >
                Also Familiar With
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                {['Framer Motion', 'Responsive Design', 'RESTful APIs', 'npm', 'VS Code', 'Chrome DevTools'].map((tag, index) => (
                  <motion.span
                    key={index}
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 backdrop-blur-sm cursor-pointer overflow-hidden"
                  >
                    {/* Hover Gradient Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    <span className="relative text-slate-300 group-hover:text-white font-medium text-sm md:text-base transition-colors duration-300">
                      {tag}
                    </span>

                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;