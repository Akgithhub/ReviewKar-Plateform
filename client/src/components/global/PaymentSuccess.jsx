import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  // After redirection back to your frontend (e.g. /payment-success?session_id=xyz)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    if (sessionId) {
      localStorage.setItem("paymentDone", "true");
      // Or dispatch Redux to update state
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0f0d] flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Payment Successful
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Thank you for your purchase! Your order has been placed successfully.
        You will receive an email confirmation shortly.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/earn")}
          className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
