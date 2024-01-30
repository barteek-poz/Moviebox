import { dateFormat } from "../../helpers/dateFormat";
import {Link} from "react-router-dom"
import styles from "../SearchedTitle/SearchedTitle.module.css";
export const SearchedTitle = ({titleData}) => {
  console.log(titleData)
  return (
    <Link to={`${titleData.media_type}/${titleData.id}`} className={styles.titleBox}>
      <div
        className={styles.titlePoster}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${titleData.poster_path})` }}></div>
      <div className={styles.titleInfo}>
        <span>{titleData.name || titleData.title}</span>
        <p>{dateFormat(titleData.first_air_date)|| dateFormat(titleData.release_date)}</p>
      </div>
    </Link>
  );
};
