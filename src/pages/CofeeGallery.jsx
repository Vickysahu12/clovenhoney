import React, { useState, useEffect } from 'react';

import image1 from "../assets/image/cafe1.webp";
import image2 from "../assets/image/cafe222.webp";
import image3 from "../assets/image/vafe.webp";
import image4 from "../assets/image/vafe1.webp";

const CoffeeGallery = () => {
  const images = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
  ];

  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Preload images for smooth loading
    const preloadImages = () => {
      images.forEach((img) => {
        const image = new Image();
        image.src = img.url;
        image.onload = () => {
          setLoadedImages((prev) => [...prev, img.id]);
        };
      });
    };

    preloadImages();
  }, [images]);

  return (
    <div className="w-full font-sans">
      {/* Desktop Layout */}
      {/* Desktop Layout */}
<div className="hidden md:grid md:grid-cols-2 w-full gap-0">
  {/* Left Column */}
  <div className="grid grid-rows-2 gap-0">
    {/* Top-left: Two side-by-side images */}
    <div className="grid grid-cols-2 gap-0">
      <div className="overflow-hidden aspect-[1/1]">
        <img
          src={images[0].url}
          alt="Coffee image 1"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            loadedImages.includes(images[0].id) ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="overflow-hidden aspect-[1/1]">
        <img
          src={images[1].url}
          alt="Coffee image 2"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            loadedImages.includes(images[1].id) ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>

    {/* Bottom-left: Wide image */}
    <div className="overflow-hidden aspect-[2/1]">
      <img
        src={images[2].url}
        alt="Coffee image 3"
        className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
          loadedImages.includes(images[2].id) ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  </div>

  {/* Right Column: Tall image */}
  <div className="row-span-2 overflow-hidden aspect-[square]">
    <img
      src={images[3].url}
      alt="Coffee image 4"
      className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
        loadedImages.includes(images[3].id) ? "opacity-100" : "opacity-0"
      }`}
    />
  </div>
</div>


      {/* Mobile Layout */}
      <div className="md:hidden w-full grid grid-cols-2 gap-0">
        <div className="overflow-hidden">
          <img
            src={images[0].url}
            alt="Coffee image 1"
            className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
              loadedImages.includes(images[0].id) ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={images[1].url}
            alt="Coffee image 2"
            className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
              loadedImages.includes(images[1].id) ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="overflow-hidden col-span-2">
          <img
            src={images[2].url}
            alt="Coffee image 3"
            className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
              loadedImages.includes(images[2].id) ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="overflow-hidden col-span-2">
          <img
            src={images[3].url}
            alt="Coffee image 4"
            className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
              loadedImages.includes(images[3].id) ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default CoffeeGallery;
