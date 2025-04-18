import ReviewCard from "./ReviewCard";

const dummyReviews = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Jhon Doe",
    title: "Awesome Experience",
    content:
      "Et nec tantas accusamus salutatus, sit commodo veritus te. Viderer petentium cu his...",
    company: "Fnac",
    rating: 4.5,
    category: "Shops",
    date: "26.08.2018",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Margaret",
    title: "Perfect",
    content:
      "Mucius doctus constituto pri at, ne cetero postulant pro. At vis utinam corpora...",
    company: "Fnac",
    rating: 4.5,
    category: "Shops",
    date: "26.08.2018",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Margaret",
    title: "Perfect",
    content:
      "Mucius doctus constituto pri at, ne cetero postulant pro. At vis utinam corpora...",
    company: "Fnac",
    rating: 4.5,
    category: "Shops",
    date: "26.08.2018",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Margaret",
    title: "Perfect",
    content:
      "Mucius doctus constituto pri at, ne cetero postulant pro. At vis utinam corpora...",
    company: "Fnac",
    rating: 4.5,
    category: "Shops",
    date: "26.08.2018",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Margaret",
    title: "Perfect",
    content:
      "Mucius doctus constituto pri at, ne cetero postulant pro. At vis utinam corpora...",
    company: "Fnac",
    rating: 4.5,
    category: "Shops",
    date: "26.08.2018",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Margaret",
    title: "Perfect",
    content:
      "Mucius doctus constituto pri at, ne cetero postulant pro. At vis utinam corpora...",
    company: "Fnac",
    rating: 4.5,
    category: "Shops",
    date: "26.08.2018",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Margaret",
    title: "Perfect",
    content:
      "Mucius doctus constituto pri at, ne cetero postulant pro. At vis utinam corpora...",
    company: "Fnac",
    rating: 4.5,
    category: "Shops",
    date: "26.08.2018",
  },
  // ... Add more items as needed
];

const ReviewGrid = () => {
  return (
    <div className="bg-[#f4f7fb] py-10 px-6">
      {/* Top Filter Row */}
      <div className="flex justify-between items-center mb-6 text-sm text-gray-700 bg-white py-6">
        <div className="space-x-4">
          <button className="font-semibold text-black">All</button>
          <button>Latest</button>
          <button>Oldest</button>
        </div>
        <button className="flex items-center gap-1">
          <img src="/filter-icon.svg" alt="Filter" className="h-4" />
          More filters
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyReviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-600 hover:bg-yellow-300 hover:text-black text-white px-6 py-2 rounded text-sm">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ReviewGrid;
