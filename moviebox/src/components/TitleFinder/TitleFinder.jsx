import styles from "../TitleFinder/TitleFinder.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Form } from "react-router-dom";
import { PosterBig } from "../PosterBig/PosterBig";
import ARROW_ICON from '../../assets/arrow.svg'
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY,
  },
};

export const TitleFinder = () => {
  const [titleFound, setTitleFound] = useState()
  const movie = useFetch('https://api.themoviedb.org/3/discover/movie?&with_watch_providers=netflix', options)
  console.log(movie)
  return (
    <CenteredContent>
      <h2 className={styles.finderHeader}>Don`t know what to watch? Let us help you!</h2>
      <Form className={styles.form}>
        <select className={styles.select} name='media' id="name">
          <option selected disabled value="default">
            Movie or TV Show?
          </option>
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
        </select>
        <select className={styles.select} name='streaming' id="streaming">
          <option selected disabled value="default">
            Choose your streaming company
          </option>
          <option value="apple">Apple</option>
          <option value="amazon">Amazon</option>
          <option value="disney">Disney</option>
          <option value="hbo">HBO</option>
          <option value="netflix">Netflix</option>
        </select>
        <button className={styles.btn}
        onClick={() => setTitleFound(true)}
        >Search</button>
      </Form>
      {titleFound && <div className={styles.finder}>
      <PosterBig />
      <button className={styles.icon}>
        <img src={ARROW_ICON} alt="arrow" />
      </button>
      </div>}
    </CenteredContent>
  );
};
