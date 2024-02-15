import { dateFormat } from "../../helpers/dateFormat";
import { mediaType } from "../../helpers/mediaType";
import { ratingFormat } from "../../helpers/ratingFormat";
import { Link } from "react-router-dom";
import STAR_ICON from "../../assets/star.svg";

export const HeroBox = ({
  id,
  title,
  name,
  release_date,
  media_type,
  first_air_date,
  vote_average,
  backdrop_path,
  overview,
}) => {
  return (
    <div
      className="flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}>
      <div className="max-w-3xl flex flex-col gap-2.5 p-2.5 ml-20 bg-main">
        <Link to={`${media_type}/${id}`}>
          <span className="text-3xl text-white font-bold hover:border-b hover:border-b-yellow ">
            {title || name}
          </span>
        </Link>
        <div className="flex items-center gap-2.5 text-white text-xl">
          <p>{dateFormat(release_date) || dateFormat(first_air_date)}</p>
          <p>{mediaType(media_type)}</p>
        </div>
        <div className="flex items-center gap-2.5 text-white text-xl">
          <img src={STAR_ICON} alt="star-icon" />
          <p className="text-3xl">{ratingFormat(vote_average)}</p>
        </div>
        <p className="text-base text-white">{overview}</p>
      </div>
    </div>
  );
};
