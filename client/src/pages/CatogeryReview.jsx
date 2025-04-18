import ReviewGrid from "../components/ui/ReviewGrid";
import React from "react";
import { FaSearch } from "react-icons/fa";
const CatogeryReview = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#03194a] text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-30">
        <p className="text-sm">
          <span className="font-semibold">145</span> result for{" "}
          <span className="font-semibold">"All categories"</span>
        </p>
        <div className="flex rounded overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search reviews for a company"
            className="px-4 py-2 text-sm text-gray-800 focus:outline-none w-64"
          />
          <div className="flex items-center justify-center px-3 border-l border-gray-300 bg-white text-gray-700 text-sm cursor-pointer">
            All Categories <span className="ml-1">▾</span>
          </div>
          <button className="bg-yellow-400 px-4 flex items-center justify-center">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
      <ReviewGrid/>
    </div>
  );
};

export default CatogeryReview;
