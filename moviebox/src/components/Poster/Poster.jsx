import styles from "../Poster/Poster.module.css";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import { Link, Form } from "react-router-dom";
import { useContext, useState } from "react";
import { ratingFormat } from "../../helpers/ratingFormat";
import { overviewFormat } from "../../helpers/overviewFormat";
import { addToWatchlist } from "../../helpers/addToWatchlist";
import NO_POSTER from "../../assets/no_poster.png";
import { IsOnWatchlistContext } from "../../context/IsOnWatchlistContext";

export const Poster = ({ titleData, media }) => {
  const [showInfo, setShowInfo] = useState(false);
  const ctx = useContext(IsOnWatchlistContext);
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
            <p className={styles.overview}>
              {overviewFormat(titleData.overview)}
            </p>
          </Link>
          <Form
            onSubmit={(e) => {
              
              ctx.addToWatchlist(titleData);
            }}>
            <button className={styles.addBtn}>
              Add to watchlist <img src={ADD_ICON} alt="add-icon" />
            </button>
          </Form>
        </div>
      )}
    </div>
  );
};
