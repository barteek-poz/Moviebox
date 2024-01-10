// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poster } from "../Poster/Poster";
import { CenteredContent } from "../CenteredContent/CenteredContent";
export const TitleSwiper = ({ titlesArr }) => {
  return (
    <CenteredContent>
      <Swiper
        loop={true}
        slidesPerView={5}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="titleSwiper">
        {titlesArr.map((title) => {
          return (
            <SwiperSlide key={title.id}>
              <Poster
                title={title.title}
                vote_average={title.vote_average}
                overview={title.overview}
                poster={title.poster_path}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CenteredContent>
  );
};
