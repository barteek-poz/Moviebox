import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";

export const Streaming = () => {
  const loaderData = useLoaderData();
  const heroTitles = [
    ...loaderData.movieList.slice(0, 5),
    ...loaderData.tvList.slice(0, 5),
  ];

  return (
    <MainLayout>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="Popular movies" titlesArr={loaderData.movieList} />
      <TitlesSection title="Popular TV shows" titlesArr={loaderData.tvList} />
    </MainLayout>
  );
};
