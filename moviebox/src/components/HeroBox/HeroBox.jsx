import styles from "../HeroBox/HeroBox.module.css";
import { dateFormat } from "../../helpers/dateFormat";
import { mediaType } from "../../helpers/mediaType";
import { ratingFormat } from "../../helpers/ratingFormat";
import {Link} from 'react-router-dom'
import STAR_ICON from "../../assets/star.svg";

export const HeroBox = ({
  id,
  title,
  name,
  release_date,
  media_type,
  first_air_date,
  vote_average,
  backdrop_path,
  overview,
}) => {
  return (
    <div
      className={styles.heroImg}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}>
      <div className={styles.heroBox}>
        <Link to={`${media_type}/${id}`}>
        <span>{title || name}</span>
        </Link>
        <div>
          <p>{dateFormat(release_date) || dateFormat(first_air_date)}</p>
          <p>{mediaType(media_type)}</p>
        </div>
        <div>
          <img src={STAR_ICON} alt="star-icon" />
          <p className={styles.points}>{ratingFormat(vote_average)}</p>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
};
