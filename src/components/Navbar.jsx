import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", dropdown: null, path: '/' },
    { 
      name: "About", 
      dropdown: [
        { name: "Objectives of the Conference", path: '/objectives-conference' },
        { name: "About NIT Jalandhar", path: '/about-nit-jalandhar' },
        { name: "Organizing Committee", path: '/organizing-committee' },
        { name: "Technical Programme Committee", path: '/technical-programme-committee' },
        { name: "Paper Review Committee", path: '/paper-review-committee' },
        { name: "Research Area Tracks", path: '/research-area-tracks' },
        { name: "Venue and Travels", path: '/venue' },
        { name: "Accommodations", path: '/accommodation' },
        { name: "Photo Gallery", path: '/gallery' }
      ]
    },
    { 
      name: "Authors", 
      dropdown: [
        { name: "Guidelines to Authors", path: '/guidelines' },
        { name: "Paper Submission", path: '/paper-submission' },
        { name: "Paper Publication", path: '/publication' },
        { name: "Best Student Award", path: '/best-student-award' }
      ]
    },
    { 
      name: "Programs", 
      dropdown: [
        { name: "Keynote Speakers", path: '/speakers' },
        { name: "Tours", path: '/tours' },
        { name: "Cultural Events", path: '/cultural-events' }
      ]
    },
    { name: "Registration", dropdown: null, path: '/registration' },
    { name: "Contact", dropdown: null, path: '/contact' }
  ];

  const handleNavClick = (path) => {
    window.location.href = path;
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 w-full bg-white text-gray-800 z-50 shadow-md">
      <div className="w-full px-4 md:px-8 lg:px-12 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('/')}>
            <img src={logo} alt="NZES-2026 Logo" className="w-12 h-12 object-contain" />
            <span className="text-sm font-semibold text-blue-900">NZES-2026</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 text-base font-medium">
            {navItems.map((item) => (
              <li 
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors duration-300 py-2"
                  onClick={() => item.path && handleNavClick(item.path)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </div>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-0 bg-white text-gray-800 rounded-lg shadow-xl min-w-[280px] py-3 border border-gray-100">
                    {item.dropdown.map((subItem, index) => (
                      <a
                        key={index}
                        href={subItem.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(subItem.path);
                        }}
                        className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200 text-sm"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>



          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <div 
                    className="flex items-center justify-between hover:text-blue-600 cursor-pointer transition-colors duration-300 text-base py-2"
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      } else {
                        handleNavClick(item.path);
                      }
                    }}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </div>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(subItem.path);
                          }}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}


