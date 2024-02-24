import { useEffect, useState } from "react";
import { numberOfPosters } from "../helpers/numberOfPosters";

export const useLayout = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numberOfSlides, setNumberOfSlides] = useState(5);
  useEffect(() => {
    const handleWindowResize = () => {
      setNumberOfSlides(numberOfPosters(window.innerWidth));
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(numberOfSlides, screenWidth)
  return {screenWidth, numberOfSlides}
};
