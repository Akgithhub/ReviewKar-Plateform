import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShareAlt,
} from "react-icons/fa";

const ReviewCard = ({ name, text, reply }) => (
  <div className="bg-white p-4 rounded shadow-sm mb-6">
    <div className="flex gap-3 items-center mb-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full" />
      <div>
        <p className="font-semibold">{name}</p>
        <div className="text-sm text-green-600">★★★★★ 5.0/5.0</div>
      </div>
    </div>
    <h4 className="font-semibold mb-1">"Awesome Experience"</h4>
    <p className="text-sm text-gray-700 mb-3">{text}</p>
    <div className="flex items-center gap-3 text-sm text-gray-500">
      <button className="border px-2 py-1 rounded hover:bg-gray-100">
        👍 Useful
      </button>
      <button className="border px-2 py-1 rounded hover:bg-gray-100">
        👎 Not useful
      </button>
      <div className="ml-auto flex items-center gap-2">
        <FaShareAlt /> Share
      </div>
    </div>
    {reply && (
      <div className="mt-4 ml-12 p-3 bg-gray-100 rounded">
        <p className="font-semibold">Reply from Good Electronics</p>
        <p className="text-sm text-gray-600">{reply}</p>
      </div>
    )}
  </div>
);
const CompanyInfo = () => (
  <div className="bg-white p-4 shadow-sm rounded">
    <h3 className="text-xl font-semibold mb-2">Good Electronics</h3>
    <p className="text-sm text-gray-600 mb-3">
      Illud scipitent mei ea, te nec sonet partem contentiones.
    </p>
    <div className="text-sm text-gray-600 mb-1">
      <strong>Address:</strong>
      <br />
      9785 Baker st. 567
      <br />
      Los Angeles - US
    </div>
    <div className="text-sm text-gray-600 mb-1">
      <strong>Website:</strong>
      <br />
      <a href="#" className="text-blue-600">
        goodelectronics.com
      </a>
    </div>
    <div className="text-sm text-gray-600 mb-1">
      <strong>Email:</strong>
      <br />
      info@goodelectronics.com
    </div>
    <div className="text-sm text-gray-600 mb-3">
      <strong>Telephone:</strong>
      <br />
      +542 542 566264
    </div>
    <div className="flex gap-3 text-gray-500">
      <FaFacebookF />
      <FaTwitter />
      <FaLinkedinIn />
    </div>
  </div>
);
const Pagination = () => (
  <div className="flex justify-center items-center space-x-2 mt-6">
    {[1, 2, 3, 4].map((num) => (
      <button
        key={num}
        className={`w-8 h-8 rounded-full ${
          num === 1 ? "bg-blue-600 text-white" : "bg-white text-gray-800"
        } border hover:bg-blue-500 hover:text-white`}
      >
        {num}
      </button>
    ))}
  </div>
);
const ProfileSectionCards = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ReviewCard
            name="Monika"
            text="Eos tollit ancillae ea, lorem consulatu qui ne..."
            reply="Hi Monika, thanks for your review..."
          />
          <Pagination />
        </div>
        <CompanyInfo />
      </div>
    </section>
  );
};

export default ProfileSectionCards;
