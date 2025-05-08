import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-4">G Adventures</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Values</li>
            <li>LGBTQ+ inclusivity</li>
            <li>Careers</li>
            <li>Media centre</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Go Adventures Travel resources</li>
            <li>Pre-departure info</li>
            <li>Safety updates</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>The Great Adventurers Club</li>
            <li>Affiliate program</li>
            <li>Brochures</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-4">Travel Agents</h3>
          <ul className="space-y-2">
            <li>Agent login</li>
            <li>Agent registration</li>
            <li>Find an agent</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold mb-4">G NATION</h3>
          <div className="flex space-x-4">
            <span>📷</span>
            <span>🌐</span>
            <span>🎵</span>
            <span>📘</span>
            <span>📌</span>
            <span>✖️</span>
            <span>📺</span>
            <span>💼</span>
          </div>
        </div>
      </div>

      {/* Language & Country */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <select className="border rounded p-2">
            <option>English</option>
          </select>
          <select className="border rounded p-2">
            <option>India</option>
          </select>
        </div>

        {/* Legal Links */}
        <div className="text-sm text-gray-600 mt-4 sm:mt-0">
          © 2025 G Adventures. All rights reserved. &nbsp;&bull;&nbsp;
          <a href="#">Terms and Conditions</a> &nbsp;&bull;&nbsp;
          <a href="#">Privacy Policy</a> &nbsp;&bull;&nbsp;
          <a href="#">Manage Cookies</a> &nbsp;&bull;&nbsp;
          <a href="#">API</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
