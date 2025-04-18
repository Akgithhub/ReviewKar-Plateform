const ReviewCard = ({ review }) => {
    return (
      <div className="bg-white shadow-md p-5 rounded-md space-y-3">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <img
            src={review.avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <img src="/stars.png" alt="Stars" className="h-5" /> {/* Replace with actual star icons or images */}
              <span className="text-sm text-gray-500">{review.rating}/5.00</span>
            </div>
            <p className="text-xs text-gray-500">{review.category}</p>
          </div>
        </div>
  
        {/* Content */}
        <div>
          <p className="text-sm font-semibold">
            {review.name} reviewed{" "}
            <span className="text-blue-600 underline cursor-pointer">
              {review.company}
            </span>
          </p>
          <p className="font-bold text-sm">{`"${review.title}"`}</p>
          <p className="text-sm text-gray-600">{review.content}</p>
        </div>
  
        {/* Footer */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>Published: {review.date}</p>
          <button className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-sm">
            Read review
          </button>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
  