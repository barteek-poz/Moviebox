export const streamingLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // popular movies
  const popularMovies = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1",
      options
    ).then((res) => res.json()),
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=2",
      options
    ).then((res) => res.json()),
  ]);

  return { popularMovies };
};

// naprawic pobieranie danych z serwera i wyswietlanie tylko tytulow z konretnych streamingow
