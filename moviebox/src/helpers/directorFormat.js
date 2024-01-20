export const directorFormat = (date) => {
  const director = date.filter((person) => {
    return person.job === "Director";
  });
  const producerArr = date.filter((person) => {
    return person.job === "Executive Producer" && person.known_for_department === 'Writing';
  });

  if (director.length > 0) {
    return director[0].name;
  } else {
   const a = producerArr.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    return a[0].name
  }
};
