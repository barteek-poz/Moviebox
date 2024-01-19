import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import POSTER from "../../assets/godfather.jpeg";
import ADD_ICON from "../../assets/add.svg";
import STAR_ICON from "../../assets/star.svg";
import styles from "../TitlePage/TitlePage.module.css";
import { useLoaderData } from "react-router-dom";

export const TitlePage = () => {
  const loaderData = useLoaderData()
  console.log(loaderData)
  return (
    <MainLayout>
      <CenteredContent>
        <div className={styles.titleBox}>
          <div
            className={styles.posterBox}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${loaderData.details.poster_path})` }}></div>
          <div className={styles.titleInfo}>
            <div className={styles.titleRow}>
              <h1>The dark knight</h1>
              <button className={styles.btnAdd}>
                Add to watchlist <img src={ADD_ICON} alt="add-icon" />
              </button>
            </div>
            <div className={styles.row}>
              <p>2008</p>
              <p>Movie</p>
              <p>176m</p>
            </div>
            <div className={styles.rowRating}>
              <img src={STAR_ICON} alt="star-icon" />
              <p className={styles.rating}>9.2</p>
            </div>
            <div className={styles.row}>
              <p className={styles.genre}>Action</p>
              <p className={styles.genre}>Drama</p>
              <p className={styles.genre}>Crime</p>
            </div>
            <div className={styles.rowCast}>
              <span>Director:</span> <p>Chritopher Nolan</p>
            </div>
            <div className={styles.rowCast}>
              <span>Writers:</span>{" "}
              <p>Jonathan Nolan, Christopher Nolan, David S. Goyer</p>
            </div>
            <div className={styles.rowCast}>
              <span>Stars:</span>{" "}
              <p>Christian Bale, Heath Ledger, Gary Oldman</p>
            </div>
            <div className={styles.rowCast}>
              <span>Plot:</span>{" "}
              <p>
                When the menace known as the Joker wreaks havoc and chaos on the
                people of Gotham, Batman must accept one of the greatest
                psychological and physical tests of his ability to fight
                injustice.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Where to watch?</h2>
          <div className={styles.streaming}></div>
        </div>
      </CenteredContent>
    </MainLayout>
  );
};
