import { motion } from "framer-motion"

const projects = [
  {
    title: "Hospital Management System",
    description: "Hospital Management System this system is works to managing patient, doctor record and appointments scheduled ",
    image: ".jpg",
    liveLink: "https://hemant0hack.github.io",
    repoLink: "https://github.com/hemant0hackHospital-Management-System ",
  },
  {
    title: "Task Manager",
    description: "A full-stack task management application built with React, Node.js, and MongoDB. Features user authentication and real-time updates.",
    image: "/images/taskmanager.jpg",
    liveLink: "https://task-manager-hemant.herokuapp.com",
    repoLink: "https://github.com/hemant0hack/task-manager",
  },
  {
    title: "Weather App",
    description: "Real-time weather application built with React and OpenWeatherMap API. Features location-based weather data and 5-day forecast.",
    image: "/images/weatherapp.jpg",
    liveLink: "https://weather-app-hemant.netlify.app",
    repoLink: "https://github.com/hemant0hack/weather-app",
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