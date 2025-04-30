import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import useSyncUser from "./hooks/useSyncUser";
import { useUser } from "@clerk/clerk-react";

const Layout = () => {
  // Use the sync hook to make sure user data is saved to MongoDB
  const { isSyncing, error } = useSyncUser();
  const { isSignedIn } = useUser();

  return (
    <div>
      <Navbar />
      {error && isSignedIn && (
        <div className="bg-red-100 text-red-700 px-3 py-3 my-2 rounded text-center">
          Error syncing user data: {error}
        </div>
      )}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
