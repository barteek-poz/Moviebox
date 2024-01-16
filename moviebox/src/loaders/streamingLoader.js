export const streamingLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // popular movies

  const res = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=2",
      options
    ),
  ]);

  const data = await Promise.all(
    res.map((item) => {
      return item.json();
    })
  );
  const movies = [...data[0].results, ...data[1].results]

  return movies
};

// naprawic pobieranie danych z serwera i wyswietlanie tylko tytulow z konretnych streamingow
