import { useLoaderData, useParams } from "react-router-dom";
import { TitleDetails } from "../../components/TitleDetails/TitleDetails";
import { useLayout } from "../../hooks/useLayout";
import NO_POSTER from "../../assets/no_poster.png";

export const TitlePage = () => {
  const loaderData = useLoaderData();
  const params = useParams();
  const { screenWidth } = useLayout();
  console.log(loaderData);
  const posterHandler = (movieData) => {
    if (movieData.details.poster_path && screenWidth >= 1024) {
      return `url(https://image.tmdb.org/t/p/original/${loaderData.details.poster_path})`;
    } else if (movieData.details.poster_path && screenWidth < 1024) {
      return `url(https://image.tmdb.org/t/p/original/${loaderData.details.backdrop_path})`;
    } else return `url(${NO_POSTER})`;
  };
  return (
    <div className="CENTER w-full max-w-1500 items-start mx-auto mobile:px-0 xl:px-10 ">
      <div className="TITLE-BOX flex mobile:flex-col lg:flex-row xl:items-center mobile:gap-1 xl:gap-12 lg:p-4 xl:mt-12 mb-16">
        <div
          className="POSTER-BOX mobile:w-full lg:min-w-500 mobile:h-400 sm:h-500 lg:h-700 bg-cover bg-center bg-no-repeat lg:rounded-lg"
          style={{
            backgroundImage: posterHandler(loaderData),
          }}></div>

        <TitleDetails loaderData={loaderData} params={params} />
      </div>
    </div>
  );
};
