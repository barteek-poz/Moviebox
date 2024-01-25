// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poster } from "../Poster/Poster";
import { CenteredContent } from "../CenteredContent/CenteredContent";
export const TitleSwiper = ({ titlesArr, media }) => {
  return (
    <CenteredContent>
      <Swiper
        loop={true}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation, FreeMode]}
        className="titleSwiper">
        {titlesArr.map((title) => {
          return (
            <SwiperSlide key={Math.random()}>
              <Poster
              titleData={title} media={media}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CenteredContent>
  );
};
