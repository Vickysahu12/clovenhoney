import React, { useState, useEffect } from "react";

import image1 from "../assets/image/cafe1.webp";
import image2 from "../assets/image/cafe222.webp";
import image3 from "../assets/image/vafe.webp";
import image4 from "../assets/image/vafe1.webp";
import AnimatedSection from "../components/AnimatedSection";
const images = [
  { id: 1, url: image1 ,alt:"latte"},
  { id: 2, url: image2 , alt:"cappuciano"},
  { id: 3, url: image3 , alt:"cafeshop"},
  { id: 4, url: image4 , },
];

const CoffeeGallery = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    let isMounted = true; // ✅ safety check for cleanup

    const preloadImages = () => {
      images.forEach((img) => {
        const image = new Image();
        image.src = img.url;
        image.onload = () => {
          if (isMounted) {
            setLoadedImages((prev) => {
              if (prev.includes(img.id)) return prev; // ✅ avoid duplicates
              return [...prev, img.id];
            });
          }
        };
      });
    };

    preloadImages();

    return () => {
      isMounted = false; // ✅ cleanup
    };
  }, []);

  // Reusable Image Component with Hover Effect and Text
  const GalleryImage = ({ src, alt, id, aspect }) => (
    <div className={`relative group overflow-hidden ${aspect}`}>
      {/* Image with zoom and brightness on hover */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        fetchPriority="high"
        className={`w-full h-full object-cover transform-gpu will-change-transform
          transition-all duration-700 ease-in-out
          ${loadedImages.includes(id) ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          group-hover:scale-110 group-hover:brightness-75`}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Hover text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg md:text-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
          {alt}
        </p>
      </div>
    </div>
  );

  return (
    <AnimatedSection>
    <section className="w-full font-sans bg-white">
      {/* -------- Desktop Layout -------- */}
      <div className="hidden md:grid md:grid-cols-2 w-full gap-0">
        {/* Left column */}
        <div className="grid grid-rows-2 gap-0">
          <div className="grid grid-cols-2 gap-0">
            <GalleryImage src={images[0].url} alt={images[0].alt} id={1} aspect="aspect-[1/1]" />
            <GalleryImage src={images[1].url} alt={images[1].alt} id={2} aspect="aspect-[1/1]" />
          </div>
          <GalleryImage src={images[2].url} alt={images[2].alt} id={3} aspect="aspect-[2/1]" />
        </div>

        {/* Right column */}
        <GalleryImage src={images[3].url} alt={images[3].alt} id={4} aspect="aspect-square" />
      </div>

      {/* -------- Mobile Layout -------- */}
      <div className="md:hidden w-full grid grid-cols-2 gap-0">
        <GalleryImage src={images[0].url} alt={images[0].alt} id={1} aspect="aspect-[1/1]" />
        <GalleryImage src={images[1].url} alt={images[1].alt} id={2} aspect="aspect-[1/1]" />
        <GalleryImage src={images[2].url} alt={images[2].alt} id={3} aspect="col-span-2 aspect-[2/1]" />
        <GalleryImage src={images[3].url} alt={images[3].alt} id={4} aspect="col-span-2 aspect-square" />
      </div>
    </section>
    </AnimatedSection>
  );
};

export default CoffeeGallery;
