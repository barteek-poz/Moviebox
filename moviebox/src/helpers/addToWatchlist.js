export const addToWatchlist = (titleData) => {
console.log(titleData)
  fetch("http://localhost:3000/titles", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(titleData),
    Headers:{
        "Content-Type": "application/json; charset=UTF-8"
    }
  });
};
