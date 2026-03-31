import React from "react";

const BannerMini = () => {
  return (
    <section className="bg-[#4F39F6] py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center text-white">
          <div className="text-center w-full md:border-r border-white/20">
            <h2 className="text-4xl md:text-5xl font-black mb-2">50K+</h2>
            <p className="text-white/80 font-medium tracking-wide">
              Active Users
            </p>
          </div>

          <div className="text-center w-full lg:border-r border-white/20">
            <h2 className="text-4xl md:text-5xl font-black mb-2">200+</h2>
            <p className="text-white/80 font-medium tracking-wide">
              Premium Tools
            </p>
          </div>

          <div className="text-center w-full">
            <h2 className="text-4xl md:text-5xl font-black mb-2">4.9</h2>
            <p className="text-white/80 font-medium tracking-wide">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMini;
