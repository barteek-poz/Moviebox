import { useContext, useState } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
import styles from "../AddToWatchlistBtn/AddToWatchlistBtn.module.css";
import ADD_ICON from "../../assets/add.svg";
export const AddToWatchlistBtn = ({ titleData, media}) => {
  const ctx = useContext(WatchlistContext);
  const [isOnWatchlist, setIsOnWatchlist] = useState(ctx.watchlist.some(element => {
    if(element.id === titleData.details.id) {
      return true
    }
    return false
  }));
  const watchlistHandler = () => {
    if (isOnWatchlist) {
      ctx.removeFromWatchlist(titleData.details);
      setIsOnWatchlist(false);
    } else {
      ctx.addToWatchlist(titleData.details, media);
      setIsOnWatchlist(true);
    }
  };
  console.log(isOnWatchlist)
  return (
    <button onClick={watchlistHandler} className={styles.btnAdd}>
      {isOnWatchlist ? (
        "Remove from watchlist"
      ) : (
        <p>
          Add to watchlist <img src={ADD_ICON} alt="add-icon" />
        </p>
      )}
    </button>
  );
};
