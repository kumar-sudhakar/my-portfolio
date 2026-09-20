
import React from "react";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Testimonials",
    "Contact",
  ];

  return (
    <div
      className={`fixed inset-0 z-[60] bg-black/95 flex items-center justify-center
        transition-all duration-500 ease-in-out
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute top-6 right-6 text-white text-3xl
          transition-all duration-300
          hover:text-pink-400 hover:rotate-90 hover:scale-110
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5"
          }`}
        aria-label="Close Menu"
      >
        <FiX />
      </button>

      {/* Navigation */}
      <ul
        className={`space-y-6 text-center transition-all duration-500
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-10"
          }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={item}
            className="transition-all duration-300"
            style={{
              transitionDelay: isOpen
                ? `${index * 70}ms`
                : "0ms",
            }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="inline-block text-4xl text-white font-semibold
                transition-all duration-300
                hover:text-pink-400 hover:scale-110"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
