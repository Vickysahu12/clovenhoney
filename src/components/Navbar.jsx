import { useState } from "react";
import { Menu, X, Search } from "lucide-react"; // icons
import logo from "../assets/image/loog.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const leftLinks = [
    { name: "𝙼𝚎𝚗𝚞 ", href: "#" },
    { name: "𝙶𝚊𝚕𝚕𝚎𝚛𝚢 ", href: "#" },
  ];

  const rightLinks = [
    { name: "𝙲𝚘𝚗𝚝𝚊𝚌𝚝", href: "#" },
    { name: "𝙱𝚘𝚘𝚔 𝚊 𝚃𝚊𝚋𝚕𝚎", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* -------------------- Desktop Navbar -------------------- */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left Links */}
          <div className="flex gap-8">
            {leftLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black font-medium hover:text-black transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo Center */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto transition-all duration-300"
              loading="eager"
            />
          </div>

          {/* Right Links */}
          <div className="flex gap-8">
            {rightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium hover:text-black transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* -------------------- Mobile Navbar -------------------- */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Hamburger Left */}
          <button
            className="p-2 text-gray-800"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={35} />
          </button>

          {/* Logo Center */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto transition-all duration-300"
            loading="eager"
          />

          {/* Search Icon Right */}
          <button className="p-2 text-gray-800">
            <Search size={35} />
          </button>
        </div>
      </div>

      {/* -------------------- Sidebar for Mobile -------------------- */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#3b533d] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-[#000]" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-6 p-6">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white hover:text-black transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
