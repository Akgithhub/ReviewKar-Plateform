import React from "react";
const TopCatogery = () => {
  const catogeryData = [
    {
      title: "Clothing",
      results: 122,
      reviews: 356,
      image: "./catogery-cloth.jpg",
    },
    {
      title: "Hotels",
      results: 245,
      reviews: 123,
      image: "./catogery-hotel.jpg",
    },
    {
      title: "Restaurants",
      results: 95,
      reviews: 245,
      image: "./catogery-res.jpg",
    },
    {
      title: "Bars",
      results: 123,
      reviews: 187,
      image: "./catogery-bars.jpg",
    },
    {
      title: "Electronics",
      results: 92,
      reviews: 221,
      image: "./catogery-elec.jpg",
    },
    {
      title: "Beauty",
      results: 92,
      reviews: 323,
      image: "./catogery-beauty.jpg",
    },
  ];
  return (
    <>
      <section className="bg-gray-100 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold">Top Categories</h2>
          <div>
            <div className="flex flex-col md:flex-row md:items-center items-start gap-8 justify-between mb-6">
              <p className="text-gray-500 mt-1">
                Explore our most popular categories—from tech gadgets to local
                services. Find real reviews, from real users, in the areas that
                matter most to you.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium text-sm flex items-center gap-1"
              >
                View all →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catogeryData.map((category, idx) => (
              <div
                key={idx}
                className="relative rounded-md overflow-hidden shadow-md group"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded mb-2 w-fit">
                    {category.results} Results
                  </span>
                  <h3 className="text-white text-lg font-semibold">
                    {category.title}
                  </h3>
                  <div className="text-sm text-gray-200 flex items-center gap-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
                      />
                    </svg>
                    {category.reviews} Reviews
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCatogery;
