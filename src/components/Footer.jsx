import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'Responsive Design'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername' },
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com/yourusername' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com/@yourusername' }
  ];

  const contactInfo = {
    email: 'aurangzaibrehman01@gmail.com',
    phone: '03029558584',
    location: 'Peshawar, KPK, Pakistan'
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-cyan-300 bg-clip-text text-transparent">
                Zaib.dev
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating exceptional digital experiences with modern web technologies and creative design solutions.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:bg-slate-800 transition-all duration-300 border border-slate-800"
                    aria-label={social.name}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#38bdf8] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm flex items-center gap-2 group cursor-default">
                    <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300 text-sm flex items-start gap-3 group"
                >
                  <MdEmail className="text-[#38bdf8] text-xl mt-0.5 flex-shrink-0" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300 text-sm flex items-center gap-3 group"
                >
                  <MdPhone className="text-[#38bdf8] text-xl flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <div className="text-gray-400 text-sm flex items-start gap-3">
                  <MdLocationOn className="text-[#38bdf8] text-xl mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.location}</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-sm text-center"
            >
              © {new Date().getFullYear()} Aurang Zaib Rehman. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;