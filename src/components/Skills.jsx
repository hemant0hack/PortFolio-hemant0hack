import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiPandas,
  SiArduino,
  SiEspressif,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "C Programming", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  { name: "Pandas", icon: <SiPandas className="text-blue-600" /> },
  { name: "Arduino", icon: <SiArduino className="text-teal-500" /> },
  { name: "ESP32", icon: <SiEspressif className="text-red-500" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 flex flex-col items-center justify-center gap-3"
            >
              <div className="text-5xl">{skill.icon}</div>
              <h3 className="text-md font-semibold text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
