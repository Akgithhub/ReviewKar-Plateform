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
      className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-5"
    >
      <h2 className="text-2xl font-bold text-gray-800">Create a Review Card</h2>

      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select a category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <UploadImageCardCreation />

      <div>
        <label className="block text-sm font-medium">
          Total Reviews Needed
        </label>
        <input
          type="number"
          name="totalReviewsNeeded"
          value={formData.totalReviewsNeeded}
          onChange={handleChange}
          // required
          min={1}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          // required
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Reward Amount</label>
        <input
          type="number"
          name="rewardAmount"
          value={formData.rewardAmount}
          onChange={handleChange}
          // required
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
      >
        Create Card
      </button>
    </form>
  );
};

export default CreateCardForm;
