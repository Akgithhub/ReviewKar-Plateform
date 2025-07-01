import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#2d0c0c] flex flex-col items-center justify-center text-white text-center px-4">
      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-6">
        <span className="text-6xl font-bold text-white">!</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Payment failed
      </h1>
      <p className="text-gray-300 mb-6 max-w-md">
        We were unable to process your payment. Please check your payment
        details and try again.
      </p>
      <button
        onClick={() => navigate("/pricing")}
        className="bg-red-700 cursor-pointer hover:bg-red-800 text-white font-medium py-2 px-6 rounded-full transition"
      >
        Try again
      </button>
    </div>
  );
};

export default PaymentFailed;
