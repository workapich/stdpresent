import React from "react";
import AboveGold from "../components/Home/AboveGold";
import HalfSection from "../components/Home/HalfSection";
import BreakSection from "../components/Home/BreakSection";
import GoldSection from "../components/Home/GoldSection";
import DarkSection from "../components/Home/DarkSection";
import Footer from "../components/Home/Footer";
import pictureRight from "../assets/img/pictureSection.jpg";
import pictureLeft from "../assets/img/spice.jpg";

const Home = () => {
  return (
    <>
      <HalfSection picture={pictureRight} />
      <DarkSection />
      <HalfSection picture={pictureLeft} order="2" />
      <AboveGold />
      <BreakSection />
      <GoldSection />
      <BreakSection />
      <Footer />
    </>
  );
};

export default Home;
