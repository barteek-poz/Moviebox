import { createContext} from "react";
const watchlistData = async () => {
  const data = await fetch("http://localhost:3000/titles");
  const res = await data.json();
  return res;
};
const movieList = await watchlistData();

export const IsOnWatchlistContext = createContext(movieList);

const addToWatchlist = (titleData) => {
  fetch("http://localhost:3000/titles", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(titleData),
    Headers:{
      "Content-Type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json());
};

export const IsOnWatchlistProvider = (props) => {
  
  return (
    <IsOnWatchlistContext.Provider
      value={{movieList, addToWatchlist}}>
        {props.children}
      </IsOnWatchlistContext.Provider>
  );
};
