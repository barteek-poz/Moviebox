// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";


// import required modules
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poster } from "../Poster/Poster";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { useLayout } from "../../hooks/useLayout";
export const TitleSwiper = ({ titlesArr, media }) => {
  const { screenWidth, numberOfSlides } = useLayout();
const slidesGap = (screenWidth) => {
  if(screenWidth < 600 && screenWidth > 450) {
    return '130px'
  } else if(screenWidth < 450) {
    return "50px"
  }
}
  
  return (
    <CenteredContent>
      <Swiper
        loop={true}
        slidesPerView={numberOfSlides}
        navigation={screenWidth > 1100 ? true : false}
        spaceBetween={slidesGap(screenWidth)}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="titleSwiper xl:min-w-5/6 2xl:min-w-full">
        {titlesArr.map((title) => {
          return (
            <SwiperSlide key={Math.random()}>
              <Poster titleData={title} media={media} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CenteredContent>
  );
};
