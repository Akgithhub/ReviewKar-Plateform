import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShareAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Pagination from "@mui/material/Pagination";
import { categories } from "@/constents/categories.js";
import Stack from "@mui/material/Stack";
import UploadImageCardCreation from "@/constents/UploadImageCardCreation.jsx";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
// ========== ReviewCard Component ==========
const ReviewCard = ({ cards = [], loading, setOnSucess, setError }) => {
  const { user } = useUser();
  const [editCardId, setEditCardId] = useState(null);
  const [editedCardData, setEditedCardData] = useState({});

  const handleDeleteCard = async (cardID) => {
    if (!confirm("Are you sure you want to delete this card?")) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/card/delete-card/${cardID}/${
          user.id
        }`
      );

      setOnSucess(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setError("Error while deleting card");
      console.error(
        "Error deleting card:",
        error.response?.data || error.message
      );
    }
  };

  const handleEditClick = (card) => {
    setEditCardId(card._id);
    setEditedCardData({ ...card });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setEditedCardData((prev) => ({
        ...prev,
        [name]: value,
        categorySlug: slug,
      }));
    } else {
      setEditedCardData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpdateCard = async (cardID) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/card/update-card/${cardID}`,
        editedCardData
      );
      // console.log(response.data.message);
      setEditCardId(null);
      setOnSucess(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setError("Error while Updating card");
      console.error(
        "Error updating card:",
        error.response?.data || error.message
      );
    }
  };

  const handleCancelEdit = () => {
    setEditCardId(null);
    setEditedCardData({});
  };
  const sortedCards = [...cards].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      {sortedCards.length > 0 ? (
        sortedCards.map((card) => {
          const isEditing = card._id === editCardId;
          return (
            <div
              key={card._id}
              className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition-shadow space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {isEditing ? (
                  <UploadImageCardCreation />
                ) : (
                  <img
                    src={card.imageUrl}
                    alt="Card"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                  />
                )}
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={editedCardData.title}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                      />

                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        name="category"
                        value={editedCardData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">{editedCardData.category}</option>
                        {categories.map((cat, i) => (
                          <option key={i} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        disabled
                        value={editedCardData.categorySlug || ""}
                        width={"100%"}
                        placeholder={editedCardData.category}
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-gray-800">
                        {card.title}
                      </h3>
                      <h3 className="text-xl font-bold text-gray-800">
                        {cards.length}
                      </h3>
                      <p className="text-sm text-gray-600">{card.category}</p>
                    </>
                  )}
                  <p className="text-yellow-500 text-sm mt-1">★★★★★ 5.0/5.0</p>
                </div>
              </div>

              <div className="space-y-2">
                {isEditing ? (
                  <>
                    <label className="block text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={editedCardData.companyName}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                    />
                    <label className="block text-sm font-medium">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={editedCardData.description}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2"
                      rows={4}
                    />
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {card.companyName}
                    </h4>
                    <p className="text-gray-700 text-sm">{card.description}</p>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                {isEditing ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium">
                        Reward Amount (₹)
                      </label>
                      <input
                        type="text"
                        name="rewardAmount"
                        value={editedCardData.rewardAmount}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Total Reviews Needed
                      </label>
                      <input
                        type="text"
                        name="totalReviewsNeeded"
                        value={editedCardData.totalReviewsNeeded}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Reward:</strong> ₹{card.rewardAmount}
                    </p>
                    <p>
                      <strong>Needed Reviews:</strong> {card.totalReviewsNeeded}
                    </p>
                  </>
                )}
                <p className="col-span-full sm:col-span-2">
                  <strong>Last Updated:</strong>{" "}
                  {new Date(card.updatedAt).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => handleUpdateCard(card._id)}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(card)}
                        className="hover:bg-gray-100 p-2 rounded-full"
                      >
                        <img
                          src="./edit-blue.svg"
                          alt="Edit"
                          className="w-5 h-5"
                        />
                      </button>
                      <button
                        onClick={() => handleDeleteCard(card._id)}
                        className="hover:bg-gray-100 p-2 rounded-full"
                      >
                        <img
                          src="./trash.svg"
                          alt="Delete"
                          className="w-5 h-5"
                        />
                      </button>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                  <FaShareAlt />
                  Share
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="px-4 py-6 max-w-4xl mx-auto">
          {!loading ? (
            <>
              {" "}
              <h1 className="text-3xl font-bold text-gray-700 text-center">
                No Cards at the Momenet
              </h1>
              <button className="bg-blue-600 my-8 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 block mx-auto">
                <Link to="/pricing">Create Card</Link>
              </button>
            </>
          ) : (
            <>
              {" "}
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md mb-6"
                >
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
            </>
          )}
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
// ========== Main Wrapper Component ==========
const ProfileSectionCards = () => {
  const userData = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [onSucess, setOnSucess] = useState(false);
  const [error, setError] = useState(false);
  const [count, setcount] = useState(1);

  // setcount(userData.cards);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* <h1>Total: {userData.cards.length}</h1> */}
          {onSucess && <Alert severity="success">Updated Cards</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
          <ReviewCard
            cards={userData.cards}
            loading={loading}
            setLoading={setLoading}
            setOnSucess={setOnSucess}
            setError={setError}
          />
          {/* <Pagination /> */}
          {/* console.log(userData.cards); */}

          {count > 0 && (
            <Stack spacing={2}>
              <Pagination count={10} />
            </Stack>
          )}
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
