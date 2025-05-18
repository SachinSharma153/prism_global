import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Phone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/prism_Logo.png';

const destinationsData = [
  {
    region: 'Northern India',
    states: ['Delhi', 'Himachal Pradesh', 'Haryana', 'Jammu & Kashmir', 'Punjab', 'Uttar Pradesh', 'Uttarakhand'],
  },
  {
    region: 'Southern India',
    states: ['Andaman & Nicobar', 'Andhra Pradesh', 'Kerala', 'Karnataka', 'Lakshadweep', 'Puducherry', 'Tamil Nadu', 'Telangana'],
  },
  {
    region: 'Eastern India',
    states: ['Assam', 'Arunachal Pradesh', 'Bihar', 'Jharkhand', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Sikkim', 'Tripura', 'West Bengal'],
  },
  {
    region: 'Western India',
    states: ['Dadar & Nagar Haveli', 'Daman & Diu', 'Goa', 'Gujarat', 'Maharashtra', 'Rajasthan'],
  },
  {
    region: 'Central India',
    states: ['Madhya Pradesh', 'Chhattisgarh'],
  },
];

const internationalData = [
  'Dubai',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Japan',
  'France',
  'Germany',
];

const Header = () => {
  const [open, setOpen] = useState(false);       // dropdown open?
  const [mobile, setMobile] = useState(false);   // mobile menu open?
  const [tab, setTab] = useState('domestic');    // 'domestic' | 'international'

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="PRISM Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>

          {/* Destinations Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(o => !o)}
              className="flex items-center hover:text-blue-600 focus:outline-none"
            >
              Destinations
              {open ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
            </button>

            {open && (
              <div
                className="absolute left-0 mt-2 w-[400px] max-h-[500px] overflow-y-auto bg-white shadow-lg rounded p-4"
                onMouseLeave={() => setOpen(false)}
              >
                {/* Tab headers */}
                <div className="flex space-x-4 mb-4 border-b pb-2">
                  <button
                    onMouseEnter={() => setTab('domestic')}
                    className={`px-2 pb-1 ${tab === 'domestic' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
                  >
                    Domestic
                  </button>
                  <button
                    onMouseEnter={() => setTab('international')}
                    className={`px-2 pb-1 ${tab === 'international' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
                  >
                    International
                  </button>
                </div>

                {/* Tab content */}
                {tab === 'domestic' ? (
                  <>
                    <p className="text-lg font-semibold mb-4">OUR REGIONS</p>
                    <div className="grid grid-cols-2 gap-6">
                      {destinationsData.map(({ region, states }) => (
                        <div key={region}>
                          <p className="font-semibold mb-2">{region}</p>
                          <ul className="space-y-1 text-gray-700">
                            {states.map(state => (
                              <li key={state}>
                                <a
                                  href={`/${state.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}.html`}
                                  className="hover:underline"
                                >
                                  {state}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-semibold mb-4">POPULAR COUNTRIES</p>
                    <ul className="columns-2 gap-4 text-gray-700 list-none">
                      {internationalData.map(country => (
                        <li key={country} className="mb-2">
                          <a
                            href={`/${country.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}.html`}
                            className="hover:underline"
                          >
                            {country}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>

          <Link to="/vibe-finder" className="hover:text-blue-600">What's Your Vibe</Link>
          <Link to="#" className="hover:text-blue-600">Why PRISM</Link>
          <Link to="#" className="hover:text-blue-600">Deals</Link>
        </nav>

        {/* Call and Search Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact-us" className="hover:text-blue-600" aria-label="Contact us">
            <Phone className="w-5 h-5" />
          </Link>
          <Link to="/search" className="hover:text-blue-600" aria-label="Search">
            <Search className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobile(m => !m)}
          aria-label="Toggle menu"
        >
          {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <div className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <Link to="/">
              <img src={logo} alt="PRISM Logo" className="h-10 w-auto" />
            </Link>
            <button onClick={() => setMobile(false)} className="p-2 focus:outline-none" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-4 py-6 space-y-6">
            <Link to="/" className="block text-lg font-medium hover:text-blue-600" onClick={() => setMobile(false)}>
              Home
            </Link>
            {/* Mobile Destinations */}
            <div>
              <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex justify-between items-center text-lg font-medium"
              >
                Destinations {open ? <ChevronUp /> : <ChevronDown />}
              </button>
              {open && (
                <div className="mt-3 space-y-4">
                  {tab === 'domestic' && destinationsData.map(({ region, states }) => (
                    <div key={region}>
                      <p className="font-semibold mb-2">{region}</p>
                      <ul className="ml-4 space-y-1 text-gray-700">
                        {states.map(state => (
                          <li key={state}>
                            <a
                              href={`/${state.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}.html`}
                              className="block hover:text-blue-600"
                              onClick={() => setMobile(false)}
                            >
                              {state}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {tab === 'international' && (
                    <ul className="ml-4 space-y-1 text-gray-700">
                      {internationalData.map(country => (
                        <li key={country}>
                          <a
                            href={`/${country.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}.html`}
                            className="block hover:text-blue-600"
                            onClick={() => setMobile(false)}
                          >
                            {country}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <Link to="/vibe-finder" className="block text-lg font-medium hover:text-blue-600" onClick={() => setMobile(false)}>
              What's Your Vibe
            </Link>
            <Link to="#" className="block text-lg font-medium hover:text-blue-600" onClick={() => setMobile(false)}>
              Why PRISM
            </Link>
            <Link to="#" className="block text-lg font-medium hover:text-blue-600" onClick={() => setMobile(false)}>
              Deals
            </Link>
            <div className="flex space-x-6 pt-4">
              <Link to="/contact-us" className="text-lg font-medium hover:text-blue-600" onClick={() => setMobile(false)}>
                <Phone className="w-6 h-6 inline mr-2" /> Contact Us
              </Link>
              <Link to="/search" className="text-lg font-medium hover:text-blue-600" onClick={() => setMobile(false)}>
                <Search className="w-6 h-6 inline mr-2" /> Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
