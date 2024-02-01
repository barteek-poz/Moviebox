import { useLoaderData } from "react-router-dom";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Poster } from "../../components/Poster/Poster";
import styles from "../Watchlist/Watchlist.module.css"

export const Watchlist = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <MainLayout>
      <CenteredContent>
        <div className={styles.header}>
          <h2>Your Watchlist</h2>
          <select name="watch_media" id="watch_media">
            <option selected disabled value="default">
              Movie or TV Show?
            </option>
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
          </select>
        </div>
        <div className={styles.titleList}>
        {loaderData.map(title => {
          return  <Poster key={title.id}
          titleData={title} 
        />
        })}
        </div>
        
        
      </CenteredContent>
    </MainLayout>
  );
};
