import React from "react";
import Hero from "../components/global/Hero";
const About = () => {
const aboutHeroData = {
    title: "About Us",
    subtitle: "Learn more about our mission and values",
    buttonText: "Join Us",
    bgImage: "./help-you.jpg"
  };
  return (
    <>
      <Hero title={aboutHeroData.title} subtitle={aboutHeroData.subtitle} buttonText={aboutHeroData.buttonText} bgImage={aboutHeroData.bgImage} />
      <div>About</div>
    </>
  );
};

export default About;
