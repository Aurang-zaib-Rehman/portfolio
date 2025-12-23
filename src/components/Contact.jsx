import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = {
    email: 'aurangzaibrehman01@gmail.com',
    whatsapp: '03029558584',
    location: 'Peshawar, KPK, Pakistan'
  };

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername', color: '#333' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: '#0077B5' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername', color: '#E4405F' },
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com/yourusername', color: '#1877F2' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com/@yourusername', color: '#000' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            Get In <span className="text-[#38bdf8]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#38bdf8] mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's work together!</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm currently available for freelance work and part-time opportunities. 
                If you have a project in mind or just want to chat, feel free to reach out!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-4">Contact Information</h4>
              
              {/* Email */}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-400 hover:text-[#38bdf8] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#020617] rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-[#38bdf8] transition-colors">
                  <MdEmail className="text-2xl text-[#38bdf8]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <div className="font-semibold text-white">{contactInfo.email}</div>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/^0/, '92')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-400 hover:text-[#25D366] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#020617] rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-[#25D366] transition-colors">
                  <FaWhatsapp className="text-2xl text-[#25D366]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">WhatsApp</div>
                  <div className="font-semibold text-white">{contactInfo.whatsapp}</div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-400 group"
              >
                <div className="w-12 h-12 bg-[#020617] rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-[#38bdf8] transition-colors">
                  <MdLocationOn className="text-2xl text-[#38bdf8]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Location</div>
                  <div className="font-semibold text-white">{contactInfo.location}</div>
                </div>
              </motion.div>
            </div>

            {/* Connect With Me */}
            <div className="pt-6">
              <h4 className="text-2xl font-bold text-white mb-6">Connect With Me</h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-[#020617] rounded-lg flex items-center justify-center border border-slate-800 hover:border-[#38bdf8] text-gray-400 hover:text-[#38bdf8] transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-gray-400 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#020617] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-gray-400 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#020617] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-gray-400 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#020617] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-[#38bdf8] text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;