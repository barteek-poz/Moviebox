import { MainLayout } from "../../components/MainLayout/MainLayout";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Poster } from "../../components/Poster/Poster";
import styles from "../Watchlist/Watchlist.module.css";
import { useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";

export const Watchlist = () => {
const ctx = useContext(WatchlistContext)
console.log(ctx.watchlist)
  return (
    <MainLayout>
      <CenteredContent>
        <div className={styles.header}>
          <h2>Your Watchlist</h2>
          <select name="watch_media" id="watch_media">
            <option selected disabled value="default">
              Movie or TV Show?
            </option>
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
          </select>
        </div>
        <div className={styles.titleList}>
          {ctx.watchlist.map((title) => {
            return <Poster key={title.id} titleData={title} />;
          })}
        </div>
      </CenteredContent>
    </MainLayout>
  );
};
