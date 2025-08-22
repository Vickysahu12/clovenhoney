import React from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function AboutUs() {
  return (
    <AnimatedSection>
    <section className="w-full py-20 bg-white text-center px-6 md:px-20">
      {/* Tagline */}
      <p className="uppercase tracking-widest text-sm text-amber-600 font-semibold">
        𝙱𝚎𝚌𝚊𝚞𝚜𝚎 𝚆𝚎 𝙻𝚘𝚟𝚎 𝙲𝚘𝚏𝚏𝚎𝚎
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
        About Us
      </h2>

      {/* Divider Line */}
      <div className="w-12 h-1 bg-amber-600 mx-auto my-6 rounded"></div>

      {/* Content */}
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
        At <span className="font-semibold text-gray-900">𝙲𝚕𝚘𝚟𝚎𝙽'𝙷𝚘𝚗𝚎𝚢</span>, every cup of coffee and every dish is crafted with love, passion, and care. 
        Our mission is to bring people together over exceptional coffee and delicious food, 
        creating a cozy space where conversations flow as smoothly as our brews.  
        From sourcing the finest beans to curating a menu full of fresh and flavorful options, 
        we’re here to serve you a café experience that feels like home.
      </p>
    </section>
    </AnimatedSection>
  );
}


