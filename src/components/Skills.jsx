import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap,
  FaJs, 
  FaReact,
  FaPython,
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiRedux,
  SiC,
  SiCplusplus,
  SiVercel
} from 'react-icons/si';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorized skills data
  const skillsCategories = {
    all: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
      { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
      { name: 'JavaScript', icon: <FaJs />, level: 90 },
      { name: 'React.js', icon: <FaReact />, level: 90 },
      { name: 'Redux Toolkit', icon: <SiRedux />, level: 85 },
      { name: 'C', icon: <SiC />, level: 85 },
      { name: 'C++', icon: <SiCplusplus />, level: 85 },
      { name: 'Python', icon: <FaPython />, level: 80 },
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'Vercel', icon: <SiVercel />, level: 80 }
    ],
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
      { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
      { name: 'React.js', icon: <FaReact />, level: 90 },
      { name: 'Redux Toolkit', icon: <SiRedux />, level: 85 }
    ],
    Languages: [
      { name: 'C', icon: <SiC />, level: 85 },
      { name: 'C++', icon: <SiCplusplus />, level: 85 },
      { name: 'Python', icon: <FaPython />, level: 80 },
      { name: 'JavaScript', icon: <FaJs />, level: 90 }
    ],
    other: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'Vercel', icon: <SiVercel />, level: 80 }
    ]
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'Languages', label: 'Languages' },
    { id: 'other', label: 'Other' }
  ];

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

  return (
    <section id="skills" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with underline style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="text-[#38bdf8]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#38bdf8] mx-auto"></div>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-8 py-3 rounded-full font-medium text-base transition-all duration-300
                ${activeCategory === category.id 
                  ? 'bg-[#3b82f6] text-white' 
                  : 'bg-[#1e293b] text-slate-300 hover:bg-[#334155]'
                }
              `}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsCategories[activeCategory].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <motion.div
                    animate={{
                      rotate: hoveredSkill === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl text-[#38bdf8] group-hover:text-[#60a5fa] transition-colors duration-300"
                  >
                    {skill.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#38bdf8] transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <span className="text-sm font-bold text-[#38bdf8]">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Section - Clean UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-[#1e293b] rounded-2xl p-8 md:p-10 border border-slate-800">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white mb-8"
            >
              Also Familiar With
            </motion.h3>

            <div className="flex flex-wrap gap-3">
              {['Framer Motion', 'Responsive Design', 'RESTful APIs', 'GitHub', 'VS Code'].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-[#0f172a] text-slate-300 rounded-full border border-slate-700 hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all duration-300 cursor-pointer text-sm md:text-base font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;