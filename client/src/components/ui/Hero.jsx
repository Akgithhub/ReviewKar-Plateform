import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/home_section.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Every Review is an Experience!
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Check Ratings of Businesses, Read Reviews &amp; Buy
          </p>

          <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-md overflow-hidden w-full max-w-3xl">
            <input
              type="text"
              placeholder="What are you looking for..."
              className="w-full sm:w-2/3 px-4 py-3 outline-none"
            />
            <select className="w-full sm:w-1/3 px-4 py-3 border-t sm:border-t-0 sm:border-l border-gray-300 outline-none">
              <option>All Categories</option>
              {/* Add more categories here */}
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 transition-colors duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
