import { FaArrowRight } from "react-icons/fa";

const categories = [
  { name: "Cars, motorbikes & accessories", count: 543 },
  { name: "Floristry", count: 213 },
  { name: "Office & business", count: 225 },
  { name: "Chemists & cosmetics", count: 244 },
  { name: "Energy", count: 78 },
  { name: "Photo, print & book-on-demand", count: 657 },
  { name: "Gifts", count: 654 },
  { name: "Luggage, bags & leather goods", count: 89 },
  { name: "Pharmaceuticals", count: 45 },
  { name: "Telecommunication", count: 796 },
  { name: "Opticians", count: 423 },
  { name: "Tickets", count: 32 },
  { name: "Shoes", count: 21 },
  { name: "Pet supplies", count: 85 },

  { name: "Clothing", count: 32 },
  { name: "Books", count: 54 },
  { name: "Computers & electronics", count: 432 },
  { name: "Precious metals", count: 243 },
  { name: "Finance & insurance", count: 898 },
  { name: "Gardening supplies", count: 53 },
  { name: "Household goods", count: 90 },
  { name: "Food", count: 789 },
  { name: "Furniture & decoration", count: 122 },
  { name: "Music & film", count: 56 },
  { name: "Travel & hotels", count: 331 },
  { name: "Jewellery & watches", count: 432 },
  { name: "Sports", count: 90 },
  { name: "Consulting", count: 65 },
];

const AllCategory = () => {
  // Split categories into two columns
  const half = Math.ceil(categories.length / 2);
  const left = categories.slice(0, half);
  const right = categories.slice(half);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Vanno companies categories
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[left, right].map((column, i) => (
            <div key={i} className="space-y-3">
              {column.map((cat, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-3 rounded-md transition"
                >
                  <span className="text-sm font-medium text-gray-700">
                    <span className="text-blue-600 font-semibold mr-2">
                      {cat.count}
                    </span>
                    {cat.name}
                  </span>
                  <FaArrowRight className="text-gray-400" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategory;
