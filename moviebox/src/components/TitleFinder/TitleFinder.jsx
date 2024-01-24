import styles from "../TitleFinder/TitleFinder.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Form } from "react-router-dom";
import { PosterBig } from "../PosterBig/PosterBig";
import ARROW_ICON from "../../assets/arrow.svg";
import { useState } from "react";
import { usePickTitle } from "../../hooks/usePickTitle";

export const TitleFinder = () => {
  const [searchPage, setSearchPage] = useState(0);
  const [titleMedia, setTitleMedia] = useState("default");
  const [isError, setIsError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const titleData = usePickTitle(titleMedia, searchPage);

  const titleFindHandler = () => {
    setIsTouched(false);
    setSearchPage((prevPage) => {
      return prevPage + 1;
    });
    setIsTouched(true);
    setIsError(false);
  };

  if (isTouched && titleMedia === "default") {
    setSearchPage(0);
    setIsError(true);
    setIsTouched(false);
  }

  const selectHandler = (e) => {
    setTitleMedia(e.target.value);
    setIsError(false);
    setSearchPage(0);
  };
  return (
    <CenteredContent>
      <h2 className={styles.finderHeader}>
        Don`t know what to watch? Let us help you!
      </h2>
      <Form className={styles.form}>
        <select
          value={titleMedia}
          className={styles.select}
          name="media"
          id="name"
          onChange={selectHandler}>
          <option disabled value="default">
            Movie or TV Show?
          </option>
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
        </select>
        <button className={styles.btn} onClick={titleFindHandler}>
          Search
        </button>
        {isError && (
          <p className={styles.error}>
            Please, choose between Movie and TV Show
          </p>
        )}
      </Form>
      {titleData && (
        <div className={styles.finder}>
          <PosterBig title={titleData} media={titleMedia} />
          <button className={styles.icon} onClick={titleFindHandler}>
            <img src={ARROW_ICON} alt="arrow" />
          </button>
        </div>
      )}
    </CenteredContent>
  );
};
