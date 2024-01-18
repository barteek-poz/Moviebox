import styles from "../Poster/Poster.module.css";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ratingFormat } from "../../helpers/ratingFormat";
import { overviewFormat } from "../../helpers/overviewFormat";
export const Poster = ({ title,name, vote_average, overview, poster }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <Link
      className={styles.background}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
      }}
      onMouseEnter={()=> setShowInfo(true)}
      onMouseLeave={()=> setShowInfo(false)}>
     {showInfo && <div className={styles.infoBox}>
        <div className={styles.firstRow}>
          <span>{title || name}</span>
          <button>
            <img src={ADD_ICON} alt="add-icon" />
          </button>
        </div>
        <div className={styles.secondRow}>
          <img src={STAR_ICON} alt="star-icon" />
          <p>{ratingFormat(vote_average)}</p>
        </div>
        <p>{overviewFormat(overview)}</p>
      </div>}
    </Link>
  );
};
