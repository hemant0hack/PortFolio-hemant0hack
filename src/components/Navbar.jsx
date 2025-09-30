import { useState, useEffect } from "react";
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = ['about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better accuracy
      let currentSection = '';

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          currentSection = sectionId;
          break;
        }
      }
      // If no section is matched, you might want to default to the first one or none
      if (!currentSection && window.scrollY < 200) {
          currentSection = 'about';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', title: 'About', icon: <FaUser /> },
    { id: 'skills', title: 'Skills', icon: <FaCode /> },
    { id: 'projects', title: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', title: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md fixed w-full z-50 transition-all duration-300">
      <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold text-cyan-400">MyPortfolio</a>
      <div className="hidden md:flex gap-6">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavClick(e, link.id)}
            className={`flex items-center gap-2 transition-colors duration-300 ${activeSection === link.id ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
          >
            {link.icon}
            <span>{link.title}</span>
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center gap-2 transition-colors duration-300 ${activeSection === link.id ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Navbar
