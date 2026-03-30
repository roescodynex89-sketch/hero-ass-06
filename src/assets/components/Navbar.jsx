



import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFFFFF] hover:shadow px-4 md:px-8 lg:px-12 py-4 md:py-6 flex items-center justify-between">

      {/* Logo Section */}
      <div className="flex items-center ml-0 md:ml-9">
        <h1 className="text-xl md:text-2xl font-extrabold text-[#0644ed]">
          DigiTools
        </h1>
      </div>

      {/* Navigation Links */}
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
        <li className="cursor-pointer hover:text-blue-700 transition">
          FAQ
        </li>
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-black">
          <CiShoppingCart />
          <span className="hidden sm:block font-medium">Login</span>
        </div>

        <button className="bg-[#2563EB] text-white px-4 md:px-6 py-2 rounded-md font-semibold hover:bg-blue-700 hover:shadow text-sm md:text-base">
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;