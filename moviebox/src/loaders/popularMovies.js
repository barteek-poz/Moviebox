const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY
        ,
    },
  };
  
  export const popularMovies = () => {
    return fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options)
  };
  