import { FaStar } from "react-icons/fa";

const RatingBar = ({ stars, value, max }) => {
  const widthPercent = (value / max) * 100;
  return (
    <div className="flex items-center gap-2 text-sm text-white">
      <div className="w-48 h-2 bg-gray-300 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${widthPercent}%` }}
        ></div>
      </div>
      <span>{stars} stars</span>
    </div>
  );
};

const ReviewSummary = () => {
  const totalReviews = 234;
  const rating = 4.5;

  const starCounts = {
    5: 120,
    4: 60,
    3: 30,
    2: 15,
    1: 9,
  };

  const maxValue = Math.max(...Object.values(starCounts));

  return (
    <div className="bg-gradient-to-b from-[#03143d] to-[#02143a] text-white py-8 px-6 md:px-16 pt-[150px] pb-[50px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Logo & Info */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="w-20 h-20 bg-white p-2 rounded">
            <img
              src="/your-logo-path.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Details */}
          <div>
            <p className="text-sm text-gray-300">Shop</p>
            <h1 className="text-2xl font-bold">Good Electronics</h1>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-green-400" />
              ))}
              <FaStar className="text-gray-300" />
              <span className="ml-3 text-sm text-gray-300">
                {rating.toFixed(2)}/5.00 - based on {totalReviews} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Rating Bars */}
        <div className="flex flex-col gap-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <RatingBar
              key={star}
              stars={star}
              value={starCounts[star]}
              max={maxValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
