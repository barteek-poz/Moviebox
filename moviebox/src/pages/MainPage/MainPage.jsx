import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";

export const MainPage = () => {
    const loaderData = useLoaderData()
    const heroTitles = loaderData.results.slice(0, 5);
    const popularTitles = loaderData.results.slice(0,35)

  return (
    <MainLayout>
        <Hero titlesArr={heroTitles}/>
      <TitlesSection title="Popular" titlesArr={popularTitles} />
    </MainLayout>
  );
};
