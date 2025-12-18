import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            Featured <span className="text-[#38bdf8]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#38bdf8] mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative bg-[#020617] rounded-xl overflow-hidden border border-slate-800 hover:border-[#38bdf8] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-[#38bdf8]/20 to-cyan-500/10 flex items-center justify-center overflow-hidden relative">
                {typeof project.image === 'string' && project.image.endsWith('.jpg') ? (
                  // Placeholder for images that haven't been imported yet
                  <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                    💻
                  </div>
                ) : (
                  // Display actual imported image
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-6xl opacity-50">💻</div>';
                    }}
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-900 text-[#38bdf8] rounded-full border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-[#38bdf8] text-slate-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 text-center"
                  >
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 border-2 border-[#38bdf8] text-[#38bdf8] font-semibold rounded-lg hover:bg-[#38bdf8] hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;