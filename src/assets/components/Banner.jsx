



import React from "react";
import BannerImg from "../../assets/banner.png";
import { FiPlayCircle } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="bg-[#FFFFFF] min-h-screen flex items-center px-4 md:px-8 lg:px-12 py-12 md:py-16 ml-0 md:ml-9">

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content Section */}
        <div className="flex-1 space-y-6 md:space-y-10 lg:space-y-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e9eef6] px-3 py-1 rounded-full text-sm md:text-lg font-semibold text-[#1D4ED8] border border-blue-200 hover:shadow">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#101727]">
            Supercharge Your <br />
            <span className="text-gray-800">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-gray-800 text-base md:text-lg lg:text-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today
            Explore Products..
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5">

            <button className="bg-[#2563EB] text-white px-6 py-2 cursor-pointer rounded-3xl font-semibold hover:bg-blue-700 hover:shadow">
              Explore Products
            </button>

            <button className="flex items-center gap-2 text-gray-900 font-semibold px-6 py-3 rounded-3xl border border-gray-300 hover:bg-white transition-all cursor-pointer">
              <FiPlayCircle className="text-2xl text-blue-700" />
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative">

          <div className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <img
              src={BannerImg}
              alt="Digital Workflow"
              className="w-full h-auto object-contain shadow-2xl"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;