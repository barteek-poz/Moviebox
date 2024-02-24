export const numberOfPosters = (windowWidth) => {
  if (windowWidth < 1281 && windowWidth > 950) {
    return 4;
  } else if (windowWidth < 950 && windowWidth > 730 ) {
    return 3;
  } else if(windowWidth > 450 && windowWidth < 730) {
    return 3;
  } else if(windowWidth < 450) {
    return 2;
  }
  else return 5;
};
