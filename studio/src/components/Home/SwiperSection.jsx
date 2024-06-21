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
import { GrayWrapper } from "../../styles/components/Home/SwiperSection.styled";
import { HeadText } from "../../styles/components/Home/HalfSection.styled";
import { SmallText } from "../../styles/components/Home/DryAged.styled";

const SwiperSection = () => {
  return (
    <div className="swiper-container">
      <GrayWrapper>
        <HeadText>Heiko Brath Metzgermeister</HeadText>

        <SmallText>
          Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
          argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol
          Spritz probatus pertinax.
        </SmallText>
      </GrayWrapper>
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
      <div className="div"></div>
    </div>
  );
};

export default SwiperSection;
