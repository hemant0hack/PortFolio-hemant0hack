import { motion } from "framer-motion"

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // You can replace this with your own form handling logic
    window.location.href = `mailto:hemant0hack@gmail.com?subject=Portfolio Contact from ${data.name}&body=${data.message}%0D%0A%0D%0AFrom: ${data.email}`;
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500">Send Message</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
export default Contact