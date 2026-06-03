import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    window.location.href = path;
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About the Conference", path: "/about-nit-jalandhar" },
    { name: "Objectives", path: "/objectives-conference" },
    { name: "Thematic Areas", path: "/thematic-areas" },
    { name: "Registration", path: "/registration" }
  ];

  const resources = [
    { name: "Paper Submission", path: "/paper-submission" },
    { name: "Author Guidelines", path: "/guidelines" },
    { name: "Review Committee", path: "/paper-review-committee" },
    { name: "Publication Policy", path: "/publication" },
    { name: "Contact Secretariat", path: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="w-full px-4 md:px-8 lg:px-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About Conference */}
          <div>
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => handleNavClick('/')}
            >
              <img src={logo} alt="RICE-WVES 2026 Logo" className="w-10 h-10 object-contain" />
              <h3 className="text-2xl font-bold bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                RICE-WVES 2026
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              DBT-CTEP Sponsored National Conference on Recent Innovations in Circular Economy for Waste Valorisation and Environmental Sustainability (RICE-WVES)
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Organized by the Department of Biotechnology<br />
              Dr. B. R. Ambedkar National Institute of Technology, Jalandhar<br />
              Punjab, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(resource.path);
                    }}
                    className="text-gray-400 hover:text-green-400 transition-colors block cursor-pointer"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2026 RICE-WVES. All rights reserved.</p>
              <p className="mt-2 text-gray-500 italic">
                Developed and maintained by <a href="https://www.linkedin.com/in/ramkrishna-mondal-b73b09294/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-blue-400 transition-colors">Ramkrishna Mondal</a>
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              {/* Policy links removed as they are not present in the current navigation structure */}
            </div>
          </div>
        </div>

        {/* Institutional Support */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Hosted by an Institute of National Importance
          </p>
          <div className="flex justify-center gap-8 text-3xl opacity-50">
            <span>🏛️</span>
            <span>⚡</span>
            <span>🌱</span>
            <span>🔬</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
