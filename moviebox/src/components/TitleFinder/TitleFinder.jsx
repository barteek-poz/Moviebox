import styles from "../TitleFinder/TitleFinder.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Form } from "react-router-dom";
import { PosterBig } from "../PosterBig/PosterBig";
import ARROW_ICON from '../../assets/arrow.svg'

export const TitleFinder = () => {
  return (
    <CenteredContent>
      <h2 className={styles.finderHeader}>Don`t know what to watch? Let us help you!</h2>
      <Form className={styles.form}>
        <select className={styles.select}>
          <option selected disabled value="default">
            Movie or TV Show?
          </option>
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
        </select>
        <select className={styles.select}>
          <option selected disabled value="default">
            Choose your streaming company
          </option>
          <option value="apple">Apple</option>
          <option value="amazon">Amazon</option>
          <option value="disney">Disney</option>
          <option value="hbo">HBO</option>
          <option value="netflix">Netflix</option>
        </select>
        <button className={styles.btn}>Search</button>
      </Form>
      <div className={styles.finder}>
      <PosterBig />
      <button className={styles.icon}>
        <img src={ARROW_ICON} alt="arrow" />
      </button>
      </div>
    </CenteredContent>
  );
};
