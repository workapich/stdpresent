import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../styles/layout/carousel.css";
import { Navigation } from "swiper/modules";
import arrowRight from "../../assets/img/arrow.png";
import arrowLeft from "../../assets/img/left.png";
import {
  Text,
  BigText,
  Image,
  ComaImage,
} from "../../styles/components/Home/Carousel.styled";
import "swiper/css/navigation";
import { carousel } from "../../utils/carousel";
import coma from "../../assets/img/znak.png";
import { PrimaryButton } from "../../styles/ui/Buttons.styled";
import { HeadText } from "../../styles/components/Home/HalfSection.styled";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="carousel">
      <HeadText>Was die Leute über uns sagen</HeadText>
      <Swiper
        modules={[Navigation]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        className="mySwiper"
        spaceBetween={15}
        initialSlide={1}
        loop
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {carousel.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className={activeIndex === index ? "active" : ""}
          >
            {activeIndex === index && (
              <>
                <Image src={item.logo} alt="Logo" />
                <Image src={item.stars} alt="Stars" />
              </>
            )}
            <Text>{item.text}</Text>
            <BigText>{item.name}</BigText>

            {activeIndex === index && (
              <>
                <Text>{item.profile}</Text>
                <ComaImage src={coma} alt=" Coma" />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <img className="arrow-left arrow" src={arrowLeft} alt="Left" />
      <img className="arrow-right arrow" src={arrowRight} alt="Desno" />
      <PrimaryButton bgcolor="theRedOne">Gehen zu site</PrimaryButton>
    </div>
  );
};

export default Carousel;
