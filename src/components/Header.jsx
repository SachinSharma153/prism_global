import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X, Phone, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/prism_Logo.png";

const destinationsData = [
  {
    region: "Northern India",
    states: [
      "Delhi",
      "Himachal Pradesh",
      "Haryana",
      "Jammu & Kashmir",
      "Punjab",
      "Uttar Pradesh",
      "Uttarakhand",
    ],
  },
  {
    region: "Southern India",
    states: [
      "Andaman & Nicobar",
      "Andhra Pradesh",
      "Kerala",
      "Karnataka",
      "Lakshadweep",
      "Puducherry",
      "Tamil Nadu",
      "Telangana",
    ],
  },
  {
    region: "Eastern India",
    states: [
      "Assam",
      "Arunachal Pradesh",
      "Bihar",
      "Jharkhand",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Orissa",
      "Sikkim",
      "Tripura",
      "West Bengal",
    ],
  },
  {
    region: "Western India",
    states: [
      "Dadar & Nagar Haveli",
      "Daman & Diu",
      "Goa",
      "Gujarat",
      "Maharashtra",
      "Rajasthan",
    ],
  },
  {
    region: "Central India",
    states: ["Madhya Pradesh", "Chhattisgarh"],
  },
];

const internationalData = [
  "Dubai",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Japan",
  "France",
  "Germany",
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30, when: "beforeChildren", staggerChildren: 0.07 },
  },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/vibe-finder", label: "What's Your Vibe" },
  { to: "#", label: "Why PRISM" },
  { to: "#", label: "Deals" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState("domestic");
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef();
  const location = useLocation();

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close dropdown when mobile menu opens
  useEffect(() => {
    if (mobile) setOpen(false);
  }, [mobile]);

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white transition-shadow`}
      animate={{ boxShadow: scrolled ? "0 2px 16px 0 rgba(0,0,0,0.10)" : "0 0px 0px 0 rgba(0,0,0,0)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <motion.img
            src={logo}
            alt="PRISM Logo"
            className="h-10 w-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.07, rotate: -2 }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === link.to ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Destinations Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center hover:text-blue-600 focus:outline-none"
              aria-expanded={open}
              aria-controls="destinations-dropdown"
            >
              Destinations
              <motion.span
                initial={false}
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? (
                  <ChevronUp className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </motion.span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  ref={dropdownRef}
                  id="destinations-dropdown"
                  className="absolute left-0 mt-2 w-[400px] max-h-[500px] overflow-y-auto bg-white shadow-lg rounded p-4"
                  onMouseLeave={() => setOpen(false)}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  role="menu"
                >
                  {/* Tab headers */}
                  <div className="flex space-x-4 mb-4 border-b pb-2">
                    <button
                      onMouseEnter={() => setTab("domestic")}
                      className={`px-2 pb-1 ${
                        tab === "domestic"
                          ? "border-b-2 border-blue-600 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      Domestic
                    </button>
                    <button
                      onMouseEnter={() => setTab("international")}
                      className={`px-2 pb-1 ${
                        tab === "international"
                          ? "border-b-2 border-blue-600 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      International
                    </button>
                  </div>

                  {/* Tab content */}
                  {tab === "domestic" ? (
                    <>
                      <p className="text-lg font-semibold mb-4">OUR REGIONS</p>
                      <div className="grid grid-cols-2 gap-6">
                        {destinationsData.map(({ region, states }) => (
                          <div key={region}>
                            <p className="font-semibold mb-2">{region}</p>
                            <ul className="space-y-1 text-gray-700">
                              {states.map((state) => (
                                <li key={state}>
                                  <Link
                                    to={`/${state
                                      .toLowerCase()
                                      .replace(/[^a-z0-9]+/gi, "-")}.html`}
                                    className="hover:underline"
                                    role="menuitem"
                                  >
                                    {state}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-lg font-semibold mb-4">
                        POPULAR COUNTRIES
                      </p>
                      <ul className="columns-2 gap-4 text-gray-700 list-none">
                        {internationalData.map((country) => (
                          <li key={country} className="mb-2">
                            <Link
                              to={`/${country
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/gi, "-")}.html`}
                              className="hover:underline"
                              role="menuitem"
                            >
                              {country}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Call and Search Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/contact-us"
            className="hover:text-blue-600"
            aria-label="Contact us"
          >
            <motion.span whileHover={{ scale: 1.2 }}>
              <Phone className="w-5 h-5" />
            </motion.span>
          </Link>
          <Link
            to="/search"
            className="hover:text-blue-600"
            aria-label="Search"
          >
            <motion.span whileHover={{ scale: 1.2 }}>
              <Search className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobile((m) => !m)}
          aria-label="Toggle menu"
        >
          <motion.span
            initial={false}
            animate={{ rotate: mobile ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.span>
        </button>
      </div>

      {/* Mobile Menu & Backdrop */}
      <AnimatePresence>
        {mobile && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
            />
            {/* Menu */}
            <motion.div
              className="md:hidden fixed inset-y-0 right-0 w-80 max-w-full bg-white z-40 overflow-y-auto shadow-xl"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <Link to="/" onClick={() => setMobile(false)}>
                  <img src={logo} alt="PRISM Logo" className="h-10 w-auto" />
                </Link>
                <button
                  onClick={() => setMobile(false)}
                  className="p-2 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <motion.div className="px-4 py-6 space-y-6" initial="hidden" animate="visible" exit="hidden">
                {navLinks.map((link) => (
                  <motion.div key={link.label} variants={mobileMenuItemVariants}>
                    <Link
                      to={link.to}
                      className={`block text-lg font-medium hover:text-blue-600 ${
                        location.pathname === link.to ? "text-blue-600 font-semibold" : ""
                      }`}
                      onClick={() => setMobile(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {/* Mobile Destinations */}
                <motion.div variants={mobileMenuItemVariants}>
                  <button
                    onClick={() => setOpen((o) => !o)}
                    className="w-full flex justify-between items-center text-lg font-medium"
                    aria-expanded={open}
                    aria-controls="mobile-destinations-dropdown"
                  >
                    Destinations {open ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        id="mobile-destinations-dropdown"
                        className="mt-3 space-y-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="flex space-x-4 mb-2">
                          <button
                            onClick={() => setTab("domestic")}
                            className={`px-2 pb-1 ${
                              tab === "domestic"
                                ? "border-b-2 border-blue-600 font-semibold"
                                : "text-gray-600"
                            }`}
                          >
                            Domestic
                          </button>
                          <button
                            onClick={() => setTab("international")}
                            className={`px-2 pb-1 ${
                              tab === "international"
                                ? "border-b-2 border-blue-600 font-semibold"
                                : "text-gray-600"
                            }`}
                          >
                            International
                          </button>
                        </div>
                        {tab === "domestic" &&
                          destinationsData.map(({ region, states }) => (
                            <div key={region}>
                              <p className="font-semibold mb-2">{region}</p>
                              <ul className="ml-4 space-y-1 text-gray-700">
                                {states.map((state) => (
                                  <li key={state}>
                                    <Link
                                      to={`/${state
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/gi, "-")}.html`}
                                      className="block hover:text-blue-600"
                                      onClick={() => setMobile(false)}
                                    >
                                      {state}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        {tab === "international" && (
                          <ul className="ml-4 space-y-1 text-gray-700">
                            {internationalData.map((country) => (
                              <li key={country}>
                                <Link
                                  to={`/${country
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/gi, "-")}.html`}
                                  className="block hover:text-blue-600"
                                  onClick={() => setMobile(false)}
                                >
                                  {country}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div className="flex space-x-6 pt-4" variants={mobileMenuItemVariants}>
                  <Link
                    to="/contact-us"
                    className="text-lg font-medium hover:text-blue-600"
                    onClick={() => setMobile(false)}
                  >
                    <Phone className="w-6 h-6 inline mr-2" /> Contact Us
                  </Link>
                  <Link
                    to="/search"
                    className="text-lg font-medium hover:text-blue-600"
                    onClick={() => setMobile(false)}
                  >
                    <Search className="w-6 h-6 inline mr-2" /> Search
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;