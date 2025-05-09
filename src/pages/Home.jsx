// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Fallback image in case primary images fail
const FALLBACK_IMAGE =
  "https://via.placeholder.com/1920x1080?text=Fallback+Image";

const slides = [
  {
    img: new URL("../assets/hero/ALLEPPEY-HOUSEBOAT.jpg", import.meta.url).href,
    title: "Alleppey Houseboat",
    desc: "Drift through Kerala’s serene backwaters on a traditional houseboat experience.",
    link: "/alleppey",
  },
  {
    img: new URL("../assets/hero/andaman.jpg", import.meta.url).href,
    title: "Andaman Beach",
    desc: "Sunbathe on powder-white sands surrounded by crystal-clear waters.",
    link: "/andaman",
  },
  {
    img: new URL("../assets/hero/Bodh_Gaya.jpg", import.meta.url).href,
    title: "Bodh Gaya Temple",
    desc: "Discover the sacred site where Buddha attained enlightenment.",
    link: "/bodhgaya",
  },
  {
    img: new URL("../assets/hero/amritsar.jpg", import.meta.url).href,
    title: "Golden Temple, Amritsar",
    desc: "Experience the spiritual glow of the world’s most revered Sikh shrine.",
    link: "/amritsar",
  },
].map((slide) => ({ ...slide, webp: slide.img.replace(".jpg", ".webp") }));

const Home = () => {
  const [current, setCurrent] = useState(0);
  const thumbnailsRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Scroll thumbnails into view
  useEffect(() => {
    const thumbs = thumbnailsRef.current;
    if (thumbs) {
      const slideWidth = thumbs.children[0].offsetWidth + 16; // 16px gap
      thumbs.scrollTo({ left: current * slideWidth, behavior: "smooth" });
    }
  }, [current]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <img
        src={slides[current].img || FALLBACK_IMAGE}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        alt={slides[current].title}
        onError={(e) => (e.target.src = FALLBACK_IMAGE)}
      />

      <div className="absolute inset-0 bg-black/50" />

      {/* Overlayed Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white md:items-start md:px-12 md:max-w-lg space-y-4"
        aria-live="polite"
      >
        <b className="text-5xl md:text-6xl">{slides[current].title}</b>
        <p className="text-lg md:text-xl">{slides[current].desc}</p>
        <a
          href={slides[current].link}
          className="inline-block bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
        >
          Learn More
        </a>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-[19rem] left-1/2 transform -translate-x-1/2 z-20 hidden md:flex space-x-4 md:left-auto md:right-12 md:transform-none">
        <button
          onClick={prevSlide}
          className="bg-white/50 p-2 rounded-full shadow hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/50 p-2 rounded-full shadow hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Thumbnails */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:bottom-8 md:left-auto md:right-12 md:w-[26rem] md:transform-none"
        ref={thumbnailsRef}
      >
        <div className="flex space-x-4 justify-center md:justify-start">
          {slides.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 h-64 rounded-lg overflow-hidden snap-center border-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: i === current ? "#FACC15" : "transparent",
              }}
              onClick={() => setCurrent(i)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
            >
              <img
                src={s.img || FALLBACK_IMAGE}
                alt={s.title}
                className="w-full h-full object-cover object-center"
                onError={(e) => (e.target.src = FALLBACK_IMAGE)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
