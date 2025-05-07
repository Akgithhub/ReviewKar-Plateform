import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// ========== ReviewCard Component ==========
const ReviewCard = ({ cards = [] }) => {
  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      {cards.length > 0 ? (
        cards.map((card) => (
          <div
            key={card._id}
            className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <img
                src={card.imageUrl}
                alt="Card"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.category}</p>
                <p className="text-yellow-500 text-sm">★★★★★ 5.0/5.0</p>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              {card.companyName}
            </h4>
            <p className="text-gray-700 text-sm mb-2">{card.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
              <p>
                <strong>Reward:</strong> ₹{card.rewardAmount}
              </p>
              <p>
                <strong>Needed Reviews:</strong> {card.totalReviewsNeeded}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(card.updatedAt).toLocaleString()}
              </p>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex gap-3">
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <img src="./edit-blue.svg" alt="Edit" className="w-5 h-5" />
                </button>
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <img src="./trash.svg" alt="Delete" className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline">
                <FaShareAlt />
                Share
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-700 text-lg mb-4">No cards are there.</p>
          <Link
            to="/pricing"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Create Card
          </Link>
        </div>
      )}
    </div>
  );
};

// ========== CompanyInfo Component ==========
const CompanyInfo = ({ companyData }) => {
  useEffect(() => {
    if (companyData) {
      console.log(companyData);
    }
  }, [companyData]);

  return (
    <div className="bg-white p-4 shadow-sm rounded">
      <h3 className="text-xl font-semibold mb-2">
        {companyData?.company || " "}
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        {companyData?.description || " "}
      </p>
      <div className="text-sm text-gray-600 mb-1">
        <strong>Address:</strong>
        <br />
        {companyData?.address || " "}
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <strong>Website:</strong>
        <br />
        <a href="#" className="text-blue-600">
          {companyData?.websiteUrl || " "}
        </a>
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <strong>Email:</strong>
        <br />
        {companyData?.email || " "}
      </div>
      <div className="text-sm text-gray-600 mb-3">
        <strong>Telephone:</strong>
        <br />
        {companyData?.telephoneUrl || " "}
      </div>
      <div className="flex gap-3 text-gray-500">
        <a href={companyData?.facebookUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href={companyData?.twitterUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href={companyData?.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

// ========== Pagination Component ==========
const Pagination = () => (
  <div className="flex justify-center items-center space-x-2 mt-6">
    {[1, 2, 3, 4].map((num) => (
      <button
        key={num}
        className={`w-8 h-8 rounded-full ${
          num === 1 ? "bg-blue-600 text-white" : "bg-white text-gray-800"
        } border hover:bg-blue-500 hover:text-white`}
      >
        {num}
      </button>
    ))}
  </div>
);

// ========== Main Wrapper Component ==========
const ProfileSectionCards = () => {
  const userData = useSelector((state) => state.user);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ReviewCard cards={userData.cards} />
          <Pagination />
        </div>
        <CompanyInfo companyData={userData} />
      </div>
    </section>
  );
};

export default ProfileSectionCards;
