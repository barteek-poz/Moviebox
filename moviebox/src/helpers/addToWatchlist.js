export const addToWatchlist = (titleData) => {
  fetch("http://localhost:3000/titles", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(titleData),
    Headers:{
        "Content-Type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json());
};
