import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#BF222B] text-[#F9E4BC]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side navigation */}
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6">
            <ul className="hidden md:flex space-x-6 items-center">
              <li>
                <a
                  href="#about"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#looking"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  Looking for Blood
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  Want to Donate Blood
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  Blood Bank Login
                </a>
              </li>
            </ul>
          </nav>
          {/* Hamburger menu icon for mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden ml-2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Right side Logo */}
        <div>
          {/* Replace with an image if needed */}
          <h1 className="text-2xl font-bold">Blood Bank Logo</h1>
        </div>
      </div>

      {/* Mobile Menu: displayed when hamburger icon is clicked */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#BF222B]">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#about"
              className="block px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
              About Us
            </a>
            <a
              href="#looking"
              className="block px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
              Looking for Blood
            </a>
            <a
              href="#donate"
              className="block px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
              Want to Donate Blood
            </a>
            <a
              href="#login"
              className="block px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
              Blood Bank Login
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
