import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="mt-16 md:mt-24">
      <div className="w-full leading-none">
        <svg className="block" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24C240 88 480 88 720 24C960 88 1200 88 1440 24V100H0V24Z" fill="#0B7CC1"/>
        </svg>
      </div>
      <footer className="bg-[#0B7CC1] text-white -mt-1">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-display mb-4">AndamanAbode</h3>
              <p className="text-blue-100">Your splashy guide to the Andaman Islands. Let's make some waves!</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/packages" className="hover:text-[#FFC145] transition-colors">Packages</Link></li>
                <li><Link to="/ferries" className="hover:text-[#FFC145] transition-colors">Ferries</Link></li>
                <li><Link to="/itineraries" className="hover:text-[#FFC145] transition-colors">Itineraries</Link></li>
                <li><Link to="/about" className="hover:text-[#FFC145] transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="hover:text-[#FFC145] transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-[#FFC145] transition-colors">Contact</Link></li>
                <li><Link to="/" className="hover:text-[#FFC145] transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/" className="hover:text-[#FFC145] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {/* SVG Icons for Social Media */}
              </div>
              <p className="mt-4 text-blue-100">9am-5pm +91 9832778485</p>
              <button className="mt-2 w-full bg-[#16B6A1] text-white font-bold py-2 px-4 rounded-full hover:bg-teal-500 transition-transform hover:scale-105">
                WhatsApp Us
              </button>
            </div>
          </div>
          <div className="mt-12 border-t border-blue-500 pt-6 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} AndamanAbode. All rights reserved. Dive in!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;