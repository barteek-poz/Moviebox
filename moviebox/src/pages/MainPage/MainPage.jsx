import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const [inTheaters, setInTheaters] = useState([]);
  const loaderData = useLoaderData();
  const heroTitles = loaderData.results.slice(0, 5);
  const popularTitles = loaderData.results.slice(0, 35);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_KEY,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setInTheaters(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <MainLayout>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="Popular" titlesArr={popularTitles} />
      <TitlesSection title="In theaters" titlesArr={inTheaters} />
    </MainLayout>
  );
};