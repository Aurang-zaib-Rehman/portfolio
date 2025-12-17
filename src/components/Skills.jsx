import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/projects';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            My <span className="text-[#38bdf8]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#38bdf8] mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)" }}
              className="bg-[#020617] p-8 rounded-xl border border-slate-800 hover:border-[#38bdf8] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>
              
              <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="absolute h-full bg-gradient-to-r from-[#38bdf8] to-cyan-400 rounded-full"
                />
              </div>
              
              <div className="mt-2 text-right">
                <span className="text-[#38bdf8] font-semibold">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Framer Motion', 'Responsive Design', 'RESTful APIs', 'npm', 'VS Code', 'Chrome DevTools'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-[#020617] text-gray-300 rounded-full border border-slate-800 hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;