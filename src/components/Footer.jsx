import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "About the Conference", to: "about" },
    { name: "Objectives", to: "objectives" },
    { name: "Conference Tracks", to: "tracks" },
    { name: "Registration", to: "registration" }
  ];

  const resources = [
    { name: "Paper Submission", href: "#" },
    { name: "Author Guidelines", href: "#" },
    { name: "Review Process", href: "#" },
    { name: "Publication Policy", href: "#" },
    { name: "Contact Secretariat", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About Conference */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Net-Zero Energy Systems
            </h3>
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
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer block"
                  >
                    {link.name}
                  </Link>
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
                    href={resource.href}
                    className="text-gray-400 hover:text-green-400 transition-colors block"
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
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Code of Conduct
              </a>
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
