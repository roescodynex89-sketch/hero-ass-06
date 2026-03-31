import { FaUser } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";

const Footer1 = () => {
  return (
    <section className="py-20       bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>

      <p className="text-gray-500 mb-16">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        <div className="flex flex-col items-center border border-gray-200 hover:shadow  h-72   rounded-md      ">
          <div className="bg-indigo-100 p-6 rounded-full    mt-4         ">
            <FaUser className="text-indigo-600 text-2xl" />
          </div>

          <h3 className="text-xl font-semibold  mt-4    ">Create Account</h3>

          <p className="text-gray-500 text-sm ml-6    mt-7">
            Signup for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="flex flex-col items-center   border       border-gray-200 hover:shadow  h-72   rounded-md         ">
          <div className="bg-indigo-100 p-6 rounded-full mt-4">
            <FaCube className="text-indigo-600 text-2xl" />
          </div>

          <h3 className="text-xl font-semibold mt-4">Choose Products</h3>

          <p className="text-gray-500 text-sm ml-6   mt-7          ">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="flex flex-col items-center   border   border-gray-200 hover:shadow  h-72   rounded-md               ">
          <div className="bg-indigo-100 p-6 rounded-full mt-4 ">
            <FaRocket className="text-indigo-600 text-2xl" />
          </div>

          <h3 className="text-xl font-semibold mt-4">Start Creating</h3>

          <p className="text-gray-500 text-sm                   ml-6 my-7">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
