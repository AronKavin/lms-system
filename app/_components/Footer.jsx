import React from 'react';
import { Facebook, Twitter, Instagram, Github, Linkedin, FacebookIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">S2C Learning </h2>
          <p className="text-gray-400 mt-2">© 2024 All rights reserved.</p>
        </div>

        {/* Center Section: Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="#courses" className="hover:underline">Courses</a></li>
        <li><a href="#features" className="hover:underline">features</a></li>
        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
        <li><a href="#s2capp" className="hover:underline">Our App</a></li>
        <li><a href="#links" className="hover:underline">Links</a></li>
          </ul>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Instagram size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
