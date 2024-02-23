import { useState } from "react";
import { useNavSearch } from "../../hooks/useNavSearch";
import { Poster } from "../../components/Poster/Poster";

export const MobileSearch = () => {
  const [inputValue, setInputValue] = useState();
  const searchedTitles = useNavSearch(inputValue);
  return (
    <div className="absolute w-full h-full bg-yellow">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className="INPUT text-lg font-light outline-none border-transparent border-b-2 border-b-black text-black pl-2.5 w-64 h-8 bg-transparent focus:outline-black focus:border-b-transparent focus:outline-1 placeholder:text-black focus:rounded-lg"
        type="text"
        name="search"
        placeholder="Search"
        value={inputValue}
      />
      {/* {searchedTitles.map(title => {
        return <Poster key={title.id} titleData={title} media={title.media}/>
      })} */}
    </div>
  );
};
