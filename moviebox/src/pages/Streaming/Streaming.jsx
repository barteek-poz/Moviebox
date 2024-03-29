import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";
import { TitleFinder } from "../../components/TitleFinder/TitleFinder";

export const Streaming = () => {
  const loaderData = useLoaderData();
  const heroTitles = [
    ...loaderData.movieList.slice(0, 5),
    ...loaderData.tvList.slice(0, 5),
  ];

  return (
    <>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="Popular movies" titlesArr={loaderData.movieList} />
      <TitlesSection title="Popular TV shows" titlesArr={loaderData.tvList} />
      <TitleFinder />
    </>
  );
};
