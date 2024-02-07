import { useState, createContext, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = (props) => {
  const [watchlist, setWatchlist] = useState(
    localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (title, media) => {
    title.media = media;
    const checkTitle = watchlist.every((item) => {
      return item.id !== title.id;
    });
    if (checkTitle) {
      setWatchlist([...watchlist, title]);
    } else {
      return;
    }
  };

  const isOnWatchlist = (title) => {
    watchlist.some((element) => {
      if (element.id === title.id) {
        return true;
      }
      return false;
    });
  };

  // const removeFromWatchlist = (title) => {
  //   const updateWatchlist = [...watchlist];
  //   updateWatchlist.forEach((item, index) => {
  //     if (item.id === title.id) {
  //       updateWatchlist.splice(index, 1);
  //     }
  //   });
  //   setWatchlist(updateWatchlist);
  // };
  const removeFromWatchlist = (title) => {
    const updateWatchlist = watchlist.filter((element) => {
      return element.id !== title.id;
    });
    setWatchlist(updateWatchlist);
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        setWatchlist,
        addToWatchlist,
        removeFromWatchlist,
        isOnWatchlist
      }}>
      {props.children}
    </WatchlistContext.Provider>
  );
};
