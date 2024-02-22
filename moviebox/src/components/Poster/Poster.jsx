import STAR_ICON from "../../assets/star_big.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ratingFormat } from "../../helpers/ratingFormat";
import { overviewFormat } from "../../helpers/overviewFormat";
import NO_POSTER from "../../assets/no_poster.png";

export const Poster = ({ titleData, media }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="BACKGROUND w-56 h-335 bg-cover bg-center bg-no-repeat flex items-end rounded-lg overflow-hidden relative hover:border hover:border-yellow ml-5"
      style={{
        backgroundImage: titleData.poster_path
          ? `url(https://image.tmdb.org/t/p/original/${titleData.poster_path})`
          : `url(${NO_POSTER})`,
      }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}>
      {showInfo && (
        <Link
          className="INFOBOX absolute flex flex-col w-full h-full bg-main text-white text-base p-4 overflow-hidden animate-slidein "
          to={`/${titleData.media_type || titleData.media || media}/${
            titleData.id
          }`}>
          <div className="FIRST-ROW flex justify-between items-center">
            <span className="text-2xl">
              {titleData.title || titleData.name}
            </span>
          </div>
          <div className="SECOND-ROW flex justify-start gap-2.5 my-1.5">
            <img src={STAR_ICON} alt="star-icon" />
            <p className="text-2xl">{ratingFormat(titleData.vote_average)}</p>
          </div>
          <p className="overflow-hidden">
            {overviewFormat(titleData.overview)}
          </p>
        </Link>
      )}
    </div>
  );
};
