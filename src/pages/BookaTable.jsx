import React from "react";
import bgImage from "../assets/image/heroo.webp"; // apna bg image dalna

const BookATable = () => {
  return (
    <section className="relative mt-20 py-20 px-6 md:px-12 lg:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            𝙱𝚘𝚘𝚔 𝚊 𝚃𝚊𝚋𝚕𝚎
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed max-w-md">
            Whether it’s a coffee date, business meeting, or a cozy evening — 
            reserve your table with us and make every moment special. 
            Quick and easy booking, just for you.
          </p>
        </div>

        {/* Right Side - Booking Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 w-full max-w-md mx-auto">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-[#d4b06c] outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-[#d4b06c] outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-[#d4b06c] outline-none"
              required
            />
            <select
              className="w-full p-4 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-[#d4b06c] outline-none"
              required
            >
              <option value="">Number of Guests</option>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <input
              type="datetime-local"
              className="w-full p-4 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-[#d4b06c] outline-none"
              required
            />

            <button
              type="submit"
              className="w-full py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#d4b06c] hover:text-black transition-colors duration-300"
            >
              𝚁𝚎𝚜𝚎𝚛𝚟𝚎 𝙼𝚢 𝚃𝚊𝚋𝚕𝚎
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookATable;
