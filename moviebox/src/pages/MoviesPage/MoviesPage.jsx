import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";


export const MoviesPage = () => {
  const loaderData = useLoaderData();
  const heroTitles = loaderData.popular.slice(0, 5);
  const popularTitles = loaderData.popular;
  const inTheaters = loaderData.theaters;
  const topRated = loaderData.top;
  console.log(loaderData);

  return (
    <MainLayout>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="Popular" titlesArr={popularTitles} />
      <TitlesSection title="In theaters" titlesArr={inTheaters} />
      <TitlesSection title="Top 25" titlesArr={topRated} />
    </MainLayout>
  )
};
