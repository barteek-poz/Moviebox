import STAR_ICON from "../../assets/star_big.svg";
import { dateFormat } from "../../helpers/dateFormat";
import { ratingFormat } from "../../helpers/ratingFormat";
import { directorFormat } from "../../helpers/directorFormat";
import { runtimeFormat } from "../../helpers/runtimeFormat";
import { AddToWatchlistBtn } from "../../components/AddToWatchlistBtn/AddToWatchlistBtn";



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
      <div className="TITLE-INFO text-xl font-light text-white">
        <div className="TITLE-ROW flex items-center justify-between mb-5">
          <h1>
            {loaderData.details.original_title || loaderData.details.name}
          </h1>
          <AddToWatchlistBtn titleData={loaderData} media={params.media}  />
        </div>
        <div className="ROW flex items-start gap-5 mb-5">
          <p>
            {dateFormat(loaderData.details.release_date) ||
              dateFormat(loaderData.details.first_air_date)}
          </p>
          <p>{loaderData.mediaType}</p>
          <p>{runtimeFormat(loaderData.details)}</p>
        </div>
        <div className="ROW RATING flex items-center gap-2 mb-5 ">
          <img src={STAR_ICON} alt="star-icon" className="w-8 h-8" />
          <p className="RATING text-4xl">
            {ratingFormat(loaderData.details.vote_average)}
          </p>
          <p className="ml-5">{loaderData.details.vote_count + " votes"}</p>
        </div>
        <div className="ROW flex items-start gap-5 mb-5 ">
          {loaderData.details.genres.map((genre) => {
            return (
              <p key={genre.id} className="GENRE text-base border border-yellow p-1.5 rounded-lg ">
                {genre.name}
              </p>
            );
          })}
        </div>
        <div className="ROW-CAST flex items-start gap-2.5 mb-5 ">
          <span className="font-bold">{params.media === "movie" ? "Director:" : "Creator:"}</span>
          <p>{directorFormat(loaderData.cast.crew)}</p>
        </div>

        <div className="ROW-CAST flex items-start gap-2.5 mb-5 ">
          <span className="font-bold">Stars:</span>
          {cast.map((actor) => {
            return <p key={actor.id}>{actor.name}</p>;
          })}
        </div>
        <div className="ROW-CAST flex items-start gap-2.5 mb-5 ">
          <span className="font-bold">Plot:</span>
          <p>{loaderData.details.overview}</p>
        </div>
        <div className="ROW-ICONS flex items-center gap-2.5 mb-5 ">
          <span className="font-bold">Streaming:</span>
          {loaderData.streaming && loaderData.streaming.flatrate ? (
            loaderData.streaming.flatrate.map((company) => {
              return (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt="logo"
                  className="w-10 h-10 rounded-lg"
                />
              );
            })
          ) : (
            <p>Not available</p>
          )}
        </div>
        <div className="ROW-ICONS flex items-center gap-2.5 mb-5 ">
          <span>Rent:</span>
          {loaderData.streaming && loaderData.streaming.rent ? (
            loaderData.streaming.rent.map((company) => {
              return (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt="logo"
                  className="w-10 h-10 rounded-lg"
                />
              );
            })
          ) : (
            <p>Not available</p>
          )}
        </div>
        <div className="ROW-ICONS flex items-center gap-2.5 mb-5 ">
          <span>Buy:</span>
          {loaderData.streaming && loaderData.streaming.buy ? (
            loaderData.streaming.buy.map((company) => {
              return (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt="logo"
                  className="w-10 h-10 rounded-lg"
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
