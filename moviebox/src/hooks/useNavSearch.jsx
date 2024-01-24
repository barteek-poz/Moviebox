import { useEffect, useState } from "react";
export const useNavSearch = (searchTitle) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_API_KEY,
        },
      };

      const url = `https://api.themoviedb.org/3/search/multi?query=${searchTitle}&include_adult=false&language=en-US&page=1`;
      const resTitles = await fetch(url, options);
      const titlesData = await resTitles.json();
      const titlesFiltered = titlesData.results.filter((title) => {
        if (title.media_type === "movie" || title.media_type === "tv") {
          return title;
        }
      });
      console.log(titlesData);
      const titlesSort = titlesFiltered.sort((titleA, titleB) => {
        return titleB.popularity - titleA.popularity;
      });
      const titlesResponse = titlesSort.slice(0, 4);

      setData(titlesResponse);
    };
    dataFetch();
  }, [searchTitle]);

  return data;
};
