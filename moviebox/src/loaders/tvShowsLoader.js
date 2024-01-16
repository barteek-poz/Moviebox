export const tvShowsLoader = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  // new episodes
  const resEpisodes = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=2",
      options
    ),
  ]);

  const dataEpisodes = await Promise.all(
    resEpisodes.map((item) => {
      return item.json();
    })
  );
  const newEpisodes = [
    ...dataEpisodes[0].results,
    ...dataEpisodes[1].results,
  ].slice(0, 25);

  //popular tv shows
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
  const popularTV = [...dataTV[0].results, ...dataTV[1].results].slice(0, 25);

  //top25
  const resTop = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=2",
      options
    ),
  ]);

  const dataTop = await Promise.all(
    resTop.map((item) => {
      return item.json();
    })
  );
  const topTV = [...dataTop[0].results, ...dataTop[1].results].slice(0, 25);

  return { newEpisodes, popularTV, topTV };
};
