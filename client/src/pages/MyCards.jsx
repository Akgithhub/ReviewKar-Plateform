import React, { useState } from "react";
import ProfileSummary from "@/components/ui/mycards/ProfileSummary.jsx";
import ProfileSectionCards from "@/components/ui/mycards/ProfileSectionCards";
import UserComDetails from "@/components/global/UserComDetails";
const MyCards = () => {
  return (
    <>
      {/* Profile Section */}
      <ProfileSummary />
      <ProfileSectionCards/>
      <UserComDetails/>
    </>
  );
};

export default MyCards;
