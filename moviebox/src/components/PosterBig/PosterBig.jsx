import { Link } from "react-router-dom";
import { ratingFormat } from "../../helpers/ratingFormat";

import STAR_ICON from "../../assets/star_small.svg";


import { genreType } from "../../helpers/genreType";

export const PosterBig = ({ title, media }) => {
  const genres = genreType(title.genre_ids);
  console.log(title, media);
  return (
    <div className="POSTER-BOX flex justify-center mb-16">
      <Link
        to={`${media}/${title.id}`}
        className="POSTER w-64 h-400 bg-center bg-cover rounded-bl-lg rounded-tl-lg "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${title.poster_path})`,
        }}
      />
      <div className="POSTER-INFO max-w-500 flex flex-col gap-4 p-7 pt-14 bg-yellow rounded-tr-lg rounded-br-lg">
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
