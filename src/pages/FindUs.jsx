import React from "react";

// Placeholder image ka use kar rahe hain kyunki local assets yahan kaam nahi karte.
// Aap apne project mein isse asli image path se badal sakte hain.
import cafeImage from "../assets/image/vafe4.webp";
import AnimatedSection from "../components/AnimatedSection";

const FindUs = () => {
  return (
    <AnimatedSection>
      <section className="w-full bg-white font-sans">
        {/* Grid container for the two main columns (image and text) */}
        <div className="grid md:grid-cols-2 grid-cols-1 min-h-[600px]">
          {/* Left Column: Image */}
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={cafeImage}
              alt="Cafe"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Text content */}
          <div className="flex flex-col justify-center items-center md:items-start px-7 md:px-20 py-10 md:py-0 space-y-10 bg-white">
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-center md:text-left text-green-700">
              𝙵𝚒𝚗𝚍 𝚞𝚜
            </h2>

            {/* WHERE Section */}
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-semibold tracking-wide uppercase text-green-600">
                WHERE
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                317 Pacific C Hwy <br />
                Huntington Beach, CA 92648
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#1C1C2B] text-white text-sm font-medium rounded transition-all duration-300 hover:bg-green-700 hover:scale-105">
                VIEW MAP
              </button>
              <button className="px-6 py-2 border border-[#1C1C2B] text-sm font-medium rounded transition-all duration-300 hover:bg-green-700 hover:text-white hover:border-green-700 hover:scale-105">
                BOOK A TABLE
              </button>
            </div>

            {/* WHEN Section */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-green-600">
                WHEN
              </h3>
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
    </AnimatedSection>
  );
};

export default FindUs;
