"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/70 backdrop-blur-md shadow-sm border-t border-gray-100 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-16 w-auto hover:scale-105 transition-transform duration-200"
            />
            <p className="text-gray-600">
              State-of-the-art medical care in a compassionate environment
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                    aria-label={`Follow us on ${Icon.name.replace("Fa", "")}`}
                  >
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <span className="mr-1">→</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-200">
              Services
            </h3>
            <ul className="space-y-2">
              {["Service 1", "Service 2", "Service 3", "Service 4"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 hover:underline transition-all duration-300"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p className="hover:text-blue-600 transition-colors duration-300">
                123 Kathmandu, Nepal
              </p>
              <p className="hover:text-blue-600 transition-colors duration-300">
                City, State 12345
              </p>
              <a
                href="mailto:info@company.com"
                className="block hover:text-blue-600 transition-colors duration-300"
              >
                info@company.com
              </a>
              <a
                href="tel:+1234567890"
                className="block hover:text-blue-600 transition-colors duration-300"
              >
                (977) 5548692
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NeuroCare. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
