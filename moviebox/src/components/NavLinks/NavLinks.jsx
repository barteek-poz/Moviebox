import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
export const NavLinks = () => {
  return (
    <div className="NAVBAR py-2.5 flex items-center justify-between  flex-1">
      <Link to="/" className="">
        <img
          src={logo}
          alt="logo"
          className="LOGO border border-yellow rounded-lg p-1 pl-1.5 "
        />
      </Link>

      <div className="NAV LINKS flex  items-center justify-end gap-6 flex-1 mr-6">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? `ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-transparent transition duration-300 rounded-lg bg-yellow `
              : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-white py-0.5 px-2 border-2 border-transparent transition duration-300 hover:text-yellow hover:border-b hover:border-b-yellow hover:scale-105`
          }>
          Movies
        </NavLink>
        <NavLink
          to="/tv"
          className={({ isActive }) =>
            isActive
              ? `ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-transparent transition duration-300 rounded-lg bg-yellow `
              : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-white py-0.5 px-2 border-2 border-transparent transition duration-300 hover:text-yellow hover:border-b hover:border-b-yellow hover:scale-105`
          }>
          TV Shows
        </NavLink>
        <NavLink
          to="/streaming"
          className={({ isActive }) =>
            isActive
              ? `ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-transparent transition duration-300 rounded-lg bg-yellow `
              : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-white py-0.5 px-2 border-2 border-transparent transition duration-300 hover:text-yellow hover:border-b hover:border-b-yellow hover:scale-105`
          }>
          Streaming
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? `ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-transparent transition duration-300 rounded-lg bg-yellow `
              : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-white py-0.5 px-2 border-2 border-transparent transition duration-300 hover:text-yellow hover:border-b hover:border-b-yellow hover:scale-105`
          }>
          Watchlist
        </NavLink>
      </div>
    </div>
  );
};
