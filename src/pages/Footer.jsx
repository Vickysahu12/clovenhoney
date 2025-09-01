import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; 
import cafeLogo from "../assets/image/caaaf.webp"; 
import AnimatedSection from "../components/AnimatedSection";

const Footer = () => {
  return (
    <AnimatedSection>
      <footer className="w-full bg-transparent text-black pt-16 pb-8 relative overflow-hidden">
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* About */}
            <div>
              <h3 className="text-lg font-bold tracking-wider text-black mb-4">
                About Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Logo & Tagline */}
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={cafeLogo}
                alt="Cafe Logo"
                className="h-14 md:h-20 object-contain drop-shadow-lg"
              />
              <p className="text-sm italic text-black">
                “Because coffee is a lifestyle ☕✨”
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold tracking-wider text-black mb-4">
                Connect With Us
              </h3>
              <div className="flex justify-center md:justify-start gap-6 text-xl">
                <a
                  href="#"
                  className="hover:text-green-600 transition-all transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:text-green-600 transition-all transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:text-green-600 transition-all transform hover:scale-110"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-green-200 mt-12 mb-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-black gap-4">
            <p>© 2025 𝙲𝙰𝙵𝙴 𝚂𝙰𝙿𝙾𝚁𝙴. All Rights Reserved.</p>
            <p className="uppercase tracking-[2px] text-green-700 font-semibold">
              Made with ❤️ for coffee lovers
            </p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
