import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
              Hello! I'm Zaib, a passionate Web Developer
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm currently pursuing my BS in Computer Science while building modern, 
              responsive web applications. I specialize in front-end development with 
              React.js and love creating intuitive user experiences.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in web development started with a curiosity about how websites 
              work, and it has evolved into a passion for creating beautiful, functional 
              digital experiences. I'm constantly learning new technologies and best 
              practices to stay at the forefront of web development.
            </p>

            <div className="flex gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#020617] p-6 rounded-lg border border-slate-800"
              >
                <div className="text-4xl font-bold text-[#38bdf8] mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#020617] p-6 rounded-lg border border-slate-800"
              >
                <div className="text-4xl font-bold text-[#38bdf8] mb-2">15+</div>
                <div className="text-gray-400">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#38bdf8]/20 to-cyan-500/20 p-1 rounded-2xl">
              <div className="bg-[#020617] p-8 rounded-2xl">
                <div className="space-y-4">
                  {[
                    { label: 'Name', value: 'Zaib' },
                    { label: 'Education', value: 'BS Computer Science' },
                    { label: 'Specialization', value: 'Web Development' },
                    { label: 'Location', value: 'Pakistan' },
                    { label: 'Status', value: 'Available for Work' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex justify-between items-center py-3 border-b border-slate-800"
                    >
                      <span className="text-gray-400 font-medium">{item.label}:</span>
                      <span className="text-white font-semibold">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;