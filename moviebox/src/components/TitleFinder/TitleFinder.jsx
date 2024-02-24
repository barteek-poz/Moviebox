import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Form } from "react-router-dom";
import { PosterBig } from "../PosterBig/PosterBig";
import ARROW_ICON from "../../assets/arrow.svg";
import { useState } from "react";
import { usePickTitle } from "../../hooks/usePickTitle";
import { useLayout } from "../../hooks/useLayout";

export const TitleFinder = () => {
  const [searchPage, setSearchPage] = useState(0);
  const [titleMedia, setTitleMedia] = useState("default");
  const [isError, setIsError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const titleData = usePickTitle(titleMedia, searchPage);
  const {screenWidth} = useLayout()

  const titleFindHandler = () => {
    setIsTouched(false);
    setSearchPage((prevPage) => {
      return prevPage + 1;
    });
    setIsTouched(true);
    setIsError(false);
  };

  if (isTouched && titleMedia === "default") {
    setSearchPage(0);
    setIsError(true);
    setIsTouched(false);
  }

  const selectHandler = (e) => {
    setTitleMedia(e.target.value);
    setIsError(false);
    setSearchPage(0);
  };
  return (
    <CenteredContent>
      <div className="flex flex-col justify-center items-center">
        <h2 className="FINDER-HEADER bg-yellow text-black p-2.5 rounded-lg  my-8">
          Don`t know what to watch? Let us help you!
        </h2>
        <Form className="FORM flex items-center gap-5 mb-14">
          <select
        
            value={titleMedia}
            name="media"
            id="name"
            onChange={selectHandler}>
            <option disabled value="default">
              Movie or TV Show?
            </option>
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
          </select>
          <button
            className="BUTTON text-base flex items-end gap-1.5 border-transparent rounded-lg p-1.5 hover:bg-white"
            onClick={titleFindHandler}>
            Search
          </button>
          {isError && (
            <p className="ERROR text-base bg-white text-black p-1 rounded-lg">
              Please, choose between Movie and TV Show
            </p>
          )}
        </Form>
      </div>

      {titleData && (
        <div className="FINDER flex mobile:flex-col lg:flex-row lg:items-center justify-center lg:gap-16 lg:mb-16">
          <PosterBig title={titleData} media={titleMedia} />
          <button
            className="ICON bg-transparent border-none hover:translate-x-2 mobile:flex mobile:flex-col mobile:items-center mobile:gap-2.5"
            onClick={titleFindHandler}>
            <img src={ARROW_ICON} alt="arrow" />
          {screenWidth < 1024 ? <p className="text-yellow">Next title</p> : ''}
          </button>
        </div>
      )}
    </CenteredContent>
  );
};
