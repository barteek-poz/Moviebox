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
      setInputValue("");
      navigate(`/search/${inputValue}`);
    }
  };

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsFocused(false);
        setInputValue("");
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
      setInputValue("");
    };
  }, [ref]);
  return (
    <div className="SEARCH BAR relative" ref={ref}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        className="INPUT text-lg font-light outline-none border-transparent border-b-2 border-b-black text-black pl-2.5 w-64 h-8 bg-transparent focus:outline-black focus:border-b-transparent focus:outline-1 placeholder:text-black focus:rounded-lg"
        type="text"
        name="search"
        placeholder="Search"
        onKeyUp={searchHandler}
        value={inputValue}
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
