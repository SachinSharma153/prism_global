import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, Quote, Star } from "lucide-react";

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

const destinations = [
  {
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf382b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    name: "Berlin Cathedral",
    location: "Berlin, Germany",
  },
  {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    name: "Eiffel Tower",
    location: "Paris, France",
  },
  {
    img: "https://images.unsplash.com/photo-1513635269976-7b429b1ac9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    name: "Statue of Liberty",
    location: "New York, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    name: "Shibuya Crossing",
    location: "Tokyo, Japan",
  },
];

// const testimonials = [
//   {
//     quote: "PRISM made my trip to Paris unforgettable! The itinerary was perfectly planned, and I loved every moment.",
//     name: "Emily R.",
//     location: "London",
//   },
//   {
//     quote: "I discovered hidden gems in Tokyo thanks to PRISM. Their recommendations were spot on!",
//     name: "Michael S.",
//     location: "Sydney",
//   },
// ];

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
];

const travellerExperiences = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    desc: "Exploring the streets of Rome was a dream come true. The history, food, and culture were beyond my expectations!",
    name: "Sarah M.",
    occupation: "Photographer",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    desc: "The beaches of Bali were breathtaking. PRISM helped me plan the perfect relaxing getaway.",
    name: "James K.",
    occupation: "Software Engineer",
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    desc: "Hiking in the Swiss Alps was an adventure of a lifetime. Everything was perfectly organized!",
    name: "Anna L.",
    occupation: "Graphic Designer",
  },
  {
    img: "https://images.unsplash.com/photo-1517841903207-3df79014996c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    desc: "The markets of Marrakech were vibrant and full of life. I loved every moment of my trip!",
    name: "David P.",
    occupation: "Teacher",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const destinationsRef = useRef(null);
  const experiencesRef = useRef(null);

  // Auto-advance carousel for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for Traveller's Experiences
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

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setCurrent(index);
    }
  };

  const scrollLeft = (ref) => {
    const container = ref.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    const container = ref.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={slides[current].img || FALLBACK_IMAGE}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          alt={slides[current].title}
          onError={(e) => (e.target.src = FALLBACK_IMAGE)}
        />
        <div className="absolute inset-0 bg-black/50" />
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
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3 md:right-8 md:space-y-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === current ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => handleDotClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
            />
          ))}
        </div>
      </div>

      {/* Popular Destinations Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Popular Destinations
        </h2>
        <hr className="w-24 mx-auto border-t-2 border-orange-500 mb-10" />
        <div className="flex justify-between items-center mb-6">
          <p className="text-base text-gray-500">
            Explore some of the most iconic places around the world.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => scrollLeft(destinationsRef)}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => scrollRight(destinationsRef)}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
        <div
          ref={destinationsRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4"
        >
          {destinations.map((dest, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] snap-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={dest.img || FALLBACK_IMAGE}
                  alt={dest.name}
                  className="w-[300px] h-[400px] object-cover"
                  onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {dest.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Our Blog
        </h2>
        <hr className="w-24 mx-auto border-t-2 border-orange-500 mb-10" />
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Cinque Terre Coastal Village"
              className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg"
              onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Exploring the Cinque Terre: A Coastal Adventure
            </h3>
            <p className="text-base text-gray-600">
              Nestled along the rugged Italian Riviera, the Cinque Terre is a collection of five colorful villages perched on dramatic cliffs overlooking the turquoise waters of the Ligurian Sea. From hiking scenic trails to savoring fresh seafood, discover why this UNESCO World Heritage site is a must-visit destination for travelers seeking beauty and adventure.
            </p>
            <a
              href="/blog/cinque-terre"
              className="flex items-center uppercase text-orange-500 hover:text-orange-600 transition-colors"
            >
              Read More
              <span className="ml-2 text-orange-500">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trip Planners Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-left text-gray-800">
              Trip Planners
            </h2>
            <p className="text-base text-gray-600">
              Let us help you craft the perfect journey with our expertly curated trip plans. Whether you're seeking adventure, relaxation, or cultural immersion, we have a plan tailored just for you.
            </p>
            <a
              href="/trip-plans"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              View all trip plans
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4">
              {tripPlans.map((plan, index) => (
                <div key={index} className="relative group flex-shrink-0 w-[200px] snap-center">
                  <img
                    src={plan.img}
                    alt={plan.place}
                    className="w-[200px] h-[250px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white rounded-lg">
                    <h3 className="text-lg font-semibold">{plan.place}</h3>
                    <p className="text-sm">{plan.days}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <hr className="w-24 mx-auto border-t-2 border-orange-500 mb-10" />
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-1 max-w-md bg-white rounded-lg shadow-lg p-6">
              <Quote className="w-6 h-6 text-gray-400 mb-4" />
              <p className="text-base text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Traveller's Experiences Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Traveller's Experiences
        </h2>
        <hr className="w-24 mx-auto border-t-2 border-orange-500 mb-10" />
        <p className="text-base text-gray-500 text-center mb-6">
          Hear from fellow travelers about their unforgettable journeys with PRISM.
        </p>
        <div
          ref={experiencesRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4"
        >
          {travellerExperiences.map((experience, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] snap-center">
              <div className="bg-gray-200 rounded-lg shadow-lg p-4">
                <img
                  src={experience.img}
                  alt={experience.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <p className="text-base text-gray-600 mb-4">{experience.desc}</p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 font-semibold text-center">{experience.name}</p>
                <p className="text-sm text-gray-600 text-center">{experience.occupation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mt-6">
          <button
            onClick={() => scrollLeft(experiencesRef)}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scrollRight(experiencesRef)}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;