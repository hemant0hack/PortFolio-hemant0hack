import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md fixed w-full z-50">
      <h1 className="text-2xl font-bold text-cyan-400">MyPortfolio</h1>
      <div className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#skills" className="hover:text-cyan-400">Skills</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><a href="#about" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Navbar
