import React from "react";

// Placeholder image ka use kar rahe hain kyunki local assets yahan kaam nahi karte.
// Aap apne project mein isse asli image path se badal sakte hain.
import cafeImage from "../assets/image/vafe4.webp"

const FindUs = () => {
  return (
    // Main section container with white background and responsive padding
    <section className="w-full bg-white font-sans">
      {/* Grid container for the two main columns (image and text) */}
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-[600px]">
        
        {/* Left Column: Image on all screens */}
        {/* 'md:col-span-1' ensures it takes one column on medium screens.
            We are also using 'relative' and 'overflow-hidden' to ensure the image fits perfectly. */}
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={cafeImage}
            alt="Cafe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Text content */}
        {/* 'md:px-20' provides the gap between image and text on medium and larger screens.
            'px-7' provides padding on mobile. 'items-center' keeps the content centered on mobile. */}
        <div className="flex flex-col justify-center items-center md:items-start px-7 md:px-20 py-10 md:py-0 space-y-10 bg-white">
          {/* Heading 'Find us' */}
          <h2 className="text-5xl md:text-6xl font-bold text-center md:text-left">𝙵𝚒𝚗𝚍 𝚞𝚜</h2>

          {/* 'WHERE' Section */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-semibold tracking-wide uppercase">WHERE</h3>
            <p className="text-base leading-relaxed text-gray-700">
              317 Pacific C Hwy <br />
              Huntington Beach, CA 92648
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-[#1C1C2B] text-white text-sm font-medium rounded transition-all duration-300 hover:bg-[#2a2a3d] hover:scale-105">
              VIEW MAP
            </button>
            <button className="px-6 py-2 border border-[#1C1C2B] text-sm font-medium rounded transition-all duration-300 hover:bg-[#1C1C2B] hover:text-white hover:scale-105">
              BOOK A TABLE
            </button>
          </div>

          {/* 'WHEN' Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold tracking-wide uppercase">WHEN</h3>
            <p className="text-base leading-relaxed text-gray-700">
              Monday – Friday <br />
              7am – 6pm
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Saturday/Sunday <br />
              8am – 6pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
