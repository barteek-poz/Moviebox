import { useLoaderData } from "react-router-dom";
import { TitlesSection } from "../TitlesSection/TitlesSection";

export const InTheatersSection = () => {
    const loaderData = useLoaderData()
    const inTheaters = loaderData.slice(0,35)
  return <TitlesSection title="In theaters" titlesArr={inTheaters}/>;
};
