import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";

export const TVPage = () => {
  const loaderData = useLoaderData();
  const heroTitles = loaderData.popularTV.slice(0, 5);
  console.log(loaderData);

  return (
    <MainLayout>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="New episodes" titlesArr={loaderData.newEpisodes} />
      <TitlesSection title="Popular" titlesArr={loaderData.popularTV} />
      <TitlesSection title="Top 50" titlesArr={loaderData.topTV} />
    </MainLayout>
  );
};
