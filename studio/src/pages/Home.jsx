import React from "react";
import AboveGold from "../components/Home/AboveGold";
import HalfSection from "../components/Home/HalfSection";
import BreakSection from "../components/Home/BreakSection";
import GoldSection from "../components/Home/GoldSection";
import DarkSection from "../components/Home/DarkSection";
import Footer from "../components/Home/Footer";
import pictureRight from "../assets/img/pictureSection.jpg";
import pictureLeft from "../assets/img/spice.jpg";
import DryAged from "../components/Home/DryAged";
import Header from "../components/Home/Header";
import LineBelowHead from "../components/Home/LineBelowHead";
import SwiperSection from "../components/Home/SwiperSection";
import Carousel from "../components/Home/Carousel";
import Paralax from "../components/Home/Paralax";

const Home = () => {
  return (
    <>
      <Header />
      <LineBelowHead />
      <SwiperSection />
      <DryAged />
      <HalfSection picture={pictureRight} />
      <DarkSection />
      <HalfSection picture={pictureLeft} order="2" />
      <Paralax />
      <AboveGold />
      <BreakSection />
      <GoldSection />
      <BreakSection />
      <Carousel />

      <Footer />
    </>
  );
};

export default Home;
