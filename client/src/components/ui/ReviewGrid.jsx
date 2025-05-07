import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const ReviewGrid = ({ setAllCardsCount }) => {
  const { categoryName } = useParams();
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3001/api/card/cards");
        const allCards = res.data.cards || [];
        // Get all Cards Count
        const cardsCount = allCards.length;
        setAllCardsCount(cardsCount);

        const filtered = allCards.filter(
          (card) =>
            card.categorySlug?.toLowerCase() === categoryName?.toLowerCase()
        );

        setFilteredCards(filtered);
        setLoading(false);
      } catch (err) {
        setError("Failed to load reviews.");
        console.error("Error fetching cards:", err.message);
        setLoading(false);
      }
    };

    fetchCards();
  }, [categoryName]);

  return (
    <div className="bg-[#f4f7fb] py-10 px-6 min-h-screen">
      {/* Top Filter Row */}
      <div className="flex justify-between items-center mb-6 text-sm text-gray-700 bg-white p-4 rounded shadow">
        <div className="space-x-4">
          <button className="font-semibold text-black">All</button>
          <button className="hover:underline">Latest</button>
          <button className="hover:underline">Oldest</button>
        </div>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <img src="/filter-icon.svg" alt="Filter" className="h-4" />
          More filters
        </button>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="text-center text-gray-500 py-10">
          Loading reviews...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <ReviewCard key={card._id} review={card} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No reviews found for this category.
        </div>
      )}

      {/* Load More */}
      {!loading && filteredCards.length > 0 && (
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 hover:bg-yellow-300 hover:text-black text-white px-6 py-2 rounded text-sm transition">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewGrid;
