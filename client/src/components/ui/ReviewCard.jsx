import { FaShareAlt } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow">
      {/* Top section: Image + details */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <img
          src={review.imageUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{review.title}</h3>
          <p className="text-sm text-gray-600">{review.category}</p>
          <p className="text-yellow-500 text-sm">★★★★★ {review.rewardAmount}/5.0</p>
        </div>
      </div>

      {/* Company and description */}
      <h4 className="text-lg font-semibold mb-2 text-gray-800">{review.company}</h4>
      <p className="text-gray-700 text-sm mb-2">{review.description}</p>

      {/* Review info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
        <p>
          <strong>Reward:</strong> ₹{review.rewardAmount}
        </p>
        <p>
          <strong>Reviewer:</strong> {review.name}
        </p>
        <p>
          <strong>Published:</strong>{" "}
          {new Date(review.createdAt).toLocaleString()}
        </p>
      </div>

      {/* Footer buttons */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-3">
          <button className="hover:bg-gray-100 p-2 rounded-full">
            <img src="/edit-blue.svg" alt="Edit" className="w-5 h-5" />
          </button>
          <button className="hover:bg-gray-100 p-2 rounded-full">
            <img src="/trash.svg" alt="Delete" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline">
          <FaShareAlt />
          Share
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
