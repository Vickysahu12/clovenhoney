import React, { useState, useEffect } from 'react';

// अपनी इमेजेस को यहां से इंपोर्ट करें।
// चूंकि हम वर्चुअल वातावरण में हैं, इसलिए ये पाथ अभी काम नहीं करेंगे।
// लेकिन आपके लोकल प्रोजेक्ट में ये सही तरह से काम करेंगे।
// इस बार हम प्लेसहोल्डर URL का उपयोग कर रहे हैं ताकि कोड बिना एरर के चल सके।
import kit from "../assets/image/kit1.webp";
import kite from "../assets/image/kit2.webp";
import kitee from "../assets/image/kit3.webp";
import kiteee from "../assets/image/kit4.webp";

const KitchenGallery = () => {
  
  const images = [
    { id: 1, url: kit },
    { id: 2, url: kite },
    { id: 3, url:kitee },
    { id: 4, url: kiteee },
  ];

  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // This effect preloads the images to ensure a smooth, lag-free experience.
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
      {/* Desktop Layout: Main image on the left, smaller images on the right */}
      <div className="hidden md:grid md:grid-cols-2 w-full">
        {/* Left Column (Main Image) */}
        <div className="col-span-1 row-span-2 overflow-hidden">
          <img
            src={images[0].url}
            alt="Delicious toast with ice cream"
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              loadedImages.includes(images[0].id) ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        {/* Right Column (Two rows of images) */}
        <div className="col-span-1 grid grid-cols-2 grid-rows-2">
          {/* Top two images */}
          <div className="col-span-1 overflow-hidden">
            <img
              src={images[1].url}
              alt="Kitchen image 2"
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                loadedImages.includes(images[1].id) ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
          <div className="col-span-1 overflow-hidden">
            <img
              src={images[2].url}
              alt="Kitchen image 3"
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                loadedImages.includes(images[2].id) ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
          {/* Fourth image full width */}
          <div className="col-span-2 overflow-hidden">
            <img
              src={images[3].url}
              alt="Kitchen image 4"
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                loadedImages.includes(images[3].id) ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout: Stacked images with center two side-by-side */}
      <div className="md:hidden w-full">
        {/* Top image */}
        <div className="w-full overflow-hidden">
          <img
            src={images[0].url}
            alt="Delicious toast with ice cream"
            className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
              loadedImages.includes(images[0].id) ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        {/* Center two images side by side */}
        <div className="flex w-full">
          {images.slice(1, 3).map((img) => (
            <div key={img.id} className="w-1/2 overflow-hidden">
              <img
                src={img.url}
                alt={`Kitchen image ${img.id}`}
                className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
                  loadedImages.includes(img.id) ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
        {/* Bottom image */}
        <div className="w-full overflow-hidden">
          <img
            src={images[3].url}
            alt="Sliced bread"
            className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
              loadedImages.includes(images[3].id) ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default KitchenGallery;
