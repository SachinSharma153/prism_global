// Enhanced Home.jsx with added paddings and extended carousel cards
import React, { useEffect, useState } from "react";

const FALLBACK_IMAGE = "https://via.placeholder.com/1920x1080?text=Fallback+Image";

const slides = [
  {
    img: "https://source.unsplash.com/1920x1080/?mountains,village",
    title: "Start your unforgettable journey with us.",
    desc: "The best travel for your journey begins here.",
    link: "/",
  },
];

const destinations = [
  {
    img: "https://images.unsplash.com/photo-1582044982282-2a07c3c4e1b9?auto=format&fit=crop&w=600&q=80",
    name: "Mountains of Rome",
    location: "Rome, Italy",
  },
  {
    img: "https://images.unsplash.com/photo-1587486913040-4b1d0b2cb9e3?auto=format&fit=crop&w=600&q=80",
    name: "Sunset Bridge",
    location: "Prague, Czechia",
  },
  {
    img: "https://images.unsplash.com/photo-1588361869392-7bd0d4203aa6?auto=format&fit=crop&w=600&q=80",
    name: "Italy Streets",
    location: "Rome, Italy",
  },
  {
    img: "https://images.unsplash.com/photo-1535123908820-a967af1c9475?auto=format&fit=crop&w=600&q=80",
    name: "Snowy Peak",
    location: "Zermatt, Switzerland",
  },
];

const tripPlans = [
  {
    img: "https://images.unsplash.com/photo-1606154161959-968e6cf2074e?auto=format&fit=crop&w=600&q=80",
    place: "Paris City Tour",
    days: "5 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1601651902643-7119d4c6e3d6?auto=format&fit=crop&w=600&q=80",
    place: "Rome Getaway",
    days: "4 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1546539782-6fc531453083?auto=format&fit=crop&w=600&q=80",
    place: "Barcelona Beauty",
    days: "6 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1551887375-5d5bb8f6aa9c?auto=format&fit=crop&w=600&q=80",
    place: "Swiss Alps Adventure",
    days: "7 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80",
    place: "Amsterdam Biking",
    days: "3 Days",
  },
];

const experiences = [
  {
    desc: "It was a beautiful experience. The hotels, the guides, everything was perfectly arranged. Definitely recommend Travellian!",
    name: "John Doe",
    occupation: "Photographer",
  },
  {
    desc: "Booking through Travellian made my trip so smooth and hassle-free. Exceptional service and memorable experience!",
    name: "Alice Kim",
    occupation: "Solo Traveler",
  },
  {
    desc: "Their planning and recommendations were spot on! I had the best trip with my family. We’ll travel again with them!",
    name: "Thomas Hill",
    occupation: "Family Tourist",
  },
  {
    desc: "Amazing guides and flexible plans. Travellian helped me discover hidden gems across Europe effortlessly!",
    name: "Sara Lee",
    occupation: "Travel Blogger",
  },
  {
    desc: "Highly professional team and outstanding support throughout the journey. A+ travel agency!",
    name: "Michael Ray",
    occupation: "Explorer",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src={slides[current].img}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.target.src = FALLBACK_IMAGE)}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-24 space-y-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-xl">
            {slides[current].title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-md">
            {slides[current].desc}
          </p>

          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md space-y-3 w-full max-w-xl">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter location"
                className="px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Travel type"
                className="px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <button className="bg-primary text-white w-full py-2 rounded hover:bg-orange-500">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Popular Destinations</h2>
        <p className="text-center text-gray-600 mb-12">
          Most popular destinations around the world, from historical places to natural wonders.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {destinations.map((dest, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg">
              <img src={dest.img} alt={dest.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{dest.name}</h3>
                <p className="text-sm text-gray-500">{dest.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trip Planners */}
      <section className="py-24 px-6 md:px-24 bg-gray-50">
        <h2 className="text-4xl font-bold mb-6">Trip Planners</h2>
        <p className="text-gray-600 mb-8">Explore recommended plans based on our most loved destinations.</p>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {tripPlans.map((plan, i) => (
            <div key={i} className="min-w-[250px] bg-white rounded-lg shadow p-4">
              <img src={plan.img} alt={plan.place} className="h-40 w-full object-cover rounded mb-3" />
              <h4 className="font-semibold">{plan.place}</h4>
              <p className="text-sm text-gray-500">{plan.days}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Traveler's Experiences */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Traveler's Experiences</h2>
        <p className="text-center text-gray-600 mb-10">
          See what our travelers had to say about their recent adventures.
        </p>
        <div className="flex overflow-x-auto gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-gray-50 p-6 rounded-lg shadow text-sm space-y-3"
            >
              <p className="text-gray-800">"{exp.desc}"</p>
              <div className="pt-4 border-t border-gray-300">
                <p className="font-semibold">{exp.name}</p>
                <p className="text-xs text-gray-500">{exp.occupation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;