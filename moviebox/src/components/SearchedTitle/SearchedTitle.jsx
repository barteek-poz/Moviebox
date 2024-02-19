import { dateFormat } from "../../helpers/dateFormat";
import { Link } from "react-router-dom";
export const SearchedTitle = ({ titleData }) => {
  return (
    <Link
      to={`/${titleData.media_type}/${titleData.id}`}
      className="TITLE-BOX flex items-center text-center flex-grow bg-black transition duration-300 hover:bg-yellow group">
      <div
        className="TITLE-POSTER w-24 h-32 bg-center bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${titleData.poster_path})`,
        }}></div>
      <div className="TITLE-INFO flex flex-1 flex-col gap-2.5 p-2.5">
        <span className="text-lg text-white group-hover:text-black">
          {titleData.name || titleData.title}
        </span>
        <p className="text-lg text-white group-hover:text-black">
          {dateFormat(titleData.first_air_date) ||
            dateFormat(titleData.release_date)}
        </p>
      </div>
    </Link>
  );
};
