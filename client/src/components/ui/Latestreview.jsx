import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Latestreview = () => {
  const latestReviewsData = [
    {
      user: "Mark Twain",
      avatar: "./latest-reviews-profile-img1.jpg",
      rating: 4.5,
      stars: 5,
      title: "Shipping Very Fast",
      review: "Et nec tantas accusamus salutatus, sit commodo veritus te",
      company: "Fnac",
      date: "26.08.2018",
    },
    {
      user: "Jhon Doe",
      avatar: "./latest-reviews-profile-img2.jpg",
      rating: 4.5,
      stars: 5,
      title: "Awesome Experience",
      review: "Et nec tantas accusamus salutatus, sit commodo veritus te",
      company: "Fnac",
      date: "26.08.2018",
    },
    {
      user: "Marika",
      avatar: "./latest-reviews-profile-img3.jpg",
      rating: 3.0,
      stars: 5,
      title: "Great products",
      review: "Et nec tantas accusamus salutatus, sit commodo veritus te",
      company: "Fnac",
      date: "26.08.2018",
    },
    {
      user: "Marika",
      avatar: "./latest-reviews-profile-img3.jpg",
      rating: 3.0,
      stars: 5,
      title: "Great products",
      review: "Et nec tantas accusamus salutatus, sit commodo veritus te",
      company: "Fnac",
      date: "26.08.2018",
    },
    {
      user: "Marika",
      avatar: "./latest-reviews-profile-img3.jpg",
      rating: 3.0,
      stars: 5,
      title: "Great products",
      review: "Et nec tantas accusamus salutatus, sit commodo veritus te",
      company: "Fnac",
      date: "26.08.2018",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center items-start gap-8 justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold">Latest Reviews</h2>
            <p className="text-gray-500 mt-1">
              Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium text-sm flex items-center gap-1"
          >
            View all →
          </a>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="pb-10"
        >
          {latestReviewsData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={item.avatar}
                    alt={item.user}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center">
                      {[...Array(item.stars)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < item.rating ? "#00c853" : "#e0e0e0"}
                          viewBox="0 0 24 24"
                          stroke="none"
                          className="w-4 h-4"
                        >
                          <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.4 8.166L12 18.896l-7.334 3.863 1.4-8.166L.132 9.211l8.2-1.193z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {item.rating.toFixed(2)}/5.00
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Shops</p>
                  </div>
                </div>
                <p className="text-sm font-medium">
                  {item.user} reviewed{" "}
                  <span className="text-blue-600 hover:underline">
                    {item.company}
                  </span>
                </p>
                <h3 className="text-base font-semibold mt-1">
                  "{item.title}"
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.review}</p>
                <p className="text-xs text-gray-400 mt-4">
                  Published: {item.date}
                </p>
                <button className="mt-4 bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700">
                  Read review
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Latestreview;
