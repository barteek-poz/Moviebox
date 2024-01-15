export const tvShowsLoader = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_KEY,
      },
    };
    // new episodes
    const newEpisodes1 = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&timezone=cet",
      options
    ).then((res) => res.json());
    const newEpisodes2 = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=2&timezone=cet",
      options
    ).then((res) => res.json());
    const newEpisodes = [...newEpisodes1.results, ...newEpisodes2.results].slice(0,25);
  
    //popular tv shows
    const popularTV1 = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=1",
      options
    ).then((res) => res.json());
    const popularTV2 = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=2",
      options
    ).then((res) => res.json());
    const popularTV = [...popularTV1.results, ...popularTV2.results].slice(0,25);
  
    //top25
    const top1 = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    ).then((res) => res.json());
    const top2 = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=2",
      options
    ).then((res) => res.json());
    const top = [...top1.results, ...top2.results].slice(0,50);
  
    return { newEpisodes, popularTV, top };
  };
  