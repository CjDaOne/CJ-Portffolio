import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Replace with SVGs if you want to avoid a library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome to My Portfolio</h1>

        {/* Hamburger icon for mobile */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link> 
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-4 space-y-2">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}


