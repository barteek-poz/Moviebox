// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poster } from "../Poster/Poster";
import { CenteredContent } from "../CenteredContent/CenteredContent";
export const TitleSwiper = () => {
  return (
    <CenteredContent>
      <Swiper
        loop={true}
        slidesPerView={5}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="titleSwiper">
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
      </Swiper>
    </CenteredContent>
  );
};
