import React from "react";
import cafeImage from "../assets/image/vafe4.webp";

const FindUs = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-[600px]">
        
        {/* Left: Image */}
        <div className="w-full h-full mt-20">
          <img
            src={cafeImage}
            alt="Cafe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col justify-center items-start px-7 md:px-20 py-22 space-y-10 bg-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">Find us</h2>

          {/* Where Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold tracking-wide">WHERE</h3>
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

          {/* When Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide">WHEN</h3>
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
