import { useLoaderData, useParams } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Poster } from "../../components/Poster/Poster";

export const SearchPage = () => {
  const loaderData = useLoaderData();
  const params = useParams();
console.log(loaderData)
  return (
      <CenteredContent>
        <h2 className="my-10">Search results for `{params.param}`</h2>
        <div className="flex flex-wrap gap-2.5 mb-8">
          {loaderData.length ?
            loaderData.map((title) => {
              return <Poster key={title.id} titleData={title} />;
            }): <h3>Sorry, we haven`t found any results matching `{params.param}`</h3>}
        </div>
      </CenteredContent>
   
  );
};
