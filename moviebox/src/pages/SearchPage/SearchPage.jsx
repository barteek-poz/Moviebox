import { useLoaderData, useParams } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Poster } from "../../components/Poster/Poster";
import styles from "../SearchPage/SearchPage.module.css";
export const SearchPage = () => {
  const loaderData = useLoaderData();
  const params = useParams();
console.log(loaderData)
  return (
  
      <CenteredContent>
        <h2>Search results for `{params.param}`</h2>
        <div className={styles.searchList}>
          {loaderData.length ?
            loaderData.map((title) => {
              return <Poster key={title.id} titleData={title} />;
            }): <h3>Sorry, we haven`t found any results matching `{params.param}`</h3>}
        </div>
      </CenteredContent>
   
  );
};
