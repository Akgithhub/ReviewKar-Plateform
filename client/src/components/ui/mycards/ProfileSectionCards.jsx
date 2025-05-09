import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";


// ========== ReviewCard Component ==========
const ReviewCard = ({ cards = [], loading, setLoading }) => {
  const { user } = useUser();
  const handleDeleteCard = async (cardID) => {
    confirm(
      "Are you sure you want to delete this card? This action cannot be undone."
    );
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/card/delete-card/${cardID}/${
          user.id
        }`
      );
    } catch (error) {
      console.error(
        "Error deleting card:",
        error.response?.data || error.message
      );
    }
  };

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
                <button className="hover:bg-gray-100 p-2 rounded-full cursor-pointer">
                  <img src="./edit-blue.svg" alt="Edit" className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteCard(card._id)}
                  type="button"
                  className="hover:bg-gray-100 p-2 rounded-full cursor-pointer"
                >
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
        <div className="px-4 py-6 max-w-4xl mx-auto">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <Skeleton variant="circular" width={96} height={96} />
                <div className="flex-1">
                  <Skeleton variant="text" width="60%" height={24} />
                  <Skeleton variant="text" width="40%" height={20} />
                  <Skeleton variant="text" width="50%" height={20} />
                </div>
              </div>
              <Skeleton variant="text" width="80%" height={24} />
              <Skeleton variant="text" width="100%" height={60} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="60%" height={20} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <Skeleton variant="rectangular" width={100} height={36} />
                <Skeleton variant="rectangular" width={60} height={36} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ========== CompanyInfo Component ==========
const CompanyInfo = ({ companyData, loading, setLoading }) => {
  useEffect(() => {
    if (companyData?.company) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [companyData]);

  return (
    <div className="bg-white p-4 shadow-sm rounded">
      {!loading ? (
        <>
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
            <a
              href={companyData?.websiteUrl || "#"}
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            {companyData?.facebookUrl && (
              <a
                href={companyData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            )}
            {companyData?.twitterUrl && (
              <a
                href={companyData.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            )}
            {companyData?.linkedinUrl && (
              <a
                href={companyData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </>
      ) : (
        <div className="bg-white p-4 rounded">
          <Skeleton variant="text" width="80%" height={28} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="text" width="40%" height={20} />
          <Skeleton variant="text" width="50%" height={20} />
        </div>
      )}
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
  const [loading, setLoading] = useState(true);
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ReviewCard
            cards={userData.cards}
            loading={loading}
            setLoading={setLoading}
          />
          <Pagination />
        </div>
        <CompanyInfo
          companyData={userData}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </section>
  );
};

export default ProfileSectionCards;
