
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
  console.log(ctx.watchlist);
  return (
    
      <CenteredContent>
        <div className="HEADER flex flex-col items-start">
          <h2 className="my-10">Watchlist</h2>
           {ctx.watchlist.length !== 0 && <select
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
          </select>}
        </div>
       {ctx.watchlist.length !== 0 ? <div className="TITLE-LIST flex flex-wrap gap-4 my-12 min-h-500">
          {isFiltered
            ? watchlistFilter.map((title) => {
                return <Poster key={title.id} titleData={title} />;
              })
            : ctx.watchlist.map((title) => {
                return <Poster key={title.id} titleData={title} />;
              })}
        </div> : <h3 className="text-3xl flex flex-col gap-5 text-center pt-16 h-500">Your watchlist is empty <span>Add your favourite titles to save them for later!</span> </h3>}
      </CenteredContent>
   
  );
};
