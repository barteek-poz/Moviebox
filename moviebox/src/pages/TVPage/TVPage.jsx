import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";

export const TVPage = () => {
  const loaderData = useLoaderData();
  const heroTitles = loaderData.popularTV.slice(0, 5);
  const popularTitles = loaderData.popularTV;
  const newEpisodes = loaderData.newEpisodes;
  const topRated = loaderData.top;
  console.log(loaderData);

  return (
    <MainLayout>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="New episodes" titlesArr={newEpisodes} />
      <TitlesSection title="Popular" titlesArr={popularTitles} />
      <TitlesSection title="Top 50" titlesArr={topRated} />
    </MainLayout>
  );
};
