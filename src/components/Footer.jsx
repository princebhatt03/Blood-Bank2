import React from 'react';

const Footer = () => {
  const images = [
    './images/g1.jpg',
    './images/g2.jpg',
    './images/g3.jpg',
    './images/g4.jpg',
    './images/g5.jpeg',
    './images/g6.jpeg',
  ];
  return (
    <footer className="bg-[#242729] text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Looking for Blood */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Looking for Blood</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#availability"
                className="hover:underline">
                Blood Availability
              </a>
            </li>
            <li>
              <a
                href="#directory"
                className="hover:underline">
                Blood Bank Directory
              </a>
            </li>
            <li>
              <a
                href="#thalassemia"
                className="hover:underline">
                Thalassemia Request
              </a>
            </li>
          </ul>
        </div>

        {/* Want to Donate Blood */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Want to Donate Blood</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#camps"
                className="hover:underline">
                Blood Donation Camps
              </a>
            </li>
            <li>
              <a
                href="#donor-login"
                className="hover:underline">
                Donor Login
              </a>
            </li>
            <li>
              <a
                href="#about-donation"
                className="hover:underline">
                About Blood Donation
              </a>
            </li>
            <li>
              <a
                href="#register-vbd"
                className="hover:underline">
                Register VBD Camp
              </a>
            </li>
          </ul>
        </div>

        {/* Blood Bank Login */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Blood Bank Login</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#bank-login"
                className="hover:underline">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:underline">
                Know More
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full overflow-hidden mt-10">
        <div className="animate-marquee flex whitespace-nowrap gap-6">
          {images.concat(images).map((img, index) => (
            <div
              key={index}
              className="bg-white w-32 h-20 flex items-center justify-center rounded shadow-md shrink-0 overflow-hidden">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
        <p>© {new Date().getFullYear()} Blood Bank. All rights reserved.</p>
        <p className="mt-2">
          Created by:{' '}
          <a
            href="https://www.linkedin.com/in/prince-bhatt-0958a725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white">
            Prince Bhatt
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
