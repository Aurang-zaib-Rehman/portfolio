import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  // Your certificates data - UPDATE THIS WITH YOUR ACTUAL CERTIFICATES
  const certificatesData = [
    {
      id: 1,
      title: "Frontend Development",
      issuer: "Coursera / Meta",
      date: "2024",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and React fundamentals.",
      credentialLink: "#", // Add your credential link
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Mastered responsive design principles and modern CSS techniques.",
      credentialLink: "#",
      skills: ["CSS3", "Bootstrap", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      description: "Advanced React concepts including hooks, context, and Redux.",
      credentialLink: "#",
      skills: ["React", "Redux", "Hooks"]
    },
    {
      id: 4,
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Data structures and algorithms implementation in JavaScript.",
      credentialLink: "#",
      skills: ["JavaScript", "Algorithms"]
    },
    {
      id: 5,
      title: "Git & GitHub",
      issuer: "Coursera",
      date: "2023",
      description: "Version control, collaboration, and best practices with Git.",
      credentialLink: "#",
      skills: ["Git", "GitHub"]
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Full-stack web development fundamentals and project building.",
      credentialLink: "#",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="text-[#38bdf8]">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-[#38bdf8] mx-auto"></div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCert(cert.id)}
              onHoverEnd={() => setHoveredCert(null)}
              whileHover={{ y: -15 }}
              className="group relative bg-[#020617] rounded-xl overflow-hidden border border-slate-800 hover:border-[#38bdf8] transition-all duration-300"
            >
              {/* Certificate Icon Header */}
              <div className="h-32 bg-gradient-to-br from-[#38bdf8]/20 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{
                    rotate: hoveredCert === cert.id ? 360 : 0,
                    scale: hoveredCert === cert.id ? 1.2 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl text-[#38bdf8] opacity-50"
                >
                  <FaCertificate />
                </motion.div>
                
                {/* Floating particles on hover */}
                {hoveredCert === cert.id && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: [0, 1, 0], y: -50 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute bottom-0 left-1/4 w-2 h-2 bg-[#38bdf8] rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: [0, 1, 0], y: -50 }}
                      transition={{ duration: 1.5, delay: 0.3, repeat: Infinity }}
                      className="absolute bottom-0 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  </>
                )}
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Date Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="inline-block px-3 py-1 bg-[#38bdf8]/10 text-[#38bdf8] text-xs font-semibold rounded-full mb-3 border border-[#38bdf8]/30"
                >
                  {cert.date}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-[#38bdf8] font-semibold text-sm mb-3">
                  {cert.issuer}
                </p>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="px-2 py-1 text-xs bg-slate-900 text-[#38bdf8] rounded-md border border-slate-800"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* View Credential Button */}
                <motion.a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#38bdf8] text-slate-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 text-sm w-full justify-center"
                >
                  <span>View Credential</span>
                  <FaExternalLinkAlt className="text-xs" />
                </motion.a>
              </div>

              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/0 via-[#38bdf8]/10 to-[#38bdf8]/0 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#1e293b] rounded-2xl p-8 md:p-10 border border-slate-800 inline-block">
            <p className="text-gray-400 text-lg mb-4">
              Continuously learning and expanding my skillset through courses and certifications.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-[#38bdf8] text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300"
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;