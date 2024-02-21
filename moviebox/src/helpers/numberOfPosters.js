export const numberOfPosters = (windowWidth) => {
  console.log(windowWidth);
  if (windowWidth < 1281) {
    return 4;
  } else return 5;
};
