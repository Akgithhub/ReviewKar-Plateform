import { Link } from "react-router-dom";
import {
  FaComments,
  FaHeartbeat,
  FaTshirt,
  FaHotel,
  FaUtensils,
  FaCocktail,
  FaTv,
  FaUserNurse,
  FaDumbbell,
  FaSpa,
} from "react-icons/fa";

const categories = [
  {
    name: "Clothing",
    icon: <FaTshirt size={40} />,
    results: 1023,
    comments: 2435,
    link: "/single-catogery-review",
    // link: "/category/clothing",
  },
  {
    name: "Hotels",
    icon: <FaHotel size={40} />,
    results: 856,
    comments: 455,
    link: "/single-catogery-review",
    // link: "/category/hotels",
  },
  {
    name: "Restaurants",
    icon: <FaUtensils size={40} />,
    results: 2400,
    comments: 1323,
    link: "/single-catogery-review",
    // link: "/category/restaurants",
  },
  {
    name: "Bars",
    icon: <FaCocktail size={40} />,
    results: 854,
    comments: 345,
    link: "/single-catogery-review",
    // link: "/category/bars",
  },
  {
    name: "Electronics",
    icon: <FaTv size={40} />,
    results: 1210,
    comments: 530,
    link: "/single-catogery-review",
    // link: "/category/electronics",
  },
  {
    name: "Beauty",
    icon: <FaSpa size={40} />,
    results: 1343,
    comments: 315,
    link: "/single-catogery-review",
    // link: "/category/beauty",
  },
  {
    name: "Fitness",
    icon: <FaDumbbell size={40} />,
    results: 678,
    comments: 123,
    link: "/single-catogery-review",
    // link: "/category/fitness",
  },
  {
    name: "Doctors",
    icon: <FaHeartbeat size={40} />,
    results: 378,
    comments: 560,
    link: "/single-catogery-review",
    // link: "/category/doctors",
  },
];

const MainCatogery = () => {
  return (
    <section className="bg-[#f5faff] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Top Categories
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link
              to={cat.link}
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-200"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-gray-700">{cat.icon}</div>
                <h3 className="text-lg font-medium text-blue-600">
                  {cat.name}
                </h3>
                <div className="text-sm text-gray-500 flex flex-row gap-8 items-center">
                  <span className="mb-1 font-semibold">
                    {cat.results.toLocaleString()}{" "}
                    <span className="font-normal">Results</span>
                  </span>
                  <span className="flex items-center gap-1">
                    {cat.comments.toLocaleString()}
                    <FaComments />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCatogery;
