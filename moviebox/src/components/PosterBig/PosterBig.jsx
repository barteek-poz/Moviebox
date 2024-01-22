import { Link } from "react-router-dom";
import { dateFormat } from "../../helpers/dateFormat";
import { mediaType } from "../../helpers/mediaType";
import { ratingFormat } from "../../helpers/ratingFormat";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import styles from "../PosterBig/PosterBig.module.css";
export const PosterBig = ({ title }) => {
  return (
    <div className={styles.posterBox}>
      <Link
        className={styles.poster}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${title.poster_path})`,
        }}
      />
      <div className={styles.posterInfo}>
        <button className={styles.addBtn}>
          <img src={ADD_ICON} alt="add-icon" />
        </button>
        <span>{title.title || title.name}</span>

        <div>
          <p>
            {dateFormat(title.release_date) || dateFormat(title.first_air_date)}
          </p>
          <p>{mediaType(title.media_type)}</p>
        </div>
        <div>
          <img src={STAR_ICON} alt="star-icon" />
          <p className={styles.points}>{ratingFormat(title.vote_average)}</p>
        </div>
        <p>{title.overview}</p>
      </div>
    </div>
  );
};
