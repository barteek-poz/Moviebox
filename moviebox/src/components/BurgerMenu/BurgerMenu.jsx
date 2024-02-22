import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { NavSearchBar } from "../NavSearchBar/NavSearchBar";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative mr-5 mb-10">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-0 right-0">
          <GiHamburgerMenu size={"40px"} />
        </button>
      )}
      {isOpen && (
        <div className="absolute w-96 h-96 flex flex-col items-end gap-2.5 z-60 top-0 right-0 bg-yellow text-black text-2xl ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MdOutlineClose size={"40px"} />
          </button>
          <NavLink to="/movies" className="">
            Movies
          </NavLink>
          <NavLink to="/tv" className="">
            TV Shows
          </NavLink>
          <NavLink to="/streaming" className="">
            Streaming
          </NavLink>
          <NavLink to="/watchlist" className="">
            Watchlist
          </NavLink>
          <NavSearchBar />
        </div>
      )}
    </div>
  );
};
