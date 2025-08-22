import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // for icons
import cafeLogo from "../assets/image/loog.webp"; // replace with your logo

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold tracking-widest mb-4">ABOUT</h3>
            <ul className="space-y-2 text-l text-gray-700">
              <li>
                <a href="#" className="hover:underline">Company</a>
              </li>
              <li>
                <a href="#" className="hover:underline">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center">
            {/* Replace with your cafe logo */}
            <img
              src={cafeLogo}
              alt="Cafe Logo"
              className="h-12 md:h-16 object-contain"
            />
          </div>

          {/* Follow Along */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest mb-4">
              FOLLOW ALONG
            </h3>
            <div className="flex justify-center md:justify-start gap-6 text-lg">
              <a href="#" className="hover:text-gray-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>© 2025 𝙲𝚕𝚘𝚟𝚎𝙽'𝙷𝚘𝚗𝚎𝚢. All Rights Reserved.</p>
          <p className="uppercase tracking-wide">Because We Love Coffee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
