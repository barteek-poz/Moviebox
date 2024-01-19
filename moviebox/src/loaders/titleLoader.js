export const titleLoader = async (params) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  if (params.media === "movie") {
    const titlesFetch = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${params.titleId}language=en-US`,
        options
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${params.titleId}/credits?language=en-US`,
        options
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${params.titleId}/watch/providers`,
        options
      ),
    ]);
    const titleData = await Promise.all(
      titlesFetch.map((title) => {
        return title.json();
      })
    );
    return {
      details: titleData[0],
      cast: titleData[1],
      streaming: titleData[2].results.PL,
    };
  } else if (params.media === "tv") {
    const titlesFetch = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/tv/${params.titleId}?language=en-US`,
        options
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/${params.titleId}/credits?language=en-US`,
        options
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/${params.titleId}/watch/providers`,
        options
      ),
    ]);
    const titleData = await Promise.all(
      titlesFetch.map((title) => {
        return title.json();
      })
    );
    return {
      details: titleData[0],
      cast: titleData[1],
      streaming: titleData[2].results.PL,
    };
  }
};
