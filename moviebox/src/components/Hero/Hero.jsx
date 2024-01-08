import { CenteredContent } from "../CenteredContent/CenteredContent";
import { HeroBox } from "../HeroBox/HeroBox";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//loader
import { useLoaderData } from "react-router-dom";

export const Hero = () => {
  const loaderData = useLoaderData();
  const popular = loaderData.results.slice(0, 5);
  console.log(popular);
  return (
    <CenteredContent>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        {popular.map((title) => {
          return (
            <SwiperSlide key={title.id}>
              <HeroBox
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
    </CenteredContent>
  );
};
