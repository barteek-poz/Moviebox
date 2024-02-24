import { MdOutlineClose } from "react-icons/md";
import { NavLink} from "react-router-dom";
import { MobileSearch } from "../../pages/MobileSearch/MobileSearch";
import { useState } from "react";

export const BurgerMenu = ({ setMobileNav }) => {
  const [mobileSearch, setMobileSearch] = useState(false);
  
  return (
    <div className="BURGER-MENU absolute w-1/2 h-lvh flex flex-col z-40 items-end gap-5 p-6 top-0 right-0 bg-main text-yellow text-2xl">
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
      <button onClick={() => setMobileSearch(true)} className="bg-transparent text-yellow">Search</button>
      {mobileSearch && <MobileSearch setMobileNav={setMobileNav} />}
    </div>
  );
};
