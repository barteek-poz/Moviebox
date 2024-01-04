import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "../Hero/Hero.module.css";
import STAR_ICON from "../../assets/star.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLoaderData } from "react-router-dom";


//naprawic wyswietlanie daty, rodzaju filmu i ocen
export const Hero = () => {
  const loaderData = useLoaderData();
  const popular = loaderData.results.slice(0, 10);
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
        {popular.map((title) => {return <SwiperSlide key={title.id}>
            <div
              className={styles.heroImg}
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${title.backdrop_path})`}}>
              <div className={styles.heroBox}>
                <span>{title.title || title.name}</span>
                <div>
                  <p>{title.release_date || title.first_air_date}</p>
                  <p>{title.media_type[0].toUpperCase() + title.media_type.slice(1)}</p>
                </div>
                <div>
                  <img src={STAR_ICON} alt="star-icon" />
                  <p className={styles.points}>{title.vote_average}</p>
                </div>
                <p>
                  {title.overview}
                </p>
              </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </CenteredContent>
  );
};


