import { dateFormat } from "../../helpers/dateFormat";
import styles from "../SearchedTitle/SearchedTitle.module.css";
export const SearchedTitle = ({titleData}) => {
  return (
    <div className={styles.titleBox}>
      <div
        className={styles.titlePoster}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${titleData.poster_path})` }}></div>
      <div className={styles.titleInfo}>
        <span>{titleData.name || titleData.title}</span>
        <p>{dateFormat(titleData.first_air_date)|| dateFormat(titleData.release_date)}</p>
      </div>
    </div>
  );
};
