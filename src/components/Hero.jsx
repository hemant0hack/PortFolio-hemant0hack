import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

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
      ease: "easeInOut",
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-extrabold"
      >
        Hi, I’m <span className="text-cyan-400">Hemant</span> 👋
      </motion.h1>
      <motion.p 
        variants={itemVariants}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        <TypeAnimation
          sequence={[
            "A Frontend Developer",
            1000,
            "Building cool web experiences",
            1000,
            "Automation Enthusiast",
            1000,
            "An IoT Enthusiast",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        /> 🚀
      </motion.p>
      <motion.div 
        variants={itemVariants}
        className="mt-8 flex flex-wrap justify-center gap-6"
      >
        <motion.a 
          href="#projects" 
          className="px-8 py-3 bg-cyan-400 text-black rounded-lg font-semibold shadow-lg shadow-cyan-400/20"
          whileHover={hoverEffect}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
        <motion.a 
          href="#contact" 
          className="px-8 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors duration-300"
          whileHover={hoverEffect}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="mt-10 flex gap-8 text-4xl"
      >
        <motion.a href="https://github.com/hemant0hack" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300" whileHover={hoverEffect} whileTap={{ scale: 0.95 }}>
          <FaGithub />
        </motion.a>
        <motion.a href="https://linkedin.com/in/hemant0hack" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300" whileHover={hoverEffect} whileTap={{ scale: 0.95 }}>
          <FaLinkedin />
        </motion.a>
        <motion.a href="https://twitter.com/hemant0hack" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300" whileHover={hoverEffect} whileTap={{ scale: 0.95 }}>
          <FaTwitter />
        </motion.a>
      </motion.div>
    </motion.section>
  )
}
export default Hero
