import React from 'react';
import cafe from "../assets/image/heroo.webp"


const BookTable = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white font-sans"
      style={{
        backgroundImage: `url(${cafe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-pulse">
          📅 Reserve Your Spot...
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
          Our booking system is getting a fresh coat of paint! 🎨
          <br />Come back soon to reserve your perfect spot. We can't wait to see you! 🎉
        </p>
        <button className="mt-6 bg-[#b4937a] hover:bg-black text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
          Stay Updated 🔔
        </button>
      </div>
    </div>
  );
};

export default BookTable;
