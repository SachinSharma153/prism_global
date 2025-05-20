import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import footerImg from "../assets/footer/image.svg";

const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "#",
    label: "Twitter",
    icon: <FaTwitter />,
  },
  {
    href: "#",
    label: "Facebook",
    icon: <FaFacebook />,
  },
  {
    href: "#",
    label: "YouTube",
    icon: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <footer
      className="relative text-gray-800 py-16 overflow-hidden bg-gray-100 bg-no-repeat bg-cover bg-right-bottom"
      style={{ backgroundImage: `url(${footerImg})` }}
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Footer Sections */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <nav aria-label="Prism" className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Prism</h3>
            <ul>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Values</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Media centre</a></li>
            </ul>
          </nav>
          <nav aria-label="Support" className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Travel resources</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Pre-departure info</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Safety updates</a></li>
            </ul>
          </nav>
          <nav aria-label="Community" className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Adventurers Club</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Affiliate program</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Brochures</a></li>
            </ul>
          </nav>
          <section aria-label="G NATION" className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">G NATION</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-yellow-500 transition-colors transform hover:scale-125 duration-200"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {icon}
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </section>
        </section>
        {/* Divider */}
        <hr className="border-gray-300 mb-8" />
        {/* Copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <address className="not-italic">&copy; 2025 Prism. All Rights Reserved.</address>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Manage Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                API
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;