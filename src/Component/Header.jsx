import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "News", href: "#news" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-white px-4 py-2 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span>
                <FaPhone color="green" size={15} />
              </span>{" "}
              Call: 123 884400
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaMapMarkerAlt color="green" size={15} />
              </span>{" "}
              CM HEALTH ENDOWMENT FUND GILGIT
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/images/cmhef-logo.png"
              alt="CMHEF Logo"
              className="w-14 h-14 object-contain cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 font-medium transition-colors flex items-center gap-2">
              LOGIN <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-gray-50 px-4 py-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-green-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 font-medium transition-colors">
              LOGIN
            </button>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
