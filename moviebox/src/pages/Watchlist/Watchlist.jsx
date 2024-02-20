
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Poster } from "../../components/Poster/Poster";
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
    
      <CenteredContent>
        <div className="HEADER flex flex-col items-start">
          <h2 className="my-10">Your Watchlist</h2>
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
        <div className="TITLE-LIST flex flex-wrap gap-4 my-12">
          {isFiltered
            ? watchlistFilter.map((title) => {
                return <Poster key={title.id} titleData={title} />;
              })
            : ctx.watchlist.map((title) => {
                return <Poster key={title.id} titleData={title} />;
              })}
        </div>
      </CenteredContent>
   
  );
};
