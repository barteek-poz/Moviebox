import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { NavSearchBar } from "../NavSearchBar/NavSearchBar";
import { MobileSearch } from "../../pages/MobileSearch/MobileSearch";
import { useState } from "react";

export const BurgerMenu = ({ setMobileNav }) => {
  const [mobileSearch, setMobileSearch] = useState(false);
  return (
    <div className="absolute w-full h-full flex flex-col z-40 items-end gap-5 p-6 top-0 right-0 bg-yellow text-black text-2xl ">
      <button onClick={() => setMobileNav(false)} className="mb-10">
        <MdOutlineClose size={"40px"} />
      </button>
      <NavLink
        to="/movies"
        className=""
        onClick={() => {
          setMobileNav(false);
        }}>
        Movies
      </NavLink>
      <NavLink
        to="/tv"
        className=""
        onClick={() => {
          setMobileNav(false);
        }}>
        TV Shows
      </NavLink>
      <NavLink
        to="/streaming"
        className=""
        onClick={() => {
          setMobileNav(false);
        }}>
        Streaming
      </NavLink>
      <NavLink
        to="/watchlist"
        className=""
        onClick={() => {
          setMobileNav(false);
        }}>
        Watchlist
      </NavLink>
      <button onClick={() => setMobileSearch(true)}>Search</button>
      {mobileSearch && <MobileSearch />}
    </div>
  );
};
