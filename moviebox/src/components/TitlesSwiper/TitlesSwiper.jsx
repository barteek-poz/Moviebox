// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poster } from "../Poster/Poster";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { useEffect, useState } from "react";
import { numberOfPosters } from "../../helpers/numberOfPosters";
export const TitleSwiper = ({ titlesArr, media }) => {
  
  const [numberOfSlides, setNumberOfSlides] = useState(4)
  useEffect(() => {
    const handleWindowResize = () => {
      setNumberOfSlides(numberOfPosters(window.innerWidth))
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <CenteredContent>
      <Swiper
        loop={true}
        slidesPerView={numberOfSlides}
        navigation={true}
        modules={[Navigation, FreeMode]}
        className="titleSwiper lg:max-w-6xl xl:min-w-5/6 2xl:min-w-full">
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
