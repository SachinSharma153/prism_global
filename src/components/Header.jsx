// src/components/Header.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/prism_Logo.png';

const destinationsData = [
  {
    region: 'Northern India',
    color: 'text-red-600',
    states: [
      { name: 'DELHI', link: 'delhi.html' },
      { name: 'HIMACHAL PRADESH', link: 'himachalpradesh.html' },
      { name: 'HARYANA', link: 'haryana.html' },
      { name: 'JAMMU AND KASHMIR', link: 'jammu_kashmir.html' },
      { name: 'PUNJAB', link: 'punjab.html' },
      { name: 'UTTAR PRADESH', link: 'uttarpradesh.html' },
      { name: 'UTTARAKHAND', link: 'uttarakhand.html' },
    ],
  },
  {
    region: 'Southern India',
    color: 'text-yellow-600',
    states: [
      { name: 'ANDAMAN & NICOBAR', link: 'andaman_nicobar.html' },
      { name: 'ANDHRA PRADESH', link: 'andhrapradesh.html' },
      { name: 'KERALA', link: 'kerala.html' },
      { name: 'KARNATAKA', link: 'karnataka.html' },
      { name: 'LAKSHADWEEP', link: 'Lakshadweep.html' },
      { name: 'PONDICHERRY', link: 'Puducherry.html' },
      { name: 'TAMILNADU', link: 'tamilnadu.html' },
      { name: 'TELANGANA', link: 'telangana.html' },
    ],
  },
  {
    region: 'Eastern India',
    color: 'text-green-600',
    states: [
      { name: 'ASSAM', link: 'assam.html' },
      { name: 'ARUNACHAL PRADESH', link: 'arunachalpradesh.html' },
      { name: 'BIHAR', link: 'bihar.html' },
      { name: 'JHARKHAND', link: 'jharkhand.html' },
      { name: 'MANIPUR', link: 'manipur.html' },
      { name: 'MEGHALAYA', link: 'meghalaya.html' },
      { name: 'MIZORAM', link: 'mizoram.html' },
      { name: 'NAGALAND', link: 'nagaland.html' },
      { name: 'ORISSA', link: 'orissa.html' },
      { name: 'SIKKIM', link: 'sikkim.html' },
      { name: 'TRIPURA', link: 'tripura.html' },
      { name: 'WEST BENGAL', link: 'westbengal.html' },
    ],
  },
  {
    region: 'Western India',
    color: 'text-green-600',
    states: [
      { name: 'DADAR & NAGAR HAVELI', link: 'dadraandnagarhaveli.html' },
      { name: 'DAMAN & DIU', link: 'DamanandDiu.html' },
      { name: 'GOA', link: 'goa.html' },
      { name: 'GUJARAT', link: 'gujarat.html' },
      { name: 'MAHARASHTRA', link: 'maharashtra.html' },
      { name: 'RAJASTHAN', link: 'rajasthan.html' },
    ],
  },
  {
    region: 'Central India',
    color: 'text-red-600',
    states: [
      { name: 'MADHYA PRADESH', link: 'madhyapradesh.html' },
      { name: 'CHHATTISGARH', link: 'Chhattisgarh.html' },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <img src={logo} alt="PRISM Logo" className="h-10 w-auto" />

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <div className="relative">
            <button
              onClick={() => toggleDropdown('destinations')}
              className="flex items-center hover:text-blue-600"
            >
              Destinations
              {openDropdown === 'destinations' ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openDropdown === 'destinations' && (
              <div className="absolute left-0 w-[400px] max-h-[500px] overflow-y-auto bg-white shadow-lg mt-2 p-4 rounded z-20">
                <p className="text-lg font-semibold mb-2">OUR BEST DESTINATIONS</p>
                {destinationsData.map((region, idx) => (
                  <div key={idx} className="mb-4">
                    <p className={`font-semibold mb-1 ${region.color}`}>{region.region}</p>
                    <ul className="ml-4 list-disc list-inside space-y-1">
                      {region.states.map((state, index) => (
                        <li key={index}>
                          <a
                            href={state.link}
                            className="text-gray-700 hover:underline"
                          >
                            {state.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600">Why PRISM</a>
          <a href="#" className="hover:text-blue-600">Deals</a>
        </nav>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Mobile hamburger logic goes here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
