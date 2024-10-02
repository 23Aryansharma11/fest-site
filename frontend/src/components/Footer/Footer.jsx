// Footer.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative Shapes */}
        <div className="absolute inset-x-0 bottom-0 -z-10">
          <svg
            viewBox="0 0 1440 320"
            className="fill-current text-gray-800 opacity-50"
          >
            <path d="M0,192L30,186.7C60,181,120,171,180,170.7C240,171,300,181,360,170.7C420,160,480,128,540,117.3C600,107,660,117,720,128C780,139,840,149,900,154.7C960,160,1020,160,1080,160C1140,160,1200,160,1260,160C1320,160,1380,160,1410,160L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight animate-bounce">
              TechFest 2024
            </h1>
            <p className="mt-2 text-gray-300 text-lg">
              Empowering the Future of Technology
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Quick Links
            </h3>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-400 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            © 2024 TechFest. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Crafted with ❤️ by TechFest Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
