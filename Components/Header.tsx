"use client";
import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-auto sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-24 w-full md:px-10 hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 px-10 align-middle">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 font-medium transition-colors
                           hover:bg-gray-50 active:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="pt-2 pb-3 space-y-1">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50
                             font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
