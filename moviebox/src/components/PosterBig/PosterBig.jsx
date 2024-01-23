import { Link } from "react-router-dom";
import { ratingFormat } from "../../helpers/ratingFormat";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import styles from "../PosterBig/PosterBig.module.css";
import { overviewFormat } from "../../helpers/overviewFormat";
import { genreType } from "../../helpers/genreType";

export const PosterBig = ({ title, media }) => {
  const genres = genreType(title.genre_ids);

  return (
    <div className={styles.posterBox}>
      <Link
        to={`${media}/${title.id}`}
        className={styles.poster}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${title.poster_path})`,
        }}
      />
      <div className={styles.posterInfo}>
        <button className={styles.addBtn}>
          <img src={ADD_ICON} alt="add-icon" />
        </button>
        <Link to={`${title.media_type}/${title.id}`}>
          <span>{title.title || title.name}</span>
        </Link>

        <div>
          {genres.map((genre) => {
            return (
              <p key={genre.id} className={styles.genre}>
                {genre.name}
              </p>
            );
          })}
        </div>
        <div>
          <img src={STAR_ICON} alt="star-icon" />
          <p className={styles.points}>{ratingFormat(title.vote_average)}</p>
        </div>
        <p>{overviewFormat(title.overview)}</p>
      </div>
    </div>
  );
};
