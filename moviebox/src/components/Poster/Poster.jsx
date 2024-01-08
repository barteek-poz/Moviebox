import styles from "../Poster/Poster.module.css";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import backgroundPoster from "../../assets/reacher.jpeg";
import {Link} from 'react-router-dom'
export const Poster = ({ title, vote_average, overview }) => {
  return (
    <Link
      className={styles.background}
      style={{
        backgroundImage: `url(${backgroundPoster})`,
      }}>
      <div className={styles.infoBox}>
        <div className={styles.firstRow}>
          <span>{title}Reacher</span>
          <button>
            <img src={ADD_ICON} alt="add-icon" />
          </button>
        </div>
        <div className={styles.secondRow}>
          <img src={STAR_ICON} alt="star-icon" />
          <p>{vote_average}8.3</p>
        </div>
        <p>
          {overview}Itinerant former military policeman Jack Reacher solves
          crimes and metes out his own brand of street justice. Based on the
          books by Lee Child.
        </p>
      </div>
    </Link>
  );
};
