import { useContext, useState } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
import ADD_ICON from "../../assets/add.svg";
export const AddToWatchlistBtn = ({ titleData, media }) => {
  const ctx = useContext(WatchlistContext);
  const [isOnWatchlist, setIsOnWatchlist] = useState(
    ctx.watchlist.some((element) => {
      if (element.id === titleData.details.id) {
        return true;
      }
      return false;
    })
  );
  const watchlistHandler = () => {
    if (isOnWatchlist) {
      ctx.removeFromWatchlist(titleData.details);
      setIsOnWatchlist(false);
    } else {
      ctx.addToWatchlist(titleData.details, media);
      setIsOnWatchlist(true);
    }
  };
 
  return (
    <button
      onClick={watchlistHandler}
      className="flex items-center justify-center text-xl p-2 min-w-48 font-medium border-none hover:bg-white">
      {isOnWatchlist ? (
        <p>Remove from watchlist</p>
      ) : (
        <p>
          Add to watchlist
          <img src={ADD_ICON} alt="add-icon" className="inline w-4 h-4 mb-1" />
        </p>
      )}
    </button>
  );
};
