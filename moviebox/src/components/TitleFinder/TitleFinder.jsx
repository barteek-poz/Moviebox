import styles from "../TitleFinder/TitleFinder.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Form } from "react-router-dom";
import { PosterBig } from "../PosterBig/PosterBig";
import ARROW_ICON from "../../assets/arrow.svg";
import { useState } from "react";
import { useFindTitle } from "../../hooks/useFindTitle";

export const TitleFinder = () => {
  const [titleFound, setTitleFound] = useState();
  const [titlePage, setTitlePage] = useState(1);
  const data = useFindTitle("movie", titlePage);
  const titleFindHandler = () => {
    setTitleFound(true);
    setTitlePage((prevPage) => {
      return prevPage + 1;
    });
  };

  return (
    <CenteredContent>
      <h2 className={styles.finderHeader}>
        Don`t know what to watch? Let us help you!
      </h2>
      <Form className={styles.form}>
        <select className={styles.select} name="media" id="name">
          <option selected disabled value="default">
            Movie or TV Show?
          </option>
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
        </select>
        <button className={styles.btn} onClick={titleFindHandler}>
          Search
        </button>
      </Form>
      {titleFound && (
        <div className={styles.finder}>
          <PosterBig title={data} />
          <button className={styles.icon}>
            <img src={ARROW_ICON} alt="arrow" />
          </button>
        </div>
      )}
    </CenteredContent>
  );
};
