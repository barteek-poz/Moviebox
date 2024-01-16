export const mainPageLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // popular titles

  const resPopular = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=en-US&page=2",
      options
    ),
  ]);

  const dataPopular = await Promise.all(
    resPopular.map((item) => {
      return item.json();
    })
  );
  const popularMain = [...dataPopular[0].results, ...dataPopular[1].results].slice(0,25)

  //movies in theaters
  const resTheaters = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    ),
  ]);

  const dataTheaters = await Promise.all(
    resTheaters.map((item) => {
      return item.json();
    })
  );
  const theatersMain = [...dataTheaters[0].results, ...dataTheaters[1].results].slice(0,25);

  return { popularMain, theatersMain };
};
