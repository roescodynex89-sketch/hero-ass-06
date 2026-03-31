import { FaCheck } from "react-icons/fa";

const Footer2 = () => {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-gray-900 mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 items-center">
        {/* Card-1 */}

        <div className="bg-[#FFFFFF] border border-gray-200 hover:shadow rounded-3xl p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Starter</h3>
          <p className="text-gray-500 mb-6 text-xs">
            Perfect for getting started
          </p>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            $0<span className="text-gray-400 text-lg font-normal">/Month</span>
          </h2>
          <ul className="space-y-3 mb-8 text-gray-600 grow text-sm">
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Access to 10 free
              tools
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Basic templates
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Community support
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> 1 project per month
            </li>
          </ul>
          <button className="w-full py-3 bg-[#2563EB] text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-colors">
            Get Started Free
          </button>
        </div>

        {/* Card-2 */}
        <div className="relative bg-[#2563EB] text-white rounded-3xl p-6 shadow-2xl scale-105 flex flex-col h-full">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-3 py-0.5 rounded-full text-[10px] font-semibold shadow-sm">
            Most Popular
          </div>
          <h3 className="text-xl font-bold mb-1">Pro</h3>
          <p className="text-indigo-100 mb-6 text-xs">Best for professionals</p>
          <h2 className="text-4xl font-bold mb-6">
            $29
            <span className="text-indigo-200 text-lg font-normal">/Month</span>
          </h2>
          <ul className="space-y-3 mb-8 grow text-sm">
            <li className="flex items-center gap-3">
              <FaCheck className="text-white text-xs" /> Access to all premium
              tools
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-white text-xs" /> Unlimited templates
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-white text-xs" /> Priority support
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-white text-xs" /> Unlimited projects
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-white text-xs" /> Cloud sync
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-white text-xs" /> Advanced analytics
            </li>
          </ul>
          <button className="w-full py-3 bg-gray-100 text-[#2563EB] rounded-full font-semibold text-base transition-colors">
            Start Pro Trial
          </button>
        </div>

        {/* Card-3 */}
        <div className="bg-[#FFFFFF] border border-gray-200 hover:shadow rounded-3xl p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Enterprise</h3>
          <p className="text-gray-500 mb-6 text-xs">For teams and businesses</p>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            $99<span className="text-gray-400 text-lg font-normal">/Month</span>
          </h2>
          <ul className="space-y-3 mb-8 text-gray-600 grow text-sm">
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Everything in Pro
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Team collaboration
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Custom integrations
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Dedicated support
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> SLA guarantee
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-xs" /> Custom branding
            </li>
          </ul>
          <button className="w-full py-3 bg-[#2563EB] text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
