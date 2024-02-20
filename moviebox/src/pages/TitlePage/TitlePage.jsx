import { useLoaderData, useParams } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { TitleDetails } from "../../components/TitleDetails/TitleDetails";
import NO_POSTER from "../../assets/no_poster.png";

export const TitlePage = () => {
  const loaderData = useLoaderData();
  const params = useParams();
  
  return (
   
      <CenteredContent>
        <div className="TITLE-BOX flex items-center gap-12 mt-12 mb-16">
          <div
            className="POSTER-BOX min-w-500 h-700 bg-cover bg-center bg-no-repeat rounded-lg"
            style={{
              backgroundImage: loaderData.details.poster_path
                ? `url(https://image.tmdb.org/t/p/original/${loaderData.details.poster_path})`
                : `url(${NO_POSTER})`,
            }}></div>

          <TitleDetails loaderData={loaderData} params={params}/>
        </div>
      </CenteredContent>
  
  );
};
