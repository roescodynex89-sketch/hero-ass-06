import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer4 = () => {
  return (
    <footer className="bg-[#020617] text-gray-400 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        {/* left section*/}
        <div className="lg:col-span-2">
          <h2 className="text-white text-3xl font-extrabold mb-6">DigiTools</h2>
          <p className="max-w-sm leading-relaxed mb-6">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* col-Section-1 */}
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Features
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Templates
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Integrations
            </li>
          </ul>
        </div>

        {/* col-Section-2 */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              About
            </li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Press
            </li>
          </ul>
        </div>

        {/* Social-sec */}
        <div>
          <h4 className="text-white font-bold mb-6">Social Links</h4>
          <div className="flex gap-4">
            <div className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 cursor-pointer transition">
              <FaInstagram className="text-white" />
            </div>
            <div className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 cursor-pointer transition">
              <FaFacebookF className="text-white" />
            </div>
            <div className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 cursor-pointer transition">
              <FaXTwitter className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* finish*/}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-8 text-sm">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
