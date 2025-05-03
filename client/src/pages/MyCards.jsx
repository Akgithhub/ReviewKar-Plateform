import React, { useState } from "react";
import Profile from "@/components/ui/mycards/Profile"; // Adjust the import path as necessary
const MyCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Product Review Campaign",
      description: "Gather reviews for our new product launch.",
      category: "Electronics",
      rewardAmount: 50,
      totalReviewsNeeded: 100,
      imageUrl: "https://via.placeholder.com/300x180",
    },
    {
      id: 2,
      title: "Service Feedback Initiative",
      description: "Collect feedback on our customer service.",
      category: "Services",
      rewardAmount: 30,
      totalReviewsNeeded: 50,
      imageUrl: "https://via.placeholder.com/300x180",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const filteredCards =
    filter === "All" ? cards : cards.filter((card) => card.category === filter);

  return (
    <>
      {/* Profile Section */}
      <Profile />

      {/* Filter */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <label className="font-semibold text-gray-700">
          Filter by Category:
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Services">Services</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-3">{card.description}</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>
                  <strong>Category:</strong> {card.category}
                </li>
                <li>
                  <strong>Reward:</strong> ${card.rewardAmount}
                </li>
                <li>
                  <strong>Reviews Needed:</strong> {card.totalReviewsNeeded}
                </li>
              </ul>
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyCards;
