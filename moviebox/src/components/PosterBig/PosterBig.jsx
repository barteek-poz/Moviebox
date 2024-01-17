import { Link } from "react-router-dom";
import { dateFormat } from "../../helpers/dateFormat";
import { mediaType } from "../../helpers/mediaType";
import { ratingFormat } from "../../helpers/ratingFormat";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import styles from "../PosterBig/PosterBig.module.css";
import poster from '../../assets/godfather.jpeg'

export const PosterBig = ({
  title,
  name,
  release_date,
  first_air_date,
  media_type,
  vote_average,
  overview,
}) => {
  return (
    <div className={styles.posterBox}>
      <Link className={styles.poster} style={{
        backgroundImage: `url(${poster})`,
      }}/>
      <div className={styles.posterInfo}>
      <button className={styles.addBtn}>
            <img src={ADD_ICON} alt="add-icon" />
          </button>
        {/* <span>{title || name}</span> */}
        <span>Ojciec Chrzestny</span>
        <div>
          {/* <p>{dateFormat(release_date) || dateFormat(first_air_date)}</p>
          <p>{mediaType(media_type)}</p> */}
          <p>1979</p>
          <p>Movie</p>
        </div>
        <div>
          <img src={STAR_ICON} alt="star-icon" />
          <p className={styles.points}>8.0</p>
          {/* <p className={styles.points}>{ratingFormat(vote_average)}</p> */}
        </div>
        {/* <p>{overview}</p> */}
        <p>
          Don Vito Corleone, head of a mafia family, decides to hand over his
          empire to his youngest son Michael. However, his decision
          unintentionally puts the lives of his loved ones in grave danger.
        </p>
      </div>
    </div>
  );
};
