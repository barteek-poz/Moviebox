import STAR_ICON from "../../assets/star.svg";
import { dateFormat } from "../../helpers/dateFormat";
import { ratingFormat } from "../../helpers/ratingFormat";
import { directorFormat } from "../../helpers/directorFormat";
import { runtimeFormat } from "../../helpers/runtimeFormat";
import { AddToWatchlistBtn } from "../../components/AddToWatchlistBtn/AddToWatchlistBtn";
import styles from "../TitleDetails/TitleDetails.module.css";


export const TitleDetails = ({ loaderData, params }) => {
  
  const cast = loaderData.cast.cast
    .filter((actor) => {
      if (actor.known_for_department === "Acting") {
        return <p key={actor.id}>{actor.name}</p>;
      }
    })
    .slice(0, 3);
  loaderData.details.media = params.media;
  return (
    <>
      <div className={styles.titleInfo}>
        <div className={styles.titleRow}>
          <h1>
            {loaderData.details.original_title || loaderData.details.name}
          </h1>
          <AddToWatchlistBtn titleData={loaderData} media={params.media}  />
        </div>
        <div className={styles.row}>
          <p>
            {dateFormat(loaderData.details.release_date) ||
              dateFormat(loaderData.details.first_air_date)}
          </p>
          <p>{loaderData.mediaType}</p>
          <p>{runtimeFormat(loaderData.details)}</p>
        </div>
        <div className={styles.rowRating}>
          <img src={STAR_ICON} alt="star-icon" />
          <p className={styles.rating}>
            {ratingFormat(loaderData.details.vote_average)}
          </p>
          <p>{loaderData.details.vote_count + " votes"}</p>
        </div>
        <div className={styles.row}>
          {loaderData.details.genres.map((genre) => {
            return (
              <p key={genre.id} className={styles.genre}>
                {genre.name}
              </p>
            );
          })}
        </div>
        <div className={styles.rowCast}>
          <span>{params.media === "movie" ? "Director:" : "Creator:"}</span>
          <p>{directorFormat(loaderData.cast.crew)}</p>
        </div>

        <div className={styles.rowCast}>
          <span>Stars:</span>
          {cast.map((actor) => {
            return <p key={actor.id}>{actor.name}</p>;
          })}
        </div>
        <div className={styles.rowCast}>
          <span>Plot:</span>
          <p>{loaderData.details.overview}</p>
        </div>
        <div className={styles.rowIcons}>
          <span>Streaming:</span>
          {loaderData.streaming && loaderData.streaming.flatrate ? (
            loaderData.streaming.flatrate.map((company) => {
              return (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt="logo"
                />
              );
            })
          ) : (
            <p>Not available</p>
          )}
        </div>
        <div className={styles.rowIcons}>
          <span>Rent:</span>
          {loaderData.streaming && loaderData.streaming.rent ? (
            loaderData.streaming.rent.map((company) => {
              return (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt="logo"
                />
              );
            })
          ) : (
            <p>Not available</p>
          )}
        </div>
        <div className={styles.rowIcons}>
          <span>Buy:</span>
          {loaderData.streaming && loaderData.streaming.buy ? (
            loaderData.streaming.buy.map((company) => {
              return (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt="logo"
                />
              );
            })
          ) : (
            <p>Not available</p>
          )}
        </div>
      </div>
    </>
  );
};
