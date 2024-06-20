import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/layout/svajp.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import mainPicture from "../../assets/img/BRATH.png";
import arrowRight from "../../assets/img/arrow.png";
import arrowLeft from "../../assets/img/left.png";

const SwiperSection = () => {
  return (
    <div className="swiper-container">
      <Swiper
        pagination
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mainPicture} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainPicture} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainPicture} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainPicture} alt="" />
        </SwiperSlide>
      </Swiper>
      <img className="arrow-left arrow" src={arrowLeft} alt="Left" />
      <img className="arrow-right arrow" src={arrowRight} alt="Desno" />
    </div>
  );
};

export default SwiperSection;
