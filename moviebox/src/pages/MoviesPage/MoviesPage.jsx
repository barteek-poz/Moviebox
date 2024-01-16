import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";


export const MoviesPage = () => {
  const loaderData = useLoaderData();
  const heroTitles = loaderData.popularMovies.slice(0, 5);
  return (
    <MainLayout>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="Popular" titlesArr={loaderData.popularMovies} />
      <TitlesSection title="In theaters" titlesArr={loaderData.theaters} />
      <TitlesSection title="Top 50" titlesArr={loaderData.topMovies} />
    </MainLayout>
  )
};
