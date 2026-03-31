import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="w-full bg-[#FFFFFF] shadow-sm px-4 md:px-8 lg:px-12 py-4 md:py-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center ml-0 md:ml-9">
        <h1 className="text-xl md:text-2xl font-extrabold text-[#2563EB]">
          DigiTools
        </h1>
      </div>

      {/* li-sec */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-700 transition">
          Products
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition">
          Features
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition">
          Pricing
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition">
          Testimonials
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition">FAQ</li>
      </ul>

      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        <div className="relative flex items-center cursor-pointer text-gray-700 hover:text-blue-600 transition-colors">
          <CiShoppingCart className="text-3xl" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#FF4D4D] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
              {cartCount}
            </span>
          )}
        </div>

        <div className="hidden sm:block cursor-pointer font-medium text-gray-700 hover:text-black">
          Login
        </div>

        <button className="bg-[#2563EB] text-white px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all text-sm md:text-base active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
