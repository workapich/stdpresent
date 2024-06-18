import React from "react";
import HalfSection from "../components/Home/HalfSection";
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
    </>
  );
};

export default Home;
