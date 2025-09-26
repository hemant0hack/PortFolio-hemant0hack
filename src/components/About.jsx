import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/3"
          >
            <img src="https://via.placeholder.com/300" alt="Hemant" className="rounded-full shadow-lg" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-2/3"
          >
            <p className="text-lg text-gray-300">
              I'm a passionate and creative developer with a love for building beautiful and functional web applications. I have a strong foundation in front-end technologies and a knack for turning ideas into reality.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default About