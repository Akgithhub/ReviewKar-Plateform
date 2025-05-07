import MainCatogery from "../components/ui/MainCatogery";
import Hero from "../components/global/Hero";
import React from "react";
import AllCategory from "../components/ui/AllCatogery";
import CTASection from "../components/global/CTASection";

const Catogery = () => {
  const aboutHeroData = {
    title: "Search Reviews by Categories",
    subtitle: `Check Ratings of Businesses, Read Reviews & Buy`,
    buttonText: "Search",
    bgImage: "./help-you.jpg",
    inputSection: true,
    heroImageHeight: "screen",
  };
  const CTAsectionData = {
    title: "Get Paid to Write Reviews",
    subtitle: `Join our community of reviewers and earn rewards for sharing your experiences.`,
    buttonText: "Join Now",
    bgImage: "./help-you.jpg",
    btnurl: "/pricing",
  };
  return (
    <>
      <Hero {...aboutHeroData} />
      {/* <MainCatogery /> */}
      <AllCategory />
      <CTASection {...CTAsectionData} />
    </>
  );
};

export default Catogery;
