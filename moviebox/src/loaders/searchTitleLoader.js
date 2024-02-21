export const searchTitleLoader = async (params) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };
  const titleFetch = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${params.param}&include_adult=false&language=en-US&page=1`,
    options
  ).then((res) => res.json());

const titleFilter = titleFetch.results.filter(title => {
  if(title.media_type !== 'person') {
  return title
}
})

  return titleFilter
};
