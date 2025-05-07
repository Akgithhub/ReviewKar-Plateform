import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { setCards, categoryCardsCount } from "@/redux/slices/cardSlice";

const ReviewGrid = ({ setAllCardsCount }) => {
  const { categoryName } = useParams();
  const [filteredCards, setFilteredCards] = useState([]);
  const [filterallCards, setfilterAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3001/api/card/cards");
        const allCards = res.data.cards || [];
        setfilterAllCards(allCards);
        dispatch(setCards(res.data.cards));
        // Get all Cards Count
        const cardsCount = allCards.length;
        setAllCardsCount(cardsCount);
        const filtered = allCards.filter(
          (card) =>
            card.categorySlug?.toLowerCase() === categoryName?.toLowerCase()
        );
        setFilteredCards(filtered);
        dispatch(categoryCardsCount(filteredCards.length)); // Dispatch the action to set category cards count in Redux store
        setLoading(false);
      } catch (err) {
        setError("Failed to load reviews.");
        console.error("Error fetching cards:", err.message);
        setLoading(false);
      }
    };

    fetchCards();
  }, [categoryName]);

  const filterByAll = () => {
    // setFilteredCards([])
    setFilteredCards(filterallCards);
  };
  const filterByLatest = () => {
    // Show the latest Cards of all Cards
    const sortedCards = [...filterallCards].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt); // Newest first
    });
    setFilteredCards(sortedCards);
  };
  const filterByOldest = () => {
    // Show the oldest Cards of all Cards
    const sortedCards = [...filterallCards].sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt); // Oldest first
    });
    setFilteredCards(sortedCards);
  };

  return (
    <div className="bg-[#f4f7fb] py-10 px-6 min-h-screen">
      {/* Top Filter Row */}
      <div className="flex justify-between items-center mb-6 text-sm text-gray-700 bg-white p-4 rounded shadow">
        <div className="space-x-4">
          <button
            className="font-semibold text-black cursor-pointer hover:underline"
            onClick={filterByAll}
          >
            All
          </button>
          <button
            className="font-semibold text-black cursor-pointer hover:underline"
            onClick={filterByLatest}
          >
            Latest
          </button>
          <button
            className="font-semibold text-black cursor-pointer hover:underline"
            onClick={filterByOldest}
          >
            Oldest
          </button>
        </div>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <img src="./filter-icon.svg" alt="Filter" className="h-4" />
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
      {!loading && filteredCards.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-yellow-300 hover:text-black text-white px-6 py-2 rounded text-sm transition"
          >
            Load
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewGrid;
