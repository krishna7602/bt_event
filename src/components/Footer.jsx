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
    { name: "Conference Tracks", path: "/research-area-tracks" },
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
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About Conference */}
          <div>
            <div 
              className="flex items-center gap-3 mb-4 cursor-pointer" 
              onClick={() => handleNavClick('/')}
            >
              <img src={logo} alt="NZES-2026 Logo" className="w-10 h-10 object-contain" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                NZES-2026
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              National Conference on Net-Zero Energy Systems
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Organized by the Department of Electrical Engineering<br />
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

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Get updates on submissions, schedules, and announcements.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none text-white placeholder-gray-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 National Conference on Net-Zero Energy Systems. All rights reserved.
            </p>

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
