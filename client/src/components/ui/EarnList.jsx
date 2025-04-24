import React from "react";
import uniqid from 'uniqid';
const EarnList = () => {
  const CardData = [
    {
      id: uniqid(),
      title: "Head1",
      description:
        "Quodsi omittam quo no, ex audire ceteros pri, vel an meis choro consequat...",
      image: "./pricing-hero.jpg",
      category: "Category",
      date: "20 Dec, 2017",
    },
    {
      id: uniqid(),
      title: "Head",
      description:
        "Quodsi omittam quo no, ex audire ceteros pri, vel an meis choro consequat...",
        image: "./pricing-hero.jpg",
      category: "Category",
      date: "20 Dec, 2017",
    },
    {
      id: uniqid(),
      title: "Head",
      description:
        "Quodsi omittam quo no, ex audire ceteros pri, vel an meis choro consequat...",
        image: "./pricing-hero.jpg",
      category: "Category",
      date: "20 Dec, 2017",
    },
    {
      id: uniqid(),
      title: "Head",
      description:
        "Quodsi omittam quo no, ex audire ceteros pri, vel an meis choro consequat...",
        image: "./pricing-hero.jpg",
      category: "Category",
      date: "20 Dec, 2017",
    },
    {
      id: uniqid(),
      title: "Head",
      description:
        "Quodsi omittam quo no, ex audire ceteros pri, vel an meis choro consequat...",
        image: "./pricing-hero.jpg",
      category: "Category",
      date: "20 Dec, 2017",
    },
    {
      id: uniqid(),
      title: "Head",
      description:
        "Quodsi omittam quo no, ex audire ceteros pri, vel an meis choro consequat...",
        image: "./pricing-hero.jpg",
      category: "Category",
      date: "20 Dec, 2017",
    },
    {
      id: uniqid(),
      title: "Head6",
      description:
        "Quodsi omittam quo no, ex audire ceteros pri, vel an meis choro consequat...",
        image: "./pricing-hero.jpg",
      category: "Category",
      date: "20 Dec, 2017",
    },
  ];
  return (
    <section class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* <!-- Left: Blog Grid --> */}
        <div class="lg:col-span-3 space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Card --> */}
            {CardData.map((card, index) => (
              <div
                key={index}
                class="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={card.image}
                  alt=""
                  class="w-full h-48 object-cover"
                />
                <div class="p-5">
                  <div class="text-sm text-gray-500">
                    {card.category} - {card.date}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-800 mt-2">{card.title}</h3>
                  <p class="text-sm text-gray-600 mt-2">
                  {card.description}
                  </p>
                  <div class="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 bg-gray-300 rounded-full"></div> Admin
                    </div>
                    <span>12k</span>
                  </div>
                </div>
              </div>
            ))}
            {/* <!-- Repeat 5 more cards similarly... --> */}
            {/* <!-- You can loop these in your backend or JS --> */}
          </div>

          {/* <!-- Pagination --> */}
          <div class="flex justify-center space-x-2">
            <button class="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-500 hover:text-white">
              ‹
            </button>
            <button class="px-3 py-1 bg-blue-600 text-white rounded-full">
              1
            </button>
            <button class="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-500 hover:text-white">
              2
            </button>
            <button class="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-500 hover:text-white">
              3
            </button>
            <button class="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-500 hover:text-white">
              ›
            </button>
          </div>
        </div>

        {/* <!-- Right: Sidebar --> */}
        <aside class="space-y-8">
          {/* <!-- Search --> */}
          <div class="bg-white p-5 rounded-lg shadow">
            <h4 class="text-lg font-semibold mb-3">Search</h4>
            <div class="flex">
              <input
                type="text"
                placeholder="Search..."
                class="flex-1 px-3 py-2 border rounded-l-md focus:outline-none"
              />
              <button class="bg-blue-600 text-white px-4 rounded-r-md">
                Search
              </button>
            </div>
          </div>

          {/* <!-- Latest Posts --> */}
          <div class="bg-white p-5 rounded-lg shadow">
            <h4 class="text-lg font-semibold mb-4">Latest Post</h4>
            <ul class="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" class="hover:text-blue-600">
                  Veliter Qualisque in Melianus...
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                  Veliter Qualisque in Melianus...
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                  Veliter Qualisque in Melianus...
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Categories --> */}
          <div class="bg-white p-5 rounded-lg shadow">
            <h4 class="text-lg font-semibold mb-4">Categories</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex justify-between">
                <span>Food</span>
                <span>(72)</span>
              </li>
              <li class="flex justify-between">
                <span>Places to visit</span>
                <span>(10)</span>
              </li>
              <li class="flex justify-between">
                <span>Major Places</span>
                <span>(4)</span>
              </li>
              <li class="flex justify-between">
                <span>Suggestions</span>
                <span>(39)</span>
              </li>
            </ul>
          </div>

          {/* <!-- Tags --> */}
          <div class="bg-white p-5 rounded-lg shadow">
            <h4 class="text-lg font-semibold mb-4">Popular Tags</h4>
            <div class="flex flex-wrap gap-2 text-sm">
              <span class="bg-gray-200 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition">
                Travel
              </span>
              <span class="bg-gray-200 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition">
                Explore
              </span>
              <span class="bg-gray-200 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition">
                Tips
              </span>
              <span class="bg-gray-200 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition">
                Experience
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default EarnList;
