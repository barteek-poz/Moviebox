import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";

export const TVPage = () => {
  const loaderData = useLoaderData();
  const heroTitles = loaderData.popularTV.slice(0, 5);
  console.log(loaderData);

  return (
    <>
      <Hero titlesArr={heroTitles} />
      <TitlesSection
        title="New episodes"
        titlesArr={loaderData.newEpisodes}
        media="tv"
      />
      <TitlesSection title="Popular" titlesArr={loaderData.popularTV} />
      <TitlesSection title="Top 50" titlesArr={loaderData.topTV} media="tv" />
    </>
  );
};
