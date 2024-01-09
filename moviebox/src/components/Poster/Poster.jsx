import styles from "../Poster/Poster.module.css";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Poster = ({ title, vote_average, overview, poster }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <Link
      className={styles.background}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
      }}>
     {showInfo && <div className={styles.infoBox}>
        <div className={styles.firstRow}>
          <span>{title}</span>
          <button>
            <img src={ADD_ICON} alt="add-icon" />
          </button>
        </div>
        <div className={styles.secondRow}>
          <img src={STAR_ICON} alt="star-icon" />
          <p>{vote_average}</p>
        </div>
        <p>{overview}</p>
      </div>}
    </Link>
  );
};
