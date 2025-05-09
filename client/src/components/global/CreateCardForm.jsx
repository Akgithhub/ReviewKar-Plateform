import { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../constents/categories.js";
import { setUser } from "@/redux/slices/userSlice.js";
import axios from "axios";
import UploadImageCardCreation from "../../constents/UploadImageCardCreation.jsx";
import { useNavigate } from "react-router-dom";

const CreateCardForm = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const { user } = useUser();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [resetImage, setResetImage] = useState(false);
  let imageUrlFromRedux = useSelector((state) => state.user.imageUrl);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    imageUrl: "",
    rewardAmount: "",
    totalReviewsNeeded: "",
    companyName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "rewardAmount" || name === "totalReviewsNeeded"
          ? Number(value)
          : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSignedIn || !user) {
      setError("You must be signed in to create a card.");
      return;
    }

    const { title, description } = formData;
    if (!title.trim() || !description.trim()) {
      setError("Both title and description are required.");
      return;
    }

    const payload = {
      cardata: {
        title: title.trim(),
        description: description.trim(),
        imageUrl: imageUrlFromRedux,
        category: formData.category,
        rewardAmount: formData.rewardAmount,
        totalReviewsNeeded: formData.totalReviewsNeeded,
        companyName: formData.companyName,
      },
      userId: user.id,
    };

    try {
      const createCardApi = `${
        import.meta.env.VITE_API_URL
      }/api/card/create-card`;
      const res = await axios.post(createCardApi, payload);
      if (res.status === 201) {
        console.log("Card created successfully:", res.data.card);
        setError("");
        setFormData({
          title: "",
          description: "",
          category: "",
          imageUrl: "",
          rewardAmount: "",
          totalReviewsNeeded: "",
          companyName: "",
        });
        // dispatch(setUser({ imageUrl: "" })); // Clear the image URL from Redux
        navigate("/earn"); // Redirect to the Earn page
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error creating card:", error);
      setError(
        error.response?.data?.message ||
          "Failed to create card. Please try again."
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Create a Review Card
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Total Reviews Needed */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Reviews Needed
          </label>
          <input
            type="number"
            name="totalReviewsNeeded"
            value={formData.totalReviewsNeeded}
            onChange={handleChange}
            min={1}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reward Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reward Amount (₹)
          </label>
          <input
            type="number"
            name="rewardAmount"
            value={formData.rewardAmount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Upload Image */}
        <div className="flex items-end">
          <UploadImageCardCreation />
        </div>

        {/* Description (Full Width) */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description<span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Create Card
        </button>
      </div>
    </form>
  );
};

export default CreateCardForm;
