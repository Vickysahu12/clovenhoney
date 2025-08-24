import React, { useState, useEffect } from "react";

// Images
import img1 from "../assets/image/bread1.webp";
import img2 from "../assets/image/bread2.webp";
import img3 from "../assets/image/bread3.webp";
import img4 from "../assets/image/bread4.webp";
import img5 from "../assets/image/bread5.webp"; // big showcase
import AnimatedSection from "../components/AnimatedSection";

const images = [
  { id: 1, src: img1, alt: "Pastry" },
  { id: 2, src: img2, alt: "Bread" },
  { id: 3, src: img5, alt: "Big showcase", big: true },
  { id: 4, src: img3, alt: "Croissant" },
  { id: 5, src: img4, alt: "Churros" },
];

const GallerySection = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    let isMounted = true;

    images.forEach((img) => {
      const image = new Image();
      image.src = img.src;
      image.onload = () => {
        if (isMounted) {
          setLoadedImages((prev) => {
            if (prev.includes(img.id)) return prev;
            return [...prev, img.id];
          });
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AnimatedSection>
      <section className="w-full bg-white py-0">
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-0">
          {images.map((img) => (
            <div
              key={img.id}
              className={`relative group overflow-hidden ${
                img.big ? "md:row-span-2 md:col-span-1 col-span-2" : ""
              }`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                loading={img.big ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={img.big ? "high" : "auto"}
                className={`w-full h-full object-cover transform-gpu will-change-transform
                  transition-all duration-700 ease-in-out
                  ${
                    loadedImages.includes(img.id)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }
                  group-hover:scale-110 group-hover:brightness-105 rounded`}
              />

              {/* Overlay on hover (green accent) */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-emerald-200 text-lg md:text-xl font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default GallerySection;
