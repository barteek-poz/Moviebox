import { Link } from "react-router-dom";
import { ratingFormat } from "../../helpers/ratingFormat";
import STAR_ICON from "../../assets/star_small.svg";
import { genreType } from "../../helpers/genreType";

export const PosterBig = ({ title, media }) => {
  const genres = genreType(title.genre_ids);
  console.log(title, media);
  return (
    <div className="POSTER-BOX flex mobile:flex-col lg:flex-row mobile:items-center lg:items-stretch mobile:mb-6">
      <Link
        to={`${media}/${title.id}`}
        className="POSTER mobile:w-80 mobile:h-500  sm:min-w-96 sm:min-h-400 bg-center bg-cover mobile:rounded-tl-lg mobile:rounded-tr-lg  lg:rounded-tr-none lg:rounded-bl-lg lg:rounded-tl-lg "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${title.poster_path})`,
        }}
      />
      <div className="POSTER-INFO mobile:w-80 sm:w-96 lg:min-w-500 flex flex-col gap-4 p-7 pt-14 bg-yellow lg:rounded-tr-lg rounded-br-lg mobile:rounded-bl-lg lg:rounded-bl-none">
        <Link to={`${title.media_type || media}/${title.id}`}>
          <span className="text-3xl font-bold tracking-wide transition duration-300  border-b-2 border-b-transparent hover:border-b-black">
            {title.title || title.name}
          </span>
        </Link>

        <div className="flex flex-wrap gap-1">
          {genres.map((genre) => {
            return (
              <p
                key={genre.id}
                className="text-base border border-black px-1.5 py-0.5 rounded-lg">
                {genre.name}
              </p>
            );
          })}
        </div>
        <div className="flex gap-2.5 items-center">
          <img src={STAR_ICON} alt="star-icon" />
          <p className="text-3xl">{ratingFormat(title.vote_average)}</p>
        </div>
        <p className="">{title.overview}</p>
      </div>
    </div>
  );
};
