import { genres } from "../constans/genres";

export const genreType = (genresId) => {
  const genreType = genres.filter((genre) => {
    for (let i = 0; i <= genresId.length; i++) {
      if (genre.id === genresId[i]) {
        return genre.id;
      }
    }
  });
  return genreType;
};
