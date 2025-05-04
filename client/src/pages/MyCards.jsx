import React, { useState } from "react";
import ProfileSummary from "@/components/ui/mycards/ProfileSummary.jsx";
import ProfileSectionCards from "@/components/ui/mycards/ProfileSectionCards";
const MyCards = () => {
  return (
    <>
      {/* Profile Section */}
      <ProfileSummary />
      <ProfileSectionCards/>
    </>
  );
};

export default MyCards;
