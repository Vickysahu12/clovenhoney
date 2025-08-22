import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const Newsletter = () => {
  return (
    <AnimatedSection>
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Outer Box */}
        <div className="bg-gray-50 rounded-md shadow-sm py-16 px-6 md:px-12 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Never miss out
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mb-8 text-base md:text-lg">
            Sign up for our Newsletter and get the latest Coffee Bean news, 
            unique offers and access to exclusive products.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full sm:flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm placeholder-gray-500 rounded"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#1C1C2B] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#2a2a3d] transition rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Newsletter;
