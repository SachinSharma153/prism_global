// src/components/Header.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/prism_Logo.png';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="PRISM Logo" className="h-10 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('destinations')}
              className="flex items-center hover:text-blue-600"
            >
              Destinations
              {openDropdown === 'destinations' ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openDropdown === 'destinations' && (
              <div className="absolute bg-white shadow-lg mt-2 py-2 rounded z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">India</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Thailand</a>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown('styles')}
              className="flex items-center hover:text-blue-600"
            >
              Travel Styles
              {openDropdown === 'styles' ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openDropdown === 'styles' && (
              <div className="absolute bg-white shadow-lg mt-2 py-2 rounded z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Adventure</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Leisure</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600">Why PRISM</a>
          <a href="#" className="hover:text-blue-600">Deals</a>
        </nav>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Mobile hamburger or menu icon logic can go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
