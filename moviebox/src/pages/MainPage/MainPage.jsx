import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";

export const MainPage = () => {
  const loaderData = useLoaderData();
  const heroTitles = loaderData.popularMain.slice(0, 5);

  return (
    <>
      <Hero titlesArr={heroTitles} />
      <TitlesSection title="Popular" titlesArr={loaderData.popularMain} />
      <TitlesSection
        title="In theaters"
        titlesArr={loaderData.theatersMain}
        media={"movie"}
      />
    </>
  );
};
