import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold"
      >
        Hi, I’m <span className="text-cyan-400">Hemant</span> 👋
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg md:text-xl text-gray-300"
      >
        A passionate Developer building cool web experiences 🚀
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 flex gap-6"
      >
        <a href="#projects" className="px-8 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500 transition-all">View Projects</a>
        <a href="#contact" className="px-8 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">Contact Me</a>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-8 flex gap-6 text-3xl"
      >
        <a href="https://github.com/hemant0hack" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaGithub /></a>
        <a href="https://linkedin.com/in/hemant0hack" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaLinkedin /></a>
        <a href="https://twitter.com/hemant0hack" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaTwitter /></a>
      </motion.div>
    </section>
  )
}
export default Hero
