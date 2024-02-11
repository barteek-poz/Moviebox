export const filterWatchlist = (watchlist, media) => {
    let filteredWatchlist;
  if (media === "tv" || media === "movie") {
     filteredWatchlist = watchlist.filter((title) => {
      return title.media === media;
    });
  } else {
    filteredWatchlist = watchlist
  }

  return filteredWatchlist
};
