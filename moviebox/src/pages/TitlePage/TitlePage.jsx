import { useLoaderData, useParams } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { TitleDetails } from "../../components/TitleDetails/TitleDetails";
import styles from "../TitlePage/TitlePage.module.css";
import NO_POSTER from "../../assets/no_poster.png";

export const TitlePage = () => {
  const loaderData = useLoaderData();
  const params = useParams();
  
  return (
    <MainLayout>
      <CenteredContent>
        <div className={styles.titleBox}>
          <div
            className={styles.posterBox}
            style={{
              backgroundImage: loaderData.details.poster_path
                ? `url(https://image.tmdb.org/t/p/original/${loaderData.details.poster_path})`
                : `url(${NO_POSTER})`,
            }}></div>

          <TitleDetails loaderData={loaderData} params={params}/>
        </div>
      </CenteredContent>
    </MainLayout>
  );
};
