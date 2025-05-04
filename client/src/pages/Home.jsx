import Hero from "../components/global/Hero";
import TopCatogery from "../components/ui/TopCatogery";
import Latestreview from "../components/ui/Latestreview";
import Helpyou from "../components/ui/Helpyou";
import React from "react";

const Home = () => {
  const homeHeroData = {
    title: "Every Review is an Experience!",
    subtitle: "Check Ratings of Businesses, Read Reviews & Buy",
    buttonText: "Search",
    bgImage: "./home_section.jpg",
    getReviewsButtonText: "Get Reviews",
    earnButtonText: "Earn",
    inputSection: true,
  };
  return (
    <>
      <Hero {...homeHeroData} />
      <TopCatogery />
      <Latestreview />
      <Helpyou />
    </>
  );
};

export default Home;
