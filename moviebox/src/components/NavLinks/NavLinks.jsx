import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_small.svg";
export const NavLinks = () => {
  return (
    <div className="NAVBAR py-2.5 flex items-center justify-between  flex-1">
      <Link to="/" className="">
        <img
          src={logo}
          alt="logo"
          className="LOGO  rounded-lg p-1 pl-1.5 transition duration-300 hover:scale-105 "
        />
      </Link>

      <div className="NAV LINKS flex  items-center justify-end gap-6 flex-1 mr-6">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? `NO-ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-black transition duration-300 rounded-lg`
              : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 transition duration-300 border-b border-transparent  hover:border-b-2 hover:border-b-black hover:scale-105`
          }>
          Movies
        </NavLink>
        <NavLink
          to="/tv"
          className={({ isActive }) =>
            isActive
            ? `NO-ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-black transition duration-300 rounded-lg`
            : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 transition duration-300 border-b border-transparent  hover:border-b-2 hover:border-b-black hover:scale-105`
          }>
          TV Shows
        </NavLink>
        <NavLink
          to="/streaming"
          className={({ isActive }) =>
            isActive
            ? `NO-ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-black transition duration-300 rounded-lg`
            : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 transition duration-300 border-b border-transparent  hover:border-b-2 hover:border-b-black hover:scale-105`
          }>
          Streaming
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
            ? `NO-ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 border-2 border-black transition duration-300 rounded-lg`
            : `NAV LINK ACTIVE no-underline uppercase text-xl font-medium text-black py-0.5 px-2 transition duration-300 border-b border-transparent  hover:border-b-2 hover:border-b-black hover:scale-105`
          }>
          Watchlist
        </NavLink>
      </div>
    </div>
  );
};
