import React from "react";

const Footer3 = () => {
  return (
    <section className="bg-[#4F39F6] py-20 px-6 text-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Ready To Transform Your Workflow?
      </h2>
      <p className="max-w-2xl mx-auto text-blue-100 mb-10 text-sm">
        Join thousands of professionals who are already using DigiTools to work
        smarter. Start your free trial today.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-white text-[#2563EB] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
          Explore Products
        </button>
        <button className="border border-gray-200 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-400  transition-all">
          View Pricing
        </button>
      </div>

      <p className="mt-8 text-sm text-blue-200">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>
  );
};

export default Footer3;
