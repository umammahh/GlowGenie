import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFE4E0] text-gray-700 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-[#C17C6C]">
              GlowGenie
            </h3>
            <p className="mt-2 text-sm">
              Your personal skincare companion for a radiant, healthy
              complexion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#C17C6C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#C17C6C] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className="hover:text-[#C17C6C] transition-colors"
                >
                  Skin Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#C17C6C] transition-colors"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@glowgenie.com"
                  className="hover:text-[#C17C6C] transition-colors"
                >
                  contact@glowgenie.com
                </a>
              </li>
              <li>Follow us on social media:</li>
              <li className="flex space-x-4">
                <a href="#" className="hover:text-[#C17C6C] transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-[#C17C6C] transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-[#C17C6C] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to get skincare tips and updates!
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#C17C6C] focus:border-[#C17C6C]"
              />
              <button
                type="submit"
                className="w-full bg-[#C17C6C] text-white py-2 rounded-lg hover:bg-[#A66A5B] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm">
            © {currentYear} GlowGenie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
