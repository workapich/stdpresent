import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../styles/layout/carousel.css";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Pagination]);

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="carousel">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        className="mySwiper"
        spaceBetween={7}
        loop
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {[1, 2, 3, 1, 2, 3].map((num, index) => (
          <SwiperSlide
            key={index}
            className={activeIndex === index ? "active" : ""}
          >
            <img
              src={`https://swiperjs.com/demos/images/nature-${num}.jpg`}
              alt={`Nature ${num}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
