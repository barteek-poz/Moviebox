import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitlesSection } from "../../components/TitlesSection/TitlesSection";


export const Streaming = () => {
  const loaderData = useLoaderData();
 console.log(loaderData)
  return (
    <MainLayout>
    
      
      
    </MainLayout>
  )
};
