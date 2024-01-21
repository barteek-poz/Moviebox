export const streamingLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // streaming movies
  const availableMovies = [];
  const resMovies = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=2",
      options
    ),
  ]);

  const dataMovies = await Promise.all(
    resMovies.map((item) => {
      return item.json();
    })
  );
  const streamMovies = [...dataMovies[0].results, ...dataMovies[1].results];

  const movieProviders = await Promise.all(
    streamMovies.map((movie) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`,
        options
      ).then((res) => res.json());
    })
  );

  movieProviders.forEach((movie) => {
    if (movie.results.PL) {
      
      availableMovies.push(movie.id);
    }
  });

  const movieList = streamMovies.filter((movie) => {
    return availableMovies.includes(movie.id);
  });

  // streaming TV
  const availableTV = [];
  const resTV = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=2",
      options
    ),
  ]);

  const dataTV = await Promise.all(
    resTV.map((item) => {
      return item.json();
    })
  );
  const streamTV = [...dataTV[0].results, ...dataTV[1].results];

  const tvProviders = await Promise.all(
    streamTV.map((tv) => {
      return fetch(
        `https://api.themoviedb.org/3/tv/${tv.id}/watch/providers`,
        options
      ).then((res) => res.json());
    })
  );

  tvProviders.forEach((tv) => {
    if (tv.results.PL) {
      availableTV.push(tv.id);
    }
  });

  const tvList = streamTV.filter((tv) => {
    return availableTV.includes(tv.id);
  });

  return { movieList, tvList };
};

// naprawic pobieranie danych z serwera i wyswietlanie tylko tytulow z konretnych streamingow
