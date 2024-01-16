export const moviesLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // popular movies
  const resPopular = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=2",
      options
    ),
  ]);

  const dataPopular = await Promise.all(
    resPopular.map((item) => {
      return item.json();
    })
  );
  const popularMovies = [...dataPopular[0].results, ...dataPopular[1].results].slice(0,25);

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
  const theaters = [...dataTheaters[0].results, ...dataTheaters[1].results].slice(0,25);

  //top25
  const resTop = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
      options
    ),
  ]);

  const dataTop = await Promise.all(
    resTop.map((item) => {
      return item.json();
    })
  );
  const topMovies = [...dataTop[0].results, ...dataTop[1].results].slice(0,50);

  return { popularMovies, theaters, topMovies };
};
