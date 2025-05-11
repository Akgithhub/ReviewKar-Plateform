import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserDetailsForm } from "@/redux/slices/userSlice";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
// const RatingBar = ({ stars, value, max }) => {
//   const widthPercent = (value / max) * 100;
//   return (
//     <div className="flex items-center gap-2 text-sm text-white">
//       <div className="w-48 h-2 bg-gray-300 rounded overflow-hidden">
//         <div
//           className="h-full bg-blue-500"
//           style={{ width: `${widthPercent}%` }}
//         ></div>
//       </div>
//       <span>{stars} stars</span>
//     </div>
//   );
// };
const ProfileSummary = () => {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const totalReviews = 234;
  const rating = 4.5;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const userDetailsform = useSelector((state) => state.user.userDetailsform);

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

          <div className="w-20 h-20 rounded overflow-hidden">
            {!userData.imageUrl ? (
              <Skeleton
                variant="circular"
                width={80}
                height={80}
                sx={{ bgcolor: "white" }}
              >
                <Avatar />
              </Skeleton>
            ) : (
              <img
                src={userData.imageUrl}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Details */}
          <div>
            {!userData.name && (
              <Skeleton
                variant="text"
                width="100%"
                height={20}
                sx={{ bgcolor: "white" }}
              />
            )}
            <p className="text-sm text-gray-300">{userData.name}</p>

            <div className="flex items-center justify-between gap-4">
              {!userData.company && (
                <Skeleton
                  variant="text"
                  width="500px"
                  height={50}
                  sx={{ bgcolor: "white" }}
                />
              )}
              <h1 className="text-2xl font-bold">{userData.company}</h1>
              <div className="relative group w-fit">
                <button
                  onClick={() =>
                    dispatch(toggleUserDetailsForm(!userDetailsform))
                  }
                >
                  <img src="./edit.svg" alt="Edit" className="cursor-pointer" />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
                    Edit Profile Info
                  </span>
                </button>
              </div>
            </div>
            {!userData.description && (
              <Skeleton
                variant="text"
                width="100%"
                height={30}
                sx={{ bgcolor: "white" }}
              />
            )}
            <h1 className="text-[12px] font-bold">{userData.description}</h1>

            {/* <div className="flex items-center gap-1 mt-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-green-400" />
              ))}
              <FaStar className="text-gray-300" />
              <span className="ml-3 text-sm text-gray-300">
                {rating.toFixed(2)}/5.00 - based on {totalReviews} reviews
              </span>
            </div> */}
          </div>
        </div>

        {/* Right Side - Rating Bars */}
        {/* <div className="flex flex-col gap-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <RatingBar
              key={star}
              stars={star}
              value={starCounts[star]}
              max={maxValue}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProfileSummary;
