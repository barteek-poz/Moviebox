import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "../Hero/Hero.module.css";
import STAR_ICON from "../../assets/star.svg";
import hero from "../../assets/hero.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Hero = () => {
  return (
    <CenteredContent>
      <Swiper
        cssMode={true}
        navigation={true}
        
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><div
        className={styles.heroImg}
        style={{ backgroundImage: `url(${hero})` }}>
        <div className={styles.heroBox}>
          <span>Reacher</span>
          <div>
            <p>2023</p>
            <p>TV Series</p>
          </div>
          <div>
            <img src={STAR_ICON} alt="star-icon" />
            <p className={styles.points}>8.8</p>
          </div>
          <p>
            Itinerant former military policeman Jack Reacher solves crimes and
            metes out his own brand of street justice. Based on the books by Lee
            Child.
          </p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div
        className={styles.heroImg}
        style={{ backgroundImage: `url(${hero})` }}>
        <div className={styles.heroBox}>
          <span>Reacher</span>
          <div>
            <p>2023</p>
            <p>TV Series</p>
          </div>
          <div>
            <img src={STAR_ICON} alt="star-icon" />
            <p className={styles.points}>8.8</p>
          </div>
          <p>
            Itinerant former military policeman Jack Reacher solves crimes and
            metes out his own brand of street justice. Based on the books by Lee
            Child.
          </p>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div
        className={styles.heroImg}
        style={{ backgroundImage: `url(${hero})` }}>
        <div className={styles.heroBox}>
          <span>Reacher</span>
          <div>
            <p>2023</p>
            <p>TV Series</p>
          </div>
          <div>
            <img src={STAR_ICON} alt="star-icon" />
            <p className={styles.points}>8.8</p>
          </div>
          <p>
            Itinerant former military policeman Jack Reacher solves crimes and
            metes out his own brand of street justice. Based on the books by Lee
            Child.
          </p>
        </div>
      </div></SwiperSlide>
        
      </Swiper>

    </CenteredContent>
  );
};


{/* <div
        className={styles.heroImg}
        style={{ backgroundImage: `url(${hero})` }}>
        <div className={styles.heroBox}>
          <span>Reacher</span>
          <div>
            <p>2023</p>
            <p>TV Series</p>
          </div>
          <div>
            <img src={STAR_ICON} alt="star-icon" />
            <p className={styles.points}>8.8</p>
          </div>
          <p>
            Itinerant former military policeman Jack Reacher solves crimes and
            metes out his own brand of street justice. Based on the books by Lee
            Child.
          </p>
        </div>
      </div> */}