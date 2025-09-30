import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 -z-10"
      />

      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-500 drop-shadow-lg"
        >
          About Myself
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-14">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <img
                src="src/assets/Hemant.jpg"
                alt="Hemant"
                className="rounded-full shadow-2xl border-4 border-blue-400 w-52 h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
              >
                That's me!
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Hi! I'm <span className="font-semibold text-blue-400">Hemant</span>, a passionate developer who loves crafting beautiful and performant web experiences. My expertise lies in modern front-end technologies, and I thrive on transforming ideas into interactive, user-friendly applications.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300 text-lg list-disc list-inside">
              <li>
                <span className="mr-2">💻</span>
                <span className="font-medium text-blue-300">Skilled in:</span> Python, React, JavaScript, Tailwind CSS
              </li>
              <li>
                <span className="mr-2">🚀</span>
                <span className="font-medium text-purple-300">Always learning:</span> New frameworks & tools
              </li>
              <li>
                <span className="mr-2">🌱</span>
                <span className="font-medium text-green-300">Open-source:</span> Active contributor
              </li>
              <li>
                <span className="mr-2">☕</span>
                <span className="font-medium text-yellow-300">Coffee aficionado</span> & lifelong learner
              </li>
            </ul>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-lg text-gray-400 italic border-l-4 border-blue-400 pl-4"
            >
              "Code is like humor. When you have to explain it, it’s bad."
            </motion.p>
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:hemant0hack@gmail.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow transition"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/hemant0hack"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-2 rounded-full font-semibold shadow transition border border-gray-600"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About