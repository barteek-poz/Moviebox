import { useEffect, useState } from "react";
export const useFindTitle = (media, page) => {
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
      if (media && page > 0) {
        const url = `https://api.themoviedb.org/3/${media}/popular?language=en-US&page=${page}`;
        const availableTitles = [];
        const resTitles = await fetch(url, options);
        const titles = await resTitles.json();

        const titleProviders = await Promise.all(
          titles.results.map((title) => {
            return fetch(
              `https://api.themoviedb.org/3/${media}/${title.id}/watch/providers`,
              options
            ).then((res) => res.json());
          })
        );

        titleProviders.forEach((title) => {
          if (title.results.PL) {
            availableTitles.push(title.id);
          }
        });

        const titleList = titles.results.filter((title) => {
          return availableTitles.includes(title.id);
        });

        const finalTitle =
          titleList[Math.floor(Math.random() * titleList.length)];

        setData(finalTitle);
      }
    };
    dataFetch();
  }, [media, page]);

  return data;
};
