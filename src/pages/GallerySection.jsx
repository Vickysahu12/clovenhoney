import React from "react";

// apni images import kar
import img1 from "../assets/image/bread1.webp";
import img2 from "../assets/image/bread2.webp";
import img3 from "../assets/image/bread3.webp";
import img4 from "../assets/image/bread4.webp";
import img5 from "../assets/image/bread5.webp"; // bada image

const images = [
  { src: img1, alt: "Pastry" },
  { src: img2, alt: "Bread" },
  { src: img5, alt: "Big showcase", big: true },
  { src: img3, alt: "Croissant" },
  { src: img4, alt: "Churros" },
];

const GallerySection = () => {
  return (
    <section className="w-full bg-white py-0">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-0">
        {/* IMG 1 */}
        <div className="relative overflow-hidden">
          <img
            src={img1}
            alt="Pastry"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* IMG 2 */}
        <div className="relative overflow-hidden">
          <img
            src={img2}
            alt="Bread"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* BIG RIGHT IMAGE */}
        <div className="relative overflow-hidden md:row-span-2 md:col-span-1 col-span-2">
          <img
            src={img5}
            alt="Big showcase"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* IMG 3 */}
        <div className="relative overflow-hidden">
          <img
            src={img3}
            alt="Croissant"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* IMG 4 */}
        <div className="relative overflow-hidden">
          <img
            src={img4}
            alt="Churros"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
