import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import footerImg from "../assets/footer/image.svg";

const Footer = () => {
  return (
    <footer
      className="relative text-gray-800 py-16 overflow-hidden bg-gray-100 bg-no-repeat bg-cover bg-right-bottom"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Grid for footer sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Prism</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">About us</a></li>
              <li><a href="#" className="hover:text-yellow-500">Values</a></li>
              <li><a href="#" className="hover:text-yellow-500">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-500">Media centre</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Contact us</a></li>
              <li><a href="#" className="hover:text-yellow-500">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-500">Travel resources</a></li>
              <li><a href="#" className="hover:text-yellow-500">Pre-departure info</a></li>
              <li><a href="#" className="hover:text-yellow-500">Safety updates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-500">Newsletter</a></li>
              <li><a href="#" className="hover:text-yellow-500">Adventurers Club</a></li>
              <li><a href="#" className="hover:text-yellow-500">Affiliate program</a></li>
              <li><a href="#" className="hover:text-yellow-500">Brochures</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">G NATION</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500"><FaInstagram /><span className="sr-only">Instagram</span></a>
              <a href="#" className="hover:text-yellow-500"><FaTwitter /><span className="sr-only">Twitter</span></a>
              <a href="#" className="hover:text-yellow-500"><FaFacebook /><span className="sr-only">Facebook</span></a>
              <a href="#" className="hover:text-yellow-500"><FaYoutube /><span className="sr-only">Youtube</span></a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-gray-300 mb-8" />
        {/* Copyright and links */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-600 mb-4">
          <div>© 2025 Prism. All Rights Reserved.</div>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><a href="#" className="hover:text-yellow-500">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Manage Cookies</a></li>
            <li><a href="#" className="hover:text-yellow-500">API</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
