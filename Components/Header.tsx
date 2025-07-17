"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import AboutPage from "@/app/About/page";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#services",
      submenu: [
        { name: "Neurology", href: "/Neurology" },
        { name: "Neurosurgery", href: "/Neurosurgery" },
        {
          name: "Neuro-radiology and Diagnostics",
          href: "/Intervention Neuro-radiology and Diagnostics",
        },
        { name: "Allied Specialities", href: "/Allied Specialities" },
      ],
    },
    { name: "About", href: "/About" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-white bg-opacity-30"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="block focus:outline-none">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 px-6 lg:px-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors
                    hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${
                      scrolled
                        ? "text-gray-800 hover:bg-white/30"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 shadow-lg bg-white  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-200 scale-95 group-hover:scale-100 z-50">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                scrolled ? "text-gray-800" : "text-gray-700"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FiX size={24} aria-hidden="true" />
              ) : (
                <FiMenu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobile-menu-container md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="px-4">
                <a
                  href={item.href}
                  onClick={() => {
                    if (!item.submenu) setMobileMenuOpen(false);
                  }}
                  className={`block py-3 font-medium ${
                    scrolled
                      ? "text-gray-800 hover:bg-white/30"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
