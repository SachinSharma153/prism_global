// src/pages/Home.jsx
import React from 'react';

const heroImages = [
  {
    src: new URL('../assets/hero/ALLEPPEY-HOUSEBOAT.jpg', import.meta.url).href,
    alt: 'Alleppey Houseboat',
  },
  {
    src: new URL('../assets/hero/andaman.jpg', import.meta.url).href,
    alt: 'Andaman Beach',
  },
  {
    src: new URL('../assets/hero/Bodh_Gaya.jpg', import.meta.url).href,
    alt: 'Bodh Gaya Temple',
  },
  {
    src: new URL('../assets/hero/amritsar.jpg', import.meta.url).href,
    alt: 'Golden Temple, Amritsar',
  },
];

const Home = () => {
  return (
    <section className="relative h-screen w-full bg-black">
      {/* Full-screen background + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[0].src})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero copy */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Explore India’s Wonders
        </h1>
        <p className="text-gray-200 max-w-2xl">
          From the tranquil backwaters of Kerala to the historic alleys of Delhi,
          embark on an unforgettable journey through India’s most iconic
          landscapes and cultures.
        </p>
      </div>

      {/* Auto-scrolling image strip */}
      <div className="absolute bottom-8 inset-x-0 px-4">
        <div
          className="flex space-x-4 overflow-x-hidden snap-x snap-mandatory pb-4 animate-scroll"
        >
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-lg overflow-hidden snap-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
