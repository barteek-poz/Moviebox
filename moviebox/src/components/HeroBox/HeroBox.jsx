import { dateFormat } from "../../helpers/dateFormat";
import { mediaType } from "../../helpers/mediaType";
import { ratingFormat } from "../../helpers/ratingFormat";
import { Link } from "react-router-dom";
import STAR_ICON from "../../assets/star_big.svg";

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
      className="flex  h-600 mobile:items-end lg:items-center bg-cover bg-top 2xl:h-700"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}>
      <div className="lg:max-w-500 mobile:h-min flex flex-col gap-2.5 p-4 lg:ml-14 2xl:ml-32 bg-main rounded-lg">
        <Link to={`${media_type}/${id}`}>
          <span className="text-3xl text-white font-bol transition duration-300 border-b-2 border-b-transparent hover:border-b-yellow ">
            {title || name}
          </span>
        </Link>
        <div className="flex items-center gap-2.5 text-white text-xl">
          <p>{dateFormat(release_date) || dateFormat(first_air_date)}</p>
          <p>{mediaType(media_type)}</p>
        </div>
        <div className="flex items-center gap-2.5 text-white text-xl">
          <img src={STAR_ICON} alt="star-icon" className="w-6 h-6"/>
          <p className="text-3xl">{ratingFormat(vote_average)}</p>
        </div>
        <p className="text-base text-white">{overview}</p>
      </div>
    </div>
  );
};
