import React from "react";
import PricingHero from "../components/ui/PricingHero";
import EarnList from "../components/ui/EarnList";
import {
  useAuth,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Earn = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <PricingHero />

      {isSignedIn ? (
        <div className="py-10 px-4 md:px-12">
          <EarnList />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-10 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Please sign in to view earning opportunities
          </h2>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300">
                <img src="./log-in.svg" alt="Log in" className="w-5 h-5" />
                <span>Sign In / Sign Up</span>
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </>
  );
};

export default Earn;
