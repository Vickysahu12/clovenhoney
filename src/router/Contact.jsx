import React from 'react';

import cafe from "../assets/image/heroo.webp"


const Contact = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white font-sans"
      style={{
        backgroundImage: `url(${cafe})`,
        // Mobile par background image ko cover karne ke liye
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-pulse">
          📞 Getting In Touch...
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
          Our contact page is under construction! 🚧
          <br />In the meantime, you can reach out to us on social media. We'd love to hear from you! 👋
        </p>
        <button className="mt-6 bg-[#b4937a] hover:bg-black text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
          Visit Our Socials 📲
        </button>
      </div>
    </div>
  );
};

export default Contact;
