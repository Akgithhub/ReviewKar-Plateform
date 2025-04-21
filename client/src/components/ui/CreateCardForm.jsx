import { useState } from "react";
// import axios from "axios";

const CreateCardForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Product",
    imageUrl: "",
    rewardAmount: 10,
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

  const handleImageUpload = async (e) => {
    // const file = e.target.files[0];
    // // Replace with your actual ImageKit logic here
    // const data = new FormData();
    // data.append("file", file);
    // data.append("upload_preset", "your_upload_preset");
    // // Example: Assuming you upload to ImageKit or Cloudinary and get a URL back
    // const res = await axios.post("YOUR_IMAGEKIT_API_URL", data);
    // const imageUrl = res.data.url;
    // setFormData((prev) => ({ ...prev, imageUrl }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post("/api/cards/create", formData);
    //   alert("Card created successfully!");
    // } catch (error) {
    //   console.error(error);
    //   alert("Something went wrong!");
    // }
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
          <option>Product</option>
          <option>Restaurant</option>
          <option>Hotel</option>
          <option>Clothing</option>
          <option>Service</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="user_avatar"
        >
          Upload file
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block py-4 px-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar"
        />
        <div
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        >
          Card Image
        </div>
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt="Preview"
            className="mt-2 w-40 h-40 object-cover rounded-lg"
          />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Reward Amount (₹)</label>
        <input
          type="number"
          name="rewardAmount"
          value={formData.rewardAmount}
          onChange={handleChange}
          min={1}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Total Reviews Needed
        </label>
        <input
          type="number"
          name="totalReviewsNeeded"
          value={formData.totalReviewsNeeded}
          onChange={handleChange}
          required
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
          required
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
