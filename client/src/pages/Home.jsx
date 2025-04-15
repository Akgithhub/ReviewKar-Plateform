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
  };
  return (
    <>
      <Hero
        title={homeHeroData.title}
        subtitle={homeHeroData.subtitle}
        buttonText={homeHeroData.buttonText}
        bgImage={homeHeroData.bgImage}
        getReviewsButtonText={homeHeroData.getReviewsButtonText}
        earnButtonText={homeHeroData.earnButtonText}
      />
      <TopCatogery />
      <Latestreview />
      <Helpyou />
    </>
  );
};

export default Home;
