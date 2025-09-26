import { motion } from "framer-motion"

const skills = [
  { name: "React", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "Tailwind CSS", level: "95%" },
  { name: "Node.js", level: "75%" },
  { name: "Figma", level: "80%" },
]

function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-cyan-400">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: skill.level }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills