import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  const images = [
    './images/g1.jpg',
    './images/g2.jpg',
    './images/g3.jpg',
    './images/g4.jpg',
    './images/g5.jpeg',
    './images/g6.jpeg',
  ];

  return (
    <div className="min-h-screen bg-[#F9E4BC] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#BF222B]">Gallery</h2>
          <p className="text-lg text-gray-700 mt-2">
            Explore our moments of contribution and hope.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={img}
                alt={`Blood Donation ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <a
            href="/donar"
            className="inline-block bg-[#BF222B] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#a41d26] transition duration-300 w-full sm:w-1/2 text-center">
            Register as Donor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
