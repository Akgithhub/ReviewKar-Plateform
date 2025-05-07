import { FaArrowRight } from "react-icons/fa";
import { categories } from "@/constents/categories.js";
import { useNavigate } from "react-router-dom";
const AllCategory = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Slugify the category to make it URL-friendly
    const slug = category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumerics with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens;
    navigate(`/catogery/${slug}`);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          ReviewKar Companies categories
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis
          unde nisi. Sequi iure aperiam repudiandae odio, repellat cumque iusto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-3 cursor-pointer">
              <div className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-3 rounded-md transition">
                <button onClick={() => handleCategoryClick(cat)}>
                  <span className=" cursor-pointer text-sm font-medium text-gray-700">
                    <span className="text-blue-600 font-semibold mr-2">0</span>
                    {cat}
                  </span>
                </button>
                <FaArrowRight className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategory;
