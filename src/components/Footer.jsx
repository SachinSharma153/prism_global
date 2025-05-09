import React from "react";
import footerImg from "../assets/footer/image.svg";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 text-gray-800 py-16 min-h-[500px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Prism</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Values
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Media centre
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Travel resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Pre-departure info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Safety updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Adventurers Club
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Affiliate program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Brochures
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">G NATION</h3>
            <div className="flex space-x-4">
              <span className="hover:text-yellow-500">📷</span>
              <span className="hover:text-yellow-500">🌐</span>
              <span className="hover:text-yellow-500">🎵</span>
              <span className="hover:text-yellow-500">📘</span>
              <span className="hover:text-yellow-500">📌</span>
              <span className="hover:text-yellow-500">✖️</span>
              <span className="hover:text-yellow-500">📺</span>
              <span className="hover:text-yellow-500">💼</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mb-4">
          © 2025 Prism. All Rights Reserved.
        </div>
      </div>

      {/* Decorative Footer SVG */}
      <img
        src={footerImg}
        alt="Decorative SVG"
        className="absolute bottom-0 right-0 h-96 w-auto opacity-80"
      />
    </footer>
  );
};

export default Footer;