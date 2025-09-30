import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const socialLinks = [
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/hemant0hack', name: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/hemant0hack', name: 'GitHub' },
  { icon: <FaInstagram />, href: 'https://instagram.com/_hemant0hack_', name: 'Instagram' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/+918445952688', name: 'WhatsApp' },
];

function Contact() {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      window.location.href = `mailto:hemant0hack@gmail.com?subject=Portfolio Contact from ${data.name}&body=${data.message}%0D%0A%0D%0AFrom: ${data.email}`;
      setStatus("success");
      
      setTimeout(() => {
        e.target.reset();
        setStatus("idle");
      }, 3000);

    } catch (error) {
      console.error("Mailto link failed:", error);
      setStatus("error");
    }
  };

  const getButtonText = () => {
    switch (status) {
      case "submitting":
        return "Sending...";
      case "success":
        return "Sent!";
      case "error":
        return "Try Again";
      default:
        return "Send Message";
    }
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Connect with Me</h3>
            <p className="mb-6 text-gray-400">
              Feel free to reach out through the form or connect with me on social media.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-4xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="4" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow"></textarea>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <motion.button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,211,238)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {getButtonText()}
              </motion.button>
            </motion.div>
            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-red-500 mt-4"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
export default Contact