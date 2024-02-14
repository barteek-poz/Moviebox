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
  console.log(isOnWatchlist);
  return (
    <button
      onClick={watchlistHandler}
      className="text-xl p-2 font-medium border-none bg-yellow text-black  rounded-lg transition duration-300">
      {isOnWatchlist ? (
        <p className="text-black">Remove from watchlist</p>
      ) : (
        <p className="text-black">
          Add to watchlist{" "}
          <img src={ADD_ICON} alt="add-icon" className="w-4 h-4" />
        </p>
      )}
    </button>
  );
};
