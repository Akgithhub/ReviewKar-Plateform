import { useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../constents/categories.js";
import { setUser } from "@/redux/slices/userSlice.js";
import axios from "axios";
import UploadImageCardCreation from "../../constents/UploadImageCardCreation.jsx";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CreateCardForm = () => {
  useEffect(() => {
    const paid = localStorage.getItem("paymentDone");
    if (paid === "true") setPaymentDone(true);
  }, []);

  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const { user } = useUser();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [resetImage, setResetImage] = useState(false);
  const imageUrlFromRedux = useSelector((state) => state.user.imageUrl);
  const [success, setSuccess] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    imageUrl: "",
    rewardAmount: "",
    totalReviewsNeeded: "",
    companyName: "",
    totalAmount: "",
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
  let totalpaymentAmount = formData.rewardAmount * formData.totalReviewsNeeded;
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
        totalAmount: totalpaymentAmount,
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
        setSuccess(true); // show success alert
        setFormData({
          title: "",
          description: "",
          category: "",
          imageUrl: "",
          rewardAmount: "",
          totalReviewsNeeded: "",
          companyName: "",
          totaldAmount: "",
        });
        // Optionally clear image URL from Redux
        // dispatch(setUser({ imageUrl: "" }));
        setTimeout(() => {
          navigate("/earn");
        }, 2000); // redirect after 2 seconds
      } else {
        setError("Something went wrong. Please try again.");
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error creating card:", error);
      setError(
        error.response?.data?.message ||
          "Failed to create card. Please try again."
      );
    }
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    console.log("Stripe publishable key:", key);

    const stripe = await loadStripe(key);
    if (!stripe) {
      console.error("Stripe not loaded");
      return;
    }

    try {
      const paymentBody_Data = {
        card_data_for_payment: {
          title: formData.title.trim(),
          description: formData.description.trim(),
          imageUrl: imageUrlFromRedux,
          category: formData.category,
          rewardAmount: formData.rewardAmount,
          totalReviewsNeeded: formData.totalReviewsNeeded,
          companyName: formData.companyName,
          totalAmount: totalpaymentAmount,
        },
        userId_for_payment: user.id,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/card/card-create-payment`,
        paymentBody_Data
      );

      if (!res || !res.data.id) {
        console.error("Invalid session response");
        return;
      }

      const result = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Payment error:", error.message);
    }
  };
  const canCreateCard =
    formData.title.trim() &&
    formData.description.trim() &&
    formData.rewardAmount > 0 &&
    formData.totalReviewsNeeded > 0 &&
    paymentDone;

  return (
    // <Elements stripe={stripePromise}>
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-2xl shadow-lg"
    >
      {success && (
        <Alert variant="outlined" severity="success">
          Card created successfully!
        </Alert>
      )}

      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
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
        {/* Total Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Amount (₹)
          </label>
          <input
            type="number"
            name="totalAmount"
            disabled
            value={formData.totalAmount}
            placeholder={formData.rewardAmount * formData.totalReviewsNeeded}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            readOnly
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
            min={10}
            defaultValue={10}
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
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment
          </label>
          <button
            type="button"
            className={`w-full ${
              paymentDone ? "bg-green-600" : "bg-blue-600"
            } hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 cursor-pointer`}
            onClick={handlePayment}
            disabled={paymentDone}
          >
            {paymentDone ? "Payment Successful ✅" : "Pay & Proceed"}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          className={`w-full ${
            canCreateCard
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-medium py-3 px-6 rounded-lg transition duration-300`}
          disabled={!canCreateCard}
        >
          Create Card
        </button>
      </div>
    </form>
  );
};

export default CreateCardForm;
