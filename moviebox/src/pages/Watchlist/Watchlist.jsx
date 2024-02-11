import { MainLayout } from "../../components/MainLayout/MainLayout";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Poster } from "../../components/Poster/Poster";
import styles from "../Watchlist/Watchlist.module.css";
import { useContext, useState } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
import { filterWatchlist } from "../../helpers/filterWatchlist";

export const Watchlist = () => {
  const [filter, setFilter] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const ctx = useContext(WatchlistContext);
  const watchlistFilter = filterWatchlist(ctx.watchlist, filter);
  console.log(watchlistFilter);
  return (
    <MainLayout>
      <CenteredContent>
        <div className={styles.header}>
          <h2>Your Watchlist</h2>
          <select
            name="watch_media"
            id="watch_media"
            onChange={(e) => {
              setFilter(e.target.value);
              setIsFiltered(true);
            }}>
            <option selected disabled value="default">
              Movie or TV Show?
            </option>
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
            <option value="both">Movie & TV Show</option>
          </select>
        </div>
        <div className={styles.titleList}>
          {isFiltered
            ? watchlistFilter.map((title) => {
                return <Poster key={title.id} titleData={title} />;
              })
            : ctx.watchlist.map((title) => {
                return <Poster key={title.id} titleData={title} />;
              })}
        </div>
      </CenteredContent>
    </MainLayout>
  );
};
