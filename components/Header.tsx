import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { LOGO_BASE64 } from '../assets/images';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 pt-3 pb-20 relative">
        {/* Main nav bar container */}
        <div className="relative h-12 flex items-center justify-between md:justify-center">
          
          {/* Brand Name (Logo Text) */}
          <Link to="/" className="md:absolute md:left-0 z-20 group">
            <span className="text-4xl font-extrabold font-['Baloo_2'] 
            bg-gradient-to-br from-[#0FA3E2] to-[#16B6A1] text-transparent 
            bg-clip-text drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.1)] 
            transition-transform duration-300 ease-out group-hover:-translate-y-1">AndamanAbode</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.main.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-[#0FA3E2] ${
                    isActive ? 'text-[#0FA3E2] font-bold' : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="text-lg font-medium text-gray-700 transition-colors hover:text-[#0FA3E2] flex items-center gap-1"
              >
                More
                <svg className={`w-4 h-4 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isMoreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {NAV_LINKS.more.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMoreDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-base transition-colors ${
                          isActive ? 'bg-[#0FA3E2] text-white' : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Center Logo Image */}
        <Link to="/" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 group z-10">
            <img
                src={LOGO_BASE64}
                alt="AndamanAbode Logo"
                className="w-32 h-32 rounded-full bg-white p-1 border-4 border-[#0FA3E2] shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] animate-bobbing"
            />
        </Link>
        
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-3">
              {[...NAV_LINKS.main, ...NAV_LINKS.more].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-[#0FA3E2] text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;