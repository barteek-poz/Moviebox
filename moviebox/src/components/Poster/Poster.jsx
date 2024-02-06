import styles from "../Poster/Poster.module.css";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import { Link} from "react-router-dom";
import { useState } from "react";
import { ratingFormat } from "../../helpers/ratingFormat";
import { overviewFormat } from "../../helpers/overviewFormat";
import NO_POSTER from "../../assets/no_poster.png";
import { addToWatchlist } from "../../helpers/addToWatchlist";
export const Poster = ({ titleData, media }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: titleData.poster_path
          ? `url(https://image.tmdb.org/t/p/original/${titleData.poster_path})`
          : `url(${NO_POSTER})`,
      }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}>
      {showInfo && (
        <div className={styles.infoBox}>
          <Link to={`/${titleData.media_type || media}/${titleData.id}`}>
            <div className={styles.firstRow}>
              <span>{titleData.title || titleData.name}</span>
            </div>
            <div className={styles.secondRow}>
              <img src={STAR_ICON} alt="star-icon" />
              <p>{ratingFormat(titleData.vote_average)}</p>
            </div>
            <p className={styles.overview}>{overviewFormat(titleData.overview)}</p>
          </Link>

          <button className={styles.addBtn} onClick={(e)=> {
            e.stopPropagation()
            addToWatchlist(titleData)
          }}>
            Add to watchlist <img src={ADD_ICON} alt="add-icon" />
          </button>
        </div>
      )}
    </div>
  );
};
