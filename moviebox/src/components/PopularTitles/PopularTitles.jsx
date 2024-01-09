import { CenteredContent } from "../CenteredContent/CenteredContent";
import { TitleSwiper } from "../TitlesSwiper/TitlesSwiper";
import styles from "../PopularTitles/PopularTitles.module.css";
export const PopularTitles = () => {
  return (
    <CenteredContent>
      <div className={styles.popularTitles}>
        <h2>Popular</h2>
        <TitleSwiper />
      </div>
    </CenteredContent>
  );
};
