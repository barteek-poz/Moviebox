import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";
import { useEffect, useState } from "react";

// naprawic fetch filmow zeby wyswietlalo 40 a nie 20 tytulow i z tego wyciac 25
export const MoviesPage = () => {
  const [inTheaters, setInTheaters] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const loaderData = useLoaderData();
  const heroTitles = loaderData.results.slice(0, 5);
  const popularTitles = loaderData.results.slice(0, 35);
  
  //in theaters fetch
  useEffect(() => {
    const pages = [1,2]
    const movies = []
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_KEY,
      },
    };
    pages.map((page) => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setInTheaters(response.results));
    });
    
  }, []);

  //top25 fetch
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_KEY,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setTopRated(response.results));
  }, []);
  console.log(inTheaters);
  return (
    <MainLayout>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="Popular" titlesArr={popularTitles} />
      <TitlesSection title="In theaters" titlesArr={inTheaters} />
      <TitlesSection title="Top 25" titlesArr={topRated} />
    </MainLayout>
  );
};
