import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FALLBACK_IMAGE =
  "https://via.placeholder.com/1920x1080?text=Fallback+Image";

// Load images from ../assets/hero (relative to this file)
const imageModules = import.meta.glob("../assets/hero/*.jpg", { eager: true });
const imagePaths = Object.values(imageModules).map((mod) => mod.default);

// Metadata for each image (ensure order matches filenames alphabetically)
const meta = [
  {
    title: "Bodh Gaya Temple",
    desc: "Discover the sacred site where Buddha attained enlightenment.",
    link: "/bodhgaya",
  },
  {
    title: "Alleppey Houseboat",
    desc: "Drift through Kerala’s serene backwaters on a traditional houseboat.",
    link: "/alleppey",
  },
  {
    title: "Golden Temple",
    desc: "Experience the divine peace at the famous Golden Temple.",
    link: "/amritsar",
  },
  {
    title: "Andaman Islands",
    desc: "Tropical paradise with turquoise waters and white sand beaches.",
    link: "/andaman",
  },
  {
    title: "Kerala Backwaters",
    desc: "Peaceful nights floating under the stars in houseboats.",
    link: "/kerala",
  },
];

// Merge image paths with metadata (limit to the number of metadata entries)
const slides = imagePaths.slice(0, meta.length).map((img, index) => ({
  img,
  ...meta[index],
}));

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

// HeroCarousel component using Swiper
const HeroCarousel = () => (
  <section
    className="relative h-[92vh] w-full overflow-hidden"
    role="region"
    aria-label="Hero carousel"
  >
    <Swiper
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      a11y={{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
      className="h-full"
    >
      {slides.map(({ img, title,  /* desc */}, idx) => (
       
        <SwiperSlide key={title + idx}>
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          {/* Overlay slide info (Place names and Explore button removed) */}
          <div className="absolute left-0 bottom-0 p-8 z-10 text-white max-w-xl">
            {/* <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
            <p className="mb-3">{desc}</p> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* Overlay content */}
    <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-24 space-y-6 pointer-events-none">
      <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold max-w-4xl leading-snug pointer-events-auto">
        Start your unforgettable <br /> journey with us.
      </h1>
      <p className="text-white text-lg md:text-xl pointer-events-auto">
        The best travel for your journey begins now.
      </p>
      <form
        aria-label="Search trips"
        className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md w-full max-w-xl pointer-events-auto"
        onSubmit={e => e.preventDefault()}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label htmlFor="location" className="sr-only">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter location"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="travelType" className="sr-only">Travel type</label>
            <input
              id="travelType"
              type="text"
              placeholder="Travel type"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="startDate" className="sr-only">Start date</label>
            <input
              id="startDate"
              type="date"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endDate" className="sr-only">End date</label>
            <input
              id="endDate"
              type="date"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-4"
        >
          Book Now
        </button>
      </form>
    </div>
  </section>
);

// Main Home component
const Home = () => {
  return (
    <main className="w-full font-sans">
      <HeroCarousel />

      {/* Popular Destinations */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">
          Popular Destinations
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Most popular destinations around the world, from historical places to
          natural wonders.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {destinations.map((dest, i) => (
            <div
              key={dest.name + i}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-56 object-cover"
                loading="lazy"
                onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
              />
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
        <p className="text-gray-600 mb-8">
          Explore recommended plans based on our most loved destinations.
        </p>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {tripPlans.map((plan, i) => (
            <div
              key={plan.place + i}
              className="min-w-[250px] bg-white rounded-lg shadow p-4"
            >
              <img
                src={plan.img}
                alt={plan.place}
                className="h-40 w-full object-cover rounded mb-3"
                loading="lazy"
                onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
              />
              <h4 className="font-semibold">{plan.place}</h4>
              <p className="text-sm text-gray-500">{plan.days}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Traveler's Experiences */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">
          Traveler's Experiences
        </h2>
        <p className="text-center text-gray-600 mb-10">
          See what our travelers had to say about their recent adventures.
        </p>
        <div className="flex overflow-x-auto gap-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.name + i}
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