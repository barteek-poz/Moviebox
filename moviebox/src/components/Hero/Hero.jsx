import { HeroBox } from "../HeroBox/HeroBox";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLayout } from "../../hooks/useLayout";

export const Hero = ({ titlesArr }) => {
  const { screenWidth } = useLayout();
  return (
    <div className=" w-full max-w-2500 mx-auto">
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={screenWidth > 1100 ? true : false}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}>
        {titlesArr.map((title) => {
          return (
            <SwiperSlide key={Math.random()}>
              <HeroBox
                id={title.id}
                title={title.title}
                name={title.name}
                release_date={title.release_date}
                media_type={title.media_type}
                first_air_date={title.first_air_date}
                vote_average={title.vote_average}
                backdrop_path={title.backdrop_path}
                overview={title.overview}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
