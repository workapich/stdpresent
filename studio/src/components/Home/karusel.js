import SwiperCore from "swiper";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const setupCarousel = (swiperRef) => {
  if (!swiperRef.current) return;

  const swiper = swiperRef.current.swiper;

  const updateSlidesOrder = (direction) => {
    const slides = Array.from(swiper.slides);
    if (direction === "next") {
      const firstSlide = slides.shift();
      slides.push(firstSlide);
    } else if (direction === "prev") {
      const lastSlide = slides.pop();
      slides.unshift(lastSlide);
    }

    slides.forEach((slide) => {
      swiper.wrapperEl.append(slide);
    });

    swiper.updateSlides();
    swiper.slideTo(1, 0, false);
  };

  swiper.on("slideNextTransitionStart", () => {
    updateSlidesOrder("next");
  });

  swiper.on("slidePrevTransitionStart", () => {
    updateSlidesOrder("prev");
  });

  swiper.slideTo(1, 0, false); // Set initial position
};

export default setupCarousel;
