import ReviewGrid from "../components/ui/ReviewGrid";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
const CatogeryReview = () => {
  const { categoryName } = useParams();
  const [allCardsCount, setAllCardsCount] = useState(0);
  // Convert slug back to readable format if needed
  const formattedCategory = categoryName.replace(/-/g, " ");

  return (
    <div>
      <div className="bg-[#03194a] text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-30">
        <p className="text-sm">
          <span className="font-semibold">{allCardsCount}</span> result for{" "}
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
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Category: {formattedCategory}
        </h1>
        {/* Show all review cards from this category */}
      </div>
      <ReviewGrid setAllCardsCount={ setAllCardsCount} />
    </div>
  );
};

export default CatogeryReview;
