import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Clenlinks Global Logo" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-bold text-primary">Clenlinks Global</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-primary">Home</Link>
            <Link to="/about" className="text-secondary hover:text-primary">About</Link>
            <Link to="/services" className="text-secondary hover:text-primary">Services</Link>
            <Link to="/faq" className="text-secondary hover:text-primary">FAQ</Link>
            <Link to="/contact" className="text-secondary hover:text-primary">Contact</Link>
            <Link 
              to="/contact" 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
              aria-label="Get started with our services"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-secondary hover:text-primary">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-secondary hover:text-primary">About</Link>
              <Link to="/services" className="block px-3 py-2 text-secondary hover:text-primary">Services</Link>
              <Link to="/faq" className="block px-3 py-2 text-secondary hover:text-primary">FAQ</Link>
              <Link to="/contact" className="block px-3 py-2 text-secondary hover:text-primary">Contact</Link>
              <Link 
                to="/contact" 
                className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light"
                aria-label="Get started with our services"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;