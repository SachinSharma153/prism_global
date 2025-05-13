// src/pages/Home.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';

// Fallback image
const FALLBACK_IMAGE = "https://via.placeholder.com/1920x1080?text=Fallback+Image";

// Slide data
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

// Updated Popular Destinations with more cards
const destinations = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661926609415-bd7e448383d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Berlin Cathedral",
    location: "Berlin, Germany",
  },
  {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    name: "Eiffel Tower",
    location: "Paris, France",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Statue of Liberty",
    location: "New York, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    name: "Shibuya Crossing",
    location: "Tokyo, Japan",
  },
  {
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    name: "Santorini",
    location: "Greece",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1694475501155-2f344cea9eb3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Machu Picchu",
    location: "Peru",
  },
];

// Updated Trip Plans with more cards
const tripPlans = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=250&q=80",
    place: "Maldives",
    days: "7 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=250&q=80",
    place: "Santorini",
    days: "5 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=250&q=80",
    place: "Kyoto",
    days: "6 Days",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place: "Bali",
    days: "8 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place: "Dubai",
    days: "4 Days",
  },
];

// Updated Traveller Experiences with more cards
const travellerExperiences = [
  {
    desc: "Exploring the streets of Rome was a dream come true. The history, food, and culture were beyond my expectations!",
    name: "Sarah M.",
    occupation: "Photographer",
  },
  {
    desc: "The beaches of Bali were breathtaking. PRISM helped me plan the perfect relaxing getaway.",
    name: "James K.",
    occupation: "Software Engineer",
  },
  {
    desc: "Hiking in the Swiss Alps was an adventure of a lifetime. Everything was perfectly organized!",
    name: "Anna L.",
    occupation: "Graphic Designer",
  },
  {
    desc: "The markets of Marrakech were vibrant and full of life. I loved every moment of my trip!",
    name: "David P.",
    occupation: "Teacher",
  },
  {
    desc: "Visiting the Great Wall of China was awe-inspiring. PRISM made the journey seamless!",
    name: "Emily R.",
    occupation: "Writer",
  },
  {
    desc: "The Northern Lights in Iceland were magical. An unforgettable experience!",
    name: "Michael T.",
    occupation: "Architect",
  },
];

// Custom Icons
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C4.1 0 1 3.1 1 7C1 10.9 8 16 8 16C8 16 15 10.9 15 7C15 3.1 11.9 0 8 0ZM8 9C6.3 9 5 7.7 5 6C5 4.3 6.3 3 8 3C9.7 3 11 4.3 11 6C11 7.7 9.7 9 8 9Z" fill="#331811"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0L12.2451 6.1797L18.6603 6.90983L13.8296 11.0903L15.2908 17.3402L10 14.1797L4.70918 17.3402L6.17038 11.0903L1.33975 6.90983L7.75492 6.1797L10 0Z" fill="#FF7757"/>
  </svg>
);

const RightArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#331811" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Hero Navigation Component
const HeroNavigation = ({ current, total, onPrev, onNext, onSelect }) => {
  const circleSpacing = 40;
  const chevronY = 8 + total * circleSpacing;
  const downChevronY = chevronY + 16;

  return (
    <svg
      width="16"
      height={downChevronY + 10}
      viewBox={`0 0 16 ${downChevronY + 10}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(total)].map((_, index) => (
        <circle
          key={index}
          cx="8"
          cy={8 + index * circleSpacing}
          r={index === current ? 8 : 6}
          fill={index === current ? "#FF7757" : "white"}
          onClick={() => onSelect(index)}
          style={{ cursor: "pointer", transition: "r 0.3s ease" }}
        />
      ))}
      <path
        d={`M15 ${chevronY} L8 ${chevronY - 6} L1 ${chevronY}`}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={onPrev}
        style={{ cursor: "pointer" }}
      />
      <path
        d={`M1 ${downChevronY} L8 ${downChevronY + 6} L15 ${downChevronY}`}
        stroke="#FF7757"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={onNext}
        style={{ cursor: "pointer" }}
      />
    </svg>
  );
};

// Scroll Button Components
const LeftButton = () => (
  <svg
    width="40"
    height="44"
    viewBox="0 0 40 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="44" rx="8" fill="#172432" />
    <path
      d="M23 15L16 22L23 29"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightButton = () => (
  <svg
    width="40"
    height="44"
    viewBox="0 0 40 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="44" rx="8" fill="#FF7757" />
    <path
      d="M16 29L23 22L16 15"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Home = () => {
  const [current, setCurrent] = useState(0);
  const destinationsRef = useRef(null);
  const experiencesRef = useRef(null);
  const tripPlansRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = experiencesRef.current;
    if (container) {
      const interval = setInterval(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  const handleDotClick = useCallback((index) => setCurrent(index), []);
  const prevSlide = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), []);
  const nextSlide = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), []);

  const scrollLeft = useCallback((ref) => {
    const container = ref.current;
    if (container) container.scrollBy({ left: -300, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback((ref) => {
    const container = ref.current;
    if (container) container.scrollBy({ left: 300, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={slides[current].img || FALLBACK_IMAGE}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          alt={slides[current].title}
          onError={(e) => (e.target.src = FALLBACK_IMAGE)}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white md:items-start md:px-12 md:max-w-lg space-y-4">
          <b className="text-5xl md:text-6xl font-playfair">{slides[current].title}</b>
          <p className="text-lg md:text-xl">{slides[current].desc}</p>
          <a
            href={slides[current].link}
            className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-[#FF6644] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <HeroNavigation
            current={current}
            total={slides.length}
            onPrev={prevSlide}
            onNext={nextSlide}
            onSelect={handleDotClick}
          />
        </div>
      </div>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-gray-100 container mx-auto px-4 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-4">
          Popular Destinations
        </h2>
        <hr className="w-24 mx-auto border-t-2 border-primary mb-10" />
        <div className="flex justify-between items-center mb-6">
          <p className="text-base">
            Explore some of the most iconic places around the world.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => scrollLeft(destinationsRef)}
              aria-label="Scroll left"
            >
              <LeftButton />
            </button>
            <button
              onClick={() => scrollRight(destinationsRef)}
              aria-label="Scroll right"
            >
              <RightButton />
            </button>
          </div>
        </div>
        <div
          ref={destinationsRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4"
        >
          {destinations.map((dest, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] snap-center group">
              <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10">
                <img
                  src={dest.img || FALLBACK_IMAGE}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-semibold text-white drop-shadow font-playfair">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-white flex items-center mt-1 drop-shadow">
                    <PinIcon />
                    <span className="ml-1">{dest.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white container mx-auto px-4 md:px-16 md:pb-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-4">
          Our Blog
        </h2>
        <hr className="w-24 mx-auto border-t-2 border-primary mb-10" />
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=762&h=873&q=80"
              alt="Cinque Terre Coastal Village"
              loading="lazy"
              className="w-[762px] h-[873px] object-cover rounded-lg shadow-lg max-w-full"
              onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold font-playfair">
              Exploring the Cinque Terre: A Coastal Adventure
            </h3>
            <p className="text-base">
              Nestled along the rugged Italian Riviera, the Cinque Terre is a collection of five colorful villages...
            </p>
            <a
              href="/blog/cinque-terre"
              className="flex items-center uppercase text-primary hover:text-[#FF6644] transition-colors"
            >
              Read More
              <RightArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Trip Planners Section */}
      <section className="py-16 bg-white container mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-left font-playfair">
              Trip Planners
            </h2>
            <hr className="w-24 border-t-2 border-primary mb-6" />
            <p className="text-base">
              Let us help you craft the perfect journey with our expertly curated trip plans...
            </p>
            <a
              href="/trip-plans"
              className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-[#FF6644] transition-colors"
            >
              View all trip plans
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-end mb-4">
              <div className="flex space-x-3">
                <button
                  onClick={() => scrollLeft(tripPlansRef)}
                  aria-label="Scroll left"
                >
                  <LeftButton />
                </button>
                <button
                  onClick={() => scrollRight(tripPlansRef)}
                  aria-label="Scroll right"
                >
                  <RightButton />
                </button>
              </div>
            </div>
            <div
              ref={tripPlansRef}
              className="flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4"
            >
              {tripPlans.map((plan, index) => (
                <div key={index} className="flex-shrink-0 w-[200px] snap-center group">
                  <div className="transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10">
                    <img
                      src={plan.img}
                      alt={plan.place}
                      loading="lazy"
                      className="w-[200px] h-[250px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-center">
                      <h3 className="text-lg font-semibold font-playfair text-gray-800">{plan.place}</h3>
                      <p className="text-sm text-gray-600">{plan.days}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traveller's Experiences Section */}
      <section className="py-16 bg-gray-100 container mx-auto px-4 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-4">
          Traveller's Experiences
        </h2>
        <hr className="w-24 mx-auto border-t-2 border-primary mb-10" />
        <p className="text-base text-center mb-6">
          Hear from fellow travelers about their unforgettable journeys with PRISM.
        </p>
        <div
          ref={experiencesRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4"
        >
          {travellerExperiences.map((experience, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] snap-center group">
              <div className="bg-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10">
                <p className="text-base mb-4">{experience.desc}</p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="font-semibold text-center font-playfair">{experience.name}</p>
                <p className="text-sm text-center">{experience.occupation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mt-6">
          <button
            onClick={() => scrollLeft(experiencesRef)}
            aria-label="Scroll left"
          >
            <LeftButton />
          </button>
          <button
            onClick={() => scrollRight(experiencesRef)}
            aria-label="Scroll right"
          >
            <RightButton />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;