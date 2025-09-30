import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    description: "A system to streamline hospital operations, managing patient data, appointments, and medical records efficiently.",
    image: "src/assets/project1.png",
    liveLink: "", // Add a live link if available, else leave as empty string
    repoLink: "https://github.com/hemant0hack/Hospital-Management-System",
  },
  {
    title: "Smart Home IoT System",
    description: "An ESP32-based smart home system using MQTT and ThingsBoard for real-time control, monitoring, and dashboard integration.",
    image: "src/assets/project2.png",
    liveLink: "https://wokwi.com/projects/427608480870411265",
    repoLink: "https://github.com/hemant0hack/Smart-Home-IoT-System",
  },
  {
    title: "Smart Indoor Energy Optimization",
    description: "An intelligent system to reduce energy usage by controlling lights and appliances with sensors and an ESP32 integrated with ThingsBoard.",
    image: "src/assets/project3.png", 
    liveLink: "https://wokwi.com/projects/429018053918405633",
    repoLink: "https://github.com/hemant0hack/Smart-Indoor-Energy-Optimization",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ y: -10, scale: 1.03 }}
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
  >
    <div className="overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex gap-4 mt-auto">
        {project.liveLink && (
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500 transition-colors duration-300"
          >
            Live Demo
          </a>
        )}
        <a 
          href={project.repoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;