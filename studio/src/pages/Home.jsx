import React from "react";
import AboveGold from "../components/Home/AboveGold";
import HalfSection from "../components/Home/HalfSection";
import BreakSection from "../components/Home/BreakSection";
import GoldSection from "../components/Home/GoldSection";
import pictureRight from "../assets/img/pictureSection.jpg";
import pictureLeft from "../assets/img/spice.jpg";

const Home = () => {
  return (
    <>
      <HalfSection picture={pictureRight} />
      <div className="asa">To</div>
      <div className="asa">Be</div>
      <div className="asa">Continued</div>
      <HalfSection picture={pictureLeft} order="2" />
      <AboveGold />
      <BreakSection />
      <GoldSection />
      <BreakSection />
    </>
  );
};

export default Home;
