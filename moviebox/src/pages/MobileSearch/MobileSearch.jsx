import { useEffect, useState } from "react";
import { useNavSearch } from "../../hooks/useNavSearch";
import { Poster } from "../../components/Poster/Poster";
import { MdOutlineClose } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const MobileSearch = ({ setMobileNav }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [firstRender, setFirstRender] = useState(false);
  const searchedTitles = useNavSearch(inputValue);
  const { pathname } = useLocation();
  useEffect(() => {
    if (firstRender) {
      setMobileNav(false);
      setInputValue("");
      setIsFocus(false);
    }
  }, [pathname]);
 
  return (
    <div className="absolute top-0 right-0 w-lvw h-content min-h-full flex flex-col items-center bg-yellow">
      <button
        onClick={() => {
          setMobileNav(false);
          setIsFocus(false);
          setInputValue("");
        }}
        className=" ml-auto  mb-4 p-6">
        <MdOutlineClose size={"40px"} />
      </button>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsFocus(true);
          setFirstRender(true);
        }}
        className="INPUT text-lg font-light outline-none border-transparent border-b-2 border-b-black text-black pl-2.5 ml-6 mb-10 w-5/6 h-8 bg-transparent focus:outline-black focus:border-b-transparent focus:outline-1 placeholder:text-black focus:rounded-lg"
        type="text"
        name="search"
        placeholder="Search"
        value={inputValue}
      />
      <div className="flex flex-wrap gap-1 ">
        {searchedTitles &&
          isFocus &&
          searchedTitles.map((title) => {
            return (
              <Poster
                key={title.id}
                titleData={title}
                media={title.media_type}
              />
            );
          })}
      </div>
    </div>
  );
};
