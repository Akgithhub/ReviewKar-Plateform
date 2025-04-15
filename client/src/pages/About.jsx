import React from "react";
import Hero from "../components/global/Hero";
const About = () => {
  const aboutHeroData = {
    title: "About Us",
    subtitle:
      `ReviewKar is a dynamic platform built to bridge the gap between businesses seeking genuine feedback and users eager to share their experiences. We believe every review holds the power to influence decisions—and we're here to make that process more transparent, rewarding, and reliable. ${`\n `}Whether you're a client looking to boost credibility through real reviews, or a user wanting to earn by sharing honest opinions, ReviewKar connects both worlds in a seamless experience.`,
    buttonText: "Join Us",
    bgImage: "./help-you.jpg",
    inputSection: false,
  };
  return (
    <>
      <Hero
        title={aboutHeroData.title}
        subtitle={aboutHeroData.subtitle}
        buttonText={aboutHeroData.buttonText}
        bgImage={aboutHeroData.bgImage}
        inputSection={aboutHeroData.inputSection}
      />
      <div>About</div>
    </>
  );
};

export default About;
