import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile dropdowns

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // reset dropdowns on toggle
  };

  const toggleDropdown = menu => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  return (
    <header className="bg-[#BF222B] text-[#F9E4BC] relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side navigation */}
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6">
            <ul className="hidden md:flex space-x-6 items-center">
              <li className="relative group">
                <a
                  href="/about"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  About Us
                </a>
              </li>

              <li className="relative group">
                <a
                  href="#looking"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  Looking for Blood
                </a>
                <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded-md shadow-lg w-48">
                  <a
                    href="/patient"
                    className="block px-4 py-2 hover:bg-[#F9E4BC] hover:text-black">
                    Register Patient
                  </a>
                </div>
              </li>

              <li className="relative group">
                <a
                  href="#donate"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  Want to Donate Blood
                </a>
                <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded-md shadow-lg w-48">
                  <a
                    href="/donar"
                    className="block px-4 py-2 hover:bg-[#F9E4BC] hover:text-black">
                    Register as Donor
                  </a>
                </div>
              </li>

              <li className="relative group">
                <a
                  href="#login"
                  className="px-3 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#F9E4BC] hover:text-black">
                  Blood Bank Login
                </a>
                <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded-md shadow-lg w-56">
                  <a
                    href="/adminRegister"
                    className="block px-4 py-2 hover:bg-[#F9E4BC] hover:text-black">
                    Register as Admin
                  </a>
                  <a
                    href="/adminLogin"
                    className="block px-4 py-2 hover:bg-[#F9E4BC] hover:text-black">
                    Login as Admin
                  </a>
                </div>
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
          <h1 className="text-2xl font-bold">Blood Bank Logo</h1>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#BF222B] px-4 pt-2 pb-4 space-y-1">
          <a
            href="/about"
            className="block px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
            About Us
          </a>

          {/* Looking for Blood */}
          <div className="space-y-1">
            <button
              onClick={() => toggleDropdown('looking')}
              className="w-full text-left px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
              Looking for Blood
            </button>
            {openDropdown === 'looking' && (
              <a
                href="/patient"
                className="ml-4 block px-2 py-1 text-sm transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
                Register Patient
              </a>
            )}
          </div>

          {/* Want to Donate */}
          <div className="space-y-1">
            <button
              onClick={() => toggleDropdown('donate')}
              className="w-full text-left px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
              Want to Donate Blood
            </button>
            {openDropdown === 'donate' && (
              <a
                href="/donar"
                className="ml-4 block px-2 py-1 text-sm transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
                Register as Donor
              </a>
            )}
          </div>

          {/* Blood Bank Login */}
          <div className="space-y-1">
            <button
              onClick={() => toggleDropdown('login')}
              className="w-full text-left px-2 py-1 transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
              Blood Bank Login
            </button>
            {openDropdown === 'login' && (
              <>
                <a
                  href="/adminRegister"
                  className="ml-4 block px-2 py-1 text-sm transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
                  Register as Admin
                </a>
                <a
                  href="/adminLogin"
                  className="ml-4 block px-2 py-1 text-sm transition-colors hover:bg-[#F9E4BC] hover:text-[#BF222B]">
                  Login as Admin
                </a>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
