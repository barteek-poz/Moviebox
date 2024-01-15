export const mainPageLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // popular titles
  const popular1 = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?language=en-US&page=1",
    options
  ).then((res) => res.json());
  const popular2 = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?language=en-US&page=2",
    options
  ).then((res) => res.json());
  const popularMain = [...popular1.results, ...popular2.results].slice(0, 25);
  //movies in theaters
  const theater1 = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  ).then((res) => res.json());
  const theater2 = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  ).then((res) => res.json());
  const theatersMain = [...theater1.results, ...theater2.results].slice(0, 25);

  return { popularMain, theatersMain };
};
