import { CenteredContent } from "../CenteredContent/CenteredContent";
import { TitleSwiper } from "../TitlesSwiper/TitlesSwiper";
import styles from "./TitlesSection.module.css";
export const TitlesSection = (props) => {
  return (
    <CenteredContent>
      <div className={styles.titles}>
        <h2>{props.title}</h2>
        <TitleSwiper titlesArr={props.titlesArr} media={props.media} />
      </div>
    </CenteredContent>
  );
};
