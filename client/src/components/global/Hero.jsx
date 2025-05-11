import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/constents/categories";
const Hero = ({
  title,
  subtitle,
  buttonText,
  bgImage,
  getReviewsButtonText,
  earnButtonText,
  inputSection,
  bgVideo,
}) => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {bgVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}
        <div className="absolute z-10 inset-0 bg-black/30 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-gray-200 text-lg md:text-[18px] mb-8 max-w-[70%]">
            {subtitle}
          </p>

          {inputSection && (
            <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-3xl">
              <input
                type="text"
                placeholder="What are you looking for..."
                className="w-full sm:w-2/3 px-4 py-3 text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full sm:w-1/3 px-4 py-3 text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
              <button className="bg-blue-600 hover:bg-yellow-400 text-white hover:text-black font-medium px-6 py-3 transition-all duration-300">
                {buttonText}
              </button>
            </div>
          )}

          {getReviewsButtonText && earnButtonText && (
            <div className="flex flex-col md:flex-row justify-center items-center mt-6 w-full gap-4">
              <button className="bg-blue-500 text-white rounded hover:bg-blue-600 px-[40px] py-[10px] max-w-[300px]">
                <Link to="/pricing">{getReviewsButtonText}</Link>
              </button>
              <button className="bg-blue-500 text-white rounded hover:bg-blue-600 px-[40px] py-[10px] max-w-[500px]">
                <Link to="/earn">{earnButtonText}</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
