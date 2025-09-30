import { motion } from "framer-motion"

const projects = [
  {
    title: "Hospital Management System",
    description: "The Hospital Management System is designed to streamline the operations of a hospital. It helps in managing patient, doctor, appointments informations, medical records, and other administrative tasks.",
    image: "src/assets/project1.png",
    liveLink: "", // Add a live link if available, else leave as empty string
    repoLink: "https://github.com/hemant0hack/Hospital-Management-System",
  },
  {
    title: "Smart Home IoT System",
    description: "An advanced ESP32-based smart home automation system leveraging MQTT and ThingsBoard for seamless real-time control, monitoring, and dashboard integration.",
    image: "src/assets/project2.png",
    liveLink: "https://wokwi.com/projects/427608480870411265",
    repoLink: "https://github.com/hemant0hack/Smart-Home-IoT-System",
  },
  {
    title: "Smart Indoor Energy Optimization",
    description: "The Smart Indoor Energy Optimization system aims to reduce unnecessary energy usage in indoor environments by intelligently controlling lighting, temperature, and electrical appliances using sensors, actuators, and an ESP32 microcontroller integrated with ThingsBoard via MQTT.",
    image: "src/assets/project3.png", 
    liveLink: "https://wokwi.com/projects/429018053918405633",
    repoLink: "https://github.com/hemant0hack/Smart-Indoor-Energy-Optimization",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500">Live Demo</a>
                  <a href={project.repoLink} className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects