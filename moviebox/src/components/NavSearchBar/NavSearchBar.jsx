import { useEffect, useRef, useState } from "react";
import { useNavSearch } from "../../hooks/useNavSearch";
import { useNavigate } from "react-router-dom";
import { SearchedTitle } from "../SearchedTitle/SearchedTitle";

export const NavSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchedTitles = useNavSearch(inputValue);
  const navigate = useNavigate();
  const ref = useRef(null);

  const searchHandler = (event) => {
    if (event.key === "Enter" && inputValue.length > 0) {
      navigate(`/search/${inputValue}`);
      setInputValue("");
    }
  };

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsFocused(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  return (
    <div className="SEARCH BAR relative" ref={ref}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        className="INPUT text-lg font-light outline-none border-transparent border-b border-b-yellow text-white pl-2.5 w-64 h-8 bg-transparent focus:outline-yellow focus:border-b-transparent focus:outline-1 focus:rounded-lg"
        type="text"
        name="search"
        placeholder="Search"
        onKeyUp={searchHandler}
      />
      <div className="RESULTS absolute top-10 z-10 rounded-lg overflow-hidden">
        {searchedTitles &&
          isFocused &&
          searchedTitles.slice(0, 4).map((title) => {
            return (
              <div
                key={title.id}
                onClick={() => {
                  setIsFocused(false);
                }}>
                <SearchedTitle titleData={title} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
