import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '../public/images/1.png',
  '../public/images/2.png',
  '../public/images/1.png',
  '../public/images/2.png',
  '../public/images/1.png',
  '../public/images/2.png',
  '../public/images/1.png',
  '../public/images/2.png',
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Handle Previous Slide
  const prevSlide = () => {
    setIndex(prev => (prev === 0 ? images.length - 2 : prev - 1));
  };

  // Handle Next Slide
  const nextSlide = () => {
    setIndex(prev => (prev === images.length - 2 ? 0 : prev + 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#F9E4BC]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-full   object-contain flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#BF222B] text-white p-2 rounded-full hover:bg-white hover:text-[#BF222B] transition-all">
        <FaChevronLeft />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#BF222B] text-white p-2 rounded-full hover:bg-white hover:text-[#BF222B] transition-all">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
