export const moviesLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // popular movies
  const popular1 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  ).then((res) => res.json());
  const popular2 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
    options
  ).then((res) => res.json());
  const popular = [...popular1.results, ...popular2.results].slice(0,25);

  //movies in theaters
  const theater1 = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  ).then((res) => res.json());
  const theater2 = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  ).then((res) => res.json());
  const theaters = [...theater1.results, ...theater2.results].slice(0,25);

  //top25
  const top1 = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  ).then((res) => res.json());
  const top2 = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
    options
  ).then((res) => res.json());
  const top = [...top1.results, ...top2.results].slice(0,25);

  return { popular, theaters, top };
};
