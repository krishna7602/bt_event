import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", dropdown: null, path: '/' },
    { 
      name: "About", 
      dropdown: [
        // { name: "About the Conference", path: '/' },
        { name: "About NIT Jalandhar", path: '/about-nit-jalandhar' },
        { name: "Organising Committee", path: '/organizing-committee' },
        { name: "International Advisory Committee", path: '/international-advisory-committee' },
        { name: "Technical Programme Committee", path: '/technical-programme-committee' },
        { name: "Venue and Travels", path: '/venue' },
        { name: "Accommodations", path: '/accommodation' },
        { name: "PhotoGallery", path: '/gallery' }
      ]
    },
    { 
      name: "Authors", 
      dropdown: [
        { name: "Guidelines to Authors", path: '/guidelines' },
        { name: "Paper Submission", path: '/paper-submission' },
        { name: "Paper Publication", path: '/publication' },
        { name: "Best Student Award", path: '/best-student-award' },
        { name: "Financial Support", path: '/financial-support' },
        { name: "CMT Acknowledgement", path: '/cmt-acknowledgement' }
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
    { 
      name: "Sponsors", 
      dropdown: [
        { name: "Sponsorship & Exhibition", path: '/sponsorship' },
        { name: "Benefits of Sponsorship", path: '/sponsorship-benefits' }
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
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('/')}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">NZ</span>
            </div>
            <span className="text-sm font-semibold text-blue-900">NZ Energy</span>
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


// {/* Conditional Page Rendering */}
//       {currentPage === 'home' && (
//         <>
//           {/* Hero Section */}
//           <div className="pt-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
//             <div className="max-w-7xl mx-auto px-6 py-16">
//               <div className="flex items-center gap-8 mb-12">
//                 <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center flex-shrink-0 border-4 border-blue-400">
//                   <div className="text-center">
//                     <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">IC</div>
//                     <div className="text-xs text-gray-700 font-semibold">NARI</div>
//                   </div>
//                 </div>
                
//                 <div className="flex-1">
//                   <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                     International Conference on Next-Generation Adaptive Research and Innovations 2026
//                   </h1>
//                 </div>
//               </div>

//               <div className="bg-white text-gray-800 rounded-2xl p-6 inline-block mb-8 shadow-lg">
//                 <p className="text-xl font-semibold">
//                   Event Date: <span className="text-blue-600">6<sup>th</sup>, 7<sup>th</sup> & 8<sup>th</sup> of March, 2026</span>
//                 </p>
//               </div>

//               <p className="text-xl text-gray-200 mb-12">
//                 Join the most innovative minds for a transformative event that pushes the boundaries of research and innovation.
//               </p>
//             </div>
//           </div>

//           {/* Photo Carousel */}
//           <div className="max-w-7xl mx-auto px-6 py-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Conference Gallery</h2>
            
//             <div className="relative group">
//               {/* Carousel Container */}
//               <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//                 {carouselImages.map((image, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-700 ${
//                       index === currentSlide ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   >
//                     <img
//                       src={image.url}
//                       alt={image.caption}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
//                       <p className="text-white text-2xl font-semibold">{image.caption}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Navigation Buttons */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft size={24} className="text-gray-800" />
//               </button>
              
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
//                 aria-label="Next slide"
//               >
//                 <ChevronRight size={24} className="text-gray-800" />
//               </button>

//               {/* Dots Indicator */}
//               <div className="flex justify-center gap-3 mt-6">
//                 {carouselImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       index === currentSlide 
//                         ? 'bg-blue-600 w-8' 
//                         : 'bg-gray-300 hover:bg-gray-400'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Highlights and Recent Updates Section */}
//           <div className="max-w-7xl mx-auto px-6 py-12">
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Highlights */}
//               <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="text-4xl">📄</div>
//                   <h2 className="text-3xl font-bold text-gray-800">Highlights</h2>
//                 </div>
                
//                 <div className="bg-blue-50 rounded-xl p-6 flex items-start justify-between gap-4">
//                   <div>
//                     <p className="text-gray-800 font-semibold mb-2">
//                       All papers must be submitted electronically through Microsoft CMT
//                     </p>
//                     <p className="text-blue-600 font-medium">
//                       Authors: Microsoft CMT
//                     </p>
//                   </div>
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
//                     View
//                   </button>
//                 </div>
//               </div>

//               {/* Recent Updates */}
//               <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="text-4xl">🔥</div>
//                   <h2 className="text-3xl font-bold text-gray-800">Recent Updates</h2>
//                 </div>
                
//                 <div className="bg-blue-100 rounded-xl p-6">
//                   <p className="text-gray-800 font-semibold mb-2">
//                     Paper submission opens on 16th June 2025
//                   </p>
//                   <p className="text-blue-700 font-medium">
//                     Paper submission opens on 16th June 2025
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}