const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY
      ,
  },
};

export const popularTitles = () => {
  return fetch("https://api.themoviedb.org/3/trending/all/week?language=en-EN",options)
};
